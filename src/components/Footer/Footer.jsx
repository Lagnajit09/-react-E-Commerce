import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eros
            ligula, consectetur sed ipsum sed, rutrum vestibulum felis. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus
          </span>
        </div>
        <div className="item">
          <h1>Conatct</h1>
          <span>+91-7745817881</span>
          <span>store.fusion@gmail.com</span>
          <span>124 Main street, Mumbai, 753009</span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">Fusionstore</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved.
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
