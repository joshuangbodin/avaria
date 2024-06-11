
// passing card props
interface Props {
  imgUrl: string;
  head: string;
  des: string;
  
}

const Card = ({ imgUrl, head, des }: Props) => {
  return (
    <div className="w-full lg:w-1/5 cursor-pointer justify-center items-center   h-96 flex gap-4 flex-col font-sedan text-lg text-amber-900">
      <div className="w-5/6 lg:w-full h:96 lg:h-72 overflow-hidden">
        <img
          src={imgUrl}
          className=" rounded-md h-72 w-full  object-cover hover:scale-125 transition-all ease-in-out delay-150"
          alt=""
        />
      </div>
      <div className="w-5/6   lg:w-full flex flex-col py-6">
        <h6 className="font-bold text-xl">{head}</h6>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default Card;
