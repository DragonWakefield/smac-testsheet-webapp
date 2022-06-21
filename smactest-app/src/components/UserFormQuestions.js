import { motion } from "framer-motion"

export default function UserFormQuestions({name, setName, pTest, setPTest}) {
    return (
        <>
            <div className='my-4 px-4 py-3'>
                <motion.h4 
                    initial={{scale: 0, originX:0}}
                    whileInView={{scale:1}}
                    viewport={{margin:'-10px'}}
                >Name</motion.h4>
                <motion.input 
                type='text' 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className=' mt-3'
                initial={{scale: 0, originX:0}}
                whileInView={{scale:1}}
                whileHover={{x: 3, originX:0}}
                viewport={{margin:'-10px'}}
                ></motion.input>
            </div>
            <div className="my-4 px-4">
                <motion.h4
                    initial={{scale: 0, originX:0}}
                    whileInView={{scale:1}}
                    viewport={{margin:'-10px'}}
                >
                    Private Test - Additional $25
                </motion.h4>
                <ul className="ps-4 pt-3">
                    <motion.li 
                        className={pTest ? 'active': ''} 
                        onClick={() => setPTest(true)}
                        initial={{opacity:0, scale: 0, originX:0}}
                        whileHover={{x: 3, originX:0, color: '#b3002d'}} 
                        whileTap={{scale: 0.9, originX:0, color: '#b3002d'}} 
                        whileInView={{scale:1, opacity:1}}
                        viewport={{margin:'-20px'}}
                    ><span>Yes</span></motion.li>
                    <motion.li 
                        className={pTest ? '': 'active'} 
                        onClick={() => setPTest(false)}
                        initial={{opacity:0, scale: 0, originX:0}}
                        whileHover={{x: 3, originX:0, color: '#b3002d'}} 
                        whileTap={{scale: 0.9, originX:0, color: '#b3002d'}} 
                        whileInView={{scale:1, opacity:1}}
                        viewport={{margin:'-20px'}}
                    ><span>No</span></motion.li>
                </ul>
            </div>
        </>
    )
}