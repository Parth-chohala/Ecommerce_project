import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  // const [status, setStatus] = useState(order.status);

 
  useEffect(() => {
    axios
      .get("http://localhost:1009/orders/details")
      .then((response) => {
        console.log("Order data", response.data);
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error fetching orders:", error);
      });
  }, []);

 

  return (
    <div className="main" id="main">
      <div className="container-fluid p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-truncate">Order List</h5>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Customer</th>
                <th>Order Date</th>
                <th>Total Amount</th>
                <th>Status</th>
                <th>Shipping Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={order.order_id}>
                  <td>{index + 1}</td>
                  <td>{order.customer_name}</td>
                  <td>{new Date(order.order_date).toLocaleDateString()}</td>
                  <td>${order.total_amount}</td>
                  <td>
                   
                    <div id="status_txt">
                      {order.status}
                    </div>
                  </td>
                  <td className="text-truncate" style={{ maxWidth: "200px" }}>
                    {order.shipping_address}
                  </td>
                  <td>
                    <Link
                      to={`/order_details/${order.order_id}`}
                      className="btn btn-info btn-sm"
                    >
                      <i className="fa fa-eye"></i> View
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
