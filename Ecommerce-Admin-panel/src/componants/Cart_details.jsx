
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Cart_details() {
  const { id } = useParams();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:1009/cart/${id}`)
      .then((response) => {
        setCartItems(response.data);
        console.log("Cart details", response);
      })
      .catch((error) => {
        console.error("Error fetching cart details:", error);
      });
  }, [id]);

  return (
    <div className="main" id="main">
      <div className="container-fluid p-3">
        <h5>Cart Details</h5>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                {/* <th>Product ID</th> */}
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Added At</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  {/* <td>{item.product_id}</td> */}
                  <td>{item.product_name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{new Date(item.added_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to={"/cart"}>
        <button className="btn btn-secondary mt-3">
          Back to Cart Summary
        </button>
        </Link>
        
      </div>
    </div>
  );
}