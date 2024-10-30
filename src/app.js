// const React = require("react");
// const ReactDOM = require("react-dom")
import React from "react"
import ReactDOM from "react-dom/client"
import {restroData} from "./utils/restro_Object.js"
//header
import { Header } from "./Components/Header.js";
import { CardContainer } from "./Components/CardContainer.js";
import { Body } from "./Components/Body.js";







const AppLayout = () =>{
    return (
    //
    <div>
        <Header/>
        <Body/>
    </div>
)};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);