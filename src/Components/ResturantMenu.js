import { useState } from "react";
import { restroCdns } from "../utils/constants";
import { ResturantMenuDescription } from "./ResturantMenuDescription";
export const ResturantMenu = ({itemArray}) =>{
    return (
        <div>
            {itemArray.map((item)=>{
                return(
                    <div className="border-b border-gray-200 flex py-2" key={item?.card?.info?.id}>
                        <div className=" w-9/12">
                            <p className="font-bold px-2">{item.card.info.name} - ₹{item?.card?.info?.price ? item?.card?.info?.price/100 : item?.card?.info?.defaultPrice/100 }</p>

                            {item?.card?.info?.description ? <ResturantMenuDescription description = {item?.card?.info?.description}/> : ("")}        
                        </div>

                        <div className="w-3/12">
                            <img src={restroCdns + item.card.info.imageId} className="rounded-lg"/>   
                        </div>
                    </div>
                )
            })}
        </div>
    )
}