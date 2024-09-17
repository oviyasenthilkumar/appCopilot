import town from "../../img/town-2.svg";
import likeButton from "../../img/icon-1.svg";
import apiCred from "../../img/icon-2.svg";
import bigShoes from "../../img/big-shoes-avatar.png";
import fullLogo1 from "../../img/fulllogo-transparent-nobuffer-1.png";
import fullLogo2 from "../../img/fulllogo-transparent-nobuffer-2.png";
import { Icon20 } from "../../icons/Icon20";
import { Caret } from "../../icons/Caret";
import setting from "../../img/setting.svg";
import support from "../../img/support.svg";
import { useNavigate } from "react-router-dom";
const SidePanelItem = ({
  iconSrc,
  text,
  notification,
  color,
  onClick,
  isActive,
}) => (
  <div
    className={`[font-family:Poppins,Helvetica] h-11 items-center gap-3 px-4 py-3 rounded-full flex relative cursor-pointer 
      ${isActive ? "bg-white drop-shadow-md" : "hover:bg-gray-100"}`}
    onClick={onClick}
  >
    <div className="flex items-start gap-3 relative flex-1">
      {iconSrc ? (
        <img className="w-5 h-5" alt="Icon" src={iconSrc} />
      ) : (
        <Icon20 className="w-5 h-5" />
      )}
      <div
        className={`${
          color ? "text-orange" : "text-[#808489]"
        } text-sm font-medium`}
      >
        {text}
      </div>
      {notification && (
        <div className="absolute w-2 h-2 top-2 left-6 bg-orange-500 rounded-full border border-white" />
      )}
    </div>
  </div>
);

export default function SidePanel() {
  const navigate = useNavigate();
  const currentPath = window.location.pathname; // Get the current path to determine active state

  return (
    <div className="sticky top-8 left-8 h-[678px] bg-[#f6f6fa] rounded-[37px] overflow-y-auto shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center px-10 py-8">
        <img className="w-10" alt="Logo" src={fullLogo1} />
        <img className="w-[172px] ml-3" alt="Logo Text" src={fullLogo2} />
      </div>

      {/* Menu Items */}
      <div className="px-7 mt-8 space-y-6">
        {/* Section 1 */}
        <div className="space-y-1">
          <SidePanelItem
            iconSrc={town}
            text="Search & Compare"
            color={"#FF914D"}
            isActive={currentPath === "/"} // Set active state based on the route
            onClick={() => navigate("/")}
          />
          <SidePanelItem iconSrc={likeButton} text="Favorite" />
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* Section 2 */}
        <div className="space-y-1">
          <SidePanelItem text="Notifications" notification />
          <SidePanelItem iconSrc={setting} text="Settings" />
          <SidePanelItem iconSrc={support} text="Support" />
          <SidePanelItem iconSrc={apiCred} text="API Credentials" />
        </div>
      </div>

      {/* User Info */}
      <div className="absolute bottom-8 left-8 flex items-center gap-4">
        <div className="relative w-12 h-12 bg-yellow-400 rounded-full overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="User Avatar"
            src={bigShoes}
          />
        </div>

        <div>
          <div className="[font-family:Poppins,Helvetica] ld text-gray-500 text-xs">
            Welcome back 👋
          </div>
          <div className="[font-family:Poppins,Helvetica] font-bold text-gray-900 text-sm ">
            Johnathan
          </div>
        </div>
        <Caret className="[font-family:Poppins,Helvetica]  ml-auto w-5 h-5 text-gray-900" />
      </div>
    </div>
  );
}
