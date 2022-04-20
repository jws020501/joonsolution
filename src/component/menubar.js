import {React, useState} from "react";
import {Link } from 'react-router-dom';
import '../css/menubar.css'

function Menubar(){

    return(
        <div class="main"> 
            <h1>solution</h1>
            <div class="menu_list">
                <Link style={{ textDecoration: 'none' }} to="/product"><div><p>상품리스트</p></div></Link>
                <Link style={{ textDecoration: 'none' }} to="/naver/upload"><div ><p>상품 네이버 업로드</p></div></Link>
                <Link style={{ textDecoration: 'none' }} to="/cupang/upload"><div ><p>상품 쿠팡 업로드</p></div></Link>

            </div>
        </div>
    )
}

export default Menubar