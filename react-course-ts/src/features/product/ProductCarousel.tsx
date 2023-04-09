import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
export interface ICarousalItemList {
  img: string;
}

const ProductCarousel = ({ imageList }: { imageList: ICarousalItemList[] }) => {
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
        {imageList.map((imgItem,index) => (
          <div key={index}>
            {/* <h1>Hello</h1> */}
            <img src={imgItem.img} alt="" />
            {/* <p className="legend">Legend 2</p> */}
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default ProductCarousel;
