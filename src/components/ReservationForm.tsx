interface Props {}

const ReservationForm = ({}: Props) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      
      <video src="hotelVideo.mp4" autoPlay={true} loop={true} className="absolute w-perf2 h-perf rounded-lg mx-12 lg:w-5/6 object-cover"  ></video>
      <div  className="absolute w-perf2 h-perf rounded-lg mx-12 lg:w-5/6 bg-trans backdrop-blur-sm object-cover"></div>
      <form
        action=""
        className="w-2/3 lg:w-auto min-h-2/4 z-40 bg-white rounded-lg flex flex-col text-amber-900 lg:flex-row gap-12 p-4  font-cinzel shadow-2xl font-semibold justify-center items-center"
      >
        <div className="flex flex-col items-center w-full p-6  font-cinzel font-semibold">
        <h4 className="flex text-xl items-center font-extrabold text-amber-900 ">
          {" "}
          <span className="block  w-4 h-0.5 bg-amber-600"></span> Book Room{" "}
          <span className="block  w-4 h-0.5 bg-amber-600"></span>
        </h4>
      </div>
        <div className="w-full flex flex-col justify-center items-center ">
          <p>Arrival</p>
          <input
            type="date"
            name=""
            id=""
            className="w-full border border-slate-100 lg:border-slate-200  p-1 h-12 lg:h-32"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-center ">
          <p>Departure</p>
          <input
            type="date"
            name=""
            id=""
            className="w-full border  border-slate-100 lg:border-slate-200 p-1 h-12 lg:h-32"
          />
        </div>

        <select
          className="w-full h-10 border border-slate-100 lg:border-slate-200 p-1 lg:h-32"
          title="number of children"
          name="Number of Children"
          id=""
        >
          <option value="">--no of Children--</option>
          <option value="">none</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option><input type="text" name="" value="" /></option>
        </select>
        <select
          className="w-full h-10 border border-slate-100 lg:border-slate-200 p-1 lg:h-32"
          title="number of children"
          name="Number of Children"
          id=""
        >
          <option value="">--no of Rooms--</option>
          
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
        </select>
        <button
          className=" bg-amber-900 h-10 hover:bg-amber-700 transition ease-in-out lg:h-32 delay-200 w-full text-white"
          type="submit"
        >
          Book
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
