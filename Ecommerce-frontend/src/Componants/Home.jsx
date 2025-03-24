import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
// import {is_in_wishlist } from ""
import {
  Addtowishlist,
  Is_in_wishlist,
  getwishlist,
} from "../Hooks/useWishlist";
import { get_Cart_Items, Add_to_cart, Is_in_cart } from "../Hooks/Usecart";

// import main from "/";
// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

export default function Home() {
  const imgurl = `http://localhost:1009/images/`;
  const [products, setProducts] = useState([]);
  const [wishlistItems, setInWishlist] = useState([]);
  const [cartItems, setcartItems] = useState([]);
  

  useEffect(() => {
    axios
      .get("http://localhost:1009/product/for_front/productwithdetails")
      .then((res) => {
        setProducts(res.data.slice(20, 28));
      });
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
  return (
    <div>
      {/* Hero Section */}
      <section className="container text-center my-5">
        <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
          <h1 className="fw-bold text-primary">
            Welcome to Our E-Commerce Store
          </h1>
          <p className="lead">Find the best products at unbeatable prices!</p>
          {/* <motion.video
            src="/main.mp4"
            className="img-fluid mt-3 w-50" // 'w-50' makes it 50% width of the parent
            autoPlay
            loop
            muted
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          /> */}
          <motion.img
            src="/undraw_web-shopping_m3o2.png"
            alt="Shopping Vector"
            className="img-fluid mt-3"
            width="500"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      </section>

      {/* Products Section */}
      <section>
        <div className="container my-5">
          <header className="mb-4">
            <h3>New Products</h3>
          </header>
          <motion.div
            className="row"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {products.map((item, index) => (
              <div className="col-lg-3 col-md-6 col-sm-6 d-flex" key={index}>
                <motion.div
                  className="card w-100 my-2 shadow-2-strong"
                  whileHover={{ scale: 1.03 }}
                >
                  <Link
                    to={`/product_detail/${item.product_id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <img
                      src={imgurl + item.product_image_main}
                      className="card-img-top"
                      style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
                      alt={`Product ${item.name}`}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">${item.price}</p>
                    </div>
                  </Link>
                  <div className="card-footer d-flex justify-content-center align-items-center pt-3 pb-3">
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

                    <span
                      key={wishlistItems}
                      className={`btn border px-3 py-2 icon-hover ${
                        wishlistItems.includes(item.product_id)
                          ? "btn-danger disabled"
                          : "btn-light"
                      }`}
                      onClick={() => Add_to_wishlist(item.product_id)}
                    >
                      <i
                        className={`fas fa-heart fa-lg ${
                          wishlistItems.includes(item.product_id)
                            ? "text-white"
                            : "text-secondary"
                        }`}
                      ></i>
                    </span>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-5 bg-light">
        <div className="container text-dark pt-3">
          <header className="pt-4 pb-3 text-center">
            <h3 className="fw-bold">Why Choose Us?</h3>
          </header>

          <motion.div
            className="row mb-4 justify-content-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "Top Customer Support",
                description: "24/7 customer support for all your needs.",
                gif: "/customerservice.mp4",
                // gif: "/undraw_chat-bot_44el.png",
              },
              {
                title: "Fast Delivery",
                description: "Super-fast shipping and quick deliveries!",
                // gif: "/undraw_delivery-truck_mjui.png",
                gif: "/delivery.mp4",
                // gif:"https://lottie.host/5cde0f57-4e9c-4348-b60b-3a376df618ec/fQfrJdg96Z.lottie";
              },
              
              {
                title: "Best Deals",
                description: "Get the best prices on the latest products.",
                // gif: "/undraw_online-groceries_n03y.png",
                gif: "/6915881_Motion Graphics_Motion Graphic_3840x2160.mp4",
              },
            ].map((feature, idx) => (
              <motion.div
                className="col-lg-4 col-md-6 mb-4 d-flex"
                key={idx}
                variants={scaleIn}
              >
                <div className="card border-0 shadow-sm h-100 d-flex flex-column align-items-center text-center p-3">
                  <video
                    src={feature.gif}
                    alt={feature.title}
                    style={{
                      // width: "160px",
                      height: "160px",
                      objectFit: "contain",
                    }}
                    className="mb-3"
                    autoPlay
                    loop
                  />
                  <h6 className="fw-bold">{feature.title}</h6>
                  <p>{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="mt-5 mb-4">
        <div className="container text-dark">
          <header className="mb-4">
            <h3>Latest Blog Posts</h3>
          </header>
          <motion.div
            className="row"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                title: "E-Commerce Trends 2025",
                description:
                  "Stay ahead with the latest trends in online shopping.",
                image: "/E-Commerce Trends 2025.webp",
              },
              {
                title: "How to Find the Best Deals",
                description:
                  "Tips and tricks to save big on your next purchase!",
                image:
                  "/How to Find the Best Deals.webp",
              },
              {
                title: "Best Gadgets to Buy in 2025",
                description: "A roundup of must-have gadgets this year!",
                image:
                  "/Best Gadgets to Buy in 2025.webp",
              },
              {
                title: "Secure Online Shopping Tips",
                description: "How to keep your transactions safe online.",
                image:
                  "/Secure Online Shopping Tips.webp",
              },
            ].map((post, idx) => (
              <motion.div
                className="col-lg-3 col-md-6 col-sm-6 col-12"
                key={idx}
                variants={fadeInUp}
              >
                <article>
                  <img
                    className="rounded w-100"
                    src={post.image}
                    style={{ objectFit: "cover" }}
                    height={160}
                    alt={post.title}
                  />
                  <div className="mt-2 text-muted small d-block mb-1">
                    <span>
                      <i className="fa fa-calendar-alt fa-sm" /> 23.12.2025
                    </span>
                    <h6 className="text-dark">{post.title}</h6>
                    <p>{post.description}</p>
                  </div>
                </article>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
