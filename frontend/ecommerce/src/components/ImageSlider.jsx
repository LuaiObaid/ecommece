import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const ImageSlider = ({ items, handleAddToCart }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      {items.map((item, index) => (
        <div className="col-md" key={index}>
          <div className="column-content">
            <img src={item.image} alt={item.title} className="colImg" />
            <span>{item.title}</span>
            <br />
            <span>{item.price}</span>
            <button className="addBtn" onClick={() => handleAddToCart(item)}>
              add to cart
            </button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;