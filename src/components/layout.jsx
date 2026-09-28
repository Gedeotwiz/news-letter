
import { Outlet } from "react-router-dom"
import Header from "./header"
import { useState } from "react";
import { useEffect } from "react";

function Layout(){
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(()=>{
  document.title ="effect"
},[])
    return (
        <>
        <Header selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
        <Outlet context={{ selectedCategory }} />
        
        </>
    )
}

export default Layout



