import React from "react";

import rectangle from "../../src/img/rectangle-7-10.png";
import rectangle7 from "../../src/img/rectangle-7-1.png";
import line from "../../src/img/line-89-1.svg";
import line91 from "../../src/img/line-91.svg";
import property from "../img/myproperty.png";

const PropertyCard = ({ key, card }) => {
  const characteristics = [
    "In-unit laundry",
    "Garage parking",
    "No A/C",
    "No heating",
    "Cats & small dogs",
  ];
  // util functions of property
  const ImageSection = ({ rect, card }) => (
    <div className=" w-full h-[174px] ">
      <img className=" h-[174px]" alt="Background Rectangle" src={card.img} />
    </div>
  );
  function Line(card) {
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
  const MyPropertyCard = ({ card }) => {
    return (
      <>
        <div className="w-full p-[12px] pl-[22px] text-center [font-family:Poppins,Helvetica] ">
          {" "}
          {/* Applied text-center to the parent container */}
          <div className={card.icon ? "block mt-4 p-5" : "hidden"}>
            <img src={card.icon} className="mx-auto w-16 h-18" />
          </div>
          <div className="font-bold text-black text-base"> {card.price} </div>
          <div className="text-[#2a2a33] text-[15px] mt-1 pt-[13px]">
            {" "}
            {card.sqPirce}{" "}
          </div>
          <div className="font-bold text-orange text-sm pt-[2.5rem] pb-[10px]">
            {" "}
            2406 175th Ave NE{" "}
          </div>
          {/* Centering the button */}
          <div className="flex items-center justify-center">
            <button className="bg-black text-white py-3 px-4 rounded-[25px] text-sm">
              Adjust Price
            </button>
          </div>
          <div className="text-[#2a2a33] text-sm font-bold pt-[1.5rem]">
            {" "}
            No. of showings : {card.show}
          </div>
          <div className="text-[#2a2a33] text-sm font-bold pt-[10px]">
            {" "}
            No. of viewed :{card.view}{" "}
          </div>
          <div className="text-[#2a2a33] text-sm font-bold pt-[10px]">
            {" "}
            {card.beds} beds{" "}
          </div>
          <div className="text-[#2a2a33] text-sm mt-1 font-bold pt-[10px]">
            {" "}
            {card.baths} baths{" "}
          </div>
          <div className="text-[#2a2a33] text-sm mt-1 font-bold pt-[10px]">
            {" "}
            {card.sqft} sq ft{" "}
          </div>
        </div>
      </>
    );
  };
  const PropertyDetails = ({ card }) => (
    <div className=" w-full p-[12px] pl-[22px] pb-[22px] ">
      <div className="font-bold text-black text-base"> {card.price} </div>
      <div className="text-[#2a2a33] text-[15px] mt-1"> {card.sqPirce} </div>
      <Line />
      <div className="font-bold text-orange text-sm"> 1621 166th Ave NE </div>
      <div className="text-[#2a2a33] text-sm mt-1"> {card.dist} </div>
      <div className="flex items-center mt-4">
        <div className="w-3 h-3 bg-green rounded-md"></div>
        <span className="ml-2 text-[#2a2a33] text-sm"> {card.active} </span>
      </div>
      <Line />
      <div className="text-[#2a2a33] text-sm"> {card.beds} beds </div>
      <div className="text-[#2a2a33] text-sm mt-1"> {card.baths} baths </div>
      <div className="text-[#2a2a33] text-sm mt-1"> {card.sqft} sq ft </div>

      {characteristics.map((char, index) => (
        <Module val={char} key={index} />
      ))}
    </div>
  );

  return (
    <div className="pb-[12px]" key={key}>
      <div className="h-[718px] border border-grey rounded-t-[61px] rounded-br-[25px] rounded-bl-[25px] border-t-0">
        <ImageSection rect={rectangle7} card={card} />
        {card.status ? (
          <MyPropertyCard card={card} />
        ) : (
          <PropertyDetails card={card} />
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
