import RankCard from "../components/RankCard"
import { motion } from "framer-motion"

const Basics = {
  title: 'Basic',
  ranks: [{name: 'White', color: 'white', stripe: false}, {name: 'Yellow', color:'#ffeb3b', stripe: false}, {name: 'Orange', color: '#ffc107', stripe: false}],
  bg: 'orange',
  color: 'black'
}

const Level1 = {
  title: 'Level 1',
  ranks: [{name: 'Purple', color: '#673ab7', stripe: false}, {name: 'Blue', color: '#2196f3', stripe: false}, {name: 'Blue with Stripe', color: '#2196f3', stripe: '#008b02', stripeNum: 1}],
  bg: '#00bcd4',
  color: 'white'
}

const Level2 = {
  title: 'Level 2',
  ranks: [{name: 'Green', color: '#008b02', stripe: false}, {name: 'Green with Stripe', color: '#008b02', stripe: '#5d4037', stripeNum: 1}, {name: 'Green with 2 Stripes', color: '#008b02', stripe: '#5d4037', stripeNum: 2}],
  bg: '#4caf50',
  color: 'white'
}

const Level3 = {
  title: 'Level 3',
  ranks: [{name: 'Brown', color: '#5d4037', stripe: false}, {name: 'Brown with Stripe', color: '#5d4037', stripe: 'black', stripeNum: 1}, {name: 'Brown with 2 Stripes', color: '#5d4037', stripe: 'black', stripeNum: 2}],
  bg: '#795548',
  color: 'white'
}

const allRanks = [Basics, Level1, Level2, Level3]


export default function Home() {
  return (
    <div>
      <h1>Home</h1>
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
      staggerChildren: 0.2
    }
  }
}
