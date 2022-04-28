import {React} from "react";
import Menubar from "./menubar";
import Header from "./header";
import '../css/maincss.css'
import axios from "axios";
import { response } from "express";
// import request from "request";

function Main(){
  const XLSX = require('xlsx')
  function readExcel(e) {
        let input = e.target
        let reader = new FileReader();
        reader.onload = function () {
            let data = reader.result;
            let workBook = XLSX.read(data, { type: 'binary' });
            workBook.SheetNames.forEach(function (sheetName) {
                console.log('SheetName: ' + sheetName);
                let rows = XLSX.utils.sheet_to_json(workBook.Sheets[sheetName]);
                console.log(JSON.stringify(rows));
                
              const config = {
                headers: {
                  "content-type": "json"
                }
              };
              axios.post("http://localhost:5000/api/upload/excel",test,config)
                .then(res=>{
                    alert(res)
                })
        })
        };
        reader.readAsBinaryString(input.files[0]);
    }
    
    return(
        <div>
            <Menubar/>
            <Header value="상품리스트"/>
         
        <div class="product_Container">
            <div class="product_controll">
            <input type="text" value=""/>
            <label class="excel" for="file"><img src="https://cdn.icon-icons.com/icons2/1156/PNG/512/1486565571-microsoft-office-excel_81549.png" height="48" width="48" alt=""></img><p>엑셀 업로드</p></label>
            <input type="file" id="file" onChange={readExcel} multiple />
            </div>
        </div>
        </div>
    )
}

    export default Main