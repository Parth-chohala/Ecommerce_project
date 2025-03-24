import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category_image: "",
    category_status: 1,
  });

  const [imageFile, setImageFile] = useState(null); // File for upload
  const [imagePreview, setImagePreview] = useState(null); // URL for preview

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:1009/category/${id}`).then((response) => {
        const category = response.data[0];
        //("Category info", category);
        setFormData({
          name: category.name || "",
          description: category.description || "",
          category_image: category.category_image || "",
          category_status: category.category_status || "",
        });

        // Set image preview if category has an existing image
        if (category.category_image) {
          setImagePreview(
            `http://localhost:1009/images/${category.category_image}`
          );
        }
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setImageFile(file);

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) errors.name = "Category name is required";
    if (!formData.description) errors.description = "Description is required";
    if (formData.category_status != 0 && formData.category_status != 1)
      errors.category_status = "Select a status";
    if (!imageFile && !formData.category_image)
      errors.imageFile = "Image is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formdata = new FormData();
      formdata.append("name", formData.name);
      formdata.append("description", formData.description);
      formdata.append("category_status", formData.category_status);

      if (imageFile) {
        formdata.append("category_image", imageFile);
      } else {
        formdata.append("category_image", formData.category_image);
      }

      for (let [key, value] of formdata.entries()) {
        //(key, value);
      }
      const request = id
        ? axios.put(`http://localhost:1009/category/${id}`, formdata)
        : axios.post("http://localhost:1009/category", formdata);

      request
        .then(() => {
          if (id) {
            toast.success("Category updated successfully", {
              position: "bottom-right",
              hideProgressBar: true,
            });
            // //("category update response", response);
            // //("Responce",response)
            setTimeout(() => {
              navigate("/category");
            }, 2000);
          } else {
            toast.success("Category Insertes successfully", {
              position: "bottom-right",
              hideProgressBar: true,
            });
            // //("category update response", response);
            // //("Responce",response)
            setTimeout(() => {
              navigate("/category");
            }, 2000);
          }
        })
        .catch((e) => {
          if (id) {
            toast.error("Can't update Category", {
              position: "bottom-right",
              hideProgressBar: true,
            });
            // //("category update response", response);
            // //("Responce",response)
          } else {
            toast.error("Can't Insert Category ", {
              position: "bottom-right",
              hideProgressBar: true,
            });
            // //("category update response", response);
            // //("Responce",response)
          }
        });
    }
  };

  return (
    <div className="main" id="main">
      <div className="card shadow-lg">
        <div className="card-body">
          <h3 className="card-title text-center mb-4">
            {id ? "Update Category" : "Add Category"}
          </h3>
          <ToastContainer />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              <div style={{ color: "red" }}>{formErrors.name}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                name="description"
                id=""
                value={formData.description}
                onChange={handleChange}
              ></textarea>
              <div style={{ color: "red" }}>{formErrors.description}</div>
            </div>

            <div>
              <label className="form-label">Status</label>

              <div className="form-check ">
                <input
                  type="radio"
                  id="status-active"
                  name="customer_status"
                  checked={formData.category_status == 1}
                  className="form-check-input"
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      category_status: 1,
                    }))
                  }
                />
                <label className="form-check-label" htmlFor="status-active">
                  Active
                </label>
              </div>

              <div className="form-check mb-3 ">
                <input
                  type="radio"
                  id="status-inactive"
                  name="customer_status"
                  className="form-check-input "
                  checked={formData.category_status == 0}
                  onChange={() =>
                    setFormData((prev) => ({
                      ...prev,
                      category_status: 0,
                    }))
                  }
                />
                <label className="form-check-label" htmlFor="status-inactive">
                  Inactive
                </label>
              </div>
              <div style={{ color: "red" }}>{formErrors.category_status}</div>
            </div>

            {/* Image Upload Field */}
            <div className="mb-3">
              <label className="form-label">Category Image</label>
              <input
                type="file"
                className="form-control"
                accept="image/*"
                onChange={handleImageChange}
              />
              <div style={{ color: "red" }}>{formErrors.imageFile}</div>
            </div>

            {/* Image Preview */}
            {imagePreview && (
              <div className="mb-3 text-center">
                <p>Image Preview:</p>
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="img-thumbnail"
                  width="150"
                />
              </div>
            )}

            <div className="text-center mt-3">
              <button type="submit" className="btn btn-primary px-4">
                {id ? "Update" : "Add"} Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
