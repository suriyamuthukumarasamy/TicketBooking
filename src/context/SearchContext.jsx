import { createContext, useState } from "react";

const SearchContext=createContext("");

const SearchProvider=({children})=>{
    const[bar,setBar]=useState('');

    return(
        <SearchContext.Provider value={{bar,setBar}}>
            {children}
        </SearchContext.Provider>
    )
}
export{SearchContext,SearchProvider}