//react imprts
import { useState } from "react";

//data
import classy from "./data/classy.json";
import sophisticated from "./data/sophisticated.json";

//cmpnents
import RoomCard from "./roomCard";

interface Props {}

const SelectRoom = ({}: Props) => {
  const [items, setItems] = useState<any[]>();
  const [Sty, setSty] = useState(
    " flex flex-col gap-5 lg:flex-row w-full h-screen transition-all ease-in-out delay-1000 justify-center items-center"
  );
  const [toggle, setToggle] = useState<string>("block relative rounded-full w-6 h-6 bg-amber-600");
  const [shw, setShw] = useState<string>("hidden");

  return (
    <div>
      <div className={Sty}>
        <div className="relative h-[10vh] top-28 md:top-40 font-cinzel font-semibold text-amber-900">
          <h3>What Do you Like?</h3>
        </div>
        <div className=" w-96 h-96 overflow-hidden mt-28 md:mt-0  relative cursor-pointer delay">
          <img
            className={
              "w-96 h-96 object-cover rounded-lg transition-all  ease-in-out delay-150"
            }
            src="room.jpg"
            alt=""
          />
          <div
            className={`bg-trans w-96 h-96 absolute rounded-lg hover:scale-125 hover:backdrop-blur-sm flex justify-center items-center  top-0`}
            onClick={() => {
              setSty(
                "flex flex-col gap-5 justify-center items-center lg:flex-row w-full h-screen opacity-0 transition-all ease-in-out delay-1000"
              );
              setSty("hidden");
              setItems(classy);
              setToggle("block relative rounded-full  w-6 h-6 bg-amber-600")
              setShw(" ");
            }}
          >
            <p className="text-white text-2xl font-cinzel  flex justify-center items-center">
              {" "}
              <span className=" w-4 h-0.5 bg-amber-500 block"></span> Classy{" "}
              <span className=" w-4 h-0.5 bg-amber-600 block"></span>
            </p>
          </div>
        </div>

        <div className=" w-96 h-96 overflow-hidden relative cursor-pointer">
          <img
            className={
              "w-96 h-96 object-cover rounded-lg transition-all  ease-in-out delay-150"
            }
            src="room2.jpg"
            alt=""
          />
          <div
            className={`bg-trans w-96 h-96 absolute rounded-lg hover:scale-125 hover:backdrop-blur-sm flex justify-center items-center  top-0`}
            onClick={() => {
              setSty(
                "flex flex-col gap-5 justify-center items-center lg:flex-row w-full h-screen opacity-0 transition-all ease-in-out delay-1000"
              );
              setSty("hidden");
              setItems(sophisticated);
              setToggle("block relative rounded-full left-6 w-6 h-6 bg-amber-600");
              setShw(" ");
            }}
          >
            <p className="text-white text-2xl font-cinzel flex justify-center items-center">
              {" "}
              <span className=" w-4 h-0.5 bg-amber-500 block"></span>{" "}
              Sophisticated{" "}
              <span className=" w-4 h-0.5 bg-amber-600 block"></span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={`w-full h-svery flex justify-center items-center cursor-pointer font-bold ${shw} text-amber-900 gap-3 transition-all ease-in-out delay-150 font-cinzel `}
      >
        Classy
        <span
          className={` w-12 h-6 flex  bg-amber-900 rounded-full `}
          onClick={() => {
            if (toggle == "block relative rounded-full w-6 h-6 bg-amber-600") {
              setToggle("block relative rounded-full left-6 w-6 h-6 bg-amber-600");
              setItems(sophisticated);
            } else {
              setToggle("block relative rounded-full w-6 h-6 bg-amber-600");
              setItems(classy);
            }
          }}
        >
          <span className={toggle}></span>
        </span>
        Sophisticated
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center transition-all ease-in-out delay-150 ">
        {items &&
          items.map((itemsitem) => (
            <RoomCard imgurl={itemsitem.img} price={itemsitem.price} />
          ))}
      </div>
    </div>
  );
};

export default SelectRoom;
