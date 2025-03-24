import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1009/customer").then((response) => {
      setCustomers(response.data);
    }).catch((error) => {
      console.error("Error fetching customers:", error);
    });
  }, []);

  function deleteCustomer(id) {
    if (window.confirm("Are you sure you want to delete this customer?")) {
      axios.delete(`http://localhost:1009/customer/${id}`).then(() => {
        setCustomers(customers.filter((customer) => customer.customer_id !== id));
      });
    }
  }

  return (
    <div className="main" id="main">
      <div className="container-fluid p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-truncate">Customer List</h5>
          <Link to="/add_customer" className="btn btn-primary btn-sm">
            <i className="fa fa-plus"></i> Add Customer
          </Link>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                {/* <th>Password</th> */}
                <th>Status</th>
                <th>Shipping Address</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={customer.customer_id}>
                  <td>{index + 1}</td>
                  <td>{customer.customer_name}</td>
                  <td>{customer.customer_email}</td>
                  <td>{customer.customer_phone}</td>
                  {/* <td>******</td> */}
                  <td>
                    <span
                      className={`badge ${
                        customer.customer_status == 1 ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {customer.customer_status == 1 ? "Active" : "Inactive" }
                    </span>
                  </td>
                  <td className="text-truncate" style={{ maxWidth: "120px" }}>{customer.shipping_address}</td>
                  <td>
                    <Link to={`/add_customer/${customer.customer_id}`} className="btn btn-warning btn-sm me-1">
                      <i className="fa fa-pencil"></i>
                    </Link>
                    <button onClick={() => deleteCustomer(customer.customer_id)} className="btn btn-danger btn-sm">
                      <i className="fa fa-trash"></i>
                    </button>
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
