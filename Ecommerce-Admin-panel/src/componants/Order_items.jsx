import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function OrderDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [order, setOrder] = useState({});
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:1009/orders/detailofspecific/${id}`)
      .then((response) => {
        console.log("Order ",response.data)
        setOrder(response.data[0]);
      })
      .catch((error) => {
        console.error("Error fetching order:", error);
      });

    axios.get(`http://localhost:1009/order_items/details/${id}`)
      .then((response) => {
        setOrderItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching order items:", error);
      });
  }, [id]);

  return (
    <div className="main" id="main">
      <div className="container-fluid p-3">
        <h5>Order Details</h5>
        <div className="card p-3 mb-3">
          {/* <p><strong>Order ID:</strong> {order.order_id}</p> */}
          <p><strong>Customer Name:</strong> {order.customer_name}</p>
          <p><strong>Order Date:</strong> {new Date(order.order_date).toLocaleDateString()}</p>
          <p><strong>Total Amount:</strong> ${order.total_amount}</p>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Shipping Address:</strong> {order.shipping_address}</p>
        </div>

        <h5>Order Items</h5>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Product </th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {orderItems.map((item, index) => (
                <tr key={item.order_item_id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price}</td>
                  <td>${(item.quantity * item.price).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button onClick={() => navigate("/orders")} className="btn btn-secondary mt-3">
          Back to Orders
        </button>
      </div>
    </div>
  );
}
