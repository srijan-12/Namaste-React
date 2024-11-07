import { Card, CardWithPromotion } from "./Card";

export const CardContainer = (props) =>{
    const NewEnhancedComponent = CardWithPromotion(Card);
    const {restroDataStateCopy} = props;
    return(
    <div className="cardContainer flex flex-wrap">
        {console.log(restroDataStateCopy)}  
        {restroDataStateCopy.map((data)=>{
            return data.info.promoted ? <NewEnhancedComponent  data = {data} key = {data.info.id}/> : <Card data = {data} key = {data.info.id}/>
        })}
    </div>
)}

