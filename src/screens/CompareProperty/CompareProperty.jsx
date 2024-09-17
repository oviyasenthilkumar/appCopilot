import React, { useState } from "react";
import searchButton from "../../img/icon-4.svg";
import vector3 from "../../img/vector-3.svg";
import Locations from "./Locations";
import Layout from "../../layout/Layout";
import { Component } from "../../components/Component";
import { useNavigate } from "react-router-dom";
import vector2 from "../../img/vector-2.svg";

const Panel = ({ text, options, iconSrc }) => {
  return (
    <div className="flex text-black  items-center  bg-[#F5F7F8]  rounded-[25px] cursor-pointer p-[12px]">
      {/* Wrap select in a label */}
      <label>
        <select className="bg-transparent text-[14px] font-light focus:outline-none focus:border-blue-500 cursor-pointer">
          {options.map((option, idx) => (
            <option key={idx} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/* Custom Icon */}
      </label>
     
    </div>
  );
};

export const CompareProperty = () => {
  const navigate = useNavigate();
  return (
    <Layout title={"Search & Compare"}>
      <div className="[font-family:Poppins,Helvetica] font-bold h-[47px] my-6 flex justify-between gap-[10px]">
        <div className="w-[25%] h-[47px] bg-[#f6f6fa] rounded-[23.5px] flex items-center p-[5px]">
          <input
            className="w-full h-full pl-6 bg-transparent border-none text-black text-xs font-normal rounded-[25px]"
            placeholder="Search..."
          />
          <div className="bg-white p-[12px] rounded-full w-[41px] h-[41px] drop-shadow-md">
            <img
              className="w-[18px] h-[18px] mr-6"
              alt="Search Icon"
              src={searchButton}
            />
          </div>
        </div>

        {[
          {
            text: "Amenities",
            options: [
              "Amenities",
              "View",
              "Balcony/Patio",
              "Parking",
              "Pet-Friendly",
              "Gym",
              "Swimming Pool",
            ],
          },
          {
            text: "Square Feet",
            options: [
              "Square Feet",
              "500-1000",
              "1000-1500",
              "1500-2000",
              "2000-2500",
              "2500-3000",
              "3000-5000",
              "5000+",
            ],
          },
          {
            text: "Leasing End Date",
            options: [
              "Leasing End Date",
              "All",
              "1-3 Months",
              "3-6 Months",
              "6-9 Months",
              "9-12 Months",
              "12-15 Months",
            ],
          },
          {
            text: "Listing Type",
            options: [
              "Listing Type",
              "All Listings",
              "Active Listings",
              "Rented Listings",
            ],
          },
        ].map((item, idx) => (
          <Panel
            key={idx}
            text={item.text}
            options={item.options}
            iconSrc="vector2"
          />
        ))}

        {/* saved button */}
        <div className="relative w-[124px] h-[47px]">
          <div className="relative w-[122px] h-[47px] bg-black  rounded-[23.5px]">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 [font-family:'Poppins',Helvetica] font-semibold text-white text-[16px] text-center">
              search
            </div>
          </div>
        </div>
      </div>
      <div className=" text-base [font-family:Poppins,Helvetica] font-semibold  text-black">
        Madison Seattle Rental Listings
      </div>
      <div className=" self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#7a7a7a] text-sm tracking-[0] leading-[15.9px] pt-2">
        800sqft with View
      </div>

      <div>
        {[1, 2, 3, 4, 5, 5, 6, 6, 6, 5, 4, 4].map(() => {
          return (
            <div className="py-[10px]">
              <Locations navigate={navigate} />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
