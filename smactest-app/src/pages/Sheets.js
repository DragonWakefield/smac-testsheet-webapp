import {useCollection} from "../hooks/useCollection";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import TestData from "../components/testData";
import FillPDF from "../components/pdfFiller";
import {useFirestore} from "../hooks/useFirestore";

import './Sheets.css'

export default function Sheets() {
  const {deleteDocument} = useFirestore("sheets");
  const [docs, setDocs] = useState([]);
  const {documents} = useCollection('sheets');
  //console.log(documents);

  useEffect(() => {
    if (documents){
      setDocs(documents.sort(function compare(a,b){
        
        if (a.createdAt.seconds < b.createdAt.seconds){
          
          return 1
        } 
        if (a.createdAt.seconds > b.createdAt.seconds){
          return -1
        } 
        return 0;
      }))  
           
    }
  
  },[documents, docs]);

  
  function downloadPdfs(){
    
    docs.forEach((x,i)=> {if (!x.Downloaded){FillPDF(x)}});
    /*FillPDF(documents[0]);*/
  
  }

  function deletePdfs(){
    var uInput = prompt('Type: YES to Purge all pdfs');
    if (uInput.toUpperCase() === 'YES'){
      alert("Purging Database");
      docs.forEach((x,i) => {deleteDocument(x.id)});
    }
    else{
      alert("Cancelling Purge");
    }
    
  }

  return (
    <div className="sheets text-center mt-5">
      <h2> Test Sheets</h2>
      <Button className="mr-3" onClick={downloadPdfs}>Download New Test Sheets</Button>
      <Button className = "m-3 btn-danger" onClick={deletePdfs}>Delete All Test Sheets</Button>
      <div>
      
      {docs ? docs.map((doc, index) => (
        
        <TestData {...doc} key = {index}/>
      )) : <h2>No Sheets Yet</h2>}
      
      </div>
    </div>
  )
}
