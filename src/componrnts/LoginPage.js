import React, { useState } from "react";
import Header from "./Header";
import Options from "./Options";
import UsersLogin from "../UsersLogin";
import axios from "axios";

export default function LoginPage(props) {
  const [isLogin, setIsLogin] = useState(true);
  const [inputUser, setInputUser] = useState({
    username: "",
    Email: "",
    password: "",
  });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  const handleChangeUser = (event) => {
    console.log(inputUser);
    setInputUser((prevData) => ({
      ...prevData,
      username: event.target.value,
    }));
  };

  const handleChangeEmail = (event) => {
    console.log(inputUser);
    setInputUser((prevData) => ({
      ...prevData,
      Email: event.target.value,
    }));
  };
  const handleChangePass = (event) => {
    console.log(inputUser);
    setInputUser((prevData) => ({
      ...prevData,
      password: event.target.value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send POST request to server
      const response = await axios.post("/api/register", inputUser);
      console.log(response.data); // Log server response
      // Optionally, handle success (e.g., show a success message)
    } catch (error) {
      console.error("Error:", error); // Log any errors
      // Optionally, handle error (e.g., show an error message)
    }
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
            <form className="form" onSubmit={handleSubmit}>
              <label htmlFor="chk" aria-hidden="true">
                Register
              </label>
              <input
                className="input"
                type="text"
                name="txt"
                placeholder="Username"
                required
                value={inputUser.username}
                onChange={handleChangeUser}
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email"
                required
                value={inputUser.Email}
                onChange={handleChangeEmail}
              />
              <input
                className="input"
                type="password"
                name="pswd"
                placeholder="Password"
                required
                value={inputUser.password}
                onChange={handleChangePass}
              />
              <button>Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
