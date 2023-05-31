import SpecificsCard from "../specificsCard"
export default function () {
    return <>
    
    <div className="bg-white text-center py-12">
        <div className="container mx-auto">
            <div className="p-12">
                <h6 className="page-subtitle text-3xs font-bold text-[#002140]"><b className="text-[#8d949e] font-custom-sm">01.</b> Details</h6>
                <h1 className="text-4xl font-bold py-5">Digicash Specifics</h1>
                <div className="px-12">
                    <p className="text-[#abb8c3] px-12">You can participate in the operation of the network by allocating the computing power of your computer. Due to this mechanism, transaction processing is decentralized, which allows a person to be not only a user, but also a participant.</p>
                </div>
                <div className="py-12">
                    <div className='grid lg:grid-cols-4 lg:grid-rows-1 md:grid-rows-2 grid-flow-col gap-5'>
                        <div>
                            <SpecificsCard
                                title="Digicash Transactions"
                                icon="fa-solid fa-dollar"
                                description="Transactions between Digicash users are carried out over the Internet which makes the transactions much more reliable"
                                buttonTitle="LEARN MORE"
                                buttonHref="#"
                            />
                        </div>
                        <div className="mt-12">
                            <SpecificsCard
                                title="Safety and Reliability"
                                icon="fa-solid fa-shield-halved"
                                description="Transactions between Digicash users are carried out over the Internet which makes the transactions much more reliable"
                                buttonTitle="LEARN MORE"
                                buttonHref="#"
                            />
                        </div>
                        <div>
                            <SpecificsCard 
                                title="Deflation"
                                icon="fa-solid fa-chart-column"
                                description="Transactions between Digicash users are carried out over the Internet which makes the transactions much more reliable"
                                buttonTitle="LEARN MORE"
                                buttonHref="#"
                            />
                        </div>
                        <div className="mt-12">
                            <SpecificsCard 
                                title="Emission"
                                icon="fa-brands fa-bitcoin"
                                description="Transactions between Digicash users are carried out over the Internet which makes the transactions much more reliable"
                                buttonTitle="LEARN MORE"
                                buttonHref="#"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}