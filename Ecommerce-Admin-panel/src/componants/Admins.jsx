import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Admins() {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1009/admin").then((response) => {
      console.log("Fetched Admins:", response.data);
      setAdmins(response.data);
    });
  }, []);

  function deleteAdmin(id) {
    if (window.confirm("Are you sure you want to delete this admin?")) {
      axios.delete(`http://localhost:1009/admin/${id}`).then(() => {
        setAdmins(admins.filter((admin) => admin.id !== id));
      });
    }
  }

  return (
    <div id="main" className="main">
      <div className="container-fluid p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-truncate">Admin List</h5>
          <Link to="/add_admin" className="btn btn-primary btn-sm">
            <i className="fa fa-plus"></i> Add Admin
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
                <th>Status</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {admins.map((admin, index) => (
                <tr key={admin.id}>
                  <td>{index + 1}</td>
                  <td className="text-truncate" style={{ maxWidth: "120px" }}>
                    {admin.admin_name}
                  </td>
                  <td>{admin.admin_email}</td>
                  <td>{admin.admin_phone}</td>
                 
                  <td>
                    <span
                      className={`badge ${
                        admin.admin_status == 1 ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {admin.admin_status == 1 ? "Active" : "Inactive" }
                    </span>
                  </td>
                  <td>{admin.role == 1? "Admin" : "Customer"}</td>
                  <td>
                    <Link
                      to={`/add_admin/${admin.admin_id}`}
                      className="btn btn-warning btn-sm me-1"
                    >
                      <i className="fa fa-pencil"></i>
                    </Link>
                    <button
                      onClick={() => deleteAdmin(admin.id)}
                      className="btn btn-danger btn-sm"
                    >
                      <i className="fa fa-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
              {admins.length === 0 && (
                <tr>
                  <td colSpan="8" className="text-center text-muted">
                    No admins found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
