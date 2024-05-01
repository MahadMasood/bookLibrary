import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./componrnts/HomePage";
import LoginPage from "./componrnts/LoginPage";
import CartPage from "./componrnts/CartPage";
import BooksData from "./BooksData";
function ROUTE() {
  const [books, setBooks] = React.useState([]);
  const [totalCount, setTotalCount] = React.useState(0);
  const [downloadbook, setDownloadbook] = useState([]);
  React.useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/books");
        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, []);
  console.log(books);
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < 100; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [cartItems, setCartItems] = React.useState(getDefaultCart());
  function addToCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    const newId = books.findIndex((book) => book.id === itemId);
    setDownloadbook((prev) => [
      ...prev,
      { id: itemId, img: books[newId].image },
    ]);
  }
  function removeFromCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    for(let i=0;i<downloadbook.length;i++){
      if(downloadbook[i].id==itemId){
        setDownloadbook((prev)=>prev.splice(i,1))
      }
    }
  }
  console.log(downloadbook);

  const fetchBooks = async () => {
    try {
      const response = await fetch("/api/books"); // Assuming your backend API endpoint is /api/books
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };
  
  React.useEffect(() => {
    let count = 0;
    for (const itemId in cartItems) {
      count += cartItems[itemId];
    }
    setTotalCount(count);
  }, [cartItems]);
  console.log(cartItems);
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path=""
            element={
              <HomePage
                addToCart={addToCart}
                totalQuantity={totalCount}
                books={books}
              />
            }
          />
          <Route
            path="login"
            element={<LoginPage totalQuantity={totalCount} />}
          />
          <Route
            path="cart"
            element={
              <CartPage
                books={books}
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                totalQuantity={totalCount}
                download={downloadbook}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default ROUTE;
