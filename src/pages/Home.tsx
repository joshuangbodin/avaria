//frameworks import;

//Component Import
import WelcomeSplash from "../components/WelcomeSplash";
import CardList from "../components/CardList";
import AboutUs from "../components/aboutUs";
import AspectList from "../components/aspectlist";
import ContactUs from "../components/contactus";
import Footer from "../components/Footer";
import Loader from "../components/loader";


interface Props {}

const Home = ({}: Props) => {
  return (
    <div>
      <Loader/>
      <WelcomeSplash/>
      <CardList/>
      <AboutUs/>
      <AspectList/>
      <ContactUs/>
      <Footer/>
    </div>
  )
}

export default Home