import {Download, Features, SectionWrapper} from './components'
import assets from './assets';
import styles from './styles/Global';

const App = () => {
  return (
    <>
      <SectionWrapper
      title="Your own store of NFTs,
      Start Selling & Growing"
      description="Buy, sell, collect NFTs, exchange and earn crypto"
      showBtn
      mockupImg={assets.homeHero}
      banner="banner"/>

      <SectionWrapper
      title="Smart User Interface Marketplace"
      description="Experience the buttery UI of ProNef NFT Marketplace
      with smooth UI design"
      mockupImg={assets.homeCards}
      reverse/>

      <Features/>

      <SectionWrapper
      title="Deployment"
      description="Built using Expo which runs natively on both Android and IOS devices. You can easily get your mobile applications up and running with Expo"
      mockupImg={assets.feature}
      reverse/>

      <SectionWrapper
      title="Showcase your Nft store in a creative manner"
      description="The application affords users the opportunity to list their NFT and also includes a screen to give details and ratings for a particular NFT "
      mockupImg={assets.mockup}
      banner="banner02"/>

      <Download
      showBtn/>

      <div className="px-4 py-2 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with love by {" "}
        <span className = "bold">Ambience Digital Solutions</span>
        </p>
      </div>
    </>
  );
}

export default App;
