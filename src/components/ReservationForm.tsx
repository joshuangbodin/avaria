interface Props {}

const ReservationForm = ({}: Props) => {
  return (
  <div className=" h-[85vh] flex justify-center items-center ">
    <div className="flex flex-col text-white gap-4 w-[450px] bg-black/25 backdrop-blur-sm p-4 h-[550px] justify-center items-center">
    <form
      className="flex flex-col border-slate-300 border  text-white gap-4 w-[400px] bg-black/25 p-4 h-[500px] justify-center items-center"
      action=""
    >
      <h3 className=" font-cinzel ">Make Reservation</h3>
      <p className="text-xs self-start">Arrival</p>
      <input
        className="h-12 w-full bg-transparent border-slate-300 border-[0.2px] p-4 placeholder:text-white placeholder:text-sedan"
        type="date"
        name=""
        id=""
      />
      <p className="text-xs self-start">Departure</p>
      <input
        className="h-12 w-full bg-transparent  border-slate-300 border-[0.2px] p-4 placeholder:text-white placeholder:text-sedan"
        type="date"
        name=""
        id=""
      />
      <select
        title="rooms"
        className="h-12 w-full bg-transparent border-slate-300 border-[0.2px] px-4 placeholder:text-white placeholder:text-sedan"
        name=""
        id=""
      >
        <option className=" bg-black" value="">
          Room 1
        </option>
        <option className=" bg-black" value="">
          Room 2
        </option>
        <option className=" bg-black" value="">
          Room 3
        </option>
        <option className=" bg-black" value="">
          Room 4
        </option>
        <option className=" bg-black" value="">
          Room 5
        </option>
        <option className=" bg-black" value="">
          Room 6
        </option>
        <option className=" bg-black" value="">
          Room 7
        </option>
        <option className=" bg-black" value="">
          Room 8
        </option>
        <option className=" bg-black" value="">
          Room 9
        </option>
        <option className=" bg-black" value="">
          Room 10
        </option>
      </select>
      <p className="text-xs">Please Input Number</p>
      <div className="flex gap-3">
        <input
          type="number"
          placeholder="Adults"
          className="h-12 w-full bg-transparent border-slate-300 border-[0.2px] p-4 placeholder:text-white placeholder:text-sedan"
        />
        <input
          placeholder="Children"
          className="h-12 w-full bg-transparent border-slate-300 border-[0.2px] p-4 placeholder:text-white placeholder:text-sedan"
          type="text"
        />
      </div>
      <button className=" bg-amber-950 w-full h-12 hover:scale-90" type="submit">Book Room</button>
    </form>
  
    </div>
  </div>  
  );
};

export default ReservationForm;
