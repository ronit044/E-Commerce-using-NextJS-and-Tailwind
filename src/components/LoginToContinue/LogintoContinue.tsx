import { useEffect, useState } from "react";

const LoginToContinue = ({ onRedirect }:{onRedirect:any}) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Clean up the interval and trigger the redirect after 5 seconds (5000ms)
    setTimeout(() => {
      clearInterval(intervalId);
      onRedirect(); // Trigger the redirect function passed as a prop
    }, 3000);

    return () => clearInterval(intervalId);
  }, [onRedirect]);

  return (
    <h1>Login to Continue, Redirecting to Login Page in {count}</h1>
  );
};

export default LoginToContinue;
