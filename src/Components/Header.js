import { useState } from "react";
import { logo } from "../utils/constants";
export const Header = () =>{
    const[status, setStatus] = useState("Login");
    return(
    <div className="headerContainer">
        <div className="logoContainer">
            <img src= {logo} alt="appLogo" className="logo"/>
        </div>
        <div className="navBar">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button onClick={()=>{status==="Login"? setStatus("Logout") : setStatus("Login")}}>{status}</button>
            </ul>
        </div>
    </div>
)
}
