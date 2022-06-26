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
        deleteDocument(props.id);
    }
    return(
        <div>
            <Card className="mb-3" style={{margin:"auto", width: "40%"}} onClick={downloadPdf}>
                <Card.Body className={props.Downloaded ? "dl-true row no-gutters": "dl-false row no-gutters"}>
                    <Card.Title> {props.Name}</Card.Title>
                    <Card.Text><b>Rank:</b> {props.Rank} <b className="ms-5">Private Test:</b> {props.PTest.toString()}</Card.Text>
                    <Button id="deleteButton" onClick={deleteData}>Delete Sheet</Button>
                </Card.Body>
            </Card>
            
        </div>
    )
}
export default TestData;