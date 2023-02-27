import { Anchor } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import {
  FacebookIcon,
  LinkedInIcon,
  LogoIcon,
  MenuIcon,
} from "../../asset/icon";
import { MENU } from "./constant";
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
    <div className="flex justify-between items-center py-5 sticky top-0 bg-backgroundImg bg-black z-10">
      <div className="flex justify-between items-center gap-2 cursor-pointer">
        <LogoIcon />
        <p className="text-xl font-bold text-white">NeliSoftwares</p>
      </div>
      <CustomAnchor items={MENU} className="hidden desktop:block" />
      <IconSection className="hidden desktop:flex desktop:gap-6">
        <FacebookIcon />
        <LinkedInIcon />
      </IconSection>
      <div className="block desktop:hidden" onClick={showMenuDrawer}>
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

const CustomAnchor = styled(Anchor)`
  .ant-anchor::before {
    display: none;
  }

  .ant-anchor {
    display: flex;
    padding: 0;
    gap: 24px;
  }

  .ant-anchor-link {
    font-size: 18px;
    line-height: 28px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 !important;

    .ant-anchor-link-title {
      color: #9ca3af;
      &:hover {
        color: #ffffff;
      }
    }

    .ant-anchor-link-title.ant-anchor-link-title-active {
      color: #ffffff;
    }
  }

  .ant-anchor-ink.ant-anchor-ink-visible {
    display: none !important;
  }
`;

const IconSection = styled.div`
  .anticon {
    display: block;
    font-size: 14px;
  }
`;
