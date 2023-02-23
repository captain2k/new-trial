import { Anchor, Drawer } from "antd";
import React from "react";
import styled from "styled-components";
import {
  CloseIcon,
  LogoIcon,
  LogoInMenuIcon,
  MenuIcon,
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
  console.log(isShowDrawer);

  return (
    <CustomDrawer
      open={isShowDrawer}
      onClose={closeMenuDrawer}
      closeIcon={
        <>
          <LogoInMenuIcon />
          <CloseIcon />
        </>
      }
    >
      <Anchor items={MENU} />
    </CustomDrawer>
  );
};

const CustomDrawer = styled(Drawer)``;
