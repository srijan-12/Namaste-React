import { useState } from "react"
import { ResturantMenuItems } from "./ResturantMenuItems"

export const ResturantMenuTitle = ({item,setIndex, idx,showMenuIdx, index}) =>{

    const handleClick = () =>{
        idx===index?setIndex(null):setIndex(idx);
    }

    return(
        <div className="border shadow-lg my-6 p-5 w-6/12 mx-auto rounded-lg">
            <div className="flex justify-between" onClick={handleClick}>
            <span className="font-bold">{item?.card?.card?.title}</span>
            <span>⬇️</span>
            </div>

            <div>
                {showMenuIdx && <ResturantMenuItems itemArray={item?.card?.card?.itemCards}/>}
            </div>
        </div>
    )
}