//importing Animation JSOn 
import { useRef, useState } from "react";
import animation from "../../src/loader.json";

//importing Dependencies
import Lottie, {LottieRefCurrentProps} from "lottie-react";

interface Props{}

const Loader = ({}: Props) => {
    const loader = useRef<LottieRefCurrentProps>(null);
    const [style , setStyle] = useState("w-full h-screen flex absolute justify-center items-center z-50 bg-white")
    
  return (
    <div className={style}>
        <Lottie  onComplete={()=>{
            setStyle("hidden absolute")
        }} lottieRef={loader} loop={false} animationData={animation}/>
        <div className=""></div>
    </div>
  )
}

export default Loader