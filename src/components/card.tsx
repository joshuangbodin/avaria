import { ChevronDownIcon } from "lucide-react";

// passing card props
interface Props {
  imgUrl: string;
  head: string;
  des: string;
  
}

const Card = ({ imgUrl, head, des }: Props) => {
  return (
    <div className="w-4/6 lg:w-1/5 cursor-pointer justify-center hover:translate-x-1 items-center bg-[rgba(50,50,50,.5)]   backdrop-blur-sm  h-96 flex gap-4 flex-col font-sedan text-sm md:text-md text-white">
      <div className="w-full lg:w-full h-96 lg:h-96 overflow-hidden">
        <img
          src={imgUrl}
          className="  h-72 w-full  object-cover  transition-all ease-in-out delay-150"
          alt=""
        />
      </div>
      <div className="w-5/6   lg:w-full flex flex-col p-6">
        <h6 className="font-bold text-md md:text-lg font-cinzel capitalize">{head}</h6>
        <p>{des.length>60?des.slice(0,60)+"...":des}</p>
      </div>
      <button className="bg-black/30 h-12 w-full flex justify-center items-center gap-2 text-sm p-2">See More <ChevronDownIcon size={20}/></button>
    </div>
  );
};

export default Card;
