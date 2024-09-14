import React from "react";
import poly3 from "../../img/polygon-3.svg";

const AdressCard = ({
  lowPrice = 3500,
  highPrice = 4500,
  suggestedRent = 3779,
}) => {
  return (
    <div className="flex justify-between p-[24px] my-[32px] rounded-[24px] bg-gradient-to-r from-[rgb(180.56,230.46,246.5)] to-[rgb(255,204.95,159.59)]">
      <div className="flex flex-1 flex-col w-[418px] self-center items-start gap-[10.58px]">
        <div className=" w-fit mt-[-0.76px] font-bold text-black text-[36.3px] leading-[37.8px] whitespace-nowrap [font-family:'Poppins',Helvetica] tracking-[0] ">
          3806 W 20th Ave
        </div>
        <p className="w-[45%] font-medium text-black text-base leading-6 [font-family:'Poppins',Helvetica] tracking-[0]">
          Kennewick, WA 99338 3 beds • 2.5 baths • 2400 Sq Ft Lease Expiry Date
          - 25/06/2024
        </p>
      </div>
      <div className="flex-1 bg-white rounded-[18px] p-[32px]">
        <div>
          <div className=" h-6  [font-family:'Poppins',Helvetica] font-bold text-[#2a2a33] text-xl tracking-[0] leading-6 whitespace-nowrap">
            Your Suggested Rent
          </div>
          <div className="pt-[15px] flex ">
            <img
              className=" w-[23px] h-5 self-center mr-1"
              alt="Polygon"
              src={poly3}
            />
            <div className=" h-10  [font-family:'Poppins',Helvetica] font-bold text-orange text-4xl tracking-[0] leading-10 whitespace-nowrap">
              ${suggestedRent} /SqFT
            </div>
          </div>
          <div className="pb-[32px]">
            <p className=" h-6 pt-[32px]  [font-family:'Poppins',Helvetica] font-normal text-[#2a2a33] text-base tracking-[0] leading-6 whitespace-nowrap">
              <span className="[font-family:'Poppins',Helvetica] font-normal text-[#2a2a33] text-base tracking-[0] leading-6">
                Suggested rent range:{" "}
              </span>
              <span className="font-bold">
                ${lowPrice} - ${highPrice}
              </span>
              <span className="[font-family:'Poppins',Helvetica] font-normal text-[#2a2a33] text-base tracking-[0] leading-6">
                &nbsp;
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdressCard;
