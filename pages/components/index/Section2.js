import WaveBreaker2 from '@/pages/waves/waveBreaker2';
import WaveBreaker1 from '../../waves/waveBreaker1';
import Card from '../card';

import { motion  } from 'framer-motion';

export default function () {
    return (
        <div className='bg-white'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-2 grid-flow-col gap-2'>
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
                            <img src="/images/laptop.png" />
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ marginTop: '-300px', opacity: 0 }}
                        whileInView={{  marginTop: '0', opacity: 1 }}
                        transition={{
                            type: "left",
                            stiffness: 560,
                            damping: 10
                        }}
                    >
                        <div>
                            <h6 className="page-subtitle text-3xs font-bold text-[#002140]"><b className="text-[#8d949e] font-custom-sm">02.</b> Welcome</h6>
                            <div className='text-6xl fw-900'>Digicash is Digital Cash You Can Spend Anywhere</div>
                            <div className='text-secondary my-6'>Use DigiCash to make instant, private payments online or in-store using our secure open-source platform hosted by thousands of users around the world.</div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='py-12'></div>
        </div>
    )
}