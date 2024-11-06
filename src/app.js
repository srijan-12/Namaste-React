// const React = require("react");
// const ReactDOM = require("react-dom")
import React, {lazy,Suspense} from "react"
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
const AppLayout = () =>{
    return (
    //
    <div>̦
        <Header/>
        <Outlet/>
    </div>
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