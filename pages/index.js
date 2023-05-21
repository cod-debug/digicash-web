import RootLayout from './layout';
import WhitePaper from './white_paper/whitePaper';
import Card from './components/card';
export default function Home() {
  return (
    <RootLayout>
        <div className="banner-holder">
            <div className='banner-content'>
                <div className='text-6xl fw-900'>Creating the Future Decentralized Apps &amp; Services</div>
                <div className='text-lg my-5'>Welcome to DigiCash, a Blockchain based company building products with an ecosystem of decentralized apps and services.</div>
                <button className='primary-btn'>Get a Qoute</button>
            </div>
            <div className='additional_img'>
            </div>
        </div>
        <div className='container mx-auto my-12'>
            <div className='grid grid-cols-3 grid-flow-col gap-3'>
                <div className='col-span-1'>
                    <Card cardData={
                        {
                            title: "Noteworthy technology acquisitions 2021",
                            subtitle: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                            btn_title: "Read more",
                            url: "#",
                            image: "/images/banner.png",
                        }
                    } />
                </div>
                <div className='col-span-1'>
                    <Card cardData={
                        {
                            title: "Noteworthy technology acquisitions 2021",
                            subtitle: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                            btn_title: "Read more",
                            url: "#",
                            image: "/images/banner.png",
                        }
                    } />
            
                </div>
                <div className='col-span-1'>
                    <Card cardData={
                        {
                            title: "Noteworthy technology acquisitions 2021",
                            subtitle: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
                            btn_title: "Read more",
                            url: "#",
                            image: "/images/banner.png",
                        }
                    } />
            
                </div>
            </div>
        </div>
        <WhitePaper />
    </RootLayout>
  )
}
