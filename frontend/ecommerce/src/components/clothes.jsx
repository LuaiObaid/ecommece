import React from "react";


const Clothes = ({ title, items, handleAddToCart }) => {
  return (
    <div>
      <h1 className="header">{title}</h1>
      <div className="container-fluid px-3">
        <div className="row gx-3">
          {items.map((item, index) => (
            <div className="col-md" key={index}>
              <div className="column-content">
                <img src={item.image} alt={item.name} className="colImg" />
                <span>{item.name}</span>
                <br />
                <span>{item.price}</span>
                <button
                  className="addBtn"
                  onClick={() => handleAddToCart(item)}
                >
                  add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <h1 className="moreOption">more options</h1>
    </div>
  );
};

export default Clothes;
