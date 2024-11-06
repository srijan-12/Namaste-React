import { useEffect, useState } from "react";

export const useActiveStatus = () =>{

    const[currStatus, setCurrstatus] = useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setCurrstatus(false)
        })

        window.addEventListener("online", ()=>{
            setCurrstatus(true)
        })
    },[])

    return currStatus;
}