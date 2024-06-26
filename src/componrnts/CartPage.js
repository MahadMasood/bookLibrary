import React from "react";
import Cart from "./Cart";
import Header from "./Header";
import Options from "./Options";
import TKAMImage from "../img/TKAM.jpg";
import img1984 from "../img/1984.png";
import pride from "../img/pride-and-prejudice.webp";
import gatsby from "../img/Gatsby.webp";
import catcher from "../img/catcher.jpg";
import hunger from "../img/hunger.jpg";
import divergent from "../img/Divergent.jpg";
import notebook from "../img/notebook.jpg";
import me from "../img/me.jpg";
import BooksData from "../BooksData";
import Card from "./Card";

const imageMap = {
  "./img/TKAM.jpg": TKAMImage,
  "./img/1984.png": img1984,
  "./img/pride-and-prejudice.webp": pride,
  "./img/Gatsby.webp": gatsby,
  "./img/catcher.jpg": catcher,
  "./img/hunger.jpg": hunger,
  "./img/Divergent.jpg": divergent,
  "./img/notebook.jpg": notebook,
  "./img/me.jpg": me,
};

export default function CartPage(props) {
  const imageUrls = props.download.map(item => `.${item.img}`);
 
  console.log(imageUrls)
  const handleDownload = () => {
    imageUrls.forEach((imageUrl, index) => {
      const link = document.createElement('a');
      link.href = imageUrl;
      link.download = `image${index + 1}.jpg`; // Set file names for downloaded images
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  };
  return (
    <div>
      <Header totalQuantity={props.totalQuantity} />
      <Options />
      {props.totalQuantity > 0 ? (
        props.books.map((product) => {
          if (props.cartItems[product.id] !== 0) {
            return (
              <Cart
                key={product.id}
                id={product.id}
                img={imageMap[product.image]||product.image}
                rating={product.stats.rating}
                reviewCount={product.stats.reviewCount}
                sale={product.sale}
                title={product.title}
                price={product.price}
                genre={product.genre}
                quantity={props.cartItems[product.id]}
                add={props.addToCart}
                remove={props.removeFromCart}
              />
            );
          }
          return null;
        })
      ) : (
        <div className="product-container">
          <h1>Empty Cart</h1>
        </div>
      )}
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:'5px',marginBottom:'100px'}}>
        <button onClick={handleDownload} className="card-button-2">Checkout</button>
      </div>
    </div>
  );
}
