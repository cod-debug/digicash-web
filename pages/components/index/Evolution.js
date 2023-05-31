import { motion } from "framer-motion";

export default function () {
    return <>
        <div className="bg-white-shapes-circles evo-card">
            <section className="py-12"></section>
            <div className="container mx-auto">
                <div className="grid lg:grid-cols-2 lg:grid-rows-1 md:grid-rows-2 grid-flow-col gap-5">
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }} 
                     className="clippy-point-right my-auto">
                        <motion.img
                            initial={{ transform: "rotate(-20deg)" }}
                            whileInView={{ transform: "rotate(0)" }} 
                            className="w-100" src="/images/bg2.png" />
                    </motion.div>
                    <motion.div
                            initial={{ scale: 0,opacity: 0, margin: 0 }}
                            whileInView={{  scale: 1,opacity: 1, margin: 'auto' }}
                            transition={{
                                type: "zoomIn",
                                stiffness: 260,
                                damping: 20
                            }}
                        >
                        <h6 className="page-subtitle text-3xs font-bold text-[#002140]"><b className="text-[#8d949e] font-custom-sm">03.</b> Evolution</h6>
                        <h1 className="text-4xl font-bold py-5">Digital Currency Evolution</h1>
                        <div className="">
                            <p className="text-[#abb8c3] text-lg">What’s next? We want digital currencies to be so easy to use your Grandma would use them. DigiCash Evolution will enable you to signup and access your Lymcoin from any device and transact as easily as you can with PayPal, but in a fully decentralized way. Stay tuned…</p>
                        </div>
                    </motion.div>
                </div>
            </div>
            <section className="py-12"></section>
        </div>
    </>
}