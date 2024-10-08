import React from "react";
import { useState } from "react";
import fullLogo2 from "../../img/fulllogo-transparent-nobuffer-2-2.png";
import { IconPaginationPrev1 } from "../../icons/IconPaginationPrev1";
import line91 from "../../img/line-91.svg";
import vector2 from "../../img/vector-2.svg";
import control from "../../img/control.svg";
import icon5 from "../../img/icon-5.svg";
import Layout from "../../layout/Layout";
import AdressCard from "../../components/Component/AdressCard";
import PropertyCard from "../../components/PropertyCard";
import CarouselComponent from "../../components/Component/CarouselComponent";

const faqData = [
  {
    question: "What should I do if I notice suspicious activity on my account?",
    answer:
      "You should immediately report the suspicious activity to your account provider and change your account password.",
  },
  {
    question: "How can I update my property listing?",
    answer:
      "To update your property listing, log in to your account and navigate to the 'Manage Listings' section.",
  },
  {
    question: "How do I change my email alert preferences?",
    answer:
      "Go to your account settings and select 'Email Preferences' to adjust your alert settings.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login page and follow the instructions to reset your password.",
  },
  {
    question: "When should I raise or lower my rent price?",
    answer:
      "Consider adjusting your rent price based on market trends, property condition, and rental demand.",
  },
  {
    question: "What should I do if I notice suspicious activity on my account?",
    answer:
      "You should immediately report the suspicious activity to your account provider and change your account password.",
  },
];

// low, high, suggested prices -> db || default values
// low price
//high price
//suggested price

export const DrildownAppcopilot = ({
  lowPrice = 3500,
  highPrice = 4500,
  suggestedRent = 3779,
}) => {
  const [value, setValue] = useState(3779);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Calculate position for the thumb tooltip
  const getThumbPosition = () => {
    return `${((value - 3027) / (4350 - 3027)) * 100}%`;
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Layout title="Suggested Rent">
      <AdressCard lowPrice={3500} highPrice={4500} suggestedRent={3779} />
      <div className="bg-white w-full p-[24px] border rounded-2xl border-grey ">
        <div className="">
          <p className="[font-family:Poppins,Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-2 whitespace-nowrap">
            Local Rental marketlplace
          </p>
          <p className="[font-family:Poppins,Helvetica] font-normal4 text-black text-[18px] tracking-[0] leading-2 whitespace-nowrap">
            Based on Suggested rent range of ${suggestedRent}
          </p>
          <div className="h-[1px] bg-grey my-[16px]" />
        </div>
        <Slider
          lowPrice={lowPrice}
          highPrice={highPrice}
          suggestedRent={suggestedRent}
        />
        {/*panels*/}
        <Panel />
        {/* Map */}
        <Map />
        <div className="overflow-hidden">
          <CarouselComponent />
        </div>
        <div className="mt-10">
          <p className="[font-family:Poppins,Helvetica] font-bold text-xl text-black text-[18px] tracking-wide leading-2 whitespace-nowrap">
            Frequently Asked Questions
          </p>
          <div className="h-[1px] bg-grey my-[16px]" />
          <div className="flex  flex-row gap-10">
            {/* {[1, 2, 3].map(() => {
              return ;
            })} */}
            <FAQList />
          </div>
        </div>
      </div>
    </Layout>
  );
};

const Map = () => {
  return (
    <div className="my-10">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.534751918077!2d-79.05833323562939!3d35.909408769076656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acc2e78bb7e6b5%3A0x1bb4af098c5b5238!2sGranville%20Towers!5e0!3m2!1sen!2sin!4v1726202127568!5m2!1sen!2sin"
        width="600"
        height="450"
        style={{ border: 0, borderRadius: 18 }}
        allowFullScreen=""
        loading="lazy"
        className="w-full h-[289px] rounded-sm object-cover"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};
const Panel = () => {
  return (
    <>
      <div className="inline-flex items-center gap-1.5 relative top-5">
        {/* Rental Status */}
        <div
          className="relative w-[154px] h-[47px] cursor-pointer"
          onClick={() =>
            document.getElementById("rental-status-select").click()
          }
        >
          <div className="relative w-[152px] h-[47px] bg-[#d9d9d940] rounded-[23.5px] flex items-center">
            <img
              className="absolute w-[11px] h-1.5 top-5 left-[124px]"
              alt="Vector"
              src={vector2}
            />
            <select
              id="rental-status-select"
              className="absolute text-center inset-0 w-full h-full bg-transparent appearance-none [font-family:'Poppins',Helvetica] font-light text-[#2a2a33] text-sm tracking-[0] leading-[24.0px] cursor-pointer focus:outline-none"
            >
              <option value="Rental Status">Rental Status</option>
              <option value="Active">Active</option>
              <option value="Rented">Rented</option>
              <option value="Off-Market">Off-Market</option>
            </select>
          </div>
        </div>

        {/* No. of Properties to Compare */}
        <div
          className="relative w-[260px] h-[47px] cursor-pointer"
          onClick={() => document.getElementById("properties-select").click()}
        >
          <div className="relative w-[258px] h-[47px] bg-[#d9d9d940] rounded-[23.5px] flex items-center">
            <img
              className="top-[22px] left-[230px] absolute w-[11px] h-1.5"
              alt="Vector"
              src={vector2}
            />
            <select
              id="properties-select"
              className="absolute text-center inset-0 w-full h-full bg-transparent appearance-none [font-family:'Poppins',Helvetica] font-light text-[#2a2a33] text-sm tracking-[0] leading-[24.0px] cursor-pointer focus:outline-none"
            >
              <option value="No. of Properties to Compare">
                No. of Properties to Compare
              </option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9+">9+</option>
            </select>
          </div>
        </div>

        {/* Any Distance */}
        <div
          className="relative w-[254px] h-[47px] mr-[-2.00px] cursor-pointer"
          onClick={() => document.getElementById("distance-select").click()}
        >
          <div className="relative w-[252px] h-[47px] bg-[#d9d9d940] rounded-[23.5px] flex items-center">
            <img
              className="top-5 left-56 absolute w-[11px] h-1.5"
              alt="Vector"
              src={vector2}
            />
            <select
              id="distance-select"
              className="absolute text-center inset-0 w-full h-full bg-transparent appearance-none [font-family:'Poppins',Helvetica] font-light text-[#2a2a33] text-sm tracking-[0] leading-[24.0px] cursor-pointer focus:outline-none"
            >
              <option value="Any Distance">
                Any Distance (0.5 mi to 5 mi)
              </option>
              <option value="0.5 mi">0.5 mi</option>
              <option value="1 mi">1 mi</option>
              <option value="2 mi">2 mi</option>
              <option value="3 mi">3 mi</option>
              <option value="5 mi">5 mi</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

function FAQ({ q, a, isExpanded, onToggle }) {
  return (
    <div className="w-full md:w-[100%] bg-[#f4f4f6] rounded-[18px] p-[18px] mb-4">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={onToggle}
      >
        <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-base leading-[23px]">
          {q}
        </p>
        <div className="w-[41px] h-[41px] bg-[#ff914d] rounded-lg flex justify-center items-center">
          <span className="text-white text-lg">{isExpanded ? "-" : "+"}</span>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4 p-4 bg-white rounded-lg">
          <p className="[font-family:'Poppins',Helvetica] text-black text-base leading-[23px]">
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

function FAQList() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="flex flex-wrap">
      {faqData.map((item, index) => (
        <FAQ
          key={index}
          q={item.question}
          a={item.answer}
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
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

function Line() {
  return (
    <img className="w-[126px] h-[1px] my-4" alt="Separator Line" src={line91} />
  );
}

const IconOverlay = () => (
  <div className=" w-[23px] h-[23px] top-1.5 left-[183px] bg-[#00000069] rounded-full backdrop-blur-sm backdrop-brightness-100">
    <img
      className=" w-[11px] h-3 top-1.5 left-1.5"
      alt="Overlay Icon"
      src={icon5}
    />
  </div>
);
function Slider({ lowPrice, highPrice, suggestedRent }) {
  const [value, setValue] = useState(lowPrice); // Initialize slider value with lowPrice
  const minValue = lowPrice; // Minimum value of the slider
  const maxValue = highPrice; // Maximum value of the slider

  // Handle slider value change
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // Calculate the width of the filled part of the slider
  const filledWidth = `${((value - minValue) / (maxValue - minValue)) * 100}%`;

  // Calculate the position of the handle
  const handlePosition = `${
    ((value - minValue) / (maxValue - minValue)) * 100
  }%`;

  return (
    <div>
      <div className="flex justify-between my-2">
        <div className="flex flex-col bottom-[25px] left-0 [font-family:'Poppins',Helvetica] font-normal text-grey1 text-base tracking-[0] leading-[17px]">
          <p className="font-bold tracking-wider">{`$${lowPrice}`}</p>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-grey1 text-base tracking-[0] leading-[17px]">
            Low
          </p>
        </div>
        <div className="flex flex-col bottom-[25px] left-0 [font-family:'Poppins',Helvetica] font-normal text-grey1 text-base tracking-[0] leading-[17px]">
          <p className="font-bold tracking-wider">{`$${highPrice}`}</p>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-grey1 text-base tracking-[0] leading-[17px] self-end">
            High
          </p>
        </div>
      </div>
      <div className="relative  h-[21px]">
        {/* Slider Track Background */}
        <div className="absolute w-full h-2 top-1.5 left-0 bg-grey rounded-full" />

        {/* Slider Fill */}
        <div
          className="absolute h-2 top-1.5 left-0 bg-orange rounded-full"
          style={{ width: filledWidth }}
        />

        {/* Slider Handle */}
        <div
          className="absolute w-[70px] h-[24px] bg-orange-500 rounded-full flex items-center justify-center"
          style={{ left: `calc(${handlePosition} - 12px)` }} // Center the handle
        >
          <img
            src={fullLogo2}
            alt="Logo" // Add an alt attribute for accessibility
            className="w-[100%] h-[50px] z-10 -mt-5 ml-5" // Adjust width and height as needed
          />
          <div className="text-white text-xs font-semibold bg-orange px-[12px] py-[2px] rounded-full -ml-2">
            ${value.toLocaleString()}
          </div>
        </div>

        {/* Range Input (Hidden) */}
        <input
          type="range"
          min={minValue}
          max={maxValue}
          value={value}
          onChange={handleChange}
          className="absolute top-1.5 left-0 w-full cursor-pointer opacity-0 z-10"
        />
      </div>
    </div>
  );
}

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const properties = [
    <PropertyCard />,
    <PropertyCard />,
    <PropertyCard />,
    <PropertyCard />,
    <PropertyCard />,
    <PropertyCard />,
    <PropertyCard />,
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? properties.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === properties.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-[1188px] h-[718px] top-[597px] left-[-88px] overflow-hidden">
      <div
        className="flex items-start gap-3  top-0 left-0 transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {properties.map((property, index) => (
          <div key={index} className="inline-flex">
            {property}
          </div>
        ))}
      </div>
      <div className="inline-flex items-center gap-[939px]  top-[343px] left-[93px]">
        <div
          className="flex flex-col w-8 h-8 items-center justify-center gap-2.5 p-2.5 relative bg-[#ff914d] rounded-lg border border-solid cursor-pointer"
          onClick={prevSlide}
        >
          <IconPaginationPrev1
            className="!relative !mt-[-2.00px] !mb-[-2.00px] !ml-[-2.00px] !mr-[-2.00px] !w-4 !h-4"
            color="white"
          />
        </div>
        <img
          className="relative w-8 h-8 cursor-pointer"
          alt="Control"
          src={control}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};
