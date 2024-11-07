export const TopRated = (props) =>{
    const{restroDataState, setRestroDataState,restroDataStateCopy, setRestroDataStateCopy} = props;
    return(
        <div className="trBtn border p-2 rounded-md bg-green-500 text-white">
            <button className="topRatedBtn" onClick={ ()=>{
                const newList = restroDataState.filter((data)=>data.info.avgRating > 4);
                console.log(newList);
                setRestroDataStateCopy(newList);
            }
            }>Top Rated</button>
        </div>
    )
}