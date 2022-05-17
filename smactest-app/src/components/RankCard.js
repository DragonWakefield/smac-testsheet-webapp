import { AnimatePresence, motion } from 'framer-motion'
import { useRank } from '../hooks/useRank'

export default function RankCard({ranks, title}) {
    const { changeGroup, group } = useRank()

    return (
        <>
            <motion.div layoutId={title} onClick={() => changeGroup(title)} className="card-container">
                <div className="card-title">{title}</div>
            </motion.div>
            <AnimatePresence>
                {group === title && (
                    <motion.div layoutId={group} onClick={() => changeGroup(null)}>
                        <h2>{group}</h2>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
