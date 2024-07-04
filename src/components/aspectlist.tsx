//aspectcard import


interface Props {}

const AspectList = ({}: Props) => {
  return (
    <div className="flex relative h-[60vh]  gap-2 flex-wrap  justify-center items-center">
      <img src="Restaurant.jpg" className=" h-full -z-50 object-cover brightness-[55%] absolute top-0 w-full " alt="" />
      <div className=" md:w-3/6 p-3 font-sedan text-white">
      <h3 className=" text-center font-cinzel mb-4 font-bold text-lg md:text-2xl flex flex-col md:justify-center md:items-center">Testimonials</h3>
        <p className=" text-center text-4xl   text-amber-400 font-semibold">"</p>
        < p className=" text-center  text-md md:text-lg lg:text-xl ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia laudantium tenetur adipisci culpa iure officiis, possimus ex? Cum quos quisquam, voluptatem quam ex pariatur aspernatur blanditiis dolorum, magni eum inventore.</p>
        <p className=" text-center text-xs md:text-md lg:text-lg pt-4 font-bold">Daniel A Hughes</p>
      </div>
    </div>
  );
};

export default AspectList;
