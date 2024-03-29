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
            <motion.div className="card-container"  variants={cardVariants} style={{backgroundImage: `linear-gradient(180deg, ${bg[0]}, ${bg[1]})`}} onClick={() => changeGroup(title)}>
                {group === title ? 
                <motion.div variants={rankVariants}>
                    <CloseButton className="card-button mb-3" 
                        onClick={(e) => {
                            e.stopPropagation()
                            changeGroup(null)
                        }}/>
                    {ranks.map((rank) => (
                            <motion.div key={rank.id} onClick={() => {
                                changeRank(rank.id)
                                navigate('/questions')
                            }}
                            variants={sashVariants}
                            whileTap={{scale:0.9}}
                            >
                                <p className='sash' style={{backgroundColor: `${rank.color}`, color: `${color}`}}>
                                    {rank.name}
                                    {rank.stripe && <span className='stripe' style={{backgroundColor: `${rank.stripe}`, right: '20px'}}/>}
                                    {rank.stripe && (rank.stripeNum === 2) && <span className='stripe' style={{backgroundColor: `${rank.stripe}`, right: `${20 * rank.stripeNum + 10}px`}}/>}
                                </p>
                               
                            </motion.div>
                    ))}
                </motion.div> : <div className="card-title">{title}</div>}
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
        opacity:0
    },
    visible: {
        opacity:1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const sashVariants = {
    hidden: {
        opacity:0
    },
    visible: {
        opacity:1
    }
}