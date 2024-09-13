import rectangle from '../../img/rectangle-7-11.png';
import rectanglePanel from '../../img/rectangle-9.svg';
import polygon3 from '../../img/polygon-3.svg';
import likeButton from '../../img/icon-3.svg';

import checkButton from '../../img/vector-81.svg';

export default function Locations() {
    return (
        <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Poppins',Helvetica] font-semibold text-[#7a7a7a] text-sm tracking-[0] leading-[15.9px]">
                800sqft with View
            </div>
            <div className="flex flex-col items-center justify-center gap-[13px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start justify-center gap-4 relative self-stretch w-full flex-[0_0_auto]">
                    <PropertyListing />
                </div>
                <LoadMoreButton />
            </div>
        </div>
    );
}

function PropertyListing({
    propertyName='Property name', 
    address='(3806 W 20th Ave, Kennewick, WA 99338)',
    suggestedRentValue=1234,
    rent=123,
    floorNumber=10,
    stories=6,
    avgUnitSize='741 SF',
    views=20,
    showings=20,
    date='12.12.2024',
    parking='-',
    type='Apartments - All',
    distance='-'
}) {
    return (
        <div className="relative w-[1013px] h-[186px]">
            <img
                className="absolute w-[798px] left-[215px] h-[186px] top-0"
                alt="Rectangle"
                src={rectanglePanel}
            />
            <CardInfo
                suggestedRentValue={suggestedRentValue}
                rectangle={rectangle}
                checkButton={checkButton}
                polygon3={polygon3}
            />
            <ActiveListingTag />
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
            {/* <CheckButton src={checkButton} />
            <img
                className="absolute w-[15px] h-[13px] top-16 left-[843px]"
                alt="Polygon"
                src={polygon3}
            /> */}
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
}) {
    return (
        <div className="absolute w-[464px] h-[157px] top-[23px] left-[372px]">
            <TextSmall text={amenities} className="top-[25px] left-0" />
            <TextLarge text={`${propertyName} ${address}`} />
            <div className="absolute w-[460px] h-24 top-[61px] left-0">
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
    );
}

function CardValueGrid({ children }) {
    return (
        <div className="flex flex-wrap w-[460px] h-24 items-start gap-[21px_13px] relative">
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
        <div className={`relative w-[184px] h-[41px] rounded-[23.5px] border border-solid border-black ${className}`}>
            <div className="absolute top-4 left-[13px] [font-family:'Poppins',Helvetica] font-semibold text-xs tracking-[0] leading-[normal] whitespace-nowrap">
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
        <p className={`absolute h-[10px] [font-family:'Mulish',Helvetica] font-semibold text-[#7a7a7a] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap ${className}`}>
            {text}
        </p>
    );
}

function TextLarge({ text, className }) {
    return (
        <div className={`absolute h-[39px] top-0 left-0 [font-family:'Mulish',Helvetica] font-extrabold text-black text-xl tracking-[0] leading-[19.1px] whitespace-nowrap ${className}`}>
            {text}
        </div>
    );
}

function ValuesBold({ val }) {
    return (
        <div className="[font-family:'Poppins',Helvetica] font-semibold text-black text-xs tracking-[0] leading-[13.2px]">
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
