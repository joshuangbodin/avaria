
//img import

import img1 from "/hallway.jpg";
import { Clock12Icon, HeadphonesIcon, HomeIcon } from "lucide-react";

interface Props {}

const WelcomeSplash = ({}: Props) => {
  return (
    <div className="relative  w-full min-h-screen">
      <div>
        <img
          className="w-full object-cover  h-[85vh] brightness-[35%] md:brightness-[55%] "
          src={img1}
          alt=""
        />
        <div className=" absolute text-white top-[50%] left-[20%] -translate-x-[20%] -translate-y-[50%] gap-5  flex flex-col  w-[60%] md:w-1/2 lg:w-2/5 h-[50%]">
          <h1 className=" font-semibold font-cinzel capitalize text-3xl md:text-4x lg:text-6xl spacing">
            Enjoy your <br /> Dream Vacation
          </h1>
          <p className="text-sm md:text-md lg:text-lg font-sedan">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quisquam deserunt error veritatis quos iure culpa dolor fugiat ipsam, a blanditiis tenetur ducimus unde. Rerum quia minima non doloremque obcaecati!
          </p>
          <button className=" bg-amber-950 hover:scale-90 text-sm md:txt-md uppercase h-10 w-1/2 md:w-1/3 font-semibold p-1  ">
            Choose Room
          </button>
        </div>
       
      </div>
      <div className="w-full items-center bg-amber-950 flex  h-[15vh] ">
        <div className="w-full md:w-1/3  justify-center items-center flex  gap-4 flex-row text-white  md:bg-amber-800 h-full">
          <div>
            <Clock12Icon />
          </div>
          <div>
            <h3 className=" font-bold Capitalize font-cinzel  text-sm md:text-md">
              Opening Times
            </h3>
            <p className="text-xs font-sedan  md:text-sm  ">
              Monday-Friday 09:00 - 18:00
            </p>
          </div>
        </div>
        <div className="w-1/3 flex-col justify-center items-center hidden md:flex  gap-4 md:flex-row text-white  bg-amber-900 h-full">
          <div>
            <HomeIcon />
          </div>
          <div>
            <h3 className=" font-bold Capitalize font-cinzel  text-sm md:text-md">
              Our Location
            </h3>
            <p className="text-xs font-sedan  md:text-sm  ">
              14 Geneva, Switzerland
            </p>
          </div>
        </div>
        <div className="w-1/3 flex-col justify-center items-center hidden md:flex  gap-4 md:flex-row text-white  bg-amber-950 h-full">
          <div>
            <HeadphonesIcon />
          </div>
          <div>
            <h3 className=" font-bold Capitalize font-cinzel  text-sm md:text-md">
              Customer Support
            </h3>
            <p className="text-xs font-sedan  md:text-sm  ">+4745674738</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSplash;
