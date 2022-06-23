import {Card} from "react-bootstrap";

const TestData = ({name, date, downloaded, rank, pTest})=>{
    
    return(
        <div>
            <Card className="mb-3" style={{margin:"auto", width: "40%"}}>
                <Card.Body className = "row no-gutters">
                    <Card.Title> {name}</Card.Title>
                    <Card.Text ><b>Rank:</b> {rank} <b className="ms-5">Private Test:</b> {pTest.toString()}</Card.Text>
                </Card.Body>
            </Card>
            
        </div>
    )
}
export default TestData;