import { useState } from "react"
import { ResturantMenu } from "./ResturantMenu"

export const ResturantTitle = ({item}) =>{
    const[showMenu, setShowMenu] = useState(false);
    const[show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);

    const handleExpand = () =>{
        setShowMenu(!showMenu)
    }

    return(
        <div className="border shadow-lg my-6 p-5 w-6/12 mx-auto rounded-lg">
            <div className="flex justify-between" onClick={handleExpand}>
            <span className="font-bold">{item?.card?.card?.title}</span>
            <span>⬇️</span>
            </div>

            {showMenu && <div>
                <ResturantMenu itemArray={item?.card?.card?.itemCards} show = {show} setShow = {setShow} toggleShow={toggleShow}/>
            </div>}
        </div>
    )
}