
// passing card props
interface Props {
  imgUrl: string;
  head: string;
  des: string;
  
}

const Card = ({ imgUrl, head, des }: Props) => {
  return (
    <div className="w-2/3  lg:w-1/5 cursor-pointer   h-96 flex gap-4 lg:flex-col font-sedan text-lg text-amber-900">
      <div className="w-1/2 lg:w-full h:96 lg:h-72 overflow-hidden">
        <img
          src={imgUrl}
          className=" rounded-md h-72 w-full  object-cover hover:scale-125 transition-all ease-in-out delay-150"
          alt=""
        />
      </div>
      <div className="w-1/2   lg:w-full flex flex-col py-6">
        <h6 className="font-bold text-xl">{head}</h6>
        <p>{des}</p>
      </div>
    </div>
  );
};

export default Card;
