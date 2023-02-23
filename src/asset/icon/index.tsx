import Icon from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { CloseSVG, LogoSVG, MenuSVG } from "../svg";

export const LogoIcon = () => {
  return <Icon component={LogoSVG} />;
};

export const MenuIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={MenuSVG} {...props} />;
};

export const LogoInMenuIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={LogoInMenuIcon} {...props} />;
};

export const CloseIcon = () => {
  return <Icon component={CloseSVG} />;
};
