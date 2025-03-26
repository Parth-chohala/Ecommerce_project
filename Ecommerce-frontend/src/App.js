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
import { User_id_provider } from "./Hooks/Userinfo";
import AuthDialog from "./Componants/Authpage";
import { useState } from "react";
function App() {
  const [loggedIn, setLoggedIn] = useState(User_id_provider());
  const [showAuthDialog, setShowAuthDialog] = useState(true); // Show authentication dialog

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/" element={<Home />} />
          <Route path="/product_listing" element={<Product_listing />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product_detail" element={<ProductDetail />} />
          <Route path="/product_detail/:id" element={<ProductDetail />} />

          <Route
            path="/cart"
            element={
              loggedIn ? (
                <Cart />
              ) : (
                <AuthDialog
                  open={showAuthDialog}
                  onClose={() => setShowAuthDialog(false)}
                />
              )
            }
          />
          <Route
            path="/checkout"
            element={
              loggedIn ? (
                <Checkout />
              ) : (
                <AuthDialog
                  open={showAuthDialog}
                  onClose={() => setShowAuthDialog(false)}
                />
              )
            }
          />
          <Route
            path="/user_profile"
            element={
              loggedIn ? (
                <User_profile />
              ) : (
                <AuthDialog
                  open={showAuthDialog}
                  onClose={() => setShowAuthDialog(false)}
                />
              )
            }
          />
          <Route
            path="/wishlist"
            element={
              loggedIn ? (
                <Wishlist />
              ) : (
                <AuthDialog
                  open={showAuthDialog}
                  onClose={() => setShowAuthDialog(false)}
                />
              )
            }
          />
          <Route path="/sighn_in" element={<AuthPage />} />

          {/* <Route path="/hot-offers" element={<HotOffers/>}/> */}

          <Route path="/da" element={<Dia />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
