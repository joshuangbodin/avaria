import { Link } from "react-router-dom";
import { priceFormat } from "./utility/price";

interface Props {
  imgurl: string;
  price: number;
}

const RoomCard = ({ imgurl, price }: Props) => {
  return (
    <div className="w-full   min-h-very flex gap-2  justify-center items-center font-semibold text-amber-900 font-cinzel">
      <div className="w-5/6 h-96 md:w-2/3 p-4 lg:h-5/6 lg:w-5/6 shadow-md ">
        <img src={imgurl} className="h-3/4 w-full object-cover transition-all ease-in-out delay-500" alt="" />
        <p className=" w-full"> {priceFormat(price)}</p>
        <Link to="/explore">
        <button
          className=" bg-amber-900  h-10 lg:h-14 hover:bg-amber-700 transition ease-in-out  delay-200 w-full text-white"
          type="submit"
        >
          select
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default RoomCard;
