import React, { useEffect, useState } from "react";
import { getwishlist, Delete_product_from_wishlist } from "../Hooks/useWishlist";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { get_Cart_Items, Add_to_cart } from "../Hooks/Usecart";


const Wishlist = () => {
  const [Products, setProducts] = useState([]);
    const [cartItems, setcartItems] = useState([]);
  

  useEffect(() => {
    fetchlist();
    get_Cart_Items().then((data) => {
      if (data.length > 0) {
        setcartItems(
          data.map((item) => {
            return item.product_id;
          })
        );
        console.log("Response cart:", data);
      } else {
        console.log("Error fetching cart:", data);
      }
    });
  }, []);
  const addtocart = (id) => {
    Add_to_cart(id)
      .then((data) => {
        if (data) {
          setcartItems([...cartItems, id]);
        }
      })
      .catch((e) => {
        console.log("error in add to cart :", e);
      });
  };
  const fetchlist = async () => {
    const response = await getwishlist();
    // console.log("Response:", response);
    if (response.length > 0) {
      setProducts(response);
    } else {
      console.log("Error fetching wishlist:", response);
    }
  };

  const delete_wishlist_item = async (id) => {
    try {
      await Delete_product_from_wishlist(id);
      console.log("Deleted product ID:", id);
      setProducts((prevProducts) => prevProducts.filter(item => item.wishlist_id !== id));
    } catch (error) {
      console.log("Error deleting:", error);
    }
  };

  return (
    <div className="container my-5">
      <h3 className="mb-4">My Wishlist</h3>

      {Products.length === 0 ? (
        <div className="text-center">
          <img
            src="/undraw_wishlist_71gv.png"  
            alt="Empty Wishlist"
            style={{ width: "300px", marginBottom: "20px" }}
          />
          <h4>Your wishlist is empty!</h4>
          <p>Start adding your favorite products now.</p>
          <a href="/product_listing" className="btn btn-primary">Browse Products</a>
        </div>
      ) : (
        <div className="row">
          {Products.map((item) => (
            <motion.div
              key={item.wishlist_id}
              className="col-lg-3 col-md-4 col-sm-6 mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="card" style={{ width: "100%", cursor: "pointer" }}>
                <Link to={`/product_detail/${item.product_id}`} style={{ textDecoration: "none", color: "inherit" }}>
                  <div className="card-img-top d-flex align-items-center justify-content-center" style={{ height: "150px", overflow: "hidden" }}>
                    <img
                      src={`http://localhost:1009/images/${item.product_image_main}`}
                      alt={item.name}
                      style={{ height: "100%", width: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div className="card-body text-center p-2">
                    <h6 className="card-title mb-1">{item.name}</h6>
                    <p className="card-text mb-2">
                      <span>&#8377;</span> {item.price}
                    </p>
                  </div>
                </Link>
                {/* ✅ Buttons Now Aligned Closer */}
                <div className="card-body d-flex justify-content-center gap-2 p-2">
                <span
                      className={`btn btn-sm shadow-sm px-3 py-2 d-flex align-items-center justify-content-center ${
                        cartItems.includes(item.product_id)
                          ? "btn-light text-primary border border-primary disabled"
                          : "btn-primary text-white border border-primary"
                      }`}
                      onClick={() => addtocart(item.product_id)}
                      style={{
                        minWidth: "50px",
                        fontSize: "10px",
                        // borderRadius: "6px",
                      }}
                    >
                      <i className="fa fa-shopping-cart me-2"></i>
                      {cartItems.includes(item.product_id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </span>
                  <button className="btn btn-outline-danger btn-sm" onClick={() => delete_wishlist_item(item.wishlist_id)}>
                    Remove
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
