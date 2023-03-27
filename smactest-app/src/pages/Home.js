import RankCard from "../components/RankCard"
import { motion } from "framer-motion"
import './Home.css'

import allRanks from './rankData/rankCards'


export default function Home() {
  return (
    <div className="home" style={{"min-height":"80vh"}}>
        <h3 className="my-5">Select your <span className="badge bg-dark">current</span> rank and fill out the form</h3>
        <motion.div variants={cardVariants} initial='hidden' animate='visible'>
          {allRanks.map((rank) => (
            <RankCard key={rank.title} title={rank.title} ranks={rank.ranks} bg={rank.bg} color={rank.color} />
          ))}
        </motion.div>
    </div>
  )
}

const cardVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }
}
