
import MapT from "./Map";

import { PhoneIcon, GlobeIcon, MapPinnedIcon } from "lucide-react";

interface Props {}

const ContactUs = ({}: Props) => {
  return (
    <div className="flex flex-col w-full justify-center items-center mt-20">
      <div className="flex flex-col items-center w-full p-6  font-cinzel font-semibold">
        <h4 className="flex text-xl items-center font-extrabold text-amber-900 ">
          {" "}
          <span className="block  w-4 h-0.5 bg-amber-600"></span> Contact Us{" "}
          <span className="block  w-4 h-0.5 bg-amber-600"></span>
        </h4>
      </div>
      {/*Map Component*/ }
      <div className=" w-5/6 flex flex-col gap-12 h-perf justify-center rounded-lg shadow-xs shadow-slate-800 ">
        <div>
          <MapT />
        </div>
        <div className="w-full flex flex-col gap-8 justify-center items-center font-cinzel font-bold text-amber-900">
          <span className="w-full  flex flex-wrap md:justify-evenly items-center">
            <span className=" mr-72 md:mr-80 lg:mr-96">
              <a href="https://www.bing.com/search?pglt=41&q=geneva&cvid=38fb47631b134f529f2b7c3832ace622&gs_lcrp=EgZjaHJvbWUqBggCEC4YQDIGCAAQRRg7MgYIARBFGDsyBggCEC4YQDIGCAMQRRg5MgYIBBAAGEAyBggFEAAYQDIGCAYQRRg8MgYIBxBFGDwyBggIEEUYPdIBCDYwNjNqMGoxqAIAsAIA&FORM=ANNTA1&PC=U531">
                Geneva SwitzerLand
              </a>
            </span>
            <span>
              <MapPinnedIcon />
            </span>
          </span>
          <span className="w-full  flex flex-wrap md:justify-evenly items-center">
            <span className=" mr-72 md:mr-80 lg:mr-96">
              <a href="#">www.AvariaHotel.com</a>
            </span>
            <span>
              <GlobeIcon />
            </span>
          </span>
          <span className="w-full  flex flex-wrap  md:justify-evenly items-center">
            <span className=" mr-72 md:mr-80 lg:mr-96">
              <a href="">+413456788 , +678380034</a>
            </span>
            <span>
              <PhoneIcon />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
