import {React,useState} from "react";
import Menubar from "./menubar";
import Header from "./header";
import '../css/maincss.css'
import axios from "axios";
import * as XLSX from "xlsx";
import qs from 'qs';

function Main(){
  
  const [data2, setdata2] = useState("");
  let readExcel = (e) =>{
    const [file] = e.target.files;
    const reader = new FileReader()

    reader.onload = (evt) =>{
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      axios.post("http://localhost:5000/api/upload/excel",{
      "data" : data
    }).then(res=>{
      alert("O")
    })
    };
    reader.readAsBinaryString(file);
  };

  
    
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