import { motion } from 'framer-motion';

export default function Banner () {
    return (
        <>
            <div className='banner-bg'>
            </div>
            <div className="banner-holder">
                <div className='banner-content'>
                    <motion.div
                        initial={{ scale: 0,opacity: 0 }}
                        whileInView={{  scale: 1,opacity: 1 }}
                        transition={{
                            type: "zoomIn",
                            stiffness: 260,
                            damping: 20
                        }}
                    >
                        <div className='text-6xl fw-900'>Secure and Anonymous Cryptocurrency</div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ marginLeft: '-300px', opacity: 0 }}
                        whileInView={{  marginLeft: '0', opacity: 1 }}
                        transition={{
                            type: "left",
                            stiffness: 560,
                            damping: 10
                        }}
                    >
                        <div className='text-lg my-5'>Welcome to DigiCash, a Blockchain based company building products with an ecosystem of decentralized apps and services.</div>
                    </motion.div>
                    
                    <motion.div
                        initial={{ marginTop: '-300px', opacity: 0, }}
                        whileInView={{  marginTop: '0', opacity: 1, }}
                        transition={{
                            type: "left",
                            stiffness: 560,
                            damping: 10
                        }}
                    >
                        <button className='btn primary-btn'>Get a Qoute</button>
                        <button className='btn btn-outline-orange ml-3'>Get White Paper</button>
                    </motion.div>
                </div>
                <div className='additional_img'>
                </div>
            </div>
        </>
    )
}