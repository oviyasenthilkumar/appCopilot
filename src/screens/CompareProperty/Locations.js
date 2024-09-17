import rectangle from "../../img/rectangle-7-11.png";
import rectanglePanel from "../../img/rectangle-9.svg";
import polygon3 from "../../img/polygon-3.svg";
import likeButton from "../../img/icon-3.svg";

import checkButton from "../../img/vector-81.svg";

export default function Locations({ navigate }) {
  return <PropertyListing navigate={navigate} />;
}

function PropertyListing({
  propertyName = "Property name",
  address = "(3806 W 20th Ave, Kennewick, WA 99338)",
  suggestedRentValue = 1234,
  rent = 123,
  floorNumber = 10,
  stories = 6,
  avgUnitSize = "741 SF",
  views = 20,
  showings = 20,
  date = "12.12.2024",
  parking = "-",
  type = "Apartments - All",
  distance = "-",
  navigate,
}) {
  return (
    <div className="h-[185px] border rounded-tl-[67px] rounded-tr-[1rem] rounded-br-[1rem] rounded-bl-[1rem] flex flex-row justify-between rounded-2xl border-grey ">
      <div className="relative">
        <div className="absolute top-[93px] right-0 bg-[#FF914D] text-white text-xs font-bold px-2 py-1 z-10 transform rotate-90 origin-top-right">
          Add to listing
        </div>
        <img alt="Rectangle" src={rectangle} className="w-[343px] h-[185px]" />
      </div>

      <CardValues
        propertyName={propertyName}
        address={address}
        amenities="Amenities - View, Balcony, Garage, Dishwasher, Fitness Center"
        rent={rent}
        floorNumber={floorNumber}
        stories={stories}
        avgUnitSize={avgUnitSize}
        views={views}
        showings={showings}
        date={date}
        parking={parking}
        type={type}
        distance={distance}
        suggestedRentValue={suggestedRentValue}
        navigate={navigate}
      />
    </div>
  );
}

function CardInfo({ suggestedRentValue, rectangle, checkButton, polygon3 }) {
  return (
    <>
      <div className="absolute w-[184px] h-[111px] top-[58px] left-[806px]">
        <div className="absolute w-[186px] h-[41px] top-[70px] left-0">
          <ButtonRounded
            text="View Rental Comparisons"
            className="text-black text-xs"
          />
        </div>
        <div className="absolute w-[131px] h-[47px] top-0 left-[57px]">
          <div className="absolute h-6 top-0 left-0 [font-family:'Poppins',Helvetica] font-bold text-orange text-xl tracking-[0] leading-[23.7px] whitespace-nowrap">
            {suggestedRentValue}/ mo
          </div>
          <div className="absolute h-5 top-[27px] left-0 [font-family:'Poppins',Helvetica] font-normal text-[#918f8f] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            Suggested Rent
          </div>
        </div>
      </div>
      <img
        className="absolute w-[343px] left-0 object-cover h-[186px] top-0"
        alt="Rectangle"
        src={rectangle}
      />
      <CheckButton src={checkButton} />
      <img
        className="absolute w-[15px] h-[13px] top-16 left-[843px]"
        alt="Polygon"
        src={polygon3}
      />
    </>
  );
}

function ActiveListingTag() {
  return (
    <div className="absolute w-[21px] h-[59px] top-0 left-[324px]">
      <div className="relative w-[19px] h-[59px] bg-[#ff914d] rounded-[1.13px_8.48px_9.61px_9.61px]">
        <div className="absolute h-2.5 top-[25px] -left-3 rotate-[90.00deg] [font-family:'Mulish',Helvetica] font-bold text-white text-[7px] tracking-[0] leading-[9.0px] whitespace-nowrap">
          Active Listing
        </div>
      </div>
    </div>
  );
}

function CardValues({
  propertyName,
  address,
  amenities,
  rent,
  floorNumber,
  stories,
  avgUnitSize,
  views,
  showings,
  date,
  parking,
  type,
  distance,
  suggestedRentValue,
  navigate
}) {
  const handleGoToDrill = () => {
    navigate("/drilldown");
  };
  return (
    <div className="[font-family:Poppins,Helvetica] flex flex-row flex-1 justify-between p-6">
      <div className="flex flex-col gap-30">
        <div>
          <TextLarge propertyName={propertyName} address={address} />
          <TextSmall text={amenities} />
        </div>
        <div className="pt-6">
          <CardValueGrid>
            <CardValueItem value="$1,075" label="Rent/SqFt" />
            <CardValueItem value={rent} label="Rent" />
            <CardValueItem value={floorNumber} label="Floor Number" />
            <CardValueItem value={stories} label="Stories" />
            <CardValueItem value={avgUnitSize} label="Avg. Unit Size" />
            <CardValueItem value={views} label="No. Viewed" />
            <CardValueItem value={showings} label="No. Showings" />
            <CardValueItem value={date} label="Lease Expiry" />
            <CardValueItem value={parking} label="Parking" />
            <CardValueItem value={type} label="Type" />
            <CardValueItem value={distance} label="Distance to Transit" />
          </CardValueGrid>
        </div>
      </div>
      <div className="flex flex-col justify-end gap-6">
        <div className="self-end relative">
          <img
            className="absolute w-[15px] h-[13px] top-[8px] left-[-25px] "
            alt="Polygon"
            src={polygon3}
          />
          <div className=" h-6[font-family:Poppins,Helvetica] font-bold text-orange text-xl tracking-[0] leading-[23.7px] whitespace-nowrap">
            {suggestedRentValue}/ mo
          </div>
          <div className="h-5 left-0 [font-family:'Poppins',Helvetica] font-normal text-[#918f8f] text-base tracking-[0] leading-[19.2px] whitespace-nowrap">
            Suggested Rent
          </div>
        </div>
        <div onClick={handleGoToDrill}>
          <ButtonRounded
            text="View Rental Comparisons"
            className="text-black text-xs"
          />
        </div>
      </div>
    </div>
  );
}

function CardValueGrid({ children }) {
  return (
    <div className="flex flex-wrap w-[460px] items-start gap-[21px_13px] ">
      {children}
    </div>
  );
}

function CardValueItem({ value, label }) {
  return (
    <div className="flex flex-col w-fit items-start gap-[1px] relative border-r border-gray-300 pr-[14px]">
      <ValuesBold val={value} />
      <Values val={label} />
    </div>
  );
}

function ButtonRounded({ text, className }) {
  return (
    <div
      className={`py-[16px] px-[13px] rounded-[23.5px] border border-solid border-black ${className} flex justify-center align-middle`}
    >
      <div className="font-family:'Poppins',Helvetica] font-semibold text-xs tracking-[0] leading-[normal] whitespace-nowrap">
        {text}
      </div>
    </div>
  );
}

function CheckButton({ src }) {
  return (
    <div className="absolute w-[26px] h-[26px] top-[7px] left-[3px] bg-white rounded-[3px] border border-solid border-[#00000042] shadow-[0px_2.62px_13.1px_#0000001f]">
      <img
        className="h-[9px] top-2 left-[7px] absolute w-[11px]"
        alt="Check"
        src={src}
      />
    </div>
  );
}

function LoadMoreButton() {
  return (
    <div className="relative w-[124px] h-[47px]">
      <div className="relative w-[122px] h-[47px] bg-black rounded-[23.5px]">
        <div className="absolute top-4 left-[30px] [font-family:'Poppins',Helvetica] font-semibold text-white text-xs text-center tracking-[0] leading-[normal]">
          Load More
        </div>
      </div>
    </div>
  );
}

// Utility Components
function TextSmall({ text, className }) {
  return (
    <p
      className="[font-family:Poppins,Helvetica] text-sm text-[#7a7a7a] font-normal tracking-wide leading-[15.9px] whitespace-nowrap pt-1"
      //   className={`[font-family:'Poppins',Helvetica] font-semibold text-[#7a7a7a] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap`}
    >
      {text}
    </p>
  );
}

function TextLarge({ propertyName, address, className }) {
  return (
    <div
      className={`[font-family:Poppins,Helvetica] font-extrabold text-black text-xl tracking-[0] leading-[19.1px] whitespace-nowrap ${className}`}
    >
      {propertyName}
      <span className="[font-family:Poppins,Helvetica] text-base text-sm font-semibold tracking-wide leading-[19.2px]">
        {" "}
        {address}
      </span>
    </div>
  );
}

function ValuesBold({ val }) {
  return (
    <div className="[font-family:Poppins,Helvetica] font-semibold text-black text-xs tracking-[0] leading-[13.2px]">
      {val}
    </div>
  );
}

function Values({ val }) {
  return (
    <div className="[font-family:'Poppins',Helvetica] font-normal text-[#7a7a7a] text-[10px] tracking-[0] leading-[normal]">
      {val}
    </div>
  );
}
