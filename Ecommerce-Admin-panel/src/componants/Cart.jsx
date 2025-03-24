import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cartSummary, setCartSummary] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1009/cart")
      .then((response) => {
        setCartSummary(response.data);
        
        // console.log("Cart details", response.data);
      })
      .catch((error) => {
        console.error("Error fetching cart summary:", error);
      });
  }, []);

  return (
    <div className="main" id="main">
      <div className="container-fluid p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-truncate">Customer Cart Summary</h5>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                {/* <th>Customer ID</th> */}
                <th>Customer Name</th>
                <th>Cart Items Count</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartSummary.map((customer, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {/* <td>{customer.customer_id}</td> */}
                  <td>{customer.name}</td>
                  <td>{customer.item_count}</td>
                  <td>
                    <Link to={"/cart_details/" + customer.customer_id}>
                      
                      <button className="btn btn-primary btn-sm">View</button>
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
