// const React = require("react");
// const ReactDOM = require("react-dom")
import React, {lazy,Suspense, useContext, useState} from "react"
import ReactDOM from "react-dom/client"
//header
import { Header } from "./Components/Header.js";
import { CardContainer } from "./Components/CardContainer.js";
import { Body } from "./Components/Body.js";
import { createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import { About } from "./Components/About.js";
import { Error } from "./Components/Error.js";
import { Restaurant } from "./Components/Resturant.js";
const Grocery = lazy(()=> import("./Components/Grocery.js"));
import { UserContext } from "./Components/UserContext.js";



const AppLayout = () =>{
    const {loggedInUser} = useContext(UserContext);
    const[userName, setUsername] = useState(loggedInUser);
    console.log(loggedInUser)
    return (
    <UserContext.Provider value={{loggedInUser:userName, setUsername}}>
        <div className="mx-4 my-0">̦
        <Header/>
        <Outlet/>
        </div>
        </UserContext.Provider>
    
)};


const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
            {
                path:"/",
                element: <Body/>
            },{
                path:"/about",
                element: <About/>
            },{
                path:"/resturants/:id",
                element: <Restaurant/>,
            },{
                path:"/grocery",
                element: <Suspense><Grocery/></Suspense>,
            }
        ],
        errorElement: <Error/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);