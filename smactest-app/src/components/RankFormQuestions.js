import { motion } from "framer-motion"

export default function RankFormQuestions({ rankQuestions, rankChoices, rank, answers, addAnswer }) {
    return (
        <div className="questions">
            {rankQuestions[rank].map((q, qidx) => (
                <div key={q} className={`my-4 px-4 py-3 ${qidx % 2 === 0 ? 'bg-light' : ''}`}>
                <motion.h4 
                    initial={{scale: 0, originX:0}}
                    whileInView={{scale:1}}
                    viewport={{margin:'-10px'}}
                >{q}</motion.h4>
                <ul className="ps-4 pt-3">
                    {rankChoices[rank][qidx].map((choice, cidx) => {
                    let selected = answers[`Q${qidx + 1}`] === cidx + 1 ? 'active' : ''
                    return (
                    <motion.li
                        initial={{opacity:0, scale: 0, originX:0}}
                        whileHover={{x: 3, originX:0, color: '#b3002d'}} 
                        whileTap={{scaleY: 0.8, originX:0, color: '#b3002d'}} 
                        whileInView={{scale:1, opacity:1}}
                        viewport={{margin:'-20px'}}
                        key={choice} 
                        onClick={() => addAnswer(qidx,cidx)}
                        className={selected}
                    >
                        <span>{choice}</span>
                    </motion.li>
                    )
                    })}
                </ul>
                </div>
            ))}
        </div>
    )
}