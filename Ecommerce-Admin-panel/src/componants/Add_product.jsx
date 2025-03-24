import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddProduct() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    stock_quantity: "",
    category_id: "",
    product_status: 1,
    product_image_main: "",
  });

  const [categories, setCategories] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [subImages, setSubImages] = useState([]);

  const [subImagePreviews, setSubImagePreviews] = useState([]);

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:1009/product/${id}`).then((response) => {
        const productData = response.data[0];
        setProduct({
          name: productData.name || "",
          description: productData.description || "",
          price: productData.price || "",
          stock_quantity: productData.stock_quantity || "",
          category_id: productData.category_id || "",
          product_status: productData.product_status ?? 1,
          product_image_main: productData.product_image_main || "",
          product_images : JSON.parse(productData.product_images) || []
        });

        if (productData.product_image_main) {
          setImagePreview(
            `http://localhost:1009/images/${productData.product_image_main}`
          );
        }
        if (productData.product_images) {
          let subimg = JSON.parse( productData.product_images)         
          let images = subimg.map((url)=>{
                return  `http://localhost:1009/images/${url}`;
          })
          setSubImagePreviews(images);
        }
      });
    }

    axios.get("http://localhost:1009/category").then((response) => {
      setCategories(response.data);
    });
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      const previewURL = URL.createObjectURL(file);
      setImagePreview(previewURL);
    }
  };

  const handleSubImagesChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 3) {
      toast.error("You can upload a maximum of 3 images.");
      return;
    }
    setSubImages(files);
    setSubImagePreviews(files.map((file) => URL.createObjectURL(file)));
  };

  const validate = () => {
    const errors = {};
    if (!product.name) errors.name = "Product name is required";
    if (!product.description) errors.description = "Description is required";
    if (!product.price || product.price <= 0)
      errors.price = "Valid price is required";
    if (!product.stock_quantity || product.stock_quantity <= 0)
      errors.stock_quantity = "Valid stock quantity is required";
    if (!product.category_id) errors.category_id = "Please select a category";
    if (!imageFile && !product.product_image_main)
      errors.imageFile = "Product image is required";
    if (subImages.length > 3)
      errors.subImages = "You can upload up to 3 additional images only.";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const formData = new FormData();
      formData.append("name", product.name);
      formData.append("description", product.description);
      formData.append("price", product.price);
      formData.append("stock_quantity", product.stock_quantity);
      formData.append("category_id", product.category_id);
      formData.append("product_status", product.product_status);

      if (imageFile) {
        formData.append("product_image_main", imageFile);
      } else {
        formData.append("product_image_main", product.product_image_main);
      }

      // Append multiple images
      subImages.forEach((img, index) => {
        formData.append("product_images", img);
      });

      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }

      const request = id
        ? axios.put(`http://localhost:1009/product/${id}`, formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
        : axios.post("http://localhost:1009/product", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          });

      request
        .then((res) => {
          console.log("Then called ... ", res);
          toast.success(`Product ${id ? "updated" : "added"} successfully`, {
            position: "bottom-right",
            hideProgressBar: true,
          });
          setTimeout(() => navigate("/products"), 2000);
        })
        .catch((e) => {
          console.log("Catch called ... ", e);
          toast.error(`Can't ${id ? "update" : "add"} product`, {
            position: "bottom-right",
            hideProgressBar: true,
          });
        });
    }
  };

  return (
    <div className="main" id="main">
      <div className="card shadow-lg">
        <div className="card-body">
          <ToastContainer />
          <h3 className="card-title text-center mb-4">
            {id ? "Update Product" : "Add Product"}
          </h3>
          <form onSubmit={handleSubmit}>
            {/* Form Fields */}
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={product.name} onChange={handleChange} />
              <div style={{ color: "red" }}>{formErrors.name}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" name="description" value={product.description} onChange={handleChange}></textarea>
              <div style={{ color: "red" }}>{formErrors.description}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Price</label>
              <input type="number" className="form-control" name="price" value={product.price} onChange={handleChange} />
              <div style={{ color: "red" }}>{formErrors.price}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Stock Quantity</label>
              <input type="number" className="form-control" name="stock_quantity" value={product.stock_quantity} onChange={handleChange} />
              <div style={{ color: "red" }}>{formErrors.stock_quantity}</div>
            </div>

            <div className="mb-3">
              <label className="form-label">Category</label>
              <select className="form-select" name="category_id" value={product.category_id} onChange={handleChange}>
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.category_id} value={cat.category_id}>{cat.name}</option>
                ))}
              </select>
              <div style={{ color: "red" }}>{formErrors.category_id}</div>
            </div>
            <div className="mb-3">
              <label className="form-label d-block">Status</label>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="product_status"
                  checked={product.product_status == 1}
                  onChange={() =>
                    setProduct((prev) => ({ ...prev, product_status: 1 }))
                  }
                />
                <label className="form-check-label">Active</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  name="product_status"
                  checked={product.product_status == 0}
                  onChange={() =>
                    setProduct((prev) => ({ ...prev, product_status: 0 }))
                  }
                />
                <label className="form-check-label">Inactive</label>
              </div>
            </div>

            {/* Main Image */}
            <div className="mb-3">
              <label className="form-label">Main Product Image</label>
              <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} />
              <div style={{ color: "red" }}>{formErrors.imageFile}</div>
            </div>

            {imagePreview && <img src={imagePreview} alt="Preview" className="img-thumbnail mb-3" width="150" />}

            {/* Multiple Images */}
            <div className="mb-3">
              <label className="form-label">Additional Images (Max 3)</label>
              <input type="file" className="form-control" accept="image/*" multiple onChange={handleSubImagesChange} />
              <div style={{ color: "red" }}>{formErrors.subImages}</div>
              <div className="d-flex gap-2 mt-2">{subImagePreviews.map((src, i) => <img key={i} src={src} alt="sub" className="img-thumbnail" width="100" />)}</div>
            </div>

            <div className="text-center mt-3">
              <button type="submit" className="btn btn-primary px-4">{id ? "Update" : "Add"} Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
