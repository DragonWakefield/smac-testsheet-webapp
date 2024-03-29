// Utilities and CSS
import { useRank } from "../hooks/useRank"
import { useState } from "react"
import { Alert, Button } from "react-bootstrap"
import { useFirestore } from "../hooks/useFirestore"
import './Questions.css'
// import FillPDF from "../components/pdfFiller"

// Components
import RankFormQuestions from "../components/RankFormQuestions"
import UserFormQuestions from "../components/UserFormQuestions"

// Data
import rankQuestions from "./rankData/rankQuestions"
import rankChoices from "./rankData/rankChoices"
import rankPrices from "./rankData/rankPrices"
import rankPromotions from "./rankData/rankPromotions"

export default function Questions() {
  const { addDocument } = useFirestore('sheets')
  const { rank, group } = useRank()
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [name, setName] = useState('')
  const [pTest, setPTest] = useState(false)
  const [payType, setPayType] = useState(0)
  const [answers, setAnswers] = useState({
    Q1: null, 
    Q2: null, 
    Q3: null,
    Q4: null,
    Q5: null,
    Q6: null,
    Q7: null,
    Q8: null,
    Q9: null,
    Q10: null
  })

  const addAnswer = (q, a) => {
    if (q === 0) {
      setAnswers({...answers, Q1: a + 1})
    } else if (q === 1) {
      setAnswers({...answers, Q2: a + 1})
    } else if (q === 2) {
      setAnswers({...answers, Q3: a + 1})
    } else if (q === 3) {
      setAnswers({...answers, Q4: a + 1})
    } else if (q === 4) {
      setAnswers({...answers, Q5: a + 1})
    } else if (q === 5) {
      setAnswers({...answers, Q6: a + 1})
    } else if (q === 6) {
      setAnswers({...answers, Q7: a + 1})
    } else if (q === 7) {
      setAnswers({...answers, Q8: a + 1})
    } else if (q === 8) {
      setAnswers({...answers, Q9: a + 1})
    } else {
      setAnswers({...answers, Q10: a + 1})
    }
  }

  const handleClick = async () => {
    setError(null)
    if (name === '') {
      setError('Please enter your name')
      return
    }
    if (!answers.Q1 || !answers.Q2 || 
        !answers.Q3 || !answers.Q4 || 
        !answers.Q5 || !answers.Q6 || 
        !answers.Q7 || !answers.Q8 || 
        !answers.Q9 || !answers.Q10) {
      setError('Select an answer for all questions')
      return
    }
    const doc = {
      Name: name,
      Rank: rank,
      PTest: pTest,
      Downloaded: false,
      PayType: payType,
      ...answers
    }
    await addDocument(doc)
    setSuccess(true)
  }

  const promotion = rankPromotions[`${rank}`]

  return (
    <div className="questions-container">
      {!success &&
        <>
          <h1 className="fw-bold my-5">
            <span style={{color: `${promotion.from.color}`}}>
              {promotion.from.name}
            </span> to&nbsp;
            <span style={{color: `${promotion.to.color}`}}>
              {promotion.to.name}
            </span> Questions
          </h1>
          <p className="alert alert-warning">Select the correct answers (Check the <b>{group}</b> book)</p>
          <UserFormQuestions name={name} setName={setName} pTest={pTest} setPTest={setPTest} rankPrices={rankPrices} rank={rank} payType={payType} setPayType={setPayType}/>
          <RankFormQuestions rankQuestions={rankQuestions} rankChoices={rankChoices} rank={rank} answers={answers} addAnswer={addAnswer}/>
          {error && <Alert variant='danger'>{error}</Alert>}
          <Button className="ms-4 mb-5" variant="outline-danger" onClick={handleClick}>Submit</Button>
        </>
      }
      {success &&
        <div className="text-success text-center mt-5">
          <h1 className="display-3 fw-bold">Thank You!</h1>
          <p className="display-6">Your test will be ${rankPrices[`${rank}`].price + (pTest ? 25 : 0) + (rankPrices[`${rank}`].book ? 25 : 0)} {payType > 0 ? '+ Tax': ''}</p>
          <p className="display-6">{payType === 1 ? "Please send your E-Transfer (EMT) to smactestfees@gmail.com": null}</p>
        </div>
      }
    </div>
  )
}


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