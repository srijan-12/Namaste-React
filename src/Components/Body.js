import { useEffect, useState } from "react"
import { CardContainer } from "./CardContainer"
import {TopRated} from "./TopRated"
import { swiggyAPI } from "../utils/constants"
import CardShimmer from "./CardShimmer"
import Search from "./Search"
import { useActiveStatus } from "../utils/custom hooks/useActiveStatus"
export const Body = ()=>{
    const[restroDataState, setRestroDataState] = useState([]);
    const[restroDataStateCopy, setRestroDataStateCopy] = useState([]);
    const[searchedText, setSearchedText] = useState("");

    const Status = useActiveStatus();

    const filterFunction = () =>{
        const newRestroList = restroDataState.filter((resList)=> resList.info.name.toLowerCase().includes(searchedText.toLowerCase()));
        console.log(newRestroList);
        setRestroDataStateCopy(newRestroList);
    }

    const fetchedData = async()=>{
        const data = await fetch(swiggyAPI);
        const result = await data.json();
        return result;
    }

    useEffect(()=>{
        const fetchData = async() =>{
            const data = await fetchedData();
            setRestroDataState(data.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
            setRestroDataStateCopy(data.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants);
        }
        fetchData();
    },[]);

    if(restroDataState.length === 0){
        return <CardShimmer/>
    }

    if(!Status){
        return <h1>No internet connection!</h1>
    }

    return restroDataState.length === 0 ? <CardShimmer/> :(
        <div className="body">
            <div className="bodyPart1 flex justify-center space-x-20 mt-6">
                <TopRated restroDataState={restroDataState} setRestroDataState={setRestroDataState} 
                restroDataStateCopy={restroDataStateCopy} setRestroDataStateCopy={setRestroDataStateCopy}/>
                <Search searchedText={searchedText} setSearchedText={setSearchedText} filterFunction={filterFunction}/>
            </div>
           <CardContainer restroDataState={restroDataState} restroDataStateCopy={restroDataStateCopy}/>
        </div>
    )
}
