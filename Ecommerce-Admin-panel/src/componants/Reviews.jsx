import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Reviews() {

  const [reviews, setreviews] = useState([]);
 

  useEffect(() => {
    axios
      .get("http://localhost:1009/reviews") 
      .then((response) => {
        console.log("reviews details:", response.data);

        setreviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching wishlist summary:", error);
      });
  }, []);

  

  return (
    <div className="main" id="main">
      <div className="container-fluid p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-truncate"> Review Summary</h5>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                {/* <th>Customer ID</th> */}
                <th>Product </th>
                <th>Reviews</th>
                <th>Avg. Ratings</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {/* <td>{customer.customer_id}</td> */}
                  <td>{product.name}</td>
                  <td>{product.review_count}</td>
                  <td>{product.rating}</td>
                  <td>
                    <Link to={`/reviews_details/${product.product_id}`}> 
                    <button
                      className="btn btn-primary btn-sm"
                      // onClick={() => viewWishlistDetails(customer.customer_id)}
                    >
                      View
                    </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}
