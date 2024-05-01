import React from "react";

export default function Cart(props) {
  return (
    <div>
      <div className="product-container">
        <img src={props.img} />
        <div>
          <p style={{ marginLeft: "5px" }}>
            <b>Title: </b>
            {props.title}
          </p>
          <p style={{ marginLeft: "5px" }}>
            <b>Price: ${props.price}</b>
          </p>
          <div
            style={{
              display: "flex",
              backgroundColor: "white",
              alignContent: "centre",
              width: "70px",
              padding: "0px",
              borderRadius: "8px",
              marginLeft: "10px",
            }}
          >
            <button
              style={{
                width: "30px",
                height: "30px",
                margin: "0px",
                marginRight: "3px",
              }}
              className="card-button-2"
              onClick={() => props.remove(props.id)}
            >
              -
            </button>
            <p
              style={{
                margin: "0px",
                marginTop: "5px",
                marginLeft: "5px",
                marginRight: "5px",
              }}
            >
              {props.quantity}
            </p>
            <button
              style={{ width: "30px", margin: "0px", height: "30px" }}
              className="card-button-2"
              onClick={() => props.add(props.id)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
