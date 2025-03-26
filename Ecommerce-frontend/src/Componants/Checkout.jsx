import React, { useEffect, useState } from "react";
import { get_Cart_Items } from "../Hooks/Usecart";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// MUI imports
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
} from "@mui/material";

// Confetti effect
import Confetti from "react-confetti";
import { User_id_provider } from "../Hooks/Userinfo";

export default function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [shippingAddress, setShippingAddress] = useState("");
  const [total, setTotal] = useState(0);
  const [hide, sethide] = useState(true);
  // Loading + Dialog states
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const user_id = User_id_provider();

  // Fetch Cart Items
  useEffect(() => {
    get_Cart_Items().then((items) => {
      setCartItems(items);
      calculateTotal(items);
    });
  }, []);

  // Fetch User Info
  useEffect(() => {
    axios.get("http://localhost:1009/customer/"+user_id).then((res) => {
      // console.log(res.data[0]);
      setUserInfo(res.data[0]);
      setShippingAddress(res.data[0].shipping_address || "");
    });
  }, []);

  // Calculate total (with 2 decimals)
  const calculateTotal = (items) => {
    const totalAmount = items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(totalAmount);
  };

  // Handle quantity change
  const handleQuantityChange = (index, quantity) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = quantity;
    setCartItems(updatedCart);
    calculateTotal(updatedCart);
  };

  // Checkout
  const handleCheckout = () => {
    if (!shippingAddress.trim()) {
      toast.error("Shipping address is required!");
      return;
    }
    // Start loading
    setLoading(true);
    let obj = {
      customer_id: user_id,
      shipping_address: shippingAddress,
      total_amount: total.toFixed(2),
      cart_items: cartItems.map((item) => ({
        cart_id: item.cart_id,
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price,
      })),
    };
    // console.log("Checkout object : ", obj);

    axios.post("http://localhost:1009/orders", obj).then((res) => {
      // console.log("Checkout responce :",res);
      setCartItems([]);
      // // Simulate an async request
      setTimeout(() => {
        setLoading(false);
        setDialogOpen(true);
        sethide(false);
      }, 2000);


    }).catch((err) => {console.error("Error in orders : ",err);});
  };

  // Auto-close dialog after 3 seconds
  useEffect(() => {
    if (dialogOpen) {
      const timer = setTimeout(() => {
        setDialogOpen(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [dialogOpen]);

  // Close dialog (if user clicks close earlier)
  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  return (
    <div className="container py-5">
      <ToastContainer />
      <h2>Checkout </h2>

      {/* User Info and Address */}
      <div className="card p-4 mb-4">
        <h5>User Information</h5>
        <p>Name: {userInfo.customer_name}</p>
        <p>Email: {userInfo.customer_email}</p>
        <p>Phone: {userInfo.customer_phone}</p>
        <h5 className="mt-3">Shipping Address</h5>
        <textarea
          className="form-control"
          placeholder="Enter shipping address"
          value={shippingAddress}
          onChange={(e) => setShippingAddress(e.target.value)}
        />
      </div>

      {/* Two Column Layout */}
     { hide && <div className="row">
        {/* Products Column */}
        <div className="col-md-8">
          <div className="card p-4 mb-4">
            <h5>Items in Cart</h5>
            {cartItems.map((item, index) => (
              <div
                key={item.cart_id}
                className="d-flex justify-content-between align-items-center mb-4 border-bottom pb-3"
              >
                {/* Product Image */}
                <img
                  src={`http://localhost:1009/images/${item.product_image_main}`}
                  alt={item.name}
                  style={{ width: "80px", height: "80px", objectFit: "cover" }}
                  className="me-3"
                />

                {/* Product Details */}
                <div className="flex-grow-1 d-flex flex-column">
                  <p className="fw-bold mb-1">{item.name}</p>
                  <div className="d-flex align-items-center gap-3">
                    <small className="mb-0">Price: ${item.price}</small>
                    <div className="d-flex align-items-center">
                      <span className="me-1">Qty:</span>
                      <input
                        type="number"
                        min="1"
                        style={{
                          width: "60px",
                          height: "23px", // <--- Slightly smaller height
                          padding: "0 5px", //  <--- Adjust padding to taste
                        }}
                        value={item.quantity}
                        onChange={(e) =>
                          handleQuantityChange(
                            index,
                            parseInt(e.target.value) || 1
                          )
                        }
                        // style={{ width: "60px" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Total per product (2 decimals) */}
                <div className="fw-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Total & Checkout Column */}
        <div className="col-md-4">
          <div className="card p-4 sticky-top" style={{ top: "80px" }}>
            <h5>Order Summary</h5>
            <hr />
            <h5>Total: ${total.toFixed(2)}</h5>
            <Button
              variant="contained"
              color="success"
              className="w-100 mt-3"
              onClick={handleCheckout}
              disabled={loading}
            >
              {loading ? (
                <>
                  <CircularProgress size={20} sx={{ color: "white", mr: 1 }} />
                  Processing...
                </>
              ) : (
                "Checkout"
              )}
            </Button>
          </div>
        </div>
      </div>
}
      {/* MUI Success Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={handleCloseDialog}
        PaperProps={{
          style: {
            backgroundColor: "#bbdefb", // Light blue
            color: "#0d47a1",
            minHeight: "400px",
            padding: "2rem",
          },
        }}
      >
        {/* Confetti */}
        <Confetti
          style={{ position: "fixed", top: 0, left: 0, zIndex: 9999 }}
          numberOfPieces={150}
          recycle={false}
        />

        <DialogTitle
          sx={{
            backgroundColor: "#bbdefb",
            color: "#0d47a1",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Order Status
        </DialogTitle>

        <DialogContent sx={{ textAlign: "center" }}>
          {/* Success GIF / Video */}
          <video
            autoPlay
            loop
            muted
            src={"/done1.mp4"}
            style={{ width: "200px", marginBottom: "1rem" }}
          />
          <p>Your order has been placed successfully!</p>
        </DialogContent>

        <DialogActions
          sx={{ backgroundColor: "#bbdefb", justifyContent: "center" }}
        >
          <Button
            onClick={handleCloseDialog}
            variant="contained"
            style={{ backgroundColor: "#bbdefb", color: "#0d47a1" }}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
