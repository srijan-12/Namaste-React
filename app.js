// const React = require("react");
// const ReactDOM = require("react-dom")
import React from "react"
import ReactDOM from "react-dom"


//react element
const elementHeading = (
    <h1>This is an React element rendered on page</h1>
)
// console.log(elementHeading);



//react element to react functional component
const Heading = () =>(
    <h1>This is an React element converted to functional component and rendered on page</h1>
)


//component comosition
const Title=() =>(
    <div>
        <Heading/>
        <h2>This is title component for component compositioning</h2>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(elementHeading);
// root.render(<Heading/>);
root.render(<Title/>);