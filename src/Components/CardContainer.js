import { Card } from "./Card";
export const CardContainer = (props) =>{
    const {restroDataState} = props;
    return(
    <div className="cardContainer">
        {restroDataState.map((data)=>{
            return <Card data = {data} key = {data.info.id}/>
        })}
    </div>
)}