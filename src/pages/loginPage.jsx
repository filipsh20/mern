import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from "../store";

const LoginPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const handleLogin = (event) => {
    event.preventDefault();
    dispatch(setLogin({ user: "jaume" }));
  };

  return (
    <div>
      <h1>Log in</h1>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
};

export default LoginPage;
