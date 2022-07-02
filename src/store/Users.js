import { createContext, useState } from "react";
import React from "react";

export const UsersContext = createContext({
  loggedIn: "",
  setLoggedIn: () => {},
});

export function UsersContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState("");

  function setLoggedInHandler(log) {
    setLoggedIn(log);
  }

  const context = {
    loggedIn,
    setLoggedIn: setLoggedInHandler,
  };

  return (
    <UsersContext.Provider value={context}>
      {props.children}
    </UsersContext.Provider>
  );
}
export default UsersContext;
