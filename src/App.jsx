import React from "react";
import './App.css'

import NumerosGerados from "./components/NumerosGerados";
import Header from "./components/Header";

export default () => {
    return (
        <div className="App">
            <Header/>
            <NumerosGerados/>
        </div>
    )
}