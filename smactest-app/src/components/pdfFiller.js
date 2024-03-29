import {PDFDocument} from 'pdf-lib';
import download from 'downloadjs';
import {useFirestore} from "../hooks/useFirestore";
const FillPDF = async (props) =>{
    
    //const fs = require('fs/promises');
    const {updateDocument} = useFirestore("sheets");
    /*
        Props List:
        props.Name = Full Name (Text)
        props.Date = Test Date (Text)
        props.TestTime  = Test Time (Text)
        props.TestDue = Test Due (Checkbox)
        props.Applicant1 = Applicant1 (Bool/Checkbox)
        props.Applicant2 = Applicant2 (Bool/Checkbox)
        props.Signature = Signature (Text)
        props.Q1 = (1-4) (Int/Checkbox)
        props.Q2 = (1-4) (Int/Checkbox)
        .
        .
        props.Q10 = (1-4) (Checkbox)

        props.PAY <- How people with pay = CASH, CREDIT/DEBIT, CHARGE TO ACCOUNT
    */
    let testsheet = null;
    
    if (props.Rank === "White"){
        testsheet = await fetch("./testpdfs/yellowApplication.pdf").then(res => res.arrayBuffer());
    }
    else if (props.Rank === "Yellow"){
        testsheet = await fetch("./testpdfs/orangeApplication.pdf").then(res => res.arrayBuffer());
    }
    else if (props.Rank === "Orange"){
        testsheet = await fetch("./testpdfs/purpleApplication.pdf").then(res => res.arrayBuffer());
    }    
    else if (props.Rank === "Purple"){
        testsheet = await fetch("./testpdfs/blueApplication.pdf").then(res => res.arrayBuffer());
        //testsheet = await fs.readfile("./testpdfs/blueApplication.pdf");
    }
    else if (props.Rank === "Blue"){
        testsheet = await fetch("./testpdfs/blueStApplication.pdf").then(res => res.arrayBuffer());
    }
    else if (props.Rank === "BlueSt"){
        testsheet = await fetch("./testpdfs/greenApplication.pdf").then(res => res.arrayBuffer());
    }
    else if (props.Rank === "Green"){
        testsheet = await fetch("./testpdfs/greenStApplication.pdf").then(res => res.arrayBuffer());
    }
    else if (props.Rank === "GreenSt"){
        testsheet = await fetch("./testpdfs/greenSt2Application.pdf").then(res => res.arrayBuffer());
    }
    else if (props.Rank === "GreenSt2"){
        testsheet = await fetch("./testpdfs/brownApplication.pdf").then(res => res.arrayBuffer());
    }
    else if (props.Rank === "Brown"){
        testsheet = await fetch("./testpdfs/brownStApplication.pdf").then(res => res.arrayBuffer());
    }
    else if (props.Rank === "BrownSt"){
        testsheet = await fetch("./testpdfs/brownSt2Application.pdf").then(res => res.arrayBuffer());
    }
    if (testsheet != null){
        const testDoc = await PDFDocument.load(testsheet);
        
        const testform = testDoc.getForm();
    
        // Sets User's Name to PDF
        testform.getTextField('Name').setText(props.Name);
        // Sets the Test Payment Check Box
        if (props.PayType === 0){
            testform.getCheckBox('Cash').check();
        }
        else if (props.PayType === 1){
            testform.getCheckBox('EMT').check();
        }
        else if (props.PayType === 2){
            testform.getCheckBox('Account').check();
        }
        // Sets Private Test box
        if (props.PTest){
            testform.getCheckBox("PrivateTest").check();
        }
        

        // // Sets Applicant Agreement 1
        // if (props.Applicant1){
        //     testform.getCheckBox('Applicant1').check();
        // }
        // // Sets Applicant Agreement 2
        // if (props.Applicant2){
        //     testform.getCheckBox('Applicant2').check();
        // }
        // Sets User Signature
        //testform.getTextField('Signature').setText(props.Signature);
    
        /* Questions */
        // Q1
        var question = "1.";
        question = question.concat(props.Q1);
        testform.getCheckBox(question).check();
        // Q2
        question = "2.";
        question = question.concat(props.Q2);
        testform.getCheckBox(question).check();
        // Q3
        question = "3.";
        question = question.concat(props.Q3);
        testform.getCheckBox(question).check();
        // Q4
        question = "4.";
        question = question.concat(props.Q4);
        testform.getCheckBox(question).check();
        // Q5
        question = "5.";
        question = question.concat(props.Q5);
        testform.getCheckBox(question).check();
        //Q6
        question = "6.";
        question = question.concat(props.Q6);
        testform.getCheckBox(question).check();
        // Q7
        question = "7.";
        question = question.concat(props.Q7);
        testform.getCheckBox(question).check();
        // Q8
        question = "8.";
        question = question.concat(props.Q8);
        testform.getCheckBox(question).check();
        // Q9
        question = "9.";
        question = question.concat(props.Q9);
        testform.getCheckBox(question).check();
        // Q10
        question = "10.";
        question = question.concat(props.Q10);
        testform.getCheckBox(question).check();
    
        // save and download user's inputs as pdf
        let filename = props.Name + "-testform.pdf";
        const pdfbytes = await testDoc.save();
        download(pdfbytes, filename, "./blueApplication.pdf")
        
        //Update PDF in database as downloaded
        updateDocument(props.id, {Downloaded: true});
    }
    
}
export default FillPDF;

