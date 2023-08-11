import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { Context } from "../App";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedInOrSignedUp, setisLoggedInOrSignedUp] = useContext(Context)
  console.log(isLoggedInOrSignedUp)
  const navigateTo = useNavigate();
 

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email || !password) {
      toast.error("Please fill in all fields", {
        toastId: "empty-fields", // Use toastId to prevent stacking
      });
      return;
    }

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/login",
        { email, password },
        config
      );

      console.log(data);
      toast.success("Sign in successful! Redirecting to Home page...", {
        toastId: "sign-in-success", // Use toastId to prevent stacking
      });
       setisLoggedInOrSignedUp(true)
       navigateTo("/Men");
       
    } catch (error) {
      console.log(error);
      toast.error(
        "An error occurred. Please try again. Check password or email",
        {
          toastId: "sign-in-error", // Use toastId to prevent stacking
        }
      );
    }
  }

  return (
    <div className="signContainer">
      <ToastContainer
        toastClassName="custom-toast" // Apply custom styles to the ToastContainer
        bodyClassName="custom-toast-body" // Apply custom styles to the toast body
        style={{ width: "40px", height: "40px" }} // Set width and height
      />
      <h1 className="SignUpHeader">Sign In</h1>
      <form className="formContainer" onSubmit={handleSubmit}>
        <label htmlFor="email" className="lables">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="formInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="lables">
          password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="formInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Submit" className="submit" />
        <h5>
          <Link to="/Signup" className="h5">
            I do not have an account click here to sign Up
          </Link>
        </h5>
      </form>
    </div>
  );
};

export default Login;
