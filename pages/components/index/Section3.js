import { motion  } from 'framer-motion';
import Glowing from '../glowing';
export default function () {
    return (
        <section className='black-gradient text-white'>
            <Glowing />
            <section className='py-12'></section>
            <section className='py-12'></section>
            <div className="container mx-auto">
                <div className='grid lg:grid-cols-2 lg:grid-rows-1 md:grid-rows-2 grid-flow-col gap-5'>
                    <div className='h-100 flex justify-center align-center'>
                        <motion.div
                            initial={{ scale: 0,opacity: 0 }}
                            whileInView={{  scale: 1,opacity: 1 }}
                            transition={{
                                type: "zoomIn",
                                stiffness: 260,
                                damping: 20
                            }}
                        >
                            <img src="/images/banner2.png" />
                        </motion.div>
                    </div>
                    <div className='h-100 flex items-center align-center'>
                        <div>
                            <motion.div
                                initial={{ marginTop: '-300px', opacity: 0, }}
                                whileInView={{  marginTop: '0', opacity: 1, }}
                                transition={{
                                    type: "left",
                                    stiffness: 560,
                                    damping: 10
                                }}
                            >
                                <h1 className='custom-section-title'>
                                    <b className='section-title-highlight'>We have 32+</b> Years Of Business Experiences
                                </h1>
                            </motion.div>

                            <motion.div
                                initial={{ marginLeft: '-300px', opacity: 0, }}
                                whileInView={{  marginLeft: '0', opacity: 1, }}
                                transition={{
                                    type: "left",
                                    stiffness: 560,
                                    damping: 10
                                }}
                            >
                                <p className='text-orange pb-12 font-bold text-blue-600 text-xl'>Trusted Business Consulting Service Provider</p>
                                <p className='pb-12 text-xl text-justify'>
                                    Distinctively exploit optimal alignments for intuitive. Quickly coordinate business applications through revolutionary catalysts for chang the Seamlessly optimal testing procedures whereas processes. Synerg stically evolve 2.0 technologies rather than just in web & apps development optimal alignments for intuitive.
                                </p>
                            </motion.div>     

                            <motion.div
                                initial={{ marginBottom: '-300px', opacity: 0, }}
                                whileInView={{  marginBottom: '0', opacity: 1, }}
                                transition={{
                                    type: "left",
                                    stiffness: 560,
                                    damping: 10
                                }}
                            >
                                <button className='btn orange-btn'>Get a Qoute</button>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <section className='py-12'></section>
            <section className='py-12'></section>
        </section>
    )
}