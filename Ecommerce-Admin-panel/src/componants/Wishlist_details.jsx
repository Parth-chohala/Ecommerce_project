import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function Wishlist_details() {
  const { id } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:1009/wishlist/details/${id}`)
      .then((response) => {
        // setCartItems(response.data);
        console.log("wishlist details", response);
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching wishlist details:", error);
      });
  }, [id]);

  return (
    <div className="main" id="main">
      <div className="container-fluid p-3">
        <h5>Wishlist Details</h5>
        <div className="table-responsive">
          <table className="table table-striped table-sm">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                {/* <th>Product ID</th> */}
                <th>Product Name</th>

                <th>Added At</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.wishlist_id}>
                  <td>{index + 1}</td>
                  {/* <td>{item.product_id}</td> */}
                  <td>{item.name}</td>

                  <td>{new Date(item.added_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Link to={"/wishlist"}>
          <button className="btn btn-secondary mt-3">
            Back to Wishlist Summary
          </button>
        </Link>
      </div>
    </div>
  );
}
