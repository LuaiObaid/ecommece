import React, { useState, useContext } from "react";
import BlueTshirt from "../assets/blueT.jpg";
import Brwonshorts from "../assets/brwonshorts.jpg";
import Cap from "../assets/cap.jpg";
import Hoody from "../assets/hoody.jpg";
import Clothes from "../components/clothes";
import Jeans from "../assets/jeans.jpg";
import Jumper from "../assets/jumper.jpg";
import LightBlueShirt from "../assets/lightbT.jpg";
import OversizdT from "../assets/oversizedT.jpg";
import Shirt from "../assets/shirt.jpg";
import ImageSlider from "../components/ImageSlider";
import { Context, CartContext } from "../App";
const MenClothes = () => {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [isLoggedInOrSignedUp, setisLoggedInOrSignedUp] = useContext(Context);
  
  const menItems = [
    { name: "Fashion Jeans", price: "199,00kr.", image: BlueTshirt },
    { name: "Fashion Shorts", price: "159,00kr.", image: Brwonshorts },
    { name: "Fashion Cap", price: "99,00kr.", image: Cap },
    { name: "Fashion Hoody", price: "299,00kr.", image: Hoody },
  ];
  const menItems2 = [
    { name: "Fashion Jeans", price: "199,00kr.", image: Jeans },
    { name: "Fashion Shorts", price: "159,00kr.", image: Jumper },
    { name: "Fashion Cap", price: "99,00kr.", image: LightBlueShirt },
    { name: "Fashion Hoody", price: "299,00kr.", image: OversizdT },
    { name: "Fashion Hoody", price: "299,00kr.", image: Shirt },
  ];

const handleAddToCart = (item) => {
  const itemIndex = cartItems.findIndex((cartItem) => cartItem.name === item.name);
  const discount = isLoggedInOrSignedUp ? 0.8 : 1; // 20% discount if signed up or logged in

  if (itemIndex !== -1) {
    const updatedCartItems = [...cartItems];
    updatedCartItems[itemIndex].quantity += 1;
    updatedCartItems[itemIndex].totalPrice = calculateTotalPrice(updatedCartItems[itemIndex], discount);
    setCartItems(updatedCartItems);
  } else {
    setCartItems([...cartItems, { ...item, quantity: 1, totalPrice: (parseFloat(item.price) * discount).toFixed(2) }]);
  }
};

const calculateTotalPrice = (item, discount) => {
  return (parseFloat(item.price) * discount * item.quantity).toFixed(2);
};
 const totalCartPrice = cartItems
   .reduce((total, item) => total + parseFloat(item.totalPrice), 0)
   .toFixed(2);

  return (
    <div>
      <Clothes
        title="Men Clothes"
        items={menItems}
        handleAddToCart={handleAddToCart}
      />
      <div>
        <ImageSlider items={menItems2} handleAddToCart={handleAddToCart} />
      </div>
      <h2>Cart Items:</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index} className="li">
            <img
              src={item.image}
              alt={item.name}
              className="colImg"
              style={{ height: "100px", width: "100px" }}
            />
            Item: {item.name}. Price - {item.price} Quantity: {item.quantity}.
            Total Price: {item.totalPrice}
          </li>
        ))}
      </ul>
      <h1 className="header">Total Price: {totalCartPrice} kr</h1>
      <button className="PurchaseBtn">Confirm Purchase</button>
    </div>
  );
};

export default MenClothes;
