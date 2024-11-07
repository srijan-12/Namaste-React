const Search = (props) =>{
    const{searchedText, setSearchedText,filterFunction} = props;
    
    return(
        <div className="search">
            <input className="searchBar border p-2 rounded-md mr-2" placeholder="Search" value={searchedText} onChange={(evt)=>{setSearchedText(evt.target.value)}}/>
            <button className="searchBtn border p-2 rounded-md bg-blue-500 text-white" onClick={filterFunction}>Search</button>
        </div>
    )
}
export default Search;