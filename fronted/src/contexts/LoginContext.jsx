import React, { createContext, useState } from "react";

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
  const [userData, setUserData] = useState({});
  const getUserData = (user) => {
    setUserData(user);
  };
  return (
    <LoginContext.Provider value={{ userData, getUserData }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
