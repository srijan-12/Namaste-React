import { User } from "./User"
import { UserClass } from "./UserClass"
export const About = () =>{
    return(
        <div className="aboutMain">
            <h1>About page here</h1>
            <h2>This is about page testing routes here</h2>
            <User/>
            <UserClass name={"Srijan Class prop"} location={"Dhanbad"}/>
        </div>
    )
}
