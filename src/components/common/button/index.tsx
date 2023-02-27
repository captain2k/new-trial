import React, { ReactNode } from "react";
import { Button as CButton, ButtonProps } from "antd";
import styled from "styled-components";

type Props = {
  icon?: ReactNode;
  text: string;
  buttonProps?: ButtonProps;
} & Omit<ButtonProps, "icon">;

export const Button: React.FC<Props> = ({ text, icon, buttonProps }) => {
  return (
    <CButton
      className={`flex justify-center items-center py-[21px]  gap-2 rounded-none`}
      icon={icon}
      block
    >
      <div className="text-base text-white">{text}</div>
    </CButton>
  );
};
