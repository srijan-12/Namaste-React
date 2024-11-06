import { Link } from "react-router-dom";
import { restroCdns } from "../utils/constants";
export const Card = (props) =>{
    const {data} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, sla,id} = data.info;
    return(
        <Link to={`/resturants/${id}`}>
    <div className="card" onClick={()=>{
        console.log(`/resturants/${id}`);
    }}>
        <img src={restroCdns + cloudinaryImageId} alt="restro logo here" className="cardImage"/>
        <p>{name}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating}</p>
        <p>{sla.deliveryTime}</p>
        <p>{id}</p>
    </div>
    </Link>
)}