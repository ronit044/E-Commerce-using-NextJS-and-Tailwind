import { useState } from "react";
import LoginToContinue from "../LoginToContinue/LogintoContinue";

const Protected = ({ Component }: { Component: any }) => {
  const [loggedIn, setLogIn] = useState(false);

  const redirect = () => {
    window.location.href = "/login";
  };

  return loggedIn ? <Component /> : <LoginToContinue onRedirect={redirect} />;
};

export default Protected;
