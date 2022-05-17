import { motion } from 'framer-motion'
import { useRank } from '../hooks/useRank'
import './RankCard.css'
import { useNavigate } from 'react-router-dom'
import { CloseButton } from 'react-bootstrap'

export default function RankCard({ranks, title, bg, color}) {
    const { changeGroup, changeRank, group } = useRank()
    const navigate = useNavigate()

    return (
        <>
            <motion.div className="card-container"  variants={cardVariants} style={{backgroundColor: `${bg}`}} onClick={() => changeGroup(title)}>
                {group === title ? 
                <div>
                    <CloseButton className="card-button" 
                        onClick={(e) => {
                            e.stopPropagation()
                            changeGroup(null)
                        }}/>
                    {ranks.map((rank) => (
                            <motion.div key={rank.name} onClick={() => {
                                changeRank(rank.name)
                                navigate('/questions')
                            }}
                            variants={rankVariants}
                            >
                                <p className='sash' style={{backgroundColor: `${rank.color}`, color: `${color}`}}>
                                    {rank.name}
                                    {rank.stripe && <span className='stripe' style={{backgroundColor: `${rank.stripe}`, right: '20px'}}/>}
                                    {rank.stripe && rank.stripeNum === 2 && <span className='stripe' style={{backgroundColor: `${rank.stripe}`, right: `${20 * rank.stripeNum + 10}px`}}/>}
                                </p>
                               
                            </motion.div>
                    ))}
                </div> : <div className="card-title">{title}</div>}
            </motion.div>
        </>
    )
}

const cardVariants = {
    hidden: {
      scale:0,
    },
    visible: {
      scale:1,
    },
  }

const rankVariants = {
    hidden: {
        x: '-100vw'
    },
    visible: {
        x:0,
    }
}