import {PDFDocument} from 'pdf-lib';
import download from 'downloadjs';
import emailjs from '@emailjs/browser';
import UploadTo from '../components/SendDropBox.js';
//import nodemailer from "nodemailer";
const FillPDF = async (props) =>{
    
    const reader = new FileReader();
  
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
    
    if (props.Rank == "purple"){
        testsheet = await fetch("./blueApplication.pdf").then(res => res.arrayBuffer());
    }
    const testDoc = await PDFDocument.load(testsheet);

    const testform = testDoc.getForm();

    // Sets User's Name to PDF
    testform.getTextField('Full Name').setText(props.Name);
    // Sets Test Date
    testform.getTextField('Test Date').setText(props.Date);
    // Sets Test Time
    testform.getTextField('Test Time').setText(props.TestTime);
    // Sets the Test Payment Check Box
    if (props.TestDue){
       testform.getCheckBox('Test Due').check(); 
    }
    // Sets Applicant Agreement 1
    if (props.Applicant1){
        testform.getCheckBox('Applicant1').check();
    }
    // Sets Applicant Agreement 2
    if (props.Applicant2){
        testform.getCheckBox('Applicant2').check();
    }
    // Sets User Signature
    testform.getTextField('Signature').setText(props.Signature);

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

    
    const pdfbytes = await testDoc.save();
    download(pdfbytes, "testform.pdf", "./blueApplication.pdf")

    //UploadTo({file: pdfbytes});
    /* Save Test File to Folder */
    //var filename = props.Name + ".pdf";
    //writeFileSync("./filledPDFS/"+filename, await testDoc.save());

    /*Send File via Emailjs */

    /* Send File via Nodemailer-react*/
    /*
    const mailerConfig= {
        defaults:{},
        transport: {
            host
        }
    }

    /* Send the form using Nodemailer
    const nodemailer = require("nodemailer");
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth:{
            user: 'smactestsheets@gmail.com',
            pass: 'jksnqoxdxlyzebac'
        }
    });

    var mailOptions = {
        from: 'smactestsheets@gmail.com',
        to: 'dandwakefield@gmail.com',
        subject: 'Test Sheet for ' + props.Name,
        attachments:[
            {
                path: '../filledPDFs/'+filename
            }
        ]
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error){
            console.log(error);
        }else{
            console.log("Email Sent");
        }
    });
    /*
    try {
        fs.unlinkSync('../filledPDFs/'+filename);
        console.log("File removed");
      } catch (err) {
        console.error(err);
    }
    */
   
}
export default FillPDF;

