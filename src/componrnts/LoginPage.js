import React, { useState, useEffect } from "react";
import Header from "./Header";
import Options from "./Options";
import axios from "axios";
import UserImg from "../img/user.png";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default function LoginPage(props) {
  const [isLogin, setIsLogin] = useState(true);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isAuthenticatedAlert, setIsAuthenticatedAlert] = useState(false);
  const [id, setId] = useState(11);
  const [inputUser, setInputUser] = useState({
    username: null,
    Email: null,
    password: null,
  });
  const [usersData, setUsersData] = useState([]);
  const [loginData, setLoginData] = useState({
    username: "",
    Email: "",
    password: "",
  });
  const [loggedUser, setLoggedUser] = useState({
    username: "",
    Email: "",
    password: "",
  });
  const [isAdmin, setIsAdmin] = useState(false);
  const [bookUpload, setBookUpload] = useState({
    id: id,
    title: null,
    author: null,
    genre: null,
    year: 0,
    image: null,
    stats: {
      rating: 0.0,
      reviewCount: 0,
    },
    price: 0,
    sale: 0,
  });
  const handleTitleChange = (event) => {
    setBookUpload({ ...bookUpload, title: event.target.value });
  };

  const handleAuthorChange = (event) => {
    setBookUpload({ ...bookUpload, author: event.target.value });
  };

  const handleGenreChange = (event) => {
    setBookUpload({ ...bookUpload, genre: event.target.value });
  };

  const handleYearChange = (event) => {
    setBookUpload({ ...bookUpload, year: event.target.value });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onloadend = () => {
      const imageDataUrl = reader.result;

      setBookUpload((prevState) => ({
        ...prevState,
        image: imageDataUrl,
      }));
    };

    // Read the contents of the file as a data URL
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleRatingChange = (event) => {
    setBookUpload({
      ...bookUpload,
      stats: { ...bookUpload.stats, rating: event.target.value },
    });
  };

  const handleReviewCountChange = (event) => {
    setBookUpload({
      ...bookUpload,
      stats: { ...bookUpload.stats, reviewCount: event.target.value },
    });
  };

  const handlePriceChange = (event) => {
    setBookUpload({ ...bookUpload, price: event.target.value });
  };

  const handleSaleChange = (event) => {
    setBookUpload({ ...bookUpload, sale: event.target.value });
    console.log(bookUpload);
  };
  const adminHandleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/addBook",
        bookUpload
      );
      console.log(response.data);
      alert("Book added successfully");
    } catch (error) {
      console.error("Error:", error);
      alert("Error adding book");
    }
    setId((prev)=>prev++);
  };
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };
  const handleChangeUser = (event) => {
    console.log(inputUser);
    isLogin
      ? setLoginData((prevData) => ({
          ...prevData,
          username: event.target.value,
        }))
      : setInputUser((prevData) => ({
          ...prevData,
          username: event.target.value,
        }));
  };

  const handleChangeEmail = (event) => {
    console.log(inputUser);
    isLogin
      ? setLoginData((prevData) => ({
          ...prevData,
          Email: event.target.value,
        }))
      : setInputUser((prevData) => ({
          ...prevData,
          Email: event.target.value,
        }));
  };
  const handleChangePass = (event) => {
    isLogin
      ? setLoginData((prevData) => ({
          ...prevData,
          password: event.target.value,
        }))
      : setInputUser((prevData) => ({
          ...prevData,
          password: event.target.value,
        }));
    console.log(inputUser);
    console.log(loginData);
  };
  function authenticate(event) {
    event.preventDefault();
    let count = 0;
    for (let i = 0; i < usersData.length; i++) {
      if (
        usersData[i].Email === loginData.Email &&
        usersData[i].password === loginData.password
      ) {
        setLoggedUser(usersData[i]);
        console.log(loggedUser);
        setIsUserLoggedIn(true);
        setIsAuthenticatedAlert(false);
        if (
          usersData[i].Email === "Admin@gmail.com" &&
          usersData[i].password === "Admin"
        ) {
          setIsAdmin(true);
        }
        break;
      } else {
        setIsAuthenticatedAlert(true);
      }
    }
    console.log(isAuthenticatedAlert);
    count++;
    setCounter(count);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/register",
        inputUser
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error);
    }
    alert("Register Successful");
  };

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await fetchData("http://localhost:5000/api/users");
        setUsersData(data);
      } catch (error) {}
    };

    fetchBooks();
  }, []);

  console.log(usersData);
  return (
    <div>
      <Header totalQuantity={props.totalQuantity} />
      <Options />
      {isAuthenticatedAlert ? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="error">Invalid Email or Password.</Alert>
        </Stack>
      ) : null}

      {isUserLoggedIn ? (
        <div>
          <div className="product-container">
            <img src={UserImg} style={{ width: "200px" }} />
            <div>
              {" "}
              <p style={{ marginLeft: "5px" }}>
                <b>Name: </b>
                {loggedUser.username}
              </p>
              <p style={{ marginLeft: "5px" }}>
                <b>Email: </b>
                {loggedUser.Email}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="centre">
          <div className="main">
            <input type="checkbox" id="chk" aria-hidden="true" />

            <div className={isLogin ? "login active" : "login"}>
              <form className="form" onSubmit={authenticate}>
                <label htmlFor="chk" aria-hidden="true" onClick={toggleForm}>
                  Log in
                </label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleChangeEmail}
                />
                <input
                  className="input"
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required
                  onChange={handleChangePass}
                />
                <button>Log in</button>
              </form>
            </div>

            <div className={!isLogin ? "register active" : "register"}>
              <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="chk" aria-hidden="true" onClick={toggleForm}>
                  Register
                </label>
                <input
                  className="input"
                  type="text"
                  name="txt"
                  placeholder="Username"
                  required
                  onChange={handleChangeUser}
                  value={inputUser.username}
                />
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  onChange={handleChangeEmail}
                  value={inputUser.Email}
                />
                <input
                  className="input"
                  type="password"
                  name="pswd"
                  placeholder="Password"
                  required
                  onChange={handleChangePass}
                  value={inputUser.password}
                />
                <button>Register</button>
              </form>
            </div>
          </div>
        </div>
      )}
      {isAdmin ? (
        <div style={{ marginLeft: "30px" }}>
          <h1 style={{ color: "#252280", marginBottom: "0px" }}>
            Add New Book
          </h1>
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            value={bookUpload.title || ""}
            onChange={handleTitleChange}
          />
          <TextField
            id="outlined-basic"
            label="Author"
            variant="outlined"
            value={bookUpload.author || ""}
            onChange={handleAuthorChange}
          />
          <TextField
            id="outlined-basic"
            label="Genre"
            variant="outlined"
            value={bookUpload.genre || ""}
            onChange={handleGenreChange}
          />
          <TextField
            id="outlined-basic"
            label="Year"
            variant="outlined"
            value={bookUpload.year || ""}
            onChange={handleYearChange}
          />
          <input type="file" accept="image/*" onChange={handleImageChange} />
          <TextField
            id="outlined-basic"
            label="Rating"
            variant="outlined"
            value={bookUpload.stats.rating || ""}
            onChange={handleRatingChange}
          />
          <TextField
            id="outlined-basic"
            label="Review Count"
            variant="outlined"
            value={bookUpload.stats.reviewCount || ""}
            onChange={handleReviewCountChange}
          />
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            value={bookUpload.price || ""}
            onChange={handlePriceChange}
          />
          <TextField
            id="outlined-basic"
            label="Sale"
            variant="outlined"
            value={bookUpload.sale || ""}
            onChange={handleSaleChange}
          />
          <button onClick={adminHandleSubmit}>Add</button>
        </div>
      ) : null}
    </div>
  );
}
