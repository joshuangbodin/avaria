//imports from lucide
import { ChevronLeft, ChevronRight } from "lucide-react";
//imports from react
import { useState } from "react";
//img import
import img1 from "/room.jpg";
import img2 from "/pool.jpg";
import img3 from "/view.jpg";

interface Props {}

const WelcomeSplash = ({}: Props) => {
  //state for img source
  const [Src, setSrc] = useState<any>(img1);
  const [id, setId] = useState<1 | 2 | 3>(1);

  //fxns
  const changeR = () => {
    if (id === 3) {
      setId(1);
      setSrc(img3);
    } else if (id === 2) {
      setId(3);
      setSrc(img2);
    } else {
      setId(2);
      setSrc(img1);
    }
  };

  const changeL = () => {
    if (id === 3) {
      setId(2);
      setSrc(img2);
    } else if (id === 2) {
      setId(1);
      setSrc(img1);
    } else {
      setId(3);
      setSrc(img3);
    }
  };

  setTimeout(changeR, 5000);
  

  return (
    <div className="relative flex justify-center items-center w-full min-h-screen">
      <button className=" text-amber-900 " onClick={changeL}>
        <ChevronLeft />
      </button>
      <img
        className="w-5/6 h-perf1 object-cover rounded-lg  md:h-perf transition-all ease-in-out delay-150"
        src={Src}
        alt=""
      />
      <button className="  text-amber-900 " onClick={changeR}>
        <ChevronRight />
      </button>
    </div>
  );
};

export default WelcomeSplash;
