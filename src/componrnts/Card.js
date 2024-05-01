import React from "react";
import star from "../img/star.png";
import img from "../img/TKAM.jpg";
import "../index.css";
export default function Card(props) {
  let discount = (props.price * props.sales) / 100;
  return (
    <div className="cards">
      <div className="img-section">
        <div className="status-div">
          <p className="status">Save {props.sale}%</p>
        </div>
        <img className="img1" src={props.img} />
        <div className="add-stats">
          <img className="star" src={star} />
          <p className="class-stars">{props.rating}</p>
          <p className="review">({props.reviewCount}) USA</p>
        </div>
        <div>
          <p className="title-name">{props.title}</p>
          <p className="price">Price: {props.price}$ </p>
          <p className="dash">/ </p>
          <p className="per"> </p>
        </div>
      </div>
      <button className="card-button-1" onClick={() => props.add(props.id)}>
        Add to Cart
      </button>
     
    </div>
  );
}
