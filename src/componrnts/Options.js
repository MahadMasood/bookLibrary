import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
export default function Options(props) {
  return (
    <div className="nav-2">
      <ul className="option-buttons">
        <il className="option-buttons-1">
          {" "}
          <Link to={"/"}>
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              Home
            </button>
          </Link>
        </il>
      </ul>
      <div class="paste-button">
        <button class="button">All Categories &nbsp; ▼</button>
        <div class="dropdown-content">
          <a onClick={() => props.action("Fiction")} id="top" href="#">
            Fiction
          </a>
          <a onClick={() => props.action("Romance")} id="middle" href="#">
            Romance
          </a>
          <a onClick={() => props.action("Dystopian")} id="bottom" href="#">
            Dystopian
          </a>
        </div>
      </div>
      <div class="paste-button">
        <button class="button">Authors &nbsp; ▼</button>
        <div class="dropdown-content">
          <a id="top" href="#">
            J.K. Rowling
          </a>
          <a id="middle" href="#">
            Stephen King
          </a>
          <a id="bottom" href="#">
            Agatha Christie
          </a>
        </div>
      </div>
    </div>
  );
}
