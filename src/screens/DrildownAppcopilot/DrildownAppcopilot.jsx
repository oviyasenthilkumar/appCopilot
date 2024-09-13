import React from "react";
import { Component } from "../../components/Component";
import { useState } from "react";

import rectangle from "../../img/rectangle-9.svg";
import rectangle7 from "../../img/rectangle-7-1.png";
import fullLogo2 from '../../img/fulllogo-transparent-nobuffer-2-2.png';
import { IconPaginationPrev1 } from "../../icons/IconPaginationPrev1";
import line from '../../img/line-89-1.svg';
import line91 from '../../img/line-91.svg';
import next from '../../img/icon-pagination-next.svg';
import SidePanel from '../CompareProperty/SidePanel';
import group from '../../img/group-36811-5.png';
import poly3 from '../../img/polygon-3.svg';
import vector2 from '../../img/vector-2.svg';
import control from '../../img/control.svg';
import icon5 from '../../img/icon-5.svg';

// characteristics of a home -> db || default values
const characteristics = [
  'In-unit laundry',
  'Garage parking',
  'No A/C',
  'No heating',
  'Cats & small dogs'
];

// faq questions -> db || default values
const questions = [
  'What should I do if I notice suspicious activity on my account?',
  'How can I update my property listing?',
  'How do I change my email alert preferences?',
  'How do I reset my password?',
  'When should I raise or lower my rent price?',
  'What should I do if I notice suspicious activity on my account?'
];

// low, high, suggested prices -> db || default values
  // low price
  //high price
  //suggested price

export const DrildownAppcopilot = ({
  lowPrice=3500,
  highPrice=4500,
  suggestedRent=3779
}) => {

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1440px] h-[2474px] relative">

        {/* suggested rent and pull data */}
        <Component
          className="!border-[unset] !border-[unset] !absolute !left-[1287px] !top-[30px]"
          property1="group-30"
          pullDataClassName="!left-[34px] !top-[15px]"
        />
        <div className="absolute top-[29px] left-[397px] [font-family:'Poppins',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[normal]">
          Suggested Rent
        </div>

        {/* suggested rent panel (has static content)*/}
        <div className="absolute w-[1013px] h-[238px] top-[110px] left-[397px] rounded-[23.43px] [background:linear-gradient(180deg,rgb(180.56,230.46,246.5)_0%,rgb(255,204.95,159.59)_100%)]">
          <div className="absolute w-[418px] h-[121px] top-[71px] left-[38px]">
            <div className="flex flex-col w-[418px] items-start gap-[10.58px] relative">
              <div className="relative w-fit mt-[-0.76px] font-bold text-black text-[36.3px] leading-[37.8px] whitespace-nowrap [font-family:'Poppins',Helvetica] tracking-[0]">
                3806 W 20th Ave
              </div>
              <p className="relative w-fit font-medium text-black text-base leading-[normal] [font-family:'Poppins',Helvetica] tracking-[0]">
                Kennewick, WA 99338
                <br />3 beds • 2.5 baths • 2400 Sq Ft
                <br />
                Lease Expiry Date - 25/06/2024
              </p>
            </div>
          </div>
          <div className="absolute w-[471px] h-[190px] top-6 left-[518px] bg-white rounded-[18px]">
            <div className="absolute h-6 top-7 left-[33px] [font-family:'Poppins',Helvetica] font-bold text-[#2a2a33] text-xl tracking-[0] leading-6 whitespace-nowrap">
              Your Suggested Rent
            </div>
            <div className="absolute w-[263px] h-10 top-[68px] left-[33px]">
              <div className="absolute h-10 top-0 left-[33px] [font-family:'Poppins',Helvetica] font-bold text-orange text-4xl tracking-[0] leading-10 whitespace-nowrap">
                ${suggestedRent} /SqFT
              </div>
              <img className="absolute w-[23px] h-5 top-2.5 left-0.5" alt="Polygon" src={poly3} />
            </div>
            <p className="absolute h-6 top-[139px] left-[33px] [font-family:'Poppins',Helvetica] font-normal text-[#2a2a33] text-base tracking-[0] leading-6 whitespace-nowrap">
              <span className="[font-family:'Poppins',Helvetica] font-normal text-[#2a2a33] text-base tracking-[0] leading-6">
                Suggested rent range:{" "}
              </span>
              <span className="font-bold">${lowPrice} - ${highPrice}</span>
              <span className="[font-family:'Poppins',Helvetica] font-normal text-[#2a2a33] text-base tracking-[0] leading-6">
                &nbsp;
              </span>
            </p>
          </div>
        </div>

        {/* local rental marketlplace */}
        <div className="absolute w-[1015px] h-[1942px] top-[378px] left-[397px]">
          <div className="absolute top-[33px] left-8 [font-family:'Poppins',Helvetica] font-semibold text-black text-[32px] tracking-[0] leading-[20.4px] whitespace-nowrap">
            Local rental marketplace
          </div>
          <div className="absolute w-[1015px] h-[1942px] top-0 left-0">
            <div className="relative w-[1013px] h-[1942px] rounded-[18px]">
              <div className="absolute w-[1013px] h-[1942px] top-0 left-0 rounded-[18px] overflow-hidden border border-solid border-[#75757547]">
                
                {/* slider */}
                <Slider lowPrice={lowPrice} highPrice={highPrice}/>

                {/*panels*/}              
                <div className="inline-flex items-center gap-1.5 absolute top-[215px] left-8">
                  <div className="relative w-[154px] h-[47px]">
                    <div className="relative w-[152px] h-[47px] bg-[#d9d9d940] rounded-[23.5px]">
                      <img
                        className="absolute w-[11px] h-1.5 top-5 left-[124px]"
                        alt="Vector"
                        src={vector2}
                      />
                      <div className="absolute h-6 top-[11px] left-5 [font-family:'Poppins',Helvetica] font-light text-[#2a2a33] text-sm tracking-[0] leading-[24.0px] whitespace-nowrap">
                        Rental Status
                      </div>
                    </div>
                  </div>
                  <div className="relative w-[260px] h-[47px]">
                    <div className="relative w-[258px] h-[47px] bg-[#d9d9d940] rounded-[23.5px]">
                      <img
                        className="top-[22px] left-[230px] absolute w-[11px] h-1.5"
                        alt="Vector"
                        src={vector2}
                      />
                      <p className="absolute h-6 top-3 left-5 [font-family:'Poppins',Helvetica] font-light text-[#2a2a33] text-sm tracking-[0] leading-[24.0px] whitespace-nowrap">
                        No. of Properties to Compare
                      </p>
                    </div>
                  </div>
                  <div className="relative w-[254px] h-[47px] mr-[-2.00px]">
                    <div className="relative w-[252px] h-[47px] bg-[#d9d9d940] rounded-[23.5px]">
                      <img className="top-5 left-56 absolute w-[11px] h-1.5" alt="Vector" src={vector2} />
                      <p className="absolute h-6 top-[11px] left-5 [font-family:'Poppins',Helvetica] font-light text-[#2a2a33] text-sm tracking-[0] leading-[24.0px] whitespace-nowrap">
                        Any Distance (0.5 mi to 5 mi)
                      </p>
                    </div>
                  </div>
                </div>

                {/* map */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.534751918077!2d-79.05833323562939!3d35.909408769076656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89acc2e78bb7e6b5%3A0x1bb4af098c5b5238!2sGranville%20Towers!5e0!3m2!1sen!2sin!4v1726202127568!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="absolute w-[949px] h-[289px] top-[280px] left-8 object-cover"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                {/* carousel */}
                <Carousel />

                {/* previous Comparables */}
                <div className="absolute w-[949px] h-[43px] top-[1412px] left-8">
                  <div className="absolute w-[951px] h-6 top-0 left-0">
                    <div className="absolute w-[493px] h-6 top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-black text-xl tracking-[0] leading-6">
                      Previous Comparables
                    </div>
                    <img
                      className="absolute top-2 left-[933px] w-4 h-4"
                      alt="Icon pagination next"
                      src={next}
                    />
                  </div>
                  <img
                    className="absolute w-[949px] h-px top-[42px] left-0 object-cover"
                    alt="Line"
                    src={line}
                  />
                </div>

                {/* FAQ */}
                <div className="absolute w-[952px] h-[394px] top-[1506px] left-[29px]">
                  <div className="absolute w-[495px] h-6 top-0 left-[3px]">
                    <div className="absolute w-[493px] h-6 top-0 left-0 [font-family:'Poppins',Helvetica] font-medium text-black text-xl tracking-[0] leading-6">
                      Frequently Asked Questions
                    </div>
                  </div>
                  <img
                    className="top-[42px] left-[3px] absolute w-[949px] h-px object-cover"
                    alt="Line"
                    src={line}
                  />
                  {/* FAQ */}
                  <div className="flex flex-wrap w-[952px] items-start gap-[24px_20px] absolute top-[70px] left-0">
                    {
                      questions.map((i, index) => {
                        return <FAQ q={i}/>
                      })
                    }
                  </div>
                </div>
                
                {/* add more properties button  */}
                <div className="absolute w-44 h-[47px] top-[1350px] left-8">
                  <div className="relative w-[174px] h-[47px] bg-black rounded-[23.5px]">
                    <div className="absolute top-4 left-[25px] [font-family:'Poppins',Helvetica] font-semibold text-white text-xs text-center tracking-[0] leading-[normal]">
                      Add More Properties
                    </div>
                  </div>
                </div>
              </div>

              <p className="absolute w-[369px] top-[73px] left-8 [font-family:'Poppins',Helvetica] font-normal text-black text-lg tracking-[0] leading-[20.4px] whitespace-nowrap">
                Based on Suggested rent range of ${suggestedRent}
              </p>
              <img
                className="top-[116px] left-8 absolute w-[949px] h-px object-cover"
                alt="Line"
                src={line}
              />
              <div className="absolute w-[43px] h-[66px] top-[369px] left-[478px]">
                <div className="absolute w-[43px] h-1 top-[62px] left-0 bg-[#ff914d61] rounded-[21.5px/2.05px] border border-solid border-orange" />
                <img
                  className="absolute w-10 h-[62px] top-0 left-[3px]"
                  alt="Fulllogo transparent"
                  src={fullLogo2}
                />
              </div>
            </div>
          </div>
        </div>

        {/* side panel */}
        <SidePanel />
      </div>
    </div>
  );
};

function FAQ({q='What should I do if I notice suspicious activity on my account?'}) {
  return (
                    <div className="relative w-[466px] h-[92px] bg-[#f4f4f6] rounded-[18px]">
                      <div className="relative w-[413px] h-[46px] top-[23px] left-[27px]">
                        <p className="absolute w-[306px] top-0 left-0 [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0] leading-[23px]">
                          {q}
                        </p>
                        <div className="absolute w-[42px] h-[42px] top-0.5 left-[370px] bg-[#ff914d] rounded-lg">
                          <img
                            className="absolute w-[19px] h-[19px] top-[11px] left-[11px]"
                            alt="Group"
                            src={group}
                          />
                        </div>
                      </div>
                    </div>
  );
}

// Main Property Component
const Property = ({ rect }) => (
  <div className="relative w-[228px] h-[718px]">
    <div className="relative w-56 h-[718px] left-3.5">
      <ImageSection rect={rectangle7} />
      <RatingIndicator />
      <PropertyDetails />
      {/* <IconOverlay /> */}
    </div>
  </div>
);

// util functions of property
const ImageSection = ({ rect }) => (
  <div className="relative w-full h-[637px]">
    <img
      className="absolute w-[140px] h-[637px] top-[81px] left-[90px]"
      alt="Background Rectangle"
      src={rectangle}
    />
    <img
      className="absolute w-[240px] h-[174px] top-0 "
      alt="Top Rectangle"
      src={rect}
    />
  </div>
);

const RatingIndicator = () => (
  <div className="absolute w-9 h-[7px] top-[159px] left-[82px] bg-[#2a2a33] rounded-full">
    <div className="flex items-center space-x-1.5 absolute top-0 left-0.5">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className={`w-${i === 0 ? '10.75' : '3.39'} h-${i === 0 ? '4.52' : '3.39'} bg-white rounded-full ${i > 0 ? 'opacity-60' : ''}`}
        />
      ))}
    </div>
  </div>
);

const PropertyDetails = ({
  price='$3,750/mo',
  sqPirce = '$2.08 per sq ft',
  dist = '0.8 miles away',
  active = 'Active 1 day',
  beds='3',
  baths='2',
  sqft = '1,800'
}) => (
  <div className="absolute w-full top-[190px] left-0">
    <div className="font-bold text-black text-base"> {price} </div>
    <div className="text-[#2a2a33] text-sm mt-1"> {sqPirce} </div>
    <Line />
    <div className="font-bold text-orange text-sm"> 1621 166th Ave NE </div>
    <div className="text-[#2a2a33] text-sm mt-1"> {dist} </div>
    <div className="flex items-center mt-4">
      <div className="w-3 h-3 bg-green-500 rounded-md"></div>
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

function Module({val}) {
  return (
    <>
      <Line />
      <div className="text-[#2a2a33] text-sm"> {val} </div>
    </>
  );
}

function Line() {
  return (
    <img
      className="w-[126px] h-[1px] my-4"
      alt="Separator Line"
      src={line91}
    />
  );
}

const IconOverlay = () => (
  <div className="absolute w-[23px] h-[23px] top-1.5 left-[183px] bg-[#00000069] rounded-full backdrop-blur-sm backdrop-brightness-100">
    <img
      className="absolute w-[11px] h-3 top-1.5 left-1.5"
      alt="Overlay Icon"
      src={icon5}
    />
  </div>
);

function Slider({ lowPrice, highPrice }) {
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
  const handlePosition = `${((value - minValue) / (maxValue - minValue)) * 100}%`;

  return (
    <div className="relative w-[949px] h-[21px] top-[162px] left-8">
      {/* Slider Track Background */}
      <div className="absolute w-full h-2 top-1.5 left-0 bg-gray-200 rounded-full" />
      
      {/* Slider Fill */}
      <div
        className="absolute h-2 top-1.5 left-0 bg-orange-500 rounded-full"
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
    className="w-[100%] h-[50px]" // Adjust width and height as needed
  />
  <div className="text-black text-xs font-semibold">
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
      
      {/* Low Price Label */}
      <p className="absolute bottom-[25px] left-0 [font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0] leading-[17px]">
        <span className="font-bold">
          {`$${minValue}`}
        </span>
        <br />
        <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0] leading-[17px]">
          Low
        </span>
      </p>
      
      {/* High Price Label */}
      <p className="absolute bottom-[25px] right-0 [font-family:'Poppins',Helvetica] font-normal text-black text-base text-right tracking-[0] leading-[17px]">
        <span className="font-bold">
          {`$${maxValue}`}
        </span>
        <br />
        <span className="[font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[0] leading-[17px]">
          High
        </span>
      </p>
    </div>
  );
}

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const properties = [<Property />, <Property />, <Property />, <Property />, <Property />];

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
      <div className="flex items-start gap-3 absolute top-0 left-0 transition-transform duration-500"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {properties.map((property, index) => (
          <div key={index} className="inline-flex">
            {property}
          </div>
        ))}
      </div>
      <div className="inline-flex items-center gap-[939px] absolute top-[343px] left-[93px]">
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