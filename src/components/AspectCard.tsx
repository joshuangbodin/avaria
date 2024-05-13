
//props for the attributes 
interface Props {
  imgURL: string;
  header: string;
  des: string;
}

const AspectCard = ({ imgURL, header, des }: Props) => {
  return (
    <div className="relative flex justify-center rounded-xl items-center w-full lg:w-3/5  cursor-pointer   h-96 lg:h-72 flex-col overflow-hidden">
      <div className=" h-very lg:h-72 flex justify-center rounded-xl items-center w-full   overflow-hidden">
        <img
          className="w-5/6 h-96 lg:h-72 object-cover rounded-xl  md:h-perf transition-all ease-in-out delay-150"
          src={imgURL}
          alt=""
        />
        <div className=" rounded-lg absolute p-4 top-26   h-full text-xl bg-trans w-5/6 left-1/2 translate-x-neg5 transition-all ease-in-out delay-300  lg:opacity-0  hover:opacity-100">
          <div className="text-white text-lg font-cinzel w-2/3">
            <h4 className="flex   items-center md:text-md font-extrabold lg:mb-4">
              {" "}
              <span className="block  w-4 h-0.5 bg-amber-200"></span> {header}{" "}
              <span className="block  w-4 h-0.5 bg-amber-200"></span>
            </h4>
            <p className="font-bold  md:text-sm">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AspectCard;
