import { useState } from "react";
import { logo } from "../utils/constants";
import { Link } from "react-router-dom";
import { useActiveStatus } from "../utils/custom hooks/useActiveStatus"
export const Header = () =>{
    const[status, setStatus] = useState("Login");

    const Status = useActiveStatus();
    return(
    <div className="headerContainer flex justify-between border-bottom align-center shadow-lg mt-0 rounded-xl">
        <div className="logoContainer">
            <img src= {logo} alt="appLogo" className="logo w-20 rounded-xl"/>
        </div>
        <div className="navBar ml-40 flex align-center flex-1">
            <ul className="flex items-center justify-around w-full">
                <li>Active : {Status ? "🟢" : "🔴"}</li>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/">Contact Us</Link></li>
                <li><Link to="/">Cart</Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><button onClick={()=>{status==="Login"? setStatus("Logout") : setStatus("Login")}}>{status}</button></li>
            </ul>
        </div>
    </div>
)
}
