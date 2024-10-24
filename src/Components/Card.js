import { restroCdns } from "../utils/constants";
export const Card = (props) =>{
    const {data} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, sla,id} = data.info;
    return(
    <div className="card">
        <img src={restroCdns + cloudinaryImageId} alt="restro logo here" className="cardImage"/>
        <p>{name}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating}</p>
        <p>{sla.deliveryTime}</p>
    </div>
)}