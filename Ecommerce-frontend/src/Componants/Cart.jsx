import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { get_Cart_Items, Delete_cart_item } from "../Hooks/Usecart";
import {
  Addtowishlist,
  getwishlist,
} from "../Hooks/useWishlist";

export default function Cart() {
  const [cartproducts, setcartproducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [wishlistItems, setInWishlist] = useState([]);

  useEffect(() => {
    fetchCartItems();
    getwishlist().then((data) => {
      if (data.length > 0) {
        setInWishlist(
          data.map((item) => {
            return item.product_id;
          })
        );
        console.log("Response:", data);
      } else {
        console.log("Error fetching wishlist:", data);
      }
    });
  }, []);

  const fetchCartItems = () => {
    get_Cart_Items()
      .then((res) => {
        setcartproducts(res);
        calculateTotal(res);
      })
      .catch((e) => console.log("Error fetching cart items:", e));
  };

  const handleQuantityChange = (index, quantity) => {
    const updatedCart = [...cartproducts];
    updatedCart[index].quantity = quantity;
    setcartproducts(updatedCart);
    calculateTotal(updatedCart);
  };

  const calculateTotal = (cartItems) => {
    const newTotal = cartItems.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    setTotal(newTotal);
  };

  const removeCartItem = (cart_id) => {
    Delete_cart_item(cart_id)
      .then((res) => {
        if (res) {
          const updatedCart = cartproducts.filter(
            (item) => item.cart_id !== cart_id
          );
          setcartproducts(updatedCart);
          calculateTotal(updatedCart);

          // Reset total if cart is empty
          if (updatedCart.length === 0) {
            setTotal(0);
          }
        } else {
          console.log("Failed to delete cart item");
        }
      })
      .catch((err) => console.log("Error deleting cart item:", err));
  };
 
  const Add_to_wishlist = (id) => {
    const responce = Addtowishlist(id);
    responce
      .then((data) => {
        if (data) {
          setInWishlist([...wishlistItems, id]);
        }
      })
      .catch((e) => {
        console.log("error in add to wishlist :", e);
      });
  };

  return (
    <div>
      <section className="bg-light my-5">
        <div className="container">
          <div className="row">
            {cartproducts.length === 0 ? (
              <div className="text-center py-5">
                <img
                  src="/undraw_empty-cart_574u.png"
                  alt="Empty Cart"
                  style={{ maxWidth: "300px" }}
                />
                <h4 className="my-4">Your cart is empty!</h4>
                <p>Start adding your favorite products now.</p>
                <NavLink to="/product_listing" className="btn btn-primary mt-3">
                  Browse Products
                </NavLink>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="col-lg-9">
                  <div className="card border shadow-0">
                    <div className="m-4">
                      <h4 className="card-title mb-4">Your shopping cart</h4>

                      {cartproducts.map((product, index) => (
                        <div className="row gy-3 mb-4" key={product.cart_id}>
                          <div className="col-lg-5">
                            <div className="me-lg-5">
                              <div className="d-flex">
                                <img
                                  src={`http://localhost:1009/images/${product.product_image_main}`}
                                  className="border rounded me-3"
                                  style={{ width: 96, height: 96 }}
                                  alt={product.name}
                                />
                                <div>
                                  <a href="#" className="nav-link">
                                    {product.name}
                                  </a>
                                  <p className="text-muted">{product.color}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                            <div>
                              <input
                                name="quantity_input"
                                type="number"
                                value={product.quantity}
                                min="1"
                                className="quantity-input form-control"
                                onChange={(e) =>
                                  handleQuantityChange(
                                    index,
                                    parseInt(e.target.value) || 1
                                  )
                                }
                              />
                            </div>
                            <div className="mt-2 mt-lg-0">
                              <div className="h6">
                              ₹{(product.price * product.quantity).toFixed(2)}
                              </div>
                              <small className="text-muted">
                              ₹{product.price} / per item
                              </small>
                            </div>
                          </div>
                          <div className="col-lg col-sm-6 d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                            <div className="float-md-end">
                            <span
                                key={wishlistItems}
                                className={`btn border px-3 py-2 icon-hover ${
                                  wishlistItems.includes(product.product_id)
                                    ? "btn-danger disabled"
                                    : "btn-light"
                                }`}
                                onClick={() =>
                                  Add_to_wishlist(product.product_id)
                                }
                              >
                                <i
                                  className={`fas fa-heart fa-lg ${
                                    wishlistItems.includes(product.product_id)
                                      ? "text-white"
                                      : "text-secondary"
                                  }`}
                                ></i>
                              </span>
                              <button
                                onClick={() => removeCartItem(product.cart_id)}
                                className="btn btn-light border text-danger icon-hover-danger"
                              >
                                Remove
                              </button>
                             
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-top pt-4 mx-4 mb-4">
                      <p>
                        <i className="fas fa-truck text-muted fa-lg" /> Free
                        Delivery within 1-2 weeks
                      </p>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Summary Sticky */}
                <div className="col-lg-3">
                  <div className="card mb-3 border shadow-0">
                    <div className="card-body">
                      <form>
                        <div className="form-group">
                          <label className="form-label">Have coupon?</label>
                          <div className="input-group">
                            <input
                              type="text"
                              className="form-control border"
                              placeholder="Coupon code"
                            />
                            <button className="btn btn-light border">
                              Apply
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="card shadow-0 border position-sticky top-0 mt-2">
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Total price:</p>
                        <p className="mb-2"> ₹{total.toFixed(2)}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Discount:</p>
                        <p className="mb-2 text-success">-$60.00</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">TAX:</p>
                        <p className="mb-2"> ₹14.00</p>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between">
                        <p className="mb-2">Total price:</p>
                        <p className="mb-2 fw-bold">
                        ₹{(total - 60 + 14).toFixed(2)}
                        </p>
                      </div>
                      <div className="mt-3">
                        <NavLink
                          to="/checkout"
                          className="btn btn-success w-100 shadow-0 mb-2"
                        >
                          Checkout
                        </NavLink>
                        <NavLink
                          to="/products"
                          className="btn btn-light w-100 border mt-2"
                        >
                          Back to shop
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="container my-5">
          <header className="mb-4">
            <h3>Recommended items</h3>
          </header>
          <div className="row">{/* Recommended items... */}</div>
        </div>
      </section>
    </div>
  );
}
