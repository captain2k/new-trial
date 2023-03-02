import { Input as CInput, InputProps } from "antd";
import React from "react";
import styled from "styled-components";

type Props = {
  inputProps?: InputProps;
};

export const Input: React.FC<Props> = ({ inputProps }) => {
  return (
    <CustomInput
      {...inputProps}
      className="w-[327px] desktop:w-[420px] focus:shadow-none"
    />
  );
};

const CustomInput = styled(CInput)`
  background: none;
  border-radius: unset;
  color: #9ca3af;
  border: none;
  border-bottom: 1px solid #9ca3af;
  padding: 10px 0;

  &:hover {
    border-bottom: 1px solid #9ca3af;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;
