import { useParams } from "react"
import CardShimmer from "./CardShimmer";
import { useParams } from "react-router-dom";
import { useRestroInfo } from "../utils/custom hooks/useRestroInfo";

export const Restaurant = () =>{

    const {id} = useParams();

    const {restroInfo,restroMenu} = useRestroInfo(id);

    return restroInfo === null?(<CardShimmer/>):(

        <div className="resturantMain">
            <h1>{restroInfo.name}</h1>
            <div className="restroBox">
                <p><b>{restroInfo.avgRatingString + " (" +restroInfo.totalRatingsString+ " ratings"+")" + " - " + restroInfo.costForTwo}</b></p>
                <p className="cuisines">{restroInfo.cuisines.join(",  ")}</p>
                <p><b>Outlet </b>{restroInfo.areaName}</p>
                <p><b>{restroInfo.sla.slaString}</b></p>
            </div>

            <div className="menuDiv">
                {restroMenu === null ? <p>Nothing to show</p> : restroMenu.map((item)=>{
                    return(
                        <div>
                            {item.card.card.title ? <h4>{item.card.card.title}
                                <div>
                                    <ul>
                                        {item?.card?.card?.itemCards?.map((itemCard)=>{
                                            return (
                                                <li>{itemCard.card.info?.name}</li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </h4> : null}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}