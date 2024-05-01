import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import Options from "./Options";
import BooksData from "../BooksData";
import Card from "./Card";
import TKAMImage from "../img/TKAM.jpg";
import img1984 from "../img/1984.png";
import pride from "../img/pride-and-prejudice.webp";
import gatsby from "../img/Gatsby.webp";
import catcher from "../img/catcher.jpg";
import hunger from "../img/hunger.jpg";
import divergent from "../img/Divergent.jpg";
import notebook from "../img/notebook.jpg";
import me from "../img/me.jpg";

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

export default function HomePage(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
 

 
 
  const cards = (books) => {
  return books.map((items) => (
    <div key={items.title}>
      <Card
        id={items.id}
        img={imageMap[items.image]||items.image}
        rating={items.stats.rating}
        reviewCount={items.stats.reviewCount}
        sale={items.sale}
        title={items.title}
        price={items.price}
        genre={items.genre}
        add={props.addToCart}
      />
    </div>
  ));
};
  const romanceBooks = props.books.filter((book) => book.genre === "Romance");
  const cardsRomance = romanceBooks.map((items) => (
    <div key={items.title}>
      <Card
        id={items.id}
        img={imageMap[items.image]||items.image}
        rating={items.stats.rating}
        reviewCount={items.stats.reviewCount}
        sale={items.sale}
        title={items.title}
        price={items.price}
        genre={items.genre}
        add={props.addToCart}
      />
    </div>
  ));
  const fictionBooks = props.books.filter((book) => book.genre === "Fiction");
  const cardsFiction = fictionBooks.map((items) => (
    <div key={items.title}>
      <Card
        id={items.id}
        img={imageMap[items.image]||items.image}
        rating={items.stats.rating}
        reviewCount={items.stats.reviewCount}
        sale={items.sale}
        title={items.title}
        price={items.price}
        genre={items.genre}
        add={props.addToCart}
      />
    </div>
  ));
  const dystopianBooks = props.books.filter((book) => book.genre === "Dystopian");
  const cardsDystopian = dystopianBooks.map((items) => (

    <div key={items.title}>
      <Card
        id={items.id}
        img={imageMap[items.image]||items.image}
        rating={items.stats.rating}
        reviewCount={items.stats.reviewCount}
        sale={items.sale}
        title={items.title}
        price={items.price}
        genre={items.genre}
        add={props.addToCart}
      />
    </div>
  ));
  function scrollToH1(type) {
    const h1Element = document.getElementById(type);
    if (h1Element) {
      h1Element.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div>
      <Header totalQuantity={props.totalQuantity} />
      <Options action={scrollToH1} />
      <h1 style={{ color: "#252280", marginLeft: "30px", marginBottom: "0px" }}>
        POPULAR BOOKS
      </h1>
      <div className="slider-container">
        <Slider {...settings}>{cards(props.books)}</Slider>
      </div>
      <h2
        id="Romance"
        style={{ color: "#252280", marginLeft: "30px", marginBottom: "0px" }}
      >
        ROMANCE BOOKS
      </h2>
      <div className="slider-container">
        <Slider {...settings2}>{cardsRomance}</Slider>
      </div>
      <h2
        id="Fiction"
        style={{ color: "#252280", marginLeft: "30px", marginBottom: "0px" }}
      >
        FICTION BOOKS
      </h2>
      <div className="slider-container">
        <Slider {...settings2}>{cardsFiction}</Slider>
      </div>
      <h2
        id="Dystopian"
        style={{ color: "#252280", marginLeft: "30px", marginBottom: "0px" }}
      >
        DYSTOPIAN BOOKS
      </h2>
      <div className="slider-container">
        <Slider {...settings2}>{cardsDystopian}</Slider>
      </div>
    </div>
  );
}
