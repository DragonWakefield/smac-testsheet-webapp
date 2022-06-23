import {useCollection} from "../hooks/useCollection";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import TestData from "../components/testData";
import FillPDF from "../components/pdfFiller";

export default function Sheets() {

  
  const {documents} = useCollection('sheets');
  
  
  function downloadPdfs(){
    
    documents.forEach((x,i)=> FillPDF(x));
    console.log("hi");
  }


  return (
    <div className="text-center mt-5">
      <h2> Test Sheets</h2>
      <Button className="m-3" onClick={downloadPdfs}>Download New Test Sheets</Button>
      <div>

      {documents ? documents.map((doc, index) => (
        <TestData name={doc.Name} date={doc.createdAt.seconds} rank={doc.Rank} downloaded = {doc.Downloaded} pTest = {doc.PTest} key = {index}/>
      )) : <h2>No Sheets Yet</h2>}
      
      </div>
    </div>
  )
}
