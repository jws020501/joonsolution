import {React,useState} from "react";
import Menubar from "./menubar";
import Header from "./header";
import ProductTable from "./product_table";
import '../css/maincss.css'
import axios from "axios";
import * as XLSX from "xlsx";

function Main(){
  
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
      loadproduct()
    })
    };
    reader.readAsBinaryString(file);
  };
  var data = {}

  let loadproduct = () =>{
    axios.get('http://localhost:5000/api/loadproduct').then(res=>{
      data = res.data.row
    })
  }
  loadproduct()
  
    
    return(
        <div>
            <Menubar/>
            <Header value="상품리스트"/>
         
        <div class="product_Container">
            <div class="product_controll">
            <label class="excel" for="file"><img src="https://cdn.icon-icons.com/icons2/1156/PNG/512/1486565571-microsoft-office-excel_81549.png" height="48" width="48" alt=""></img><p>엑셀 업로드</p></label>
            <input type="file" id="file" onChange={readExcel} multiple />
            </div>
            <table>
                <tr>
                <td>상품명</td> 
                <td>상품코드</td>
                <td>판매가</td>
                <td>카테고리대분류</td>
                <td>카테고리중분류</td>
                <td>카테고리소분류</td>
                <td>카테고리세분류</td>
                <td>카테고리대분류코드</td>
                <td>카테고리중분류코드</td>
                <td>카테고리소분류코드</td>
                <td>카테고리세분류코드</td>
                
                </tr>
              </table>
        </div>
        </div>
    )
}

    export default Main