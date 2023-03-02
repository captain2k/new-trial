import { Carousel, Divider } from "antd";
import React from "react";
import { FigmaIcon, GithubIcon, GoIcon } from "../../asset/icon";
import { Button } from "../common/button";
import GoMarketImg from "../../asset/images/goMarket.jpg";
import DesignImg from "../../asset/images/design.jpg";
import CodeImg from "../../asset/images/codeReview.jpg";
import styled from "styled-components";

export const Work: React.FC = () => {
  return (
    <>
      <div id="work" className="text-center pt-[80px] desktop:pt-[120px]">
        <h4 className="text-base font-medium text-[#9CA3AF] pb-2 ">WORK</h4>
        <span className="text-[28px] leading-[36px] text-white desktop:text-[40px] desktop:leading-[48px]">
          Check-out our demo project <br /> and view the code system in its
          entirety!
        </span>
        <div className="flex gap-4 flex-col pt-6 w-full desktop:flex desktop:flex-row desktop:w-[640px] desktop:m-auto">
          <Button
            customStyle="hover:bg-white !hover:border-white"
            text="View Project"
            icon={<GoIcon />}
          ></Button>
          <Button
            customStyle="hover:bg-white !hover:border-white"
            text="View Design"
            icon={<FigmaIcon />}
          ></Button>
          <Button
            customStyle="hover:bg-white !hover:border-white"
            text="View Code"
            icon={<GithubIcon />}
          ></Button>
        </div>
        <CustomCarousel className="pt-[100px]">
          <img src={GoMarketImg} className="w-full" />
          <img src={DesignImg} className="w-full" />
          <img src={CodeImg} className="w-full" />
        </CustomCarousel>
      </div>
      <Divider className="bg-white mt-28 desktop:mt-[260px]" />
    </>
  );
};

const CustomCarousel = styled(Carousel)`
  .slick-dots {
    bottom: -40px;
    .slick-active button {
      width: 16px;
      height: 16px;
      background-color: #21bfaf !important;
    }
    li {
      button {
        height: 12px;
        width: 12px;
        border-radius: 50%;
        margin: auto;
      }
    }
  }
`;
