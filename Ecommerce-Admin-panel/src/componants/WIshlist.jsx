import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const [wishlistSummary, setWishlistSummary] = useState([]);
 

  useEffect(() => {
    axios
      .get("http://localhost:1009/wishlist/withname") 
      .then((response) => {
        // console.log("Wishlist details:", response.data);

        setWishlistSummary(response.data);
      })
      .catch((error) => {
        console.error("Error fetching wishlist summary:", error);
      });
  }, []);

  function viewWishlistDetails(customer_id) {
   
  }

  return (
    <div className="main" id="main">
      <div className="container-fluid p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-truncate">Customer Wishlist Summary</h5>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                {/* <th>Customer ID</th> */}
                <th>Customer Name</th>
                <th>Wishlist Items Count</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlistSummary.map((customer, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {/* <td>{customer.customer_id}</td> */}
                  <td>{customer.customer_name}</td>
                  <td>{customer.wishlist_count}</td>
                  <td>
                    <Link to={`/wishlist_details/${customer.customer_id}`}>
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => viewWishlistDetails(customer.customer_id)}
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
