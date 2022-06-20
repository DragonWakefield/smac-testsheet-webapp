import { useRank } from "../hooks/useRank"
import { useState } from "react"
import { Alert, Button } from "react-bootstrap"
import { motion } from "framer-motion"
import './Questions.css'
// import FillPDF from "../components/pdfFiller"

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

const rankQuestions = {
  purple: [
    'What is Sparring?', 
    'What is Self-Defense?', 
    'What part of the foot is used for a Round Kick?', 
    'What are the 3 kicks I learned in Purple Belt?', 
    'How many of the 8pt Open Hand Blocks have you learned?', 
    'The primary arts used in our grappling are:', 
    'How many Animals are part of the Shaolin Training system?',
    'Bodhidharma (or Tamo) is:', 
    'The Shaolin Temple is located in:', 
    'The Striking point of Immortal Hand is:'
  ]
}

const rankChoices = {
  purple: [
    [
      'A sophisticated game of Tag',
      'An all-out fight with rules',
      'A chance to hurt someone using Kung-fu',
      'A test of one\'s might as a fighter'
    ],
    [
      'A chance to hurt someone using Karate',
      'Applications based on real-life scenarios',
      'An exercise in skilled paranoia',
      'A different way to combine basics'
    ],
    [
      'The Heel',
      'The Side Blade of the foot',
      'The \'Ball\' of the foot',
      'The Top or \'Bridge\' of the foot'
    ],
    [
      'Front, Crescent, Spear',
      'Round, Rev. Crescent, Hook',
      'Side to Front, Round, Hook',
      'Stepping stool, X-Step, Hook'
    ],
    [
      '1 - 2',
      '1 - 4',
      '1 - 6',
      '1 - 8'
    ],
    [
      'Chin-Na & Shuai Jiao',
      'Judo & Ninjutsu',
      'Brazilian Jujutsu & MMA',
      'All of the above'
    ],
    [
      '7',
      '6',
      '5',
      '4'
    ],
    [
      'An Indian dish of flat bread & rice',
      'A Buddhist monk/warrior from India',
      'The founder of the Shaolin Temple',
      'I don\'t know'
    ],
    [
      'Okinawa',
      'Japan',
      'China',
      'Tibet'
    ],
    [
      'The back of the hand',
      'The bottom two finger knuckles',
      'Tips of first two fingers',
      'The bottom of the hand'
    ]
  ]
}

export default function Questions() {
  const { rank } = useRank()
  const [error, setError] = useState("")
  const [answers, setAnswers] = useState({
    q1: null, 
    q2: null, 
    q3: null,
    q4: null,
    q5: null,
    q6: null,
    q7: null,
    q8: null,
    q9: null,
    q10: null
  })

  const addAnswer = (q, a) => {
    if (q === 0) {
      setAnswers({...answers, q1: a + 1})
    } else if (q === 1) {
      setAnswers({...answers, q2: a + 1})
    } else if (q === 2) {
      setAnswers({...answers, q3: a + 1})
    } else if (q === 3) {
      setAnswers({...answers, q4: a + 1})
    } else if (q === 4) {
      setAnswers({...answers, q5: a + 1})
    } else if (q === 5) {
      setAnswers({...answers, q6: a + 1})
    } else if (q === 6) {
      setAnswers({...answers, q7: a + 1})
    } else if (q === 7) {
      setAnswers({...answers, q8: a + 1})
    } else if (q === 8) {
      setAnswers({...answers, q9: a + 1})
    } else {
      setAnswers({...answers, q10: a + 1})
    }
  }

  const handleClick = () => {
    setError(null)
    if (!answers.q1 || !answers.q2 || 
        !answers.q3 || !answers.q4 || 
        !answers.q5 || !answers.q6 || 
        !answers.q7 || !answers.q8 || 
        !answers.q9 || !answers.q10) {
      setError('Select an answer for all questions')
      return
    }


  }

  return (
    <div>
      <h1>Questions</h1>
      <p>Select the correct answer</p>
      <p>{rank}</p>
      <div className="questions-container">
        {rankQuestions[rank.toLowerCase()].map((q, qidx) => (
          <div key={q} className="my-4 px-4">
            <motion.h4 
              initial={{scale: 0, originX:0}}
              whileInView={{scale:1}}
              viewport={{margin:'-10px'}}
            >{q}</motion.h4>
            <ul className="ps-4">
              {rankChoices[rank.toLowerCase()][qidx].map((choice, cidx) => {
                let selected = answers[`q${qidx + 1}`] === cidx + 1 ? 'active' : ''
                return (
                <motion.li
                  initial={{opacity:0, scale: 0, originX:0}}
                  whileHover={{x: 3, originX:0, color: '#b3002d'}} 
                  whileTap={{scale: 0.9, originX:0, color: '#b3002d'}} 
                  whileInView={{scale:1, opacity:1}}
                  viewport={{margin:'-20px'}}
                  key={choice} 
                  onClick={() => addAnswer(qidx,cidx)}

                >
                  <span className={selected}>{choice}</span>
                </motion.li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Button className="ms-4 mb-5" variant="outline-danger" onClick={handleClick}>Submit</Button>
    </div>
  )
}
