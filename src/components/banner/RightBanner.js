import React from "react";
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full  lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="transform w-96 border-[8px] object-cover border-gray-700 scale-x-[-1] rounded-full lgl:w-[400px] lgl:h-[400px] z-10"
        // src={bannerImg}
        src={"https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg"}
        alt="bannerImg"
      />
    </div>
  );
};

export default RightBanner;
