import WomenSuit from "../assets/womenSuit.jpg";
import pants from "../assets/pants.jpg";
import coloredJumper from "../assets/coloredJumper.jpg";
import Wshirt from "../assets/wshirt.jpg";
import dress from "../assets/dress.jpg";
import oilyDress from "../assets/oilyDress.jpg";
import blackDress from "../assets/blackDress.jpg";
import brownDress from "../assets/brwonDress.jpg";
import flowerDress from "../assets/flowerDress.jpg";
import Clothes from "../components/clothes";
import ImageSlider from "../components/ImageSlider";
import React, { useState, useContext } from "react";
import { Context, CartContext } from "../App";

const WomenClothes = () => {
 const [cartItems, setCartItems] = useContext(CartContext)
 const [isLoggedInOrSignedUp, setisLoggedInOrSignedUp] = useContext(Context);
 
  const womenItems = [
    { name: "Women Suit", price: "599,00kr.", image: WomenSuit },
    { name: "Fashion pants", price: "99,00kr.", image: pants },
    {
      name: "colored Jumper with sun glasses",
      price: "450,00kr.",
      image: coloredJumper,
    },
    { name: "Women shirt", price: "199,00kr.", image: Wshirt },
  ];
  const womenItems2 = [
    { name: "Pink Dress", price: "560,00kr.", image: dress },
    { name: "Oily Dress", price: "560,00kr.", image: oilyDress },
    { name: "Black dress", price: "699,00kr.", image: blackDress },
    { name: "Fashioned Dress", price: "499,00kr.", image: brownDress },
    { name: "Flowered Dress", price: "499,00kr.", image: flowerDress },
  ];

 const handleAddToCart = (item) => {
   const itemIndex = cartItems.findIndex(
     (cartItem) => cartItem.name === item.name
   );
     const discount = isLoggedInOrSignedUp ? 0.8 : 1;

   if (itemIndex !== -1) {
     const updatedCartItems = [...cartItems];
     updatedCartItems[itemIndex].quantity += 1;
     updatedCartItems[itemIndex].totalPrice = calculateTotalPrice(
       updatedCartItems[itemIndex],
       discount
     );
     setCartItems(updatedCartItems);
   } else {
     setCartItems([
       ...cartItems,
       {
         ...item,
         quantity: 1,
         totalPrice: (parseFloat(item.price) * discount).toFixed(2),
       },
     ]);
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
        title="Women Clothes"
        items={womenItems}
        handleAddToCart={handleAddToCart}
      />
      <ImageSlider items={womenItems2} handleAddToCart={handleAddToCart} />
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

export default WomenClothes;
