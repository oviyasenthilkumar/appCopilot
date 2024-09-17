import React from "react";
import SidePanel from "../screens/CompareProperty/SidePanel";
import { Component } from "../components/Component";
import Locations from "../screens/CompareProperty/Locations";

function Layout({ children, title }) {
  return (
    <div className="bg-white w-full h-full ">
      <div className="p-8 flex flex-row gap-8">
        <SidePanel />
        <div className="flex-1">
          <div className="flex flex-1 flex-row justify-between">
            <div className="[font-family:Poppins,Helvetica] text-black text-[32px] font-semibold">{title}</div>
            <Component
              className="!border-[unset] !border-[unset]"
              property1="group-30"
              pullDataClassName="!left-[34px] !top-[15px]"
            />
            
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
