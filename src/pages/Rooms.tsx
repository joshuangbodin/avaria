import Footer from "../components/Footer"
import SelectRoom from "../components/SelectRoom"
import Loader from "../components/loader"

interface Props {}

const Rooms = ({}: Props) => {
  return (
    <div>
      <Loader/>
      <SelectRoom/>
      <Footer/>
    </div>
  )
}

export default Rooms