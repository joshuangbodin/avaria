//Card import
import Card from "./card";

interface Props {}

const CardList = ({}: Props) => {
  return (
    <div>
    <div className="flex py-40 flex-col relative px-4 md:flex-row gap-16 w-full justify-center items-center">
      <Card
        imgUrl="bar.jpg"
        head="Bar"
        des="Enjoy Martinis , African Zombies and other Mouth Watering Cocktails made with love by our someliers "
      />
      <Card
        imgUrl="hallway.jpg"
        head="Lobby"
        des="Squeakly Clean, Picture Worthy Architectural decor, friendly environment with even friendlier employees "
        
      />
      <Card
        imgUrl="room2.jpg"
        head="Rooms"
        des="Enjoy Decorated rooms that provide luxury and Comfortability ,  Room Service and Complimentary treats. "
      />
      <img
        src="room7.jpg"
        className=" absolute top-0 -z-[90]   brightness-[35%] md:brightness-[55%] w-full h-full object-cover"
      />
      
    </div></div>
  );
};

export default CardList;
