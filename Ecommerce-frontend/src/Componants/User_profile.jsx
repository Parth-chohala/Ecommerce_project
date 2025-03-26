import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthDialog from "./Authpage"; // Import your AuthDialog Component
import { User_id_provider } from "../Hooks/Userinfo";
import { removeUser } from "../Hooks/Userinfo";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const [loggedIn, setLoggedIn] = useState(User_id_provider()); // Change to false to test login popup
  const navigate = useNavigate();
const handleLogout = () => {
  setLoggedIn(false);
  removeUser();
  toast.success("Logged out successfully");
  setTimeout(() => {
    navigate("/");
    window.location.reload();
  }, 1500);
}
  return (
    <>
      {loggedIn ? (
        <div className="container my-5">
          <h3 className="mb-4">My Profile</h3>

          <div className="row">
            {/* Sidebar Navigation */}
            <div className="col-md-3 mb-4">
              <div className="list-group">
                <Link
                  to="/profile"
                  className="list-group-item list-group-item-action active"
                >
                  Profile Overview
                </Link>
                <Link
                  to="/orders"
                  className="list-group-item list-group-item-action"
                >
                  My Orders
                </Link>
                <Link
                  to="/wishlist"
                  className="list-group-item list-group-item-action"
                >
                  Wishlist
                </Link>
                <Link
                  to="/settings"
                  className="list-group-item list-group-item-action"
                >
                  Settings
                </Link>
                <div
                  to="/logout"
                  className="list-group-item list-group-item-action text-danger"
                  onClick={handleLogout}
                >
                  Logout
                </div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="col-md-9">
              {/* Personal Information */}
              <div className="card p-4">
                <h5 className="mb-3">Personal Information</h5>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="John"
                        defaultValue="John"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Doe"
                        defaultValue="Doe"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="you@example.com"
                        defaultValue="john.doe@example.com"
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label className="form-label">Phone</label>
                      <input
                        type="tel"
                        className="form-control"
                        placeholder="+123456789"
                        defaultValue="+123456789"
                      />
                    </div>
                    <div className="col-12 mb-3">
                      <label className="form-label">Address</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="1234 Main St"
                        defaultValue="1234 Main St"
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save Changes
                  </button>
                </form>
              </div>

              {/* Order Summary Section */}
              <div className="card p-4 mt-4">
                <h5 className="mb-3">Recent Orders</h5>
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">Order #</th>
                      <th scope="col">Date</th>
                      <th scope="col">Status</th>
                      <th scope="col">Total</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3].map((order, index) => (
                      <tr key={index}>
                        <td>#1234{index}</td>
                        <td>2024-03-01</td>
                        <td>
                          <span className="badge bg-success">Delivered</span>
                        </td>
                        <td>$120.00</td>
                        <td>
                          <button className="btn btn-sm btn-outline-primary">
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <AuthDialog />
      )}
    </>
  );
};

export default UserProfile;
