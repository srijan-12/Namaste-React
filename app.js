// const React = require("react");
// const ReactDOM = require("react-dom")
import React from "react"
import ReactDOM from "react-dom/client"
import {restroData} from "./restro_Object.js"
//header
const Header = () =>(
    <div className="headerContainer">
        <div className="logoContainer">
            <img src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=1024x1024&w=is&k=20&c=rizmPsIj6qOq-xUv3-uVbI53K0sWTn65awE321rKZm4=" alt="appLogo" className="logo"/>
        </div>
        <div className="navBar">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
);


const Card = (props) =>{
    const {data} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, sla,id} = data.info;
    return(
    <div className="card">
        <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="restro logo here" className="cardImage"/>
        <p>{name}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating}</p>
        <p>{sla.deliveryTime}</p>
    </div>
)}

const CardContainer = () =>(
    <div className="cardContainer">
        {restroData.map((data)=>{
            return <Card data = {data} key = {data.info.id}/>
        })}
    </div>
)



const AppLayout = () =>(
    <div>
        <Header/>
        <CardContainer/>
    </div>
);



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);