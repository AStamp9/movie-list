import React, {useState} from "react";

const SearchBar = ({ titles }) => {
    const [searchItem, setSearchItem] = useState("");
    const [matchingTitles, setMatchingTitles] = useState(titles);
    
    const handleSearch = () => {
    const matchingTitles = titles.filter((title) => 
        title.title.toLowerCase().includes(searchItem.toLowerCase())
    );
        setMatchingTitles(matchingTitles);
    }

    return (
        <div>
            <input
                type="text"
                placeholder="Search"
                value={searchItem}
                onChange={(e) => setSearchItem(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {matchingTitles.map((movie) => (
                    <li key={movie.id}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchBar;