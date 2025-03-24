import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Componants/Home";
import Product_listing from "./Componants/Product_listing";
import Header from "./Componants/Header";
import Footer from "./Componants/Footer";
import Cart from "./Componants/Cart";
import Checkout from "./Componants/Checkout";
import User_profile from "./Componants/User_profile";
import ProductDetail from "./Componants/Product_detail";
import Wishlist from "./Componants/Wishlist";
import AuthPage from "./Componants/Authpage";
import Category from "./Componants/Categorys";
import Dia from "./Componants/dialogue";
import { HotOffers } from "./Componants/Hot-offers";
// import CategoryPage from "./componants/Category";

function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/product_listing" element={<Product_listing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/user_profile" element={<User_profile />} />
          <Route path="/product_detail" element={<ProductDetail />} />
          <Route path="/product_detail/:id" element={<ProductDetail />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/sighn_in" element={<AuthPage/>}/>
          <Route path="/category" element={<Category/>}/>
          {/* <Route path="/hot-offers" element={<HotOffers/>}/> */}
          
          <Route path="/da" element={<Dia/>}/>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
