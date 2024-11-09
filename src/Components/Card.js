import { Link } from "react-router-dom";
import { restroCdns } from "../utils/constants";
import { useContext } from "react";
import { UserContext } from "./UserContext";

export const Card = (props) =>{
    const {data} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, sla,id} = data.info;
    const{loggedInUser} = useContext(UserContext)
    return(
        <Link to={`/resturants/${id}`}>
    <div className="card border w-72 mx-8 my-8 px-4 py-3 rounded-lg h-[450px]" onClick={()=>{
        console.log(`/resturants/${id}`);
    }}>
        <img src={restroCdns + cloudinaryImageId} alt="restro logo here" className="cardImage h-56 w-full rounded-md"/>
        <p className="py-1 pb-2 text-lg font-bold">{name}</p>
        <p className="py-1">{cuisines.join(", ")}</p>
        <p className="py-1">{avgRating}</p>
        <p className="py-1">{sla.deliveryTime}</p>
        <p className="py-1">{id}</p>
    </div>
    </Link>
)}


export const CardWithPromotion = (Card) =>{
    return ({data})=>{
        return(
            <div className="relative">
                <p className="absolute left-8 text-red-400">Promoted</p>
                <Card data={data}/>
            </div>
        )
       
    }
}

// export const CardWithPromotion = (CardComponent) => {
//     return ({ data }) => (
//         <div className="promoted-card">
//             <label className="text-red-500 font-bold">Promoted</label>
//             <CardComponent data={data} />
//         </div>
//     );
// };
