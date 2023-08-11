import Suit from "../assets/suit.jpg";
import LogOut from "./logOut"
const Home = () => {
  return (
    <>
     <LogOut/>
      <h2 className="text1">the pure silky suit</h2>
      <div className="container">
        <div>
          <p className="text">
            Limit your ecommerce website to two main colors: a primary color and
            a secondary color. To choose your colors, you can use two great
            resources. First, head to Dribbble to search for a color palette.
            For example, if you type in “red,” you can see examples of websites
            that use red in their color palette and decide which options are
            most visually appealing.
          </p>
        </div>
        <div className="suit-container">
          <img src={Suit} alt="My Photo" className="suit" />
          <div>
          <button className="homebtn">buy it now</button>
          </div>
          <div className="priceDetails">
            <p>1500kr</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
