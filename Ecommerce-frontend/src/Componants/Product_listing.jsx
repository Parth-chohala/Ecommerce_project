import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Product_listing() {
  const imgurl = `http://localhost:1009/images/`;

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12); // Products per page
  const [priceFilter, setPriceFilter] = useState({ min: 0, max: 10000 });
  const [viewType, setViewType] = useState("grid"); // "grid" or "list"

  useEffect(() => {
    axios
      .get("http://localhost:1009/product/for_front/productwithdetails")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      });
  }, []);
  // Scroll to Top Feature
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowGoToTop(true);
      } else {
        setShowGoToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Filter products by price
  const applyFilters = () => {
    const filtered = products.filter((product) => {
      const price = parseFloat(product.price);
      return price >= priceFilter.min && price <= priceFilter.max;
    });
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // Pagination calculation
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div>
      <section>
        <div className="container" style={{ marginTop: "10px" }}>
          <div className="row">
            {/* Filter Section */}
            <div className="col-lg-3">
              <div className="card mb-5">
                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className="accordion-button text-dark bg-light"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#priceFilter"
                        aria-expanded="true"
                      >
                        Price
                      </button>
                    </h2>
                    <div
                      id="priceFilter"
                      className="accordion-collapse collapse show"
                    >
                      <div className="accordion-body">
                        <div className="row mb-3">
                          <div className="col-6">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Min"
                              value={priceFilter.min}
                              onChange={(e) =>
                                setPriceFilter({
                                  ...priceFilter,
                                  min: e.target.value,
                                })
                              }
                            />
                          </div>
                          <div className="col-6">
                            <input
                              type="number"
                              className="form-control"
                              placeholder="Max"
                              value={priceFilter.max}
                              onChange={(e) =>
                                setPriceFilter({
                                  ...priceFilter,
                                  max: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <button
                          className="btn btn-outline-secondary w-100"
                          onClick={applyFilters}
                        >
                          Apply
                        </button>
                        <button
                          className="btn btn-link w-100"
                          onClick={() => setFilteredProducts(products)}
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Listing Section */}
            <div className="col-lg-9">
              {/* View Type Toggle */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0">{filteredProducts.length} Items found</h6>
                <div>
                  <button
                    className={`btn btn-sm ${
                      viewType === "grid"
                        ? "btn-primary"
                        : "btn-outline-primary"
                    } me-2`}
                    onClick={() => setViewType("grid")}
                  >
                    Grid View
                  </button>
                  <button
                    className={`btn btn-sm ${
                      viewType === "list"
                        ? "btn-primary"
                        : "btn-outline-primary"
                    }`}
                    onClick={() => setViewType("list")}
                  >
                    List View
                  </button>
                </div>
              </div>

              {/* Products Display */}
              <div className="row">
                {currentProducts.length > 0 ? (
                  currentProducts.map((product) =>
                    viewType === "grid" ? (
                      // Grid View
                      <div
                        className="col-lg-4 col-md-6 col-sm-6 d-flex"
                        key={product.id}
                      >
                        <Link
                          to={`/product_detail/${product.product_id}`}
                          style={{ textDecoration: "none", color: "inherit" }} // Remove default link styling
                        >
                          <div className="card w-100 my-2 shadow-2-strong">
                            <img
                              src={imgurl + product.product_image_main}
                              className="card-img-top"
                              alt={product.name}
                              style={{ height: "200px", objectFit: "cover" }}
                            />
                            <div className="card-body d-flex flex-column">
                              <h5 className="card-title mb-1">
                                {product.name}
                              </h5>
                              <h6 className="text-primary">${product.price}</h6>
                              <p className="card-text small">
                                {product.description.substring(0, 60)}...
                              </p>
                              <div className="card-footer d-flex align-items-end pt-3 px-0 pb-0 mt-auto">
                                <a
                                  href="#!"
                                  className="btn btn-primary shadow-0 me-1"
                                >
                                <i className="fa fa-shopping-cart me-2"></i>
                                  Add to cart
                                </a>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ) : (
                      // List View
                      <div className="col-12 d-flex mb-3" key={product.id}>
                        <Link
                          to={`/product_detail/${product.product_id}`}
                          style={{ textDecoration: "none", color: "inherit" }} // Remove default link styling
                        >
                          <div className="card w-100 shadow-0 border rounded-3">
                            <div className="card-body">
                              <div className="row g-0">
                                <div className="col-md-3 d-flex align-items-center">
                                  <img
                                    src={imgurl + product.product_image_main}
                                    className="rounded-3"
                                    style={{
                                      width: "100%",
                                      height: "auto",
                                      objectFit: "cover",
                                    }}
                                    alt={product.name}
                                  />
                                </div>
                                <div className="col-md-6 p-3">
                                  <h5>{product.name}</h5>
                                  <p className="mb-2 text-muted small">
                                    {product.description}
                                  </p>
                                  <p className="mb-3 text-muted">
                                    Stock: {product.stock_quantity}
                                  </p>
                                </div>
                                <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
                                  <h4 className="mb-1">${product.price}</h4>
                                  <button className="btn btn-primary shadow-0">
                                    Add to cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    )
                  )
                ) : (
                  <p className="text-center">No products found.</p>
                )}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <nav
                  aria-label="Page navigation"
                  className="d-flex justify-content-center mt-4"
                >
                  <ul className="pagination">
                    <li
                      className={`page-item ${
                        currentPage === 1 ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage((prev) => prev - 1)}
                      >
                        «
                      </button>
                    </li>
                    {Array.from({ length: totalPages }, (_, i) => (
                      <li
                        className={`page-item ${
                          currentPage === i + 1 ? "active" : ""
                        }`}
                        key={i}
                      >
                        <button
                          className="page-link"
                          onClick={() => setCurrentPage(i + 1)}
                        >
                          {i + 1}
                        </button>
                      </li>
                    ))}
                    <li
                      className={`page-item ${
                        currentPage === totalPages ? "disabled" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                      >
                        »
                      </button>
                    </li>
                  </ul>
                </nav>
              )}
              {showGoToTop && (
                <button
                  onClick={scrollToTop}
                  className="btn btn-primary"
                  style={{
                    position: "fixed",
                    bottom: "30px",
                    right: "30px",
                    borderRadius: "50%",
                    width: "50px",
                    height: "50px",
                    zIndex: 1000,
                    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  }}
                  title="Go to Top"
                >
                  ↑
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
