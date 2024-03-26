import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./componrnts/HomePage";
import LoginPage from "./componrnts/LoginPage";
import CartPage from "./componrnts/CartPage";
import BooksData from "./BooksData";
function ROUTE() {
  const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < BooksData.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };
  const [cartItems, setCartItems] = React.useState(getDefaultCart());
  function addToCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  }
  function removeFromCart(itemId) {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  }
 
  const [totalCount, setTotalCount] = React.useState(0);

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
          <Route path="" element={<HomePage addToCart={addToCart} 
          totalQuantity={totalCount}/>} />
          <Route path="login" element={<LoginPage
          totalQuantity={totalCount} />} />
          <Route
            path="cart"
            element={
              <CartPage
                cartItems={cartItems}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                totalQuantity={totalCount}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default ROUTE;