import React from "react";
import { IoLocationSharp } from "react-icons/io5";

const PlacesCard = ({ img, titel, type, price, location,description }) => {
  return (
    <>
      <div
        data-aos="fade-up" data-aos-delay="500"
        className="shadow-lg transiton-all duration-500
      hover:shadow-xl cursor-pointer rounded-b-[5px] "
      >
        <div className="overflow-hidden rounded-t-[5px] ">
          <img
            src={img}
            alt=""
            className="mx-auto h-[220px]
          w-full object-cover transition duration-700 hover:skew-x-2
          hover:scale-110"
          />
        </div>

        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-bold text-xl">{titel}</h1>
          <div className="flex items-center gap-2 opacity-70 ">
            <IoLocationSharp />
            <span>{location}</span>
          </div>
          <p className="line-clamp-2">{description}</p>
          <div
            className="flex items-center
      justify-between border-t-2 y-3 !mt-3"
          >
            <div className="opacity-70">
              <p>{type}</p>
            </div>
            <div className="opacity-70">
              <p
                className="text-2xl font-bold
                "
              >
                Rp.{price}.000
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlacesCard;
