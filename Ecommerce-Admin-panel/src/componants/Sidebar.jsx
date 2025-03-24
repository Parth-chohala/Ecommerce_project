import React from "react";
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
    <div>
      <aside id="sidebar" className="sidebar">
        <ul className="sidebar-nav" id="sidebar-nav">
          <li className="nav-item">
            <Link to="/">
            <a className="nav-link " href="">
              <i className="bi bi-grid" />
              <span>Dashboard</span>
            </a>
            </Link>
          </li>
          <li className="nav-item nav-link ">
            <i className="bi bi-grid" />
            <Link to="/products">
              <span>Products</span>
            </Link>
          </li>
          <li className="nav-item nav-link ">
            <i className="bi bi-grid" />
            <Link to="/admin">
              <span>Admins</span>
            </Link>
          </li>
          <li className="nav-item nav-link ">
            <i className="bi bi-grid" />
            <Link to="/customers">
              <span>Customers</span>
            </Link>
          </li>
          <li className="nav-item nav-link ">
            <i className="bi bi-grid" />
            <Link to="/category">
              <span>Category</span>
            </Link>
          </li>
         
          <li className="nav-item nav-link ">
            <i className="bi bi-grid" />
            <Link to="/orders">
              <span>Orders</span>
            </Link>
          </li>
          <li className="nav-item nav-link ">
            <i className="bi bi-grid" />
            <Link to="/cart">
              <span>cart</span>
            </Link>
          </li>
          <li className="nav-item nav-link ">
            <i className="bi bi-grid" />
            <Link to="/wishlist">
              <span>Wishlist</span>
            </Link>
          </li>
          <li className="nav-item nav-link ">
            <i className="bi bi-grid" />
            <Link to="/reviews">
              <span> Reviews </span>
            </Link>
          </li>
          {/* <li className="nav-item">
          <i className="bi bi-grid" />
         <Link to="/products">
          
          <span>Products</span>
          </Link>
      </li> */}
          {/* End Dashboard Nav */}
          {/* End Blank Page Nav */}
        </ul>
      </aside>
      {/* End Sidebar*/}
    </div>
  );
}
