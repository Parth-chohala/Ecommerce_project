import axios from "axios";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Reviews = (params) => {
  const [reviewsData, setReviews] = useState([]);
  // console.log("params changed", params);
  const [product_id, setproduct_id] = useState(params.id);
  useEffect(() => {
    // console.log("Product ID changed in reviews", product_id);
    axios
      .get(`http://localhost:1009/reviews/detail/${product_id}`)
      .then((res) => {
        // console.log("Reviews", res.data);
        setReviews(res.data);
      })
      .catch((err) => console.error(err));
  }, [product_id]);

  // Render star ratings
  const renderStars = (count) => {
    return [...Array(5)].map((_, index) => (
      <i
        key={index}
        className={`fa fa-star${index < count ? " text-warning" : " text-secondary"}`}
      ></i>
    ));
  };

  return (
    <div className="container my-5">
      <h4 className="mb-4 fw-bold">Customer Reviews</h4>

      {reviewsData.length > 0 ? (
        reviewsData.map((review) => (
          <motion.div
            key={review.review_id}
            className="mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0 fw-bold">{review.customer_name}</h6>
                  <span className="text-muted small">
                    {new Date(review.review_date).toLocaleString()}
                  </span>
                </div>
                <div className="mb-2">{renderStars(review.rating)}</div>
                <p className="text-muted">{review.comment}</p>
                <button className="btn btn-outline-primary btn-sm">
                  <i className="fa fa-thumbs-up me-1"></i> Helpful
                </button>
              </div>
            </div>
          </motion.div>
        ))
      ) : (
        <p>No reviews available</p>
      )}
    </div>
  );
};

export default Reviews;
