import RootLayout from './layout';
import BannerRight from './waves/bannerRight';
import Banner from './components/index/Banner';
import Section2 from './components/index/Section2';
import Section3 from './components/index/Section3';
import Benefits from './components/index/Benefits';
import Specifics from './components/index/Specifics';
export default function Home() {
  return (
    <RootLayout>
        <Banner />
        <BannerRight />
        <Specifics />
        <Section2 />
        <Section3 />
        <Benefits />
    </RootLayout>
  )
}
