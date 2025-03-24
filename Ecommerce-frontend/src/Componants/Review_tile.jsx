import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Review_tile(params) {
  // console.log("ID from tile", params);
const [product_id, setproduct_id] = useState(params.id);
  const [reviewsAvg, setreviewsAvg] = useState({
    review_count: 0,
    avg_rating: 0,
    fivestar_count: 0,
    fourstar_count: 0,
    threestar_count: 0,
    twostar_count: 0,
    onestar_count: 0,
  });

  useEffect(() => {
    // console.log("Product ID changed in tile", product_id);

    axios
      .get(`http://localhost:1009/reviews/allavg/${product_id}`)
      .then((response) => {
        // console.log("reviews details:", response);
        // console.log("reviews details:", response.data);
        setreviewsAvg(response.data.length>0?response.data[0]:{
            review_count: 0,
            avg_rating: 0,
            fivestar_count: 0,
            fourstar_count: 0,
            threestar_count: 0,
            twostar_count: 0,
            onestar_count: 0,
          });

        //   setreviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching wishlist summary:", error);
      });
  }, [product_id]);


  
  const ratingsBreakdown = [
    { stars: 5, count: reviewsAvg.fivestar_count || 0 },
    { stars: 4, count: reviewsAvg.fourstar_count || 0 },
    { stars: 3, count: reviewsAvg.threestar_count || 0 },
    { stars: 2, count: reviewsAvg.twostar_count || 0 },
    { stars: 1, count: reviewsAvg.onestar_count || 0 },
  ];
  

  // Function to calculate percentage for progress bars
  const getPercentage = (count) => (count / reviewsAvg.review_count) * 100;

    return (
      <motion.div
        className="container border rounded p-3 my-3 bg-white shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }} // Animate every time it's in view, at least 20%
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="row align-items-center">
          {/* Left Side: Average Rating */}
          <div className="col-md-3 text-center d-flex flex-column justify-content-center align-items-center">
            <h2 className="mb-0 fw-bold">{Number(reviewsAvg.avg_rating).toFixed(1)}</h2>
            <small className="text-muted">
              {reviewsAvg.review_count} reviews
            </small>
          </div>

          {/* Right Side: Ratings Breakdown */}
          <div className="col-md-9">
            {ratingsBreakdown.map((rating, index) => (
              <div key={index} className="d-flex align-items-center mb-1">
                <div style={{ width: "12%", fontSize: "0.85rem" }}>
                  <strong>{rating.stars} ★</strong>
                </div>
                <div
                  className="progress flex-grow-1"
                  style={{
                    height: "8px",
                    margin: "0 8px",
                    backgroundColor: "#e9ecef",
                  }}
                >
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: `${getPercentage(rating.count)}%` }}
                    aria-valuenow={getPercentage(rating.count)}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <div
                  style={{ width: "12%", fontSize: "0.85rem" }}
                  className="text-end text-muted"
                >
                  {rating.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    );
}
