import { Card } from "./Card"
import { restroData } from "../utils/restro_Object"
export const CardContainer = () =>(
    <div className="cardContainer">
        {restroData.map((data)=>{
            return <Card data = {data} key = {data.info.id}/>
        })}
    </div>
)