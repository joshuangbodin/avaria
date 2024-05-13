//imports from react

import { FC, useState } from "react";
import { Link } from "react-router-dom";


const NavBar: FC = () => {
 //state to keep track of style
 const [style, setStyle] = useState("flex flex-col  bg-white w-full fixed transition-all delay-200  p-2 font-sedan  md:text-2xl   justify-center items-center z-50 text-amber-900");
  //Disappearin Nav
  var pp = window.pageYOffset;

  //nav
  
  
  window.onscroll  = () => {
    var cp = window.pageYOffset;
    if(cp < pp){
      
      setStyle("flex flex-col  bg-white w-full fixed  p-2 font-sedan  md:text-2xl top-0 transition-all delay-150   justify-center items-center z-50 text-amber-900")
    }
    else{
      
      setStyle("flex flex-col  bg-white w-full fixed  p-2 font-sedan  md:text-2xl top-neg transition-all delay-150  shadow-md  justify-center items-center z-50 text-amber-900")
    }

    pp = cp ;

  }


  return (
    <div>
      <nav id="nav" className={style}>
        <h1 className="font-bold mb-4 text-2xl md:text-3xl  text-amber-900">AVARIA</h1>
        <ul className="flex text-sm ">
          <Link to="/rooms" className=" flex mr-4 uppercase hover:text-slate-400 cursor-pointer order-1">Rooms  </Link >
          <Link to="/" className="mr-4 uppercase hover:text-slate-400 cursor-pointer ">Home</Link >
          <Link to='/reservations' className="mr-4 uppercase hover:text-slate-400 cursor-pointer">Make Reservation </Link >
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
