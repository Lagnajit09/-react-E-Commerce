import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <Link className="link" to={`/product/${props.item.id}`}>
      <div className="card">
        <div className="image">
          {props.item.isNew && <span>New Season</span>}
          <img src={props.item.img} alt="" className="mainImg" />
          <img src={props.item.img2} alt="" className="secondImg" />
        </div>
        <h2>{props.item.title}</h2>
        <div className="prices">
          <h3>${props.item.oldPrice}</h3>
          <h3>${props.item.price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
