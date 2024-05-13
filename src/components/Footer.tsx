
//imports
import { Link } from "react-router-dom"



type Props = {}

const Footer = ({}: Props) => {
  return (
    <div className="w-full flex absolute  flex-col justify-center mt-28 items-center p-6 bg-amber-900 text-white font-cinzel">
        <div className=" flex  w-full justify-around mb-6">
        <div>
            <ul className="flex flex-col">
                <Link to={"/"}>Home</Link>
                <Link  to={"/rooms"}>Rooms</Link>
                <Link to={"/reservations"}> Reservations</Link>
                <Link to={"https//www.Geneva.com"}>Geneva</Link>
            </ul>
        </div>
        <div>
            <ul>
                <li>Comfort</li>
                <li>Luxury</li>
                <li>Expensive</li>
                <li>Affordable</li>
            </ul>
        </div>
        </div>
        
        <p><strong>Copyright</strong>@2024</p>
    </div>
  )
}

export default Footer