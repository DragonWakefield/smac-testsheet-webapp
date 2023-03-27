import {useCollection} from "../hooks/useCollection";
import {Button} from "react-bootstrap";
import {useEffect, useState} from "react";
import Form from "react-bootstrap/Form";
import TestData from "../components/testData";
import FillPDF from "../components/pdfFiller";
import {useFirestore} from "../hooks/useFirestore";
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

  const [name, SetName] = useState(String);
  const [specificDoc, SetSpecificDoc] = useState();
  
  const SearchPdfs = (event) =>{
    event.preventDefault();

    if (name != null){
      docs.forEach((x,i) => {
        if (x.Name.toUpperCase() === name.toUpperCase())
        {
          SetSpecificDoc(x);
        }
      })
    }
  }

  function FullList(){
    SetSpecificDoc(null);
  }

  return (
    <div style={{"minHeight":"80vh"}} className="text-center mt-5">
      <h1> Test Sheets</h1>
      <h4>Sheet Count: {docs.length}</h4>
      <Button className="mr-3" onClick={downloadPdfs}>Download New Test Sheets</Button>
      <Button className = "m-3 btn-danger" onClick={deletePdfs}>Delete All Test Sheets</Button>
      <div style={{margin:"20px",display:"flex", justifyContent:"center", alignItems:"center"}}>

        <Form onSubmit={SearchPdfs} style={{display:"inline"}}>
          <Form.Label><h4>Locate:</h4> </Form.Label>
          <Form.Control type="text" value={name} onChange={(e) => SetName(e.target.value)} placeholder="Enter Name...or CTRL-F" style={{padding:"10px", margin:"1em"}}></Form.Control>
          <Button onClick={FullList}>Full List</Button>
        </Form>

      </div>
      
      <div>
        {specificDoc ? 
          <TestData {...specificDoc} />
        : 
        docs ? docs.map((doc, index) => (
          <TestData {...doc} key = {index}/>
        )) : <h2>No Sheets Yet</h2>}
      </div>
    </div>
  )
}
