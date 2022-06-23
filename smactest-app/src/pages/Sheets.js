import {useCollection} from "../hooks/useCollection";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import TestData from "../components/testData";
import FillPDF from "../components/pdfFiller";

export default function Sheets() {

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
      console.log(docs);      
    }
  
  },[documents, docs]);

  
  function downloadPdfs(){
    
    docs.forEach((x,i)=> {if (!x.Downloaded){FillPDF(x)}});
    /*FillPDF(documents[0]);*/
    console.log(docs[0]);
  }


  return (
    <div className="text-center mt-5">
      <h2> Test Sheets</h2>
      <Button className="m-3" onClick={downloadPdfs}>Download New Test Sheets</Button>
      <div>
      
      {docs ? docs.map((doc, index) => (
        
        <TestData {...doc} key = {index}/>
      )) : <h2>No Sheets Yet</h2>}
      
      </div>
    </div>
  )
}
