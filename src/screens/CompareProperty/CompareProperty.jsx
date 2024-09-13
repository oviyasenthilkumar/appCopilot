import React from "react";

import searchButton from '../../img/icon-4.svg';
import vector3 from '../../img/vector-3.svg';
import Locations from './Locations';
import SidePanel from './SidePanel';
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
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[1440px] h-[3568px] relative">
        {/*pull data button*/}
        <Component
          className="!border-[unset] !border-[unset] !absolute !left-[1287px] !top-[30px]"
          property1="group-30"
          pullDataClassName="!left-[34px] !top-[15px]"
        />

       {/* Search bar */}
<div className="absolute w-[1012px] h-[47px] top-[103px] left-[397px]">
  <div className="relative w-[236px] h-[47px] bg-[#f6f6fa] rounded-[23.5px] flex items-center">
    <input
      className="w-full h-full pl-6 bg-transparent border-none text-black text-xs font-normal"
      placeholder="Search..."
    />
    <img className="w-[18px] h-[18px] mr-6" alt="Search Icon" src={searchButton} />
  </div>

  <div className="flex w-[768px] h-[47px] items-center gap-[11px] absolute top-0 left-[244px]">
    {['Amenities', 'Square Feet', 'Leasing End Date Range', 'Listing Type'].map((text, idx) => (
      <Panel key={idx} text={text} />
    ))}
  </div>
</div>


        {/* saved button */}
        <div className="relative w-[124px] h-[47px]">
            <div className="relative w-[122px] h-[47px] bg-black left-[1291px] top-[105px] rounded-[23.5px]">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 [font-family:'Poppins',Helvetica] font-semibold text-white text-m text-center">

                    search
                </div>
            </div>
        </div>

        {/* Title */}
        <div className="absolute top-[29px] left-[397px] text-black text-[32px] font-semibold bg-white">
          Search & Compare
        </div>

        {/* Location listings */}
        <div className="absolute top-[188px] left-[397px] text-base font-semibold text-black">
          Madison Seattle Rental Listings
        </div>

        {/* Locations */}
        <div className="flex flex-col w-[1013px] items-center gap-[31px] absolute top-[216px] left-[397px]">
          <Locations />
        </div>
        

        {/* Sidebar */}
        <SidePanel />

       
      </div>
    </div>
  );
};
