import { Anchor, Drawer } from "antd";
import React from "react";
import styled from "styled-components";
import {
  CloseIcon,
  FacebookInMobileIcon,
  LinkedInMobileIcon,
  LogoInMenuIcon,
} from "../../asset/icon";
import { MENU } from "./constant";

type Props = {
  isShowDrawer: boolean;
  closeMenuDrawer: () => void;
};

export const MenuDrawer: React.FC<Props> = ({
  isShowDrawer,
  closeMenuDrawer,
}) => {
  return (
    <CustomDrawer
      className="!bg-[#21BFAF]"
      open={isShowDrawer}
      onClose={closeMenuDrawer}
      width="100%"
      title={<LogoInMenuIcon />}
      closeIcon={
        <div className="flex justify-between">
          <CloseIcon />
        </div>
      }
      footer={
        <>
          <FacebookInMobileIcon />
          <LinkedInMobileIcon />
        </>
      }
    >
      <CustomAnchor items={MENU} onClick={closeMenuDrawer} />
    </CustomDrawer>
  );
};

const CustomDrawer = styled(Drawer)`
  .ant-drawer-header {
    border: none;
    padding: 28px 25px;

    .ant-drawer-header-title {
      flex-direction: row-reverse;
    }
  }

  .ant-drawer-footer {
    border: none;
    text-align: center;

    .anticon {
      padding: 0 16px;
    }
  }
`;

const CustomAnchor = styled(Anchor)`
  .ant-anchor::before {
    display: none;
  }

  .ant-anchor {
    padding-top: 56px;

    .ant-anchor-link {
      text-align: center;
      font-size: 36px;
      line-height: 44px;
      font-weight: 400;
      padding-bottom: 24px;
      padding-top: 0;

      .ant-anchor-link-title {
        color: #ffffff;
      }
    }
  }

  .ant-anchor-ink.ant-anchor-ink-visible {
    display: none !important;
  }
`;
