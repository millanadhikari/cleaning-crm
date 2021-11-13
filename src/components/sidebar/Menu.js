import React from 'react'
import { Link } from "react-router-dom";


const Menu = ({title, icon, link}) => {
    
    // const handleClick = event => {
    //     // location.push(link)
    // }

    return (
        <Link 
            to={link}
            className="font-sans cursor-pointer text-[0.9rem] flex gap-4 items-center align-center text-gray-600"
            // onClick={handleClick}
            >
            
            
            <span className="text-gray-500">{icon}</span>
            <p 
            // className={`${isCurrentPath ? "bg-red-500" : null}`}
            >{title}</p>
            
            
        </Link>
    )
}

export default Menu
