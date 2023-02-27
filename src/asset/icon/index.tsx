import Icon from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import {
  CloseSVG,
  LogoSVG,
  MenuSVG,
  LogoInMenuSVG,
  LinkedInSVG,
  FacebookSVG,
  LinkedInMobileSVG,
  FacebookMobileSVG,
  GoSVG,
  FigmaSVG,
  GithubSVG,
} from "../svg";

export const LogoIcon = () => {
  return <Icon component={LogoSVG} />;
};

export const MenuIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={MenuSVG} {...props} />;
};

export const LogoInMenuIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={LogoInMenuSVG} {...props} />;
};

export const CloseIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CloseSVG} {...props} />;
};

export const LinkedInMobileIcon = () => {
  return <Icon component={LinkedInMobileSVG} />;
};

export const FacebookInMobileIcon = () => {
  return <Icon component={FacebookMobileSVG} />;
};

export const LinkedInIcon = () => {
  return <Icon component={LinkedInSVG} />;
};

export const FacebookIcon = () => {
  return <Icon component={FacebookSVG} />;
};

export const GoIcon = () => {
  return <Icon component={GoSVG} />;
};

export const FigmaIcon = () => {
  return <Icon component={FigmaSVG} />;
};
export const GithubIcon = () => {
  return <Icon component={GithubSVG} />;
};
