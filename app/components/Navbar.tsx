import React from "react";

export default function Navbar() {
    return( 
        <nav className=" mt-5  bg-stone-950 rounded-md"> 
            <ul className="flex leading-10 place-content-evenly items-center">
                <h2 className="w-96 hover:text-amber-500 text-white">Navbar</h2>
           <li > <a className="hover:text-amber-500 text-white" href="#">Home</a></li>
           <li > <a className="hover:text-amber-500 text-white" href="#">Argent</a></li>
           <li > <a className="hover:text-amber-500 text-white" href="#">About </a></li>
           <li > <a className="hover:text-amber-500 text-white" href="#">Contact Us</a></li>
           </ul>
           </nav>
    )
}