import React, { useState } from "react";
import "./Product.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

function Product() {
  const [selectedImg, SetSelectedImg] = useState(0);
  const [quantity, SetQuantity] = useState(1);

  const images = [
    "https://images.pexels.com/photos/5384424/pexels-photo-5384424.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1261422/pexels-photo-1261422.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => SetSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => SetSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="quantity">
          <button
            onClick={() => SetQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => SetQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISHLIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: t-shirt, men, topwear</span>
        </div>
        <hr />
        {/* <div className="details">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div> */}
      </div>
    </div>
  );
}

export default Product;
