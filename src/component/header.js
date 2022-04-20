import React from "react";
import "../css/header.css"

function Header(props){
    return ( 
        <div class = "main_header" >
            <h1 class="main_title">{props.value}</h1>
        </div>
    )
}

export default Header