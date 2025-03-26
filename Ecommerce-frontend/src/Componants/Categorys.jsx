import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { get_Cart_Items, Add_to_cart, Is_in_cart } from "../Hooks/Usecart";
import { Link } from "react-router-dom";
import { User_id_provider } from "../Hooks/Userinfo";
import AuthDialog from "./Authpage";
const Category = () => {
  const imgurl = `http://localhost:1009/images/`;
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Select a Category");
  const [products, setProducts] = useState([]);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const productsSectionRef = useRef(null); // For scrolling to products section
  const [cartItems, setcartItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(User_id_provider());
  const [showAuthDialog, setShowAuthDialog] = useState(false); // Show authentication dialog

  // Fetch categories on component mount
  useEffect(() => {
    axios.get("http://localhost:1009/category/for_front").then((res) => {
      console.log(res.data);
      setCategories(res.data); // Slice to prevent modifying original array
    });
  }, []);

  // Fetch products by category
  const fetchProductsByCategory = (category_id) => {
    // console.log(category_id);
    axios
      .get(`http://localhost:1009/product/productbycategory/${category_id}`)
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        // Scroll to product section after fetching products
        setTimeout(() => {
          productsSectionRef.current.scrollIntoView({ behavior: "smooth" });
        }, 100); // Small delay to ensure rendering
      })
      .catch((err) => console.error(err));
  };

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
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
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
   
  }, []);
   const addtocart = (id) => {
    if (!loggedIn) {
      setShowAuthDialog(true);
      return;
    }
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

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Category Section */}
       {showAuthDialog && (
              <AuthDialog
                open={showAuthDialog}
                onClose={() => setShowAuthDialog(false)}
              />
            )}
      <div className="container my-5">
        <h3>Product Categories</h3>
        <div className="row mt-4">
          {categories.map((category, index) => (
            <div className="col-md-3 col-sm-6 mb-4" key={index}>
              <div
                className="card shadow-sm"
                style={{ height: "250px", padding: "5px" }}
              >
                <img
                  src={imgurl + category.category_image}
                  className="card-img-top"
                  alt={category.name}
                  style={{
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "5px",
                  }}
                />
                <div className="card-body text-center p-2">
                  <h6 className="card-title mb-2">{category.name}</h6>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => {
                      fetchProductsByCategory(category.category_id);
                      setSelectedCategory(category.name);
                    }}
                  >
                    View Products
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Products Section */}
      <div className="container my-5" ref={productsSectionRef}>
        <h3 className="mb-4">{selectedCategory} Products</h3>
        <div className="row">
          {products.length > 0 ? (
            products.map((product, index) => (
              <motion.div
                key={index}
                className="col-md-3 col-sm-6 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className="card shadow-sm"
                  style={{ height: "280px", padding: "5px", cursor: "pointer" }}
                >
                  {/* 🔗 Clickable Card */}
                  <Link
                    to={`/product_detail/${product.product_id}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <img
                      src={imgurl + product.product_image_main}
                      className="card-img-top"
                      alt={product.name}
                      style={{
                        height: "140px",
                        objectFit: "contain",
                        borderRadius: "5px",
                      }}
                    />
                    <div className="card-body text-center p-2">
                      <h6 className="card-title mb-2">{product.name}</h6>
                      <p className="card-text mb-2">${product.price}</p>
                    </div>
                  </Link>
                  {/* Buttons remain functional */}
                  <div className="card-body text-center">
                  <span
                      className={`btn btn-sm shadow-sm px-3 py-2 d-flex align-items-center justify-content-center ${
                        cartItems.includes(product.product_id)
                          ? "btn-light text-primary border border-primary disabled"
                          : "btn-primary text-white border border-primary"
                      }`}
                      onClick={() => addtocart(product.product_id)}
                      style={{
                        minWidth: "50px",
                        fontSize: "10px",
                        // borderRadius: "6px",
                      }}
                    >
                      <i className="fa fa-shopping-cart me-2"></i>
                      {cartItems.includes(product .product_id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center w-100">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/no-data-available-4565957-3788745.png"
                alt="No Products"
                style={{ width: "250px", marginBottom: "20px" }}
              />
              <h5>No products available in this category.</h5>
            </div>
          )}
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="btn btn-primary"
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            borderRadius: "50%",
            width: "45px",
            height: "45px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            zIndex: 1000,
          }}
        >
          ↑
        </button>
      )}
    </>
  );
};

export default Category;
