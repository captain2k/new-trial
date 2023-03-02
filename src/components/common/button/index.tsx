import React, { ReactNode } from "react";
import { Button as CButton, ButtonProps } from "antd";
import styled from "styled-components";

type Props = {
  icon?: ReactNode;
  text: string;
  buttonProps?: ButtonProps;
  customStyle?: string;
} & Omit<ButtonProps, "icon">;

export const Button: React.FC<Props> = ({
  text,
  icon,
  buttonProps,
  customStyle,
}) => {
  return (
    <CustomButton
      className={`flex justify-center items-center py-[21px] gap-2 rounded-none ${customStyle}`}
      icon={icon}
      block
      {...buttonProps}
    >
      <div className="text-base text-white">{text}</div>
    </CustomButton>
  );
};

const CustomButton = styled(CButton)`
  &:hover {
    div {
      color: black !important;
    }
  }
`;
