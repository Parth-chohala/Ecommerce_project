import React, { useEffect, useState } from "react";
import RecommendedProducts from "./Recomended_products";
import Reviews from "./Reviews";
import { useParams } from "react-router-dom";
import axios from "axios";
import Review_tile from "./Review_tile";
import { Addtowishlist, Is_in_wishlist } from "../Hooks/useWishlist";
import { Add_to_cart, Is_in_cart } from "../Hooks/Usecart";
import { User_id_provider } from "../Hooks/Userinfo";
import AuthDialog from "./Authpage";

const ProductDetails = () => {
  const { id } = useParams();

  const [product_id, setproduct_id] = useState(id);
  const [category, setCategory] = useState();
  const [product, setProduct] = useState({});
  const [inWishlist, setInWishlist] = useState(false);
  const [Incart, setIncart] = useState(false);
   const [loggedIn, setLoggedIn] = useState(User_id_provider());
    const [showAuthDialog, setShowAuthDialog] = useState(false); // Show authentication dialog
  
  const [quantity, setquantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image
  const [reviewsAvg, setreviewsAvg] = useState({
    review_count: 0,
    avg_rating: 0,
    fivestar_count: 0,
    fourstar_count: 0,
    threestar_count: 0,
    twostar_count: 0,
    onestar_count: 0,
  });
  const imgurl = `http://localhost:1009/images/`;

  // Fetch product data
  useEffect(() => {
    setproduct_id(id);
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    axios.get(`http://localhost:1009/product/${id}`).then((res) => {
      // console.log(res.data);
      setCategory(res.data[0].category_id);
      setSelectedImage(res.data[0].product_image_main);
      setProduct(res.data[0]);
    });

    axios
      .get(`http://localhost:1009/reviews/allavg/${product_id}`)
      .then((response) => {
        setreviewsAvg(
          response.data.length > 0
            ? response.data[0]
            : {
                review_count: 0,
                avg_rating: 0,
                fivestar_count: 0,
                fourstar_count: 0,
                threestar_count: 0,
                twostar_count: 0,
                onestar_count: 0,
              }
        );
      });
    Is_in_cart(id).then((res) => {
      // console.log("is in cart responce",res)
      setIncart(res);
    });
    Is_in_wishlist(id).then((res) => {
      // console.log("Is in wishlist responce : ",res.data.flag)
      setInWishlist(res);
    });
  }, [id]);
  const addToWishlist = () => {
    if (!loggedIn) {
      setShowAuthDialog(true);
      return;
    }
    if (!inWishlist) {
      Addtowishlist(id).then(() => setInWishlist(true));
    }
  };
  // Parse product_images JSON safely
  const productImages = product.product_images
    ? JSON.parse(product.product_images)
    : [];
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating); // Full stars
    const hasHalfStar = rating % 1 >= 0.3 && rating % 1 <= 0.7; // Half star logic
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Empty stars

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fa fa-star text-warning"></i>);
    }

    // Half star
    if (hasHalfStar) {
      stars.push(
        <i key="half" className="fa fa-star-half-alt text-warning"></i>
      );
    }

    // Empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i key={`empty-${i}`} className="fa fa-star text-secondary"></i>
      );
    }
    // console.log("stars", stars);
    return stars;
  };
  const addtocart = () => {
    if (!loggedIn) {
      setShowAuthDialog(true);
      return;
    }
    Add_to_cart(id, quantity).then((res) => {
      setIncart(res);
    });
  };

  // setSelectedImage(imgurl + product.product_image_main);
  return (
    <div className="container my-5">
       {showAuthDialog && (
        <AuthDialog
          open={showAuthDialog}
          onClose={() => setShowAuthDialog(false)}
        />
      )}
      <div className="row">
        {/* Product Image Section */}
        <aside className="col-lg-6">
          <div
            className="border rounded-4 mb-3 d-flex justify-content-center align-items-center position-relative overflow-hidden"
            style={{
              width: "100%", // Full width of column
              height: "400px", // Fixed height
              backgroundColor: "#f9f9f9", // Optional light background
            }}
          >
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain", // Keep image aspect ratio
                transition: "transform 0.3s ease",
              }}
              className="rounded-4 fit hover-zoom"
              src={
                selectedImage
                  ? imgurl + selectedImage
                  : imgurl + product.product_image_main
              }
              alt="Product"
            />
          </div>

          {/* Small Thumbnails */}
          <div className="d-flex justify-content-center gap-2">
            {/* Main image thumbnail */}
            <img
              src={imgurl + product.product_image_main}
              alt="Main"
              onClick={() => setSelectedImage(null)}
              className={`rounded-3 border ${
                !selectedImage ? "border-primary" : ""
              }`}
              style={{
                width: "70px",
                height: "70px",
                objectFit: "cover",
                cursor: "pointer",
              }}
            />
            {/* Additional thumbnails */}
            {productImages.map((img, idx) => (
              <img
                key={idx}
                src={imgurl + img}
                alt={`Thumbnail ${idx + 1}`}
                onClick={() => setSelectedImage(img)}
                className={`rounded-3 border ${
                  selectedImage === img ? "border-primary" : ""
                }`}
                style={{
                  width: "70px",
                  height: "70px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </aside>

        {/* Product Details Section */}
        <main className="col-lg-6">
          <div className="ps-lg-3">
            <h4 className="title text-dark mb-3">{product.name}</h4>

            {/* Ratings & Availability */}
            <div className="d-flex align-items-center mb-3">
              <div className="me-3">
                <span className="text-warning">
                  {renderStars(reviewsAvg.avg_rating.toFixed(1))}
                  {/* <i className="fa fa-star-half-alt"></i> */}
                </span>
                <span className="text-muted ms-2">
                  ({reviewsAvg.review_count} reviews)
                </span>
              </div>
              {product.stock_quantity ? (
                <span className="badge bg-success ms-3">In Stock</span>
              ) : (
                <span className="badge bg-danger ms-3">Out of Stock</span>
              )}
            </div>

            {/* Price */}
            <div className="mb-4">
              <span className="h4 text-primary">₹{product.price}</span>
              <span className="text-muted ms-2">
                <del>₹{product.price + 476}</del>
              </span>
            </div>

            {/* Description */}
            <p className="mb-4">{product.description}</p>

            {/* Feature Icons */}
            <div className="mb-4">
              <p className="hover-animate">
                <i className="fa fa-truck me-2 text-muted truck-icon"></i> Free
                shipping worldwide
              </p>
              <p className="hover-animate">
                <i className="fa fa-sync-alt me-2 text-muted sync-icon"></i> 30
                days easy return
              </p>
              <p className="hover-animate">
                <i className="fa fa-shield-alt me-2 text-muted shield-icon"></i>{" "}
                1-year warranty
              </p>
            </div>

            {/* Quantity */}
            <div className="row mb-4">
              <div className="col-md-6 mb-3">
                <label className="mb-2">Quantity</label>
                <input
                  defaultValue={quantity}
                  type="number"
                  className="form-control"
                  min="1"
                  onChange={(e) => {
                    setquantity(e.target.value);
                  }}
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="d-flex align-items-center mb-4">
              <button
                onClick={addtocart}
                key={Incart}
                className={`btn btn-lg shadow-sm px-4 me-3 ${
                  Incart
                    ? "btn-light text-primary border border-primary"
                    : "btn-primary text-white border border-primary"
                }`}
                disabled={Incart}
              >
                <i className="fa fa-shopping-cart me-2"></i>
                {Incart ? "Added to Cart" : "Add to Cart"}
              </button>

              <button
                className={`btn btn-lg px-4 ${
                  inWishlist ? "btn-danger border-danger" : "btn-outline-danger"
                }`}
                onClick={addToWishlist}
                disabled={inWishlist}
              >
                <i className="fa fa-heart me-2"></i>
                {inWishlist ? "Added to Wishlist" : "Add to Wishlist"}
              </button>
            </div>

            {/* Social Sharing */}
            <div className="d-flex align-items-center">
              <span className="me-3">Share:</span>
              <a href="#" className="btn btn-light btn-icon me-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="btn btn-light btn-icon me-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="btn btn-light btn-icon">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </main>
      </div>

      {/* Recommended Products and Reviews */}
      <RecommendedProducts category_id={category} />

      {/* Review Tile - Force Remount on product change */}
      <Review_tile id={product_id} key={product_id + "-tile"} />

      {/* Reviews - Force Remount on product change */}
      <Reviews id={product_id} key={product_id + "-reviews"} />
    </div>
  );
};

export default ProductDetails;
