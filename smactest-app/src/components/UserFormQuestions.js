import { motion } from "framer-motion"

export default function UserFormQuestions({name, setName, pTest, setPTest, rankPrices, rank, payType, setPayType}) {


    return (
        <div className="questions">
            <div className='my-4 px-4 py-3'>
                <motion.h4 
                    initial={{scale: 0, originX:0}}
                    whileInView={{scale:1}}
                    viewport={{margin:'-10px'}}
                >Full Name</motion.h4>
                <motion.input 
                type='text' 
                value={name} 
                onChange={(e) => setName(e.target.value)}
                className='mt-3'
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
                    className="alert alert-info"
                >
                    Your test will be ${rankPrices[`${rank}`].price} {rankPrices[`${rank}`].book ? '+ 25 (Training Guide)' : ''}
                </motion.h4>
            </div>
            <div className="my-4 px-4 pb-3">
                <motion.h4
                    initial={{scale: 0, originX:0}}
                    whileInView={{scale:0.7}}
                    viewport={{margin:'-10px'}}
                    className="text-secondary"
                >
                    If you require private test - Additional $25
                </motion.h4>
                <ul className="ps-4 pt-3">
                    <motion.li 
                        className={pTest ? 'active': ''} 
                        onClick={() => setPTest(true)}
                        initial={{opacity:0, scale: 0, originX:0}}
                        whileHover={{x: 3, originX:0, color: '#b3002d'}} 
                        whileTap={{scaleY: 0.8, originX:0, color: '#b3002d'}} 
                        whileInView={{scale:1, opacity:1}}
                        viewport={{margin:'-20px'}}
                    ><span>Yes</span></motion.li>
                    <motion.li 
                        className={pTest ? '': 'active'} 
                        onClick={() => setPTest(false)}
                        initial={{opacity:0, scale: 0, originX:0}}
                        whileHover={{x: 3, originX:0, color: '#b3002d'}} 
                        whileTap={{scaleY: 0.8, originX:0, color: '#b3002d'}} 
                        whileInView={{scale:1, opacity:1}}
                        viewport={{margin:'-20px'}}
                    ><span>No</span></motion.li>
                </ul>
            </div>
            <div className="my-4 px-4 pb-3">
                <motion.h4
                    initial={{scale: 0, originX:0}}
                    whileInView={{scale:1}}
                    viewport={{margin:'-10px'}}
                >
                    Preferred payment method
                </motion.h4>
                <ul className="ps-4 pt-3">
                    <motion.li 
                        className={payType === 0 ? 'active': ''} 
                        onClick={() => setPayType(0)}
                        initial={{opacity:0, scale: 0, originX:0}}
                        whileHover={{x: 3, originX:0, color: '#b3002d'}} 
                        whileTap={{scaleY: 0.8, originX:0, color: '#b3002d'}} 
                        whileInView={{scale:1, opacity:1}}
                        viewport={{margin:'-20px'}}
                    ><span>Cash or Debit (+Tax)</span></motion.li>
                    <motion.li 
                        className={payType === 1 ? 'active' : ''} 
                        onClick={() => setPayType(1)}
                        initial={{opacity:0, scale: 0, originX:0}}
                        whileHover={{x: 3, originX:0, color: '#b3002d'}} 
                        whileTap={{scaleY: 0.8, originX:0, color: '#b3002d'}} 
                        whileInView={{scale:1, opacity:1}}
                        viewport={{margin:'-20px'}}
                    ><span>Interac e-Transfer (EMT)</span></motion.li>
                    <motion.li 
                        className={payType === 2 ? 'active': ''} 
                        onClick={() => setPayType(2)}
                        initial={{opacity:0, scale: 0, originX:0}}
                        whileHover={{x: 3, originX:0, color: '#b3002d'}} 
                        whileTap={{scaleY: 0.8, originX:0, color: '#b3002d'}} 
                        whileInView={{scale:1, opacity:1}}
                        viewport={{margin:'-20px'}}
                    ><span>Credit Card on file (+Tax)</span></motion.li>
                </ul>
            </div>
        </div>
    )
}