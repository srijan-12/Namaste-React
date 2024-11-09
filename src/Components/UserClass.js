import React from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";
export class UserClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count : 0,
            count1 : 1
        }
    }
    
    render(){
        const {name,location} = this.props;
        return(
            <div>
                <h1>{name}</h1>
                <h2>{location}</h2>
                <div>
                        <UserContext.Consumer>
                            {({loggedInUser})=><h2>{loggedInUser}</h2>}
                        </UserContext.Consumer>
                </div>
                <h4>This is class based component</h4>
                <h3>count : {this.state.count}</h3>
                <h3>count1 : {this.state.count1}</h3>
                <button onClick={()=>{
                    this.setState({
                        count :  this.state.count + 1,
                        count1 : this.state.count1 + 1
                    })
                }}>Increase Count</button>
            </div>
        )
    }
}