import { useParams, useState } from "react"
import CardShimmer from "./CardShimmer";
import { useParams } from "react-router-dom";
import { useRestroInfo } from "../utils/custom hooks/useRestroInfo";
import { ResturantMenuTitle } from "./ResturantMenuTitle";
export const Restaurant = () =>{

    const {id} = useParams();

    const[index,setIndex] = useState(null)

    const {restroInfo,restroMenu} = useRestroInfo(id);
    // const [showMenuIdx, setShowMenuIdx] = useState(false);
    return restroInfo === null?(<CardShimmer/>):(

        <div className="resturantMain w-full ">
            <h1 className="w-6/12 mx-auto text-2xl font-bold mt-4">{restroInfo.name}</h1>
            <div className="restroBox border rounded-2xl w-6/12 mx-auto p-4">
                <p><b>{restroInfo.avgRatingString + " (" +restroInfo.totalRatingsString+ " ratings"+")" + " - ₹" + restroInfo.costForTwo/100} for two</b></p>
                <p className="cuisines text-sm my-2 text-red-400">{restroInfo.cuisines.join(",  ")}</p>
                <p className="text-sm my-2"><b>Outlet </b>{restroInfo.areaName}</p>
                <p className="text-sm my-2"><b>{restroInfo.sla.slaString}</b></p>
            </div>

            <div className="menuDiv">
                {/* {console.log(restroMenu)} */}
                {restroMenu === null ? <p>Nothing to show</p> : restroMenu.map((item,idx)=>{
                    return(
                        <ResturantMenuTitle item={item} key={item.card.card.title} showMenuIdx={idx===index ? true : false} setIndex={setIndex} idx={idx} index={index}/>
                    )
                })}
            </div>
        </div>
    )
}