import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  let url = "http://localhost:1009/images/";
  useEffect(() => {
    axios
      .get("http://localhost:1009/product/productwithdetails")
      .then((response) => {
        // console.log(response.data);
        setProducts(response.data);
      });
  }, []);

  function deleteProduct(id) {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios.delete(`http://localhost:1009/product/${id}`).then(() => {
        setProducts(products.filter((product) => product.product_id !== id));
      });
    }
  }

  return (
    <div className="main" id="main">
      <div className="container-fluid p-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="text-truncate">Product List</h5>
          <Link to="/add_product" className="btn btn-primary btn-sm">
            <i className="fa fa-plus"></i> Add
          </Link>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Name</th>
                {/* <th>Desc</th> */}
                <th>Price</th>
                <th>Qty</th>
                <th>Category</th>
                <th>Image</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.product_id}>
                  <td>{index + 1}</td>
                  <td className="text-truncate" style={{ maxWidth: "120px" }}>
                    {product.name}
                  </td>
                  {/* <td className="text-truncate" style={{ maxWidth: "120px" }}>
                    {product.description}
                  </td> */}
                  <td> ₹{product.price}</td>
                  <td>{product.stock_quantity}</td>
                  <td>{product.category_name}</td>
                  <td>
                    <img
                      src={url + product.product_image_main}
                      alt={product.name}
                      className="img-thumbnail"
                      width="100"
                      height="80"
                    />
                  </td>
                  <td>
                    {" "}
                    <span
                      className={`badge ${
                        product.product_status == 1 ? "bg-success" : "bg-danger"
                      }`}
                    >
                      {product.product_status == 1
                        ? "Active"
                        : "Inactive" || "N/A"}
                    </span>
                  </td>
                  <td>
                    <Link
                      to={`/add_product/${product.product_id}`}
                      className="btn btn-warning btn-sm me-1"
                    >
                      <i className="fa fa-pencil"></i>
                    </Link>
                    <button
                      onClick={() => deleteProduct(product.product_id)}
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
