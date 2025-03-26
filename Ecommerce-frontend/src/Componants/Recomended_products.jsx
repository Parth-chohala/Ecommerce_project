import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { get_Cart_Items, Add_to_cart, Is_in_cart } from "../Hooks/Usecart";
import { User_id_provider } from "../Hooks/Userinfo";
import AuthDialog from "./Authpage";

const RecommendedProducts = ({ category_id,product_id }) => {
  const [products, setproducts] = useState([]);
  const [category,setcategory] = useState(); 
  const [cartItems, setcartItems] = useState([]);
  const [loggedIn, setLoggedIn] = useState(User_id_provider());
  const [showAuthDialog, setShowAuthDialog] = useState(false); // Show authentication dialog

  const containerRef = useRef(null);
  const imgurl = `http://localhost:1009/images/`;

  useEffect(() => {
    axios
      .get(`http://localhost:1009/product/productbycategory/${category_id}`)
      .then((res) => {
        // console.log("Products",res.data);

        setproducts(res.data.filter((product) => product.product_id !== Number(product_id)));

        // Scroll to product section after fetching products
      })
      .catch((err) => console.error(err));
      axios
      .get(`http://localhost:1009/category/${category_id}`)
      .then((res) => {
        // console.log("Category",res.data);
        setcategory(res.data[0].name);
        // setproducts(res.data);
        // Scroll to product section after fetching products
      })
      .catch((err) => console.error(err));
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
  }, [category_id]); // Fetch products based on category
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
  // Fade-in/out effect on mount and scroll
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in-out-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            entry.target.classList.remove("fade-out");
          } else {
            entry.target.classList.remove("fade-in");
            entry.target.classList.add("fade-out");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  // Center detection and scaling effect
  useEffect(() => {
    const container = containerRef.current;
    const cards = container.querySelectorAll(".product-card");

    const handleScroll = () => {
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;

      cards.forEach((card) => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + cardRect.width / 2;
        const distance = Math.abs(containerCenter - cardCenter);
        const scale = Math.max(0.95, 1 - distance / containerRect.width); // Adjust scaling range

        card.style.transform = `scale(${scale})`;
      });
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initial

    return () => container.removeEventListener("scroll", handleScroll);
  }, [products]);

  // ✅ Auto-scroll effect
  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    const scrollStep = 220; // Approximate card width + margin
    const scrollInterval = 2000; // 2 seconds

    const scroll = () => {
      if (!container) return;

      // Scroll to next position
      container.scrollTo({
        left: scrollAmount,
        behavior: "smooth",
      });

      // Update scroll amount for next scroll
      scrollAmount += scrollStep;

      // Reset scroll if reached end
      if (scrollAmount >= container.scrollWidth - container.clientWidth) {
        scrollAmount = 0;
      }
    };

    // Start auto scroll after 2 seconds
    const interval = setInterval(scroll, scrollInterval);

    return () => clearInterval(interval); // Cleanup
  }, [products]);

  return (
    <div className="container my-5 fade-in-out-scroll">
       {showAuthDialog && (
        <AuthDialog
          open={showAuthDialog}
          onClose={() => setShowAuthDialog(false)}
        />
      )}
      <h4 className="mb-4 fw-bold">
        Recommended for you in <span className="text-primary">{category}</span>
      </h4>
      <div
        ref={containerRef}
        className="scrolling-wrapper d-flex pb-3 overflow-auto"
        style={{ scrollBehavior: "smooth" }} // Ensure smooth scroll
      >
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="product-card card shadow-sm me-3 border-0"
              style={{
                minWidth: "220px",
                maxWidth: "220px",
                transition: "transform 0.3s ease",
              }}
              
            >
              <Link
                to={`/product_detail/${product.product_id}`}
                style={{ textDecoration: "none", color: "inherit" }} // Remove default link styling
              >
                <a
                  href="#"
                  className="img-wrap"
                  style={{
                    height: "180px",
                    display: "block",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={imgurl + product.product_image_main}
                    alt={product.name}
                    className="card-img-top"
                    style={{
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </a>
                <div className="card-body p-2">
                  <h6 className="card-title text-truncate mb-1">
                    {product.name}
                  </h6>
                  <div className="price-wrap">
                    <span className="price h6 fw-bold text-primary">
                      ₹{product.price}
                    </span>
                    <span className="text-muted ms-2">
                      <del>₹{product.price + 476}</del>
                    </span>
                  </div>
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
                      {cartItems.includes(product.product_id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </span>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default RecommendedProducts;
