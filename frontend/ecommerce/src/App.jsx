import React, { useState } from "react"; // Import React and useState
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-multi-carousel/lib/styles.css";
import MenClothesSection from "./pages/menClothes";
import WomenClothesSection from "./pages/womenClothes";
import Signup from "./pages/signUp";
import Login from "./pages/logIn";
import Home from "./pages/Home";
import NotFound from "./pages/notFound";
import RootLayout from "./components/rootlayout";


export const Context = React.createContext();
export const CartContext = React.createContext();
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="Men" element={<MenClothesSection />} />
      <Route path="Women" element={<WomenClothesSection />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  const [isLoggedInOrSignedUp, setisLoggedInOrSignedUp] = useState(false);
   const [cartItems, setCartItems] = useState([]);
  return (
    <div>
      <CartContext.Provider value={ [cartItems, setCartItems]}>
        <Context.Provider
          value={[isLoggedInOrSignedUp, setisLoggedInOrSignedUp]}
        >
          <RouterProvider router={router} />
        </Context.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
