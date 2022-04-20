import React from "react";
import Menubar from "./menubar";
import Header from "./header";
import '../css/maincss.css'

function Main(){
    return(
        <div>
            <Menubar/>
            <Header value="상품리스트"/>
            
        <div class="productlist">
            
        </div>
        </div>
    )
}

    export default Main