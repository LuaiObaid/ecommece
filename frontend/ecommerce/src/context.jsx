// context.jsx
import React, { createContext, useContext, useState } from "react";

const IsLogedOrSignUpContext = createContext();

export function useIsLogedOrSignUp() {
  return useContext(IsLogedOrSignUpContext);
}

export default function IsLogedOrSignUpProvider({ children }) {
  const [isLoggedInOrSignedUp, setisLoggedInOrSignedUp] = useState(false);

  return (
    <IsLogedOrSignUpContext.Provider
      value={{ isLoggedInOrSignedUp, setisLoggedInOrSignedUp }}
    >
      {children}
    </IsLogedOrSignUpContext.Provider>
  );
}
