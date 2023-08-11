import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Context } from "../App";
const Signup = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLasttName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [isLoggedInOrSignedUp, setisLoggedInOrSignedUp] = useContext(Context);
  const navigateTo = useNavigate();
  const handleSubmit = async (event) => {
      event.preventDefault();
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
       toast.error("Please fill in all fields", {
         toastId: "empty-fields", // Use toastId to prevent stacking
       });
       return;
    }
    if (password !== confirmPassword) {
         toast.error("password doesn't match", {
           toastId: "password", // Use toastId to prevent stacking
         });
       
      return;
    }
    console.log(firstName, lastName, email, password, confirmPassword);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/",
        {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        },
        config
      );
      console.log(data);
      toast.success("Sign in successful! Redirecting to Home page...", {
        toastId: "sign-in-success", // Use toastId to prevent stacking
      });
       setisLoggedInOrSignedUp(true);
       navigateTo("/Men");
    } catch (error) {
      console.log(error);
    }
  
  };

  return (
    <>
      <ToastContainer
        toastClassName="custom-toast" // Apply custom styles to the ToastContainer
        bodyClassName="custom-toast-body" // Apply custom styles to the toast body
        style={{ width: "400px", height: "10px" }} // Set width and height
      />
      <div className="signContainer">
        <h1 className="SignUpHeader">
          Sign Up Now And Get 20% Discount From Each Item
        </h1>
        <form className="formContainer" onSubmit={handleSubmit}>
          <label htmlFor="fname" className="lables">
            First name
          </label>
          <input
            type="text"
            id="fname"
            name="firstName"
            className="formInput"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="lname" className="lables">
            Last name
          </label>
          <input
            type="text"
            id="lname"
            name="lastName"
            className="formInput"
            onChange={(e) => setLasttName(e.target.value)}
          />
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
          <label htmlFor="confirmPassword" className="lables">
            Confirm password
          </label>
          <input
            type="password"
            id="confrimPassword"
            name="confirmPassword"
            className="formInput"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input type="submit" value="Submit" className="submit" />
          <h5>
            <Link to="/Login" className="h5">
              I have already an account click here to sign In
            </Link>
          </h5>
        </form>
      </div>
    </>
  );
};

export default Signup;
