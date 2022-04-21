import {React} from "react";
import Menubar from "./menubar";
import Header from "./header";
import '../css/maincss.css'
import axios from "axios";

function Main(){
    
    const read_excel=(e)=>{
        let files = e.target.files
        upload(files)
    }
    const upload = (files)=>{
        let form = new FormData();
        form.append('files',files)
        const config = {
            headers: {
              "content-type": "multipart/form-data"
            }
          };
        axios.post("localhost:5000/api/upload/excel",form,config)

    }
    
    return(
        <div>
            <Menubar/>
            <Header value="상품리스트"/>
         
        <div class="product_Container">
            <div class="product_controll">
            <input type="text" value=""/>
            <label class="excel" for="file"><img src="https://cdn.icon-icons.com/icons2/1156/PNG/512/1486565571-microsoft-office-excel_81549.png" height="48" width="48" alt=""></img><p>엑셀 업로드</p></label>
            <input type="file" id="file" onChange={(e)=>read_excel(e)} />
            </div>
        </div>
        </div>
    )
}

    export default Main