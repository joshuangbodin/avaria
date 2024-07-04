type Props = {};

const AboutUs = ({}: Props) => {
  return (
    <div className=" w-full h-[500px] justify-center items-center  text-center md:text-start bg-amber-950 flex md:px-20  text-white">
      <div className=" hidden md:flex justify-center items-center  h-full w-[40%] relative overflow-hidden">
        <img className=" relative -top-10  border-amber-950 border-[7px] w-1/2 h-[60%] object-cover" src="gym.jpg" alt="" />
        <img className=" relative -left-10 top-5 border-amber-950 border-[7px] w-1/2 h-[60%] object-cover" src="stairs.jpg" alt="" />
      </div>
      <div className="flex text-sm md:text-md flex-col  items-center justify-center md:w-2/5   p-6 h-auto font-sedan ">
        <h4 className="flex font-cinzel capitalize  text-lg md:text-2xl lg:text-4xl font-bold md:self-start mb-4">
          {" "} Experience that can't be forgotten{" "}
        </h4>
        <p>
          Welcome to Avaria, where luxury meets comfort, and every guest is
          treated like royalty. Nestled in the heart of Geneva, our hotel is a
          sanctuary of sophistication and tranquility, offering a retreat from
          the bustling energy of urban life. At Avaria, we pride ourselves on
          delivering unparalleled hospitality, ensuring that each moment of your
          stay is memorable. 
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
