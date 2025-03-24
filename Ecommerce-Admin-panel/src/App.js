import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./componants/Footer";
import Header from "./componants/Header";
import Main from "./componants/Main";
import Sidebar from "./componants/Sidebar";
import Products from "./componants/Products";
import Add_product from "./componants/Add_product";
import Admins from "./componants/Admins";
import Add_admin from "./componants/Add_admin";
import Customers from "./componants/Customers";
import AddCustomer from "./componants/Add_customer";
import Category from "./componants/Category";
import Add_category from "./componants/Add_category";
import Orders from "./componants/Orders";
import OrderDetails from "./componants/Order_items";
import Cart from "./componants/Cart";
import Wishlist from "./componants/WIshlist";
import Cart_details from "./componants/Cart_details";
import Wishlist_details from "./componants/Wishlist_details";
import Reviews from "./componants/Reviews";
import Reviews_detail from "./componants/Reviews_detail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add_product/:id" element={<Add_product />} />
          <Route path="/add_product" element={<Add_product />} />
          <Route path="/admin" element={<Admins />} />
          <Route path="/add_admin" element={<Add_admin />} />
          <Route path="/add_admin/:id" element={<Add_admin />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/add_customer" element={<AddCustomer />} />
          <Route path="/add_customer/:id" element={<AddCustomer />} />
          <Route path="/category" element={<Category />} />
          <Route path="/add_category" element={<Add_category />} />
          <Route path="/add_category/:id" element={<Add_category />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/order_details/:id" element={<OrderDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart_details/:id" element={<Cart_details />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/wishlist_details/:id" element={<Wishlist_details />} />
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/reviews" element= {<Reviews />} />
          <Route path="/reviews_details/:id" element= {<Reviews_detail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* <Main /> */}
    </>
  );
}

export default App;
