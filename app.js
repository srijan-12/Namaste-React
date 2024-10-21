// const React = require("react");
// const ReactDOM = require("react-dom")
import React from "react"
import ReactDOM from "react-dom"
// const heading = React.createElement("h1", {id:"heading", xyz: "abc"}, "Hello from React");
const parent = React.createElement("div",{id:"parent"},
                React.createElement("div", {id:"childDiv"},
                    [React.createElement("h1",{id:"heading1"},"I am h1"),
                        React.createElement("h2",{id:"heading2"},"I am h2")
                    ]
                )
)
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading);
root.render(parent);