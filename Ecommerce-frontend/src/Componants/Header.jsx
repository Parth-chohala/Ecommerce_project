import React, { useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthDialog from "./Authpage"; // ✅ Correct for default exports
import { User_id_provider } from "../Hooks/Userinfo";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState(""); // Track search query
  // const [filteredProducts, setFilteredProducts] = useState([]); // Filtered products based on search query
  const [isFocused, setIsFocused] = useState(false); // Check if search input is focused
  const searchRef = useRef(null); // Ref to the search input
  const navigate = useNavigate(); // Using useNavigate for navigation
  const [loggedIn, setLoggedIn] = useState(User_id_provider()); // Track user login status
  const [showAuthDialog, setShowAuthDialog] = useState(false); // Show authentication dialog

  // Filter products based on search query
  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    //   // Filter products by name
    //   if (query) {
    //     const filtered = products.filter((product) =>
    //       product.name.toLowerCase().includes(query)
    //     );
    //     setFilteredProducts(filtered);
    //   } else {
    //     setFilteredProducts([]); // Reset when search query is empty
  };
  // };

  // Handle blur (when input loses focus)
  // const handleBlur = () => {
  //   // Close the product cards if input loses focus
  //   setTimeout(() => {
  //     if (!searchRef.current.contains(document.activeElement)) {
  //       setFilteredProducts([]); // Hide product cards when focus is lost
  //     }
  //   }, 200); // Delay to allow click event on product cards
  //   setIsFocused(false);
  // };

  // Handle focus on search box
  const handleFocus = () => {
    setIsFocused(true);
  };

  // Navigate to product details page on click
  const handleProductClick = (productId) => {
    navigate(`/product_details/${productId}`); // Navigate to the product details page
  };

  return (
    <div>
      {showAuthDialog && (
        <AuthDialog
          open={showAuthDialog}
          onClose={() => setShowAuthDialog(false)}
        />
      )}

      <header>
        <div className="p-3 text-center bg-white border-bottom">
          <div className="container">
            <div className="row gy-3">
              <div className="col-lg-2 col-sm-4 col-4">
                <Link to="/sign_in" className="float-start">
                  <img
                    src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png"
                    height={35}
                    alt="Logo"
                  />
                </Link>
              </div>

              <div className="order-lg-last col-lg-5 col-sm-8 col-8">
                <div className="d-flex align-items-center">
                  {loggedIn ? (
                    <>
                      <Link
                        to="/user_profile"
                        className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"
                      >
                        <i className="fas fa-user-alt m-1 me-md-2" />
                        <p className="d-none d-md-block mb-0">Profile</p>
                      </Link>
                      <Link
                        to="/wishlist"
                        className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center"
                      >
                        <i className="fas fa-heart m-1 me-md-2" />
                        <p className="d-none d-md-block mb-0">Wishlist</p>
                      </Link>
                      <Link
                        to="/Cart"
                        className="border rounded py-1 px-3 nav-link d-flex align-items-center"
                      >
                        <i className="fas fa-shopping-cart m-1 me-md-2" />
                        <p className="d-none d-md-block mb-0">My cart</p>
                      </Link>
                    </>
                  ) : (
                    <div
                      onClick={() => setShowAuthDialog(true)}
                      className="border rounded py-1 px-3 nav-link d-flex align-items-center ms-auto"
                      style={{ cursor: "pointer" }}
                      role="button"
                      tabIndex={0}
                    >
                      <i className="fas fa-user-alt m-1 me-md-2" />
                      <p className="d-none d-md-block mb-0">Sign in</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="col-lg-5 col-md-12 col-12">
                <div
                  className="input-group float-center"
                  onFocus={handleFocus}
                  style={{ position: "relative" }} // Make parent container relative
                >
                  <div className="form-outline">
                    <input
                      type="search"
                      id="form1"
                      className="form-control"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      ref={searchRef}
                    />
                    <label className="form-label" htmlFor="form1">
                      Search
                    </label>
                  </div>
                  <button type="button" className="btn btn-primary shadow-0">
                    <i className="fas fa-search" />
                  </button>
                </div>

                {/* Display filtered products */}
                {/* {isFocused && filteredProducts.length > 0 && (
                  <div
                    className="search-results"
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: "0",
                      width: "100%",
                      zIndex: 100,
                    }}
                  >
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="product-card"
                        onClick={() => handleProductClick(product.id)}
                        style={{
                          cursor: "pointer",
                          padding: "10px",
                          border: "1px solid #ddd",
                          marginTop: "5px",
                          backgroundColor: "white",
                          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          style={{
                            width: "50px",
                            height: "50px",
                            marginRight: "10px",
                          }}
                        />
                        <span>{product.name}</span>
                      </div>
                    ))}
                  </div>
                )}

                {isFocused && filteredProducts.length === 0 && searchQuery && (
                  <div
                    className="no-results"
                    style={{ padding: "10px", marginTop: "5px", color: "red" }}
                  >
                    No products found.
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>

        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container justify-content-center justify-content-md-between">
            <button
              className="navbar-toggler border py-2 text-dark"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarLeftAlignExample"
              aria-controls="navbarLeftAlignExample"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarLeftAlignExample"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" end>
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/category" className="nav-link">
                    Categories
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/hot-offers" className="nav-link">
                    Hot offers
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/gift-boxes" className="nav-link">
                    Gift boxes
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/product_listing" className="nav-link">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/menu-item" className="nav-link">
                    Menu item
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/menu-name" className="nav-link">
                    Menu name
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
