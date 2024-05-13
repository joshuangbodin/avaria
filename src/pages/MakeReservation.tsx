//Loader 

import Footer from "../components/Footer"
import ReservationForm from "../components/ReservationForm"
import Loader from "../components/loader"



type Props = {}

const MakeReservation = ({}: Props) => {
  return (
    <div>
      <Loader/>
      <ReservationForm/>
      <Footer/>
    </div>
  )
}

export default MakeReservation