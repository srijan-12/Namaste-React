import { useState } from "react";
export const ResturantMenuDescription = ({description}) =>{
    const[show, setShow] = useState(false);
    const toggleShow = () => setShow(!show);
    return(
        <>
            {show ? (
                <span className="text-xs p-2">{description}</span>
            ) : (
                <span className="text-xs p-2">
                    {description.slice(0, 30)}...
                </span>
            )}
            <span onClick={toggleShow} className="text-blue-500 cursor-pointer text-xs">
                {show ? " show less" : " show more"}
            </span>
        </>
    )
}