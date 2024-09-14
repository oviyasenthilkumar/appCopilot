import React from "react";

import searchButton from "../../img/icon-4.svg";
import vector3 from "../../img/vector-3.svg";
import Locations from "./Locations";
import Layout from "../../layout/Layout";
import { Component } from "../../components/Component";

const Panel = ({ text }) => (
  <div className="relative w-auto h-[47px] ">
    <div className="relative w-auto h-[47px] bg-[#d9d9d940] rounded-[23.5px] flex items-center justify-center px-6">
      <div className="flex items-center">
        <div className="text-center text-[#2a2a33] text-sm font-light mr-2">
          {text}
        </div>
        <img className="h-1.5" alt="Vector" src={vector3} />
      </div>
    </div>
  </div>
);

export const CompareProperty = () => {
  return (
    <Layout>
      <div className="w-[1012px] h-[47px] my-6">
        <div className=" w-[236px] h-[47px] bg-[#f6f6fa] rounded-[23.5px] flex items-center p-[5px]">
          <input
            className="w-full h-full pl-6 bg-transparent border-none text-black text-xs font-normal"
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
      </div>
      <div className=" text-base font-semibold text-black">
        Madison Seattle Rental Listings
      </div>
      <div className=" self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#7a7a7a] text-sm tracking-[0] leading-[15.9px] pt-2">
        800sqft with View
      </div>

      <div>
        {[1, 2, 3, 4, 5, 5, 6, 6, 6, 5, 4, 4].map(() => {
          return (
            <div className="py-[10px]">
              <Locations />
            </div>
          );
        })}
      </div>
    </Layout>
  );
};
