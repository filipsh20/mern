import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../store";
import Button from "../components/Button";

const HomePage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  console.log(user);

  const handleLogout = (event) => {
    event.preventDefault();
    dispatch(setLogout());
  };

  return (
    <div>
      <h1>home</h1>
      <button onClick={handleLogout}>Log out</button>
      <Button>Hola</Button>
    </div>
  );
};

export default HomePage;
