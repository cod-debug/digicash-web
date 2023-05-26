import BenefitsCard from "../benefitsCard"
export default function () {
    return (<>
    <div className="bg-lines">
        <div className="py-12"></div>
        <div className="py-12"></div>
        <div className="container mx-auto">
            <h1 className="font-big font-bold text-white">Digicash Benefits</h1>
            <div className='grid lg:grid-cols-4 lg:grid-rows-1 md:grid-rows-4 md:grid-cols-2 sm:grid-rows-4 sm:grid-cols-2 grid-flow-col gap-12'>
                <div className='lg:col-span-1 md:col-span-2 sm:col-span-2'>
                    <BenefitsCard 
                        content={
                            {
                                title: "Access",
                                icon: "fa-solid fa-universal-access",
                                description: "Connectivity across payment networks",
                            }
                        }
                    />
                </div>
                <div className='lg:col-span-1 md:col-span-2 sm:col-span-2'>
                    <BenefitsCard 
                        content={
                            {
                                title: "Speed",
                                icon: "fa-solid fa-jet-fighter-up",
                                description: "Instant, on-demand cash settlement",
                            }
                        }
                    />
                </div>
                <div className='lg:col-span-1 md:col-span-2 sm:col-span-2'>
                    <BenefitsCard 
                        content={
                            {
                                title: "Certainty",
                                icon: "fa-brands fa-bitcoin",
                                description: "Real-time traceability of funds",
                            }
                        }
                    />
                </div>
                <div className='lg:col-span-1 md:col-span-2 sm:col-span-2'>
                    <BenefitsCard 
                        content={
                            {
                                title: "Cost",
                                icon: "fa-solid fa-hand-holding-dollar",
                                description: "Low operational and liquidity costs",
                            }
                        }
                    />
                </div>
            </div>
        </div>
        <div className="py-12"></div>
        <div className="py-12"></div>
    </div>        
    </>)
}