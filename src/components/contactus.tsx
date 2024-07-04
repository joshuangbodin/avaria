import MapT from "./Map";


interface Props {}

const ContactUs = ({}: Props) => {
  return (
    <div className="flex flex-col w-full justify-center min-h-max  max-h-[200vh] items-center p-6 bg-amber-950">
      <div className="flex flex-col items-center w-full   font-cinzel font-semibold">
        <h4 className="flex text-xl p-5 items-center font-extrabold text-white ">
          {" "}
          Contact Us{" "}
        </h4>
      </div>
      {/*Map Component*/}
      <div className=" w-full flex flex-col md:flex-row gap-12 h-perf justify-center items-center rounded-lg ">
        <div>
          <MapT />
        </div>
        <form className="w-[80%] md:w-[400px] flex flex-col gap-10 h-[350px]" action="">
          <input  className =" bg-transparent border-b p-2 placeholder:text-white text-white placeholder:font-sedan " type="text" name="" placeholder="name" id="" />
          <input  className =" bg-transparent border-b p-2 placeholder:text-white text-white placeholder:font-sedan " type="email" name="" placeholder=" email" id="" />
          <textarea name="" className=" bg-black/10 border-b placeholder:text-white text-white p-2" placeholder="Message..." rows={5} id=""></textarea>
          <button className="border text-white h-12 hover:scale-90">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
