import { useState } from "react";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import { useActiveStatus } from "../utils/custom hooks/useActiveStatus"
export const Header = () =>{
    const[status, setStatus] = useState("Login");

    const Status = useActiveStatus();
    return(
    <div className="headerContainer">
        <div className="logoContainer">
            <img src= {logo} alt="appLogo" className="logo"/>
        </div>
        <div className="navBar">
            <ul>
                <li>Active : {Status ? "🟢" : "🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/">Contact Us</Link></li>
                <li><Link to="/">Cart</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <button onClick={()=>{status==="Login"? setStatus("Logout") : setStatus("Login")}}>{status}</button>
            </ul>
        </div>
    </div>
)
}
