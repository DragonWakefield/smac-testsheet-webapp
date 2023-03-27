import {Card, Button} from "react-bootstrap";
import FillPDF from "../components/pdfFiller";
import {useFirestore} from "../hooks/useFirestore";
import "../components/testData.css";
const TestData = (props)=>{
    const {deleteDocument} = useFirestore("sheets");
    function downloadPdf(){
        console.log(props.createdAt.toDate());
        FillPDF(props);
    }

    function deleteData(){
        var uInput = prompt('Type: YES to OBLITERATE Heretic');
        if (uInput.toUpperCase() === 'YES'){
          alert("Purging Document");
          deleteDocument(props.id);
        }
        else{
          alert("Cancelling Purge");
        }
        
        
    }

    function getPayType(){
        if (props.PayType === 0){
            return "Cash/ Debit";
        }
        else if (props.PayType === 1){
            return "E-transfer";
        }
        else if (props.PayType === 2){
            return "Account";
        }
    }
    return(
        <div>
            <Card className={props.Downloaded ? "text-white bg-secondary mb-3": "mb-3"}  style={{margin:"auto", width: "40%"}} >
                <Card.Body className= "row no-gutters" onClick={downloadPdf}>
                    <Card.Title> {props.Name}</Card.Title>
                    <Card.Text><b>Rank:</b> {props.Rank} <b className="ms-5">Private Test:</b> {props.PTest.toString()} <b className="ms-5">Payment:</b> {getPayType()}</Card.Text>
                    
                </Card.Body>
                <Button id="deleteButton" onClick={deleteData}>Delete Sheet</Button>
            </Card>
            
        </div>
    )
}
export default TestData;