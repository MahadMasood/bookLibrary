import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import img from "../img/book-512.png";
export default function Header(props) {
  return (
    <div className="nav">
      <Link to={"/"}>
        <img src={img} className="logo" />
      </Link>
        <h2 className="header-title">My Library</h2>
      <div class="group">
        <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        <input class="input" type="search" placeholder="Search" />
      </div>
      <div>
        <div class="button-container">
          <Link to={"/login"}>
            <button class="icon-button">
              <svg
                class="icon"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2.5a5.5 5.5 0 0 1 3.096 10.047 9.005 9.005 0 0 1 5.9 8.181.75.75 0 1 1-1.499.044 7.5 7.5 0 0 0-14.993 0 .75.75 0 0 1-1.5-.045 9.005 9.005 0 0 1 5.9-8.18A5.5 5.5 0 0 1 12 2.5ZM8 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0Z"></path>
              </svg>
            </button>
          </Link>
          <Link to={"/cart"}>
            <button class="icon-button">
              <div
                style={{
                  position: "absolute",
                  backgroundColor: "white",
                  height: "10px",
                  width: "10px",
                  borderRadius: "10px",
                  fontSize: "8px",
                  fontWeight: "bolder",
                  marginLeft: "15px",
                  marginBottom: "10px",
                }}
              >
                {props.totalQuantity}
              </div>
              <svg
                class="icon"
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
