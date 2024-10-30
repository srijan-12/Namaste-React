const Search = (props) =>{
    const{searchedText, setSearchedText,filterFunction} = props;
    
    return(
        <div className="search">
            <input className="searchBar" placeholder="Search" value={searchedText} onChange={(evt)=>{setSearchedText(evt.target.value)}}/>
            <button className="searchBtn" onClick={filterFunction}>Search</button>
        </div>
    )
}
export default Search;