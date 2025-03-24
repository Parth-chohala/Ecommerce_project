import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Reviews_detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [reviews, setreviews] = useState([]);
  const [category, setcategory] = useState({
    category_id: "",
    name: "",
    description: "",
  });
  const [product, setProduct] = useState({
    product_id: "",
    name: "",
    description: "",
    price: "",
    product_image_main: "",
    product_images: null,
    stock_quantity: "",
    category_id: "",
    product_status: "",
    created_at: "",
    updated_at: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:1009/reviews/detail/${id}`)
      .then((response) => {
        setreviews(response.data);
        console.log("review details from details", response.data);
      })
      .catch((error) => {
        console.error("Error fetching review details:", error);
      });
    axios
      .get(`http://localhost:1009/product/${id}`)
      .then((response) => {
        setProduct(response.data[0]);
        // console.log("product details", response.data);
        axios
          .get(`http://localhost:1009/category/${response.data[0].category_id}`)
          .then((response) => {
            setcategory(response.data[0]);
            // console.log("category details", response.data);
          })
          .catch((error) => {
            console.error("Error fetching category details:", error);
          });
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
      });
  }, []);

  //   "product_id": 2,
  //   "name": "Tablet",
  //   "description": "High-performance laptop with 16GB RAM",
  //   "price": 100,
  //   "product_image_main": "",
  //   "product_images": null,
  //   "stock_quantity": 200,
  //   "category_id": 2,
  //   "product_status": 1,
  //   "created_at": "2025-02-14T11:31:10.000Z",
  //   "updated_at": "2025-03-05T10:29:27.000Z"

  return (
    <div className="main" id="main">
      <div className="container-fluid p-3">
        <h5>Product Details</h5>
        <div className="card p-3 mb-3">
          <Link
            to={`/add_product/${product.product_id}`}
            className="btn btn-warning btn-sm me-1 position-absolute top-0 end-0 m-2 "
          >
            <i className="fa fa-pencil"></i>
          </Link>
          <p>
            <strong>Product Name : </strong>
            {product.name || "N/A"}
          </p>
          <p>
            <strong>Description : </strong> {product.description || "N/A"}
          </p>
          <p>
            <strong>Category : </strong> {category.name || "N/A"}
          </p>
          <p>
            <strong>Status : </strong>
            <span
              className={`badge ${
                product.product_status == 1 ? "bg-success" : "bg-danger"
              }`}
            >
              {product.product_status == 1 ? "Active" : "Inactive" || "N/A"}
            </span>
          </p>
          <p>
            <strong>Price : </strong> {product.price || "N/A"}
          </p>
          <p>
            <strong>Stock Quantity : </strong> {product.stock_quantity || "N/A"}
          </p>
          <p>
            <strong>Created On : </strong>
            {new Date(product.created_at).toLocaleDateString() || "N/A"}
          </p>
          <p>
            <strong>Last Updated : </strong>
            {new Date(product.updated_at).toLocaleDateString() || "N/A"}
          </p>
        </div>

        {reviews.length > 0 ? (
          reviews.map((review) => {
            let starColor = "text-danger";
            if (review.rating > 3) starColor = "text-success";
            else if (review.rating === 3) starColor = "text-warning";

            return (
              <div className="card shadow-sm p-3 mb-3" key={review.review_id}>
                <div className="card-body">
                  <h5 className="card-title">{review.customer_name}</h5>

                  <div className="mb-2">
                    <span
                      className={`badge ${starColor}`}
                      style={{ fontSize: "1.2rem" }}
                    >
                      {"★".repeat(review.rating) +
                        "☆".repeat(5 - review.rating)}
                    </span>
                  </div>
                  <p className="card-text">{review.comment}</p>
                  <p className="text-muted small mb-0">
                    Reviewed on:{" "}
                    {new Date(review.review_date).toLocaleDateString()}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          <p>No reviews available.</p>
        )}
        <button
          onClick={() => navigate("/reviews")}
          className="btn btn-secondary mt-3"
        >
          Back
        </button>
      </div>
    </div>
  );
}
