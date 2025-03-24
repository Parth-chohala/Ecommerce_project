import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Add_admin() {
  const navigate = useNavigate();
  // console.log(useParams());
  const { id } = useParams();

  // console.log("id", id);

  const [formData, setFormData] = useState({
    admin_name: "",
    admin_email: "",
    admin_phone: "",
    admin_password: "",
    admin_status: 1,
    role: 1,
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    if (id) {
      axios
        .get(`http://localhost:1009/admin/${id}`)
        .then((response) => {
          setFormData(response.data[0]);
          // console.log("Admin data", response.data);
        })
        .catch((error) => {
          console.error("Error fetching admin data:", error);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};

    if (!formData.admin_name) errors.name = "Name is required";
    if (!formData.admin_email) errors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.admin_email))
      errors.email = "Invalid email format";
    if (!formData.admin_phone) errors.phone = "Phone is required";
    else if (!/^\d+$/.test(formData.admin_phone))
      errors.phone = "Phone must be numbers only";
    if (!formData.admin_password) errors.password = "Password is required";
    else if (formData.admin_password.length < 6)
      errors.password = "Password must be at least 6 characters";

    if (formData.admin_status !== 0 && formData.admin_status !== 1) {
      errors.status = "Please select a status";
    }

    if (formData.role !== 0 && formData.role !== 1) {
      errors.role = "Please select a role";
    }

    // console.log("In validation ", formData);
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submit btn clicked ..");
    if (validate()) {
      // console.log("Validation done");
      console.log(formData);

      if (id) {
        axios
          .put(`http://localhost:1009/admin/${id}`, formData)
          .then((response) => {
            toast.success("Admin updated successfully", {
              position: "bottom-right",
              hideProgressBar:true
            });
            setTimeout(() => {
              navigate("/admin");
            }, 2000);
            // console.log("Admin Updated..", response);
          })
          .catch((error) => {
            toast.error("Error in Updating ", { position: "bottom-right" });
            console.error("Error updating admin:", error);
          });
      } else {
        axios
          .post("http://localhost:1009/admin", formData)
          .then((response) => {
            // console.log("Admin added ... ", response);
            toast.success("Admin Added successfully", {
              position: "bottom-right",
              hideProgressBar:true

            });
            setTimeout(() => {
              navigate("/admin");
            }, 2000);
          })
          .catch((error) => {
            toast.error("Error in Inserting ", { position: "bottom-right" });
            console.error("Error adding admin:", error);
          });
      }
    }
  };

  return (
    <div className="main" id="main">
      <div className="card shadow-lg">
        <div className="card-body">
          <ToastContainer />
          <h3 className="card-title text-center mb-4">
            {id ? "Edit Admin" : "Add Admin"}
          </h3>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="admin_name"
                defaultValue={formData.admin_name}
                onChange={handleChange}
              />
              <div style={{ color: "red" }}>{formErrors.name}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="admin_email"
                defaultValue={formData.admin_email}
                onChange={handleChange}
              />
              <div style={{ color: "red" }}>{formErrors.email}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="tel"
                className="form-control"
                name="admin_phone"
                defaultValue={formData.admin_phone}
                onChange={handleChange}
              />
              <div style={{ color: "red" }}>{formErrors.phone}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="admin_password"
                defaultValue={formData.admin_password}
                onChange={handleChange}
              />
              <div style={{ color: "red" }}>{formErrors.password}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Status</label>
              <div className="form-check">
                <input
                  type="radio"
                  id="active"
                  name="status"
                  value="1"
                  className="form-check-input"
                  checked={formData.admin_status == 1}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      admin_status: 1, // Explicitly set to 1
                    }))
                  }
                />
                <label htmlFor="active" className="form-check-label">
                  Active
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="inactive"
                  name="status"
                  value="0"
                  className="form-check-input"
                  checked={formData.admin_status == 0}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      admin_status: 0, // Explicitly set to 0
                    }))
                  }
                />
                <label htmlFor="inactive" className="form-check-label">
                  Inactive
                </label>
              </div>
              <div style={{ color: "red" }}>{formErrors.status}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Role</label>
              <div className="form-check">
                <input
                  type="radio"
                  id="admin"
                  name="role"
                  value="admin"
                  className="form-check-input"
                  checked={formData.role == 1}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      role: 1,
                    }))
                  }
                />
                <label htmlFor="admin" className="form-check-label">
                  Admin
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  id="customer"
                  name="role"
                  value="customer"
                  className="form-check-input"
                  checked={formData.role == 0}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      role: 0,
                    }))
                  }
                />
                <label htmlFor="customer" className="form-check-label">
                  Customer
                </label>
              </div>
              <div style={{ color: "red" }}>{formErrors.role}</div>
            </div>

            <div className="text-center mt-3">
              <button
                type="button"
                className="btn btn-primary px-4"
                onClick={handleSubmit}
              >
                {id ? "Update Admin" : "Add Admin"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
