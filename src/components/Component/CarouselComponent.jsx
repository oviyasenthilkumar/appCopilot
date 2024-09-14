import React, { useState } from "react";
import PropertyCard from "../PropertyCard";
import next from "../../img/icon-pagination-next.svg";
import group from "../../img/group-36811-5.png";
import poly3 from "../../img/polygon-3.svg";
import vector2 from "../../img/vector-2.svg";
import Control from "../../img/control.svg";
import { IconPaginationPrev1 } from "../../icons/IconPaginationPrev1";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = () => {
  // Sample data for the cards
  const cards = [
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
    { id: 3, title: "Card 3" },
    { id: 4, title: "Card 4" },
    { id: 5, title: "Card 5" },
    { id: 6, title: "Card 6" },
    { id: 7, title: "Card 7" },
  ];
  // State to track the current index (which set of cards is shown)
  const [currentIndex, setCurrentIndex] = useState(0);
  // Number of cards to show at once
  const itemsToShow = 3;
  // Function to go to the next set of cards
  const next = () => {
    if (currentIndex + itemsToShow < cards.length) {
      setCurrentIndex(currentIndex + itemsToShow);
    }
  };
  // Function to go to the previous set of cards
  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - itemsToShow);
    }
  };
  return (
    <div className="absoulte w-full max-w-5xl  ">
      <div className=" flex items-center">
        <div
          className="flex flex-col w-8 h-8 items-center justify-center gap-2.5 p-2.5 relative bg-[#ff914d] rounded-lg  cursor-pointer"
          onClick={prev}
        >
          <IconPaginationPrev1
            className="!relative !mt-[-2.00px] !mb-[-2.00px] !ml-[-2.00px] !mr-[-2.00px] !w-4 !h-4"
            color="white"
          />
        </div>
        {/* Cards container */}
        <div className="flex overflow-hidden w-[1188px] ">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(100 / itemsToShow) * currentIndex}%)`,
            }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="min-w-[calc(100%/50)] p-2 flex-shrink-0"
              >
                <PropertyCard />
              </div>
            ))}
          </div>
        </div>
        {/* Right Arrow */}
        <img
          className="relative w-8 h-8 cursor-pointer"
          alt="Control"
          src={Control}
          onClick={next}
        />
      </div>
    </div>
  );
};

export default CarouselComponent;
