import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddCustomer() {
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_password: "",
    customer_phone: "",
    customer_status: 1,
    shipping_address: "",
  });

  // console.log("From data", formData);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:1009/customer/${id}`).then((res) => {
        const customer = res.data[0];
        setFormData(customer);
      });
    }
  }, [id]);

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    console.log("Value changed : ", formData);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    if (!formData.customer_name) errors.customer_name = "Name is required";
    if (!formData.customer_email) errors.customer_email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.customer_email))
      errors.customer_email = "Invalid email format";
    if (!formData.customer_phone) errors.customer_phone = "Phone is required";
    else if (!/^\d+$/.test(formData.customer_phone))
      errors.customer_phone = "Phone must be numbers only";
    if (!formData.customer_password)
      errors.customer_password = "Password is required";
    else if (formData.customer_password.length < 6)
      errors.customer_password = "Password must be at least 6 characters";
    if (formData.customer_status !== 0 && formData.customer_status !== 1) {
      errors.status = "Please select a status";
    }

    if (!formData.shipping_address)
      errors.shipping_address = "Shipping address is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form data : ", formData);
    if (validate()) {
      // console.log("Validation done");

      if (id) {
        console.log("update");
        axios
          .put(`http://localhost:1009/customer/${id}`, formData)
          .then((res) => {
            toast.success("Customer updated successfully", {
              position: "bottom-right",
              hideProgressBar:true

            });
            setTimeout(() => {
              navigate("/customers");
            }, 2000);
          })
          .catch((e) => {
            toast.error("Error in updating ", { position: "bottom-right" });
            console.log("error :", e);
          });
      } else {
        console.log("INSERTED");
        axios
          .post("http://localhost:1009/customer", formData)
          .then((res) => {
            // console.log("respoce : ",res)
            toast.success("Customer Inserted successfully", {
              position: "bottom-right",
              hideProgressBar:true

            });
            setTimeout(() => {
              navigate("/customers");
            }, 2000);
          })
          .catch((e) => {
            toast.error("Error in Inserting ", { position: "bottom-right" });
            console.log("Error in inserting customer ", e);
          });
      }
    }
  };

  return (
    <div className="main" id="main">
      <div className="card">
        <div className="card-body">
          <ToastContainer />
          <h5 className="card-title">
            {id ? "Update Customer" : "Add Customer"}
          </h5>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="customer_name"
                // value=.{formData.field}
                defaultValue={formData.customer_name || ""}
                onChange={handleChange}
              />
              <div style={{ color: "red" }}>{formErrors.customer_name}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                name="customer_email"
                // value=.{formData.field}
                defaultValue={formData.customer_email}
                onChange={handleChange}
              />
              <div style={{ color: "red" }}>{formErrors.customer_email}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="customer_password"
                // value=.{formData.field}
                defaultValue={formData.customer_password}
                onChange={handleChange}
              />
              <div style={{ color: "red" }}>{formErrors.customer_password}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Phone </label>
              <input
                type="text"
                className="form-control"
                name="customer_phone"
                // value=.{formData.field}
                defaultValue={formData.customer_phone}
                onChange={handleChange}
              />
              <div style={{ color: "red" }}>{formErrors.customer_phone}</div>
            </div>
            <div className="mb-3">
              <label className="form-label">Shipping Address </label>
              <textarea
                className="form-control"
                name="shipping_address"
                defaultValue={formData.shipping_address}
                onChange={handleChange}
              />
              <div style={{ color: "red" }}>{formErrors.shipping_address}</div>
            </div>
            <div className="mb-3">
              <label className="form-label d-block">Status</label>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="status-active"
                  name="customer_status"
                  checked={formData.customer_status == 1}
                  className="form-check-input"
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      customer_status: 1,
                    }))
                  }
                />
                <label className="form-check-label" htmlFor="status-active">
                  Active
                </label>
              </div>

              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  id="status-inactive"
                  name="customer_status"
                  className="form-check-input"
                  checked={formData.customer_status == 0}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      customer_status: 0,
                    }))
                  }
                />
                <label className="form-check-label" htmlFor="status-inactive">
                  Inactive
                </label>
              </div>

              {formErrors.customer_status && (
                <div className="text-danger mt-1">
                  {formErrors.customer_status}
                </div>
              )}
            </div>

            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                {id ? "Update Customer" : "Add Customer"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
