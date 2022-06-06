import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2021/desktop-2x._CB658860139_.jpg"
        alt=""
        className="home_image"
      />
    <div className="home_row">
         {/* Product id, title, price, rating , image */}
      <Product
        id={1223455}
        title={"The Lean Startup: How constant Innovation creates"}
        price = {11.96}
        rating = {4}
        image ={"https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"}
      />
      {/* Product*/}
         {/* Product id, title, price, rating , image */}
      <Product
        id={1223455}
        title={"The Lean Startup: How constant Innovation creates"}
        price = {11.96}
        rating = {4}
        image ={"https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"}
      />
      {/* Product*/}
    </div>
    <div className="home_row">
         {/* Product id, title, price, rating , image */}
      <Product
        id={1223455}
        title={"The Lean Startup: How constant Innovation creates"}
        price = {11.96}
        rating = {4}
        image ={"https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"}
      />
      {/* Product*/}
         {/* Product id, title, price, rating , image */}
      <Product
        id={1223455}
        title={"The Lean Startup: How constant Innovation creates"}
        price = {11.96}
        rating = {4}
        image ={"https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"}
      />
      {/* Product*/}
         {/* Product id, title, price, rating , image */}
      <Product
        id={1223455}
        title={"The Lean Startup: How constant Innovation creates"}
        price = {11.96}
        rating = {4}
        image ={"https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"}
      />
      {/* Product*/}
    </div>

    <div className="home_row">
         {/* Product id, title, price, rating , image */}
      <Product
        id={1223455}
        title={"The Lean Startup: How constant Innovation creates"}
        price = {11.96}
        rating = {4}
        image ={"https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"}
      />
      {/* Product*/}
    
    </div>
     
    </div>
  );
}

export default Home;
