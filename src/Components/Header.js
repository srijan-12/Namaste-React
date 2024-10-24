import { logo } from "../utils/constants";
export const Header = () =>(
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
            </ul>
        </div>
    </div>
);
