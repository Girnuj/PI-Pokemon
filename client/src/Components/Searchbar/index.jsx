import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { StyledSearchBar } from "./StyledSearchBar";

import { getPokemonByName } from '../Redux/Actions/index';


const SearchBar = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");

// const handleInputChange = (e) => {
//     e.preventDefault();
//     setName(e.target.value);
// }
function handleInputChange(e){
    e.preventDefault();
    setName(e.target.value);
}

// const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(getPokemonByName(name));
  
//     setName("");
// }
function handleSubmit(e){
    e.preventDefault();
    dispatch(getPokemonByName(name));
  
    setName("");
}

    return (
        <StyledSearchBar>
            <input 
                type="text"
                placeholder="Search..."
                onChange={(e) => {handleInputChange(e)}}
                value={name}
                 />
            <button
                type="submit"
                onClick={(e) => {handleSubmit(e)}}
                >
                Submit
            </button>

           


        </StyledSearchBar>
    )
}

export default SearchBar