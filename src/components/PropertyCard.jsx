import React from "react";

import rectangle from "../../src/img/rectangle-7-10.png";
import rectangle7 from "../../src/img/rectangle-7-1.png";
import line from "../../src/img/line-89-1.svg";
import line91 from "../../src/img/line-91.svg";

const PropertyCard = ({ key }) => {
  const characteristics = [
    "In-unit laundry",
    "Garage parking",
    "No A/C",
    "No heating",
    "Cats & small dogs",
  ];
  // util functions of property
  const ImageSection = ({ rect }) => (
    <div className=" w-full h-[174px]">
      <img className=" h-[174px]" alt="Background Rectangle" src={rectangle} />
    </div>
  );
  function Line() {
    return (
      <img
        className="w-[126px] h-[1px] my-4"
        alt="Separator Line"
        src={line91}
      />
    );
  }

  function Module({ val }) {
    return (
      <>
        <Line />
        <div className="text-[#2a2a33] text-sm"> {val} </div>
      </>
    );
  }

  const RatingIndicator = () => (
    <div>
      <div className="flex items-center space-x-1.5">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`w-${i === 0 ? "10.75" : "3.39"} h-${
              i === 0 ? "4.52" : "3.39"
            } bg-white rounded-full ${i > 0 ? "opacity-60" : ""}`}
          />
        ))}
      </div>
    </div>
  );

  const PropertyDetails = ({
    price = "$3,750/mo",
    sqPirce = "$2.08 per sq ft",
    dist = "0.8 miles away",
    active = "Active 1 day",
    beds = "3",
    baths = "2",
    sqft = "1,800",
  }) => (
    <div className=" w-full p-[12px] pl-[22px]  ">
      <div className="font-bold text-black text-base"> {price} </div>
      <div className="text-[#2a2a33] text-sm mt-1"> {sqPirce} </div>
      <Line />
      <div className="font-bold text-orange text-sm"> 1621 166th Ave NE </div>
      <div className="text-[#2a2a33] text-sm mt-1"> {dist} </div>
      <div className="flex items-center mt-4">
        <div className="w-3 h-3 bg-green rounded-md"></div>
        <span className="ml-2 text-[#2a2a33] text-sm"> {active} </span>
      </div>
      <Line />
      <div className="text-[#2a2a33] text-sm"> {beds} beds </div>
      <div className="text-[#2a2a33] text-sm mt-1"> {baths} baths </div>
      <div className="text-[#2a2a33] text-sm mt-1"> {sqft} sq ft </div>

      {characteristics.map((char, index) => (
        <Module val={char} key={index} />
      ))}
    </div>
  );

  return (
    <div
      className=" w-[228px] pb-[12px] border flex flex-row justify-between rounded-2xl border-grey "
      key={key}
    >
      <div className="h-[718px] ">
        <ImageSection rect={rectangle7} />

        <PropertyDetails />
      </div>
    </div>
  );
};

export default PropertyCard;
