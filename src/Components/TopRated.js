export const TopRated = (props) =>{
    const{restroDataState, setRestroDataState} = props;
    return(
        <div className="trBtn">
            <button className="topRatedBtn" onClick={ ()=>{
                console.log(restroDataState)
                const newList = restroDataState.filter((data)=>data.info.avgRating > 4.3);
                console.log(newList);
                setRestroDataState(newList);
            }
            }>Top Rated</button>
        </div>
    )
}