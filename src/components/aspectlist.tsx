//aspectcard import
import AspectCard from "./AspectCard";

interface Props {}

const AspectList = ({}: Props) => {
  return (
    <div className="flex  mx-8 lg:mx-24 gap-2 flex-wrap  lg:flex-nowrap justify-center items-center">
      <AspectCard
        imgURL={"Restaurant.jpg"}
        header={"Restaurant"}
        des={
          '"Savor exquisite flavors at our restaurant! Indulge in culinary delights crafted with passion and precision. Whether its a cozy dinner or a vibrant lunch, we offer an unforgettable dining experience. Join us and elevate your taste journey today!"'
        }
      />
      <AspectCard
        imgURL={"gym.jpg"}
        header={"Gym"}
        des={
          '"Transform your body and energize your spirit at our state-of-the-art gym! With top-notch equipment, expert trainers, and a motivating atmosphere, reaching your fitness goals has never been more exciting. Join us today and unleash your full potential!"'
        }
      />
      <AspectCard
        imgURL={"poolview.jpg"}
        header={"Swimming Pool"}
        des={
          '"Dive into luxury at our state-of-the-art pool! Whether you are seeking a refreshing swim or a leisurely soak, our pristine waters and tranquil ambiance await. Join us for a splash of relaxation today!"'
        }
      />
      <AspectCard
        imgURL={"view.jpg"}
        header={"View"}
        des={
          '"Unbeatable land views await! Escape the ordinary and embrace the extraordinary with our stunning land parcels. Breathtaking vistas, serene landscapes, and endless possibilities. Your dream home starts here. Contact us now!"'
        }
      />
    </div>
  );
};

export default AspectList;
