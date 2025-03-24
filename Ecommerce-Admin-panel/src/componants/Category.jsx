import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  let img = "http://localhost:1009/images/";
  // let [img , setImg] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1009/category")
      .then((response) => {
        setCategories(response.data);
        console.log(categories);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, []);

  function deleteCategory(id) {
    if (window.confirm("Are you sure you want to delete this category?")) {
      axios.delete(`http://localhost:1009/category/${id}`).then(() => {
        setCategories(
          categories.filter((category) => category.category_id !== id)
        );
      });
    }
  }

  return (
    <div className="main" id="main">
      <div className="container-fluid p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-truncate">Category List</h5>
          <Link to="/add_category" className="btn btn-primary btn-sm">
            <i className="fa fa-plus"></i> Add Category
          </Link>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                {/* <th>Description</th> */}
                <th>Image</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                //  img = `http://localhost:1009/images/${category.category_image}`,
                //  console.log(img),
                <tr key={category.category_id}>
                  <td>{index + 1}</td>
                  <td>{category.name}</td>
                  {/* <td className="text-truncate" style={{ maxWidth: "150px" }}>{category.description}</td> */}
                  <td>
                    <img
                      src={img + category.category_image}
                      alt={category.name}
                      className="img-thumbnail"
                      width="100"
                      height="50"
                    />
                  </td>
                  <td>
                    {" "}
                    <span
                      className={`badge ${
                        category.category_status == 1 ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {category.category_status == 1
                        ? "Active"
                        : "Inactive" || "N/A"}
                    </span>
                  </td>
                  <td>
                    <Link
                      to={`/add_category/${category.category_id}`}
                      className="btn btn-warning btn-sm me-1"
                    >
                      <i className="fa fa-pencil"></i>
                    </Link>
                    <button
                      onClick={() => deleteCategory(category.category_id)}
                      className="btn btn-danger btn-sm"
                    >
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
