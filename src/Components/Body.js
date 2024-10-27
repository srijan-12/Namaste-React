import { useState } from "react"
import { restroData } from "../utils/restro_Object"
import { CardContainer } from "./CardContainer"
import {TopRated} from "./TopRated"
export const Body = ()=>{
    const[restroDataState, setRestroDataState] = useState(restroData);
    return(
        <div className="body">
            <TopRated restroDataState={restroDataState} setRestroDataState={setRestroDataState}/>
           <CardContainer restroDataState={restroDataState}/>
        </div>
    )
}