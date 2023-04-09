import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ProductCarousel = () => {
  return (
    <>
      <Carousel
        infiniteLoop={true}
        autoPlay={true}
        showStatus={true}
        showArrows={true}
        showThumbs={true}
        interval={5000}
      >
        <div>
          <h1>Hello</h1>
          <img src="https://i.dummyjson.com/data/products/2/1.jpg" alt=""/>
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <h1>Hello</h1>
          <img src="https://i.dummyjson.com/data/products/2/2.jpg" alt=""/>
          {/* <p className="legend">Legend 2</p> */}
        </div>
      </Carousel>
    </>
  );
};

export default ProductCarousel;
