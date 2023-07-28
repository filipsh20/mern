import React from "react";
import { useSelector } from "react-redux";

const HomePage = () => {
    const state = useSelector((state) => state);
    console.log(state);

    return (
        <div>
            <h1>home</h1>
        </div>
    )
}

export default HomePage;