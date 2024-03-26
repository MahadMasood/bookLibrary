import React, { useState } from "react";
import Header from "./Header";
import Options from "./Options";

export default function LoginPage(props) {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      <Header totalQuantity={props.totalQuantity} />
      <Options />
      <div className="centre">
        <div className="main">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className={isLogin ? "login active" : "login"}>
            <form className="form">
              <label htmlFor="chk" aria-hidden="true">
                Log in
              </label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="input"
                type="password"
                name="pswd"
                placeholder="Password"
                required
              />
              <button>Log in</button>
            </form>
          </div>

          <div className={!isLogin ? "register active" : "register"}>
            <form className="form">
              <label htmlFor="chk" aria-hidden="true">
                Register
              </label>
              <input
                className="input"
                type="text"
                name="txt"
                placeholder="Username"
                required
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="input"
                type="password"
                name="pswd"
                placeholder="Password"
                required
              />
              <button>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
