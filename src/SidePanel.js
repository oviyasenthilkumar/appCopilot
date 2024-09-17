import town from '../../img/town-2.svg';
import likeButton from '../../img/icon-1.svg';
import apiCred from '../../img/icon-2.svg';
import bigShoes from '../../img/big-shoes-avatar.png';
import fullLogo1 from '../../img/fulllogo-transparent-nobuffer-1.png';
import fullLogo2 from '../../img/fulllogo-transparent-nobuffer-2.png';
import { Icon20 } from "../../icons/Icon20";
import { Caret } from "../../icons/Caret";

const SidePanelItem = ({ iconSrc, text, notification }) => (
    <div className="h-11 items-center gap-3 px-4 py-3 rounded-[99px] overflow-hidden flex relative">
      <div className="flex items-start gap-3 relative flex-1">
        {iconSrc ? (
          <img className="relative w-5 h-5" alt="Icon" src={iconSrc} />
        ) : (
          <Icon20 className="w-5 h-5" />
        )}
        <div className="relative flex-1 text-ash text-base font-medium">
          {text}
        </div>
        {notification && (
          <div className="absolute w-2 h-2 top-[3px] left-[11px] bg-orange rounded-full border border-white" />
        )}
      </div>
    </div>
  );

export default function SidePanel() {
    return (
        <div className="sticky h-[678px] top-[30px] left-[30px] bg-[#f6f6fa] rounded-[37px] overflow-y-auto">
          <div className="sticky absolute w-[220px] h-[61px] top-[41px] left-10 flex items-center">
            <img className="w-10 h-[61px]" alt="Logo" src={fullLogo1} />
            <img className="w-[172px] h-4 ml-3" alt="Logo" src={fullLogo2} />
          </div>
          <img className="sticky absolute w-[280px] h-px bottom-0 left-[27px]" alt="Line" src="/img/line-1.svg" />
          <div className="sticky flex flex-col w-[280px] items-center gap-6 absolute top-[138px] left-[27px]">
            <div className="sticky flex flex-col items-start gap-1">
              <SidePanelItem iconSrc={town} text="Search & Compare" />
              <SidePanelItem iconSrc={likeButton} text="Favorite" />
            </div>
            <img className="sticky w-full h-px" alt="Line" src="/img/line-1.svg" />
            <div className="sticky flex flex-col items-start gap-1">
              <SidePanelItem text="Notifications" notification />
              <SidePanelItem iconSrc={apiCred} text="API Credentials" />
              <SidePanelItem iconSrc={null} text="Settings" />
              <SidePanelItem iconSrc={null} text="Support" />
            </div>
          </div>
          <div className="sticky w-[200px] absolute top-[602px] left-[35px] flex items-center gap-3">
            <div className="sticky relative w-10 h-10 bg-[#ffb21f] rounded-full overflow-hidden">
              <img className="w-10 h-10" alt="User Avatar" src={bigShoes} />
            </div>
            <div className="flex flex-col items-start">
              <div className="text-secondary text-sm">Welcome back 👋</div>
              <div className="text-primary text-base">Johnathan</div>
            </div>
          </div>
          <Caret className="absolute w-5 h-5 top-[613px] left-[247px]" color="#081021" />
        </div>
    );
}