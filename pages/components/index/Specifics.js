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
                            <SpecificsCard />
                        </div>
                        <div className="mt-12">
                            <SpecificsCard />
                        </div>
                        <div>
                            <SpecificsCard />
                        </div>
                        <div className="mt-12">
                            <SpecificsCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
}