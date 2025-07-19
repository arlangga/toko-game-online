import Image from "../assets/profilImage.jpg";
import ReuseableButton from "./button";

import Img1 from "../assets/bloodstrike.jpg"
import Img2 from "../assets/pubg.jpg"
import Img3 from "../assets/mobile-legends.jpg"
import Img4 from "../assets/free-fire.jpg"

const Hero = () => {
  return (
    <div className="w-full relative bg-cover bg-center h-screen"style={{ backgroundImage: `url(${Img4})` }}>
      <div className="absolute inset-0 bg-blue-600 bg-opacity-80"></div>
      <div className="container mx-auto p-5 "
      >
        
        <div className="gap-4 flex overflow-x-auto lg:grid lg:grid-cols-4 pt-4">

          <div className="relative overflow-hidden min-w-[200px] min-h-[350px] bg-purple-600 card-hero">
            <img
              src={Img1}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />

            <ReuseableButton className="absolute z-40 bottom-0 left-1/2 -translate-x-1/2 -translate-y-10 border bg-opacity-80 border-white font-bold w-28 text-white bg-yellow-600 hover:bg-yellow-400 hover:bg-opacity-90">
              Top Up
            </ReuseableButton>
          </div>

          <div className="relative overflow-hidden min-w-[200px] min-h-[350px] bg-purple-800 card-hero">
            <img
              src={Img2}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <ReuseableButton className="absolute z-40 bottom-0 left-1/2 -translate-x-1/2 -translate-y-10 border bg-opacity-80 border-white font-bold w-28 bg-yellow-600 hover:bg-yellow-400 hover:bg-opacity-90">
              Top Up
            </ReuseableButton>
          </div>

          <div className="relative overflow-hidden min-w-[200px] min-h-[350px] bg-purple-600 card-hero">
            <img
              src={Img3}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <ReuseableButton className="absolute z-40 bottom-0 left-1/2 -translate-x-1/2 -translate-y-10 border bg-opacity-80 border-white font-bold w-28 bg-yellow-600 hover:bg-yellow-400 hover:bg-opacity-90">
              Top Up
            </ReuseableButton>
          </div>

          <div className="relative overflow-hidden min-w-[200px] min-h-[350px] bg-purple-800 card-hero">
            <img
              src={Img4}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
            <ReuseableButton className="absolute z-40 bottom-0 left-1/2 -translate-x-1/2 -translate-y-10 border bg-opacity-80 border-white font-bold w-28 bg-yellow-600 hover:bg-yellow-400 hover:bg-opacity-90">
              Top Up
            </ReuseableButton>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
