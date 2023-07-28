import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../actions/authAction";

const LoginPage = () => {
    const state = useSelector((state) => state);
    const dispatch = useDispatch()

    const handleLogin = (event) => {
        event.preventDefault();
        const userInfo = { name: "jaume", surname: "izq" };
        dispatch(loginSuccess(userInfo))
        window.location.href = '/home'
    }

    console.log(state);

    return (
        <div>
            <h1>Log in</h1>
            <button onClick={handleLogin}>Log in</button>
        </div>
    )
}

export default LoginPage;