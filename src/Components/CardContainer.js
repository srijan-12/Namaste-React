import { Card } from "./Card";
export const CardContainer = (props) =>{
    const {restroDataState,restroDataStateCopy} = props;
    return(
    <div className="cardContainer">

        {/* {restroDataStateCopy.length > 0?restroDataStateCopy.map((data)=>{
            return <Card data = {data} key = {data.info.id}/>
        }):restroDataState.map((data)=>{
            return <Card data = {data} key = {data.info.id}/>
        }) } */}
        {/* {restroDataState.map((data)=>{
            return <Card data = {data} key = {data.info.id}/>
        })} */}

        {restroDataStateCopy.map((data)=>{
            return <Card data = {data} key = {data.info.id} allData = {restroDataStateCopy}/>
        })}
    </div>
)}