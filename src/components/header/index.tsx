import React, { useState } from "react";
import { LogoIcon, MenuIcon } from "../../asset/icon";
import { MenuDrawer } from "./MenuDrawer";

const Header: React.FC = () => {
  const [isShowDrawer, setIsShowDrawer] = useState(false);

  const showMenuDrawer = () => {
    setIsShowDrawer(true);
  };

  const closeMenuDrawer = () => {
    setIsShowDrawer(false);
  };

  return (
    <div className="flex justify-between items-center ">
      <div className="flex justify-between items-center gap-2 cursor-pointer">
        <LogoIcon />
        <p className="text-xl font-bold text-white">neliSoftwares</p>
      </div>
      <div onClick={showMenuDrawer}>
        <MenuIcon className="cursor-pointer" />
      </div>
      <MenuDrawer
        isShowDrawer={isShowDrawer}
        closeMenuDrawer={closeMenuDrawer}
      />
    </div>
  );
};

export default Header;
