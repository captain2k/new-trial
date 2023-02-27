import { Carousel, Divider } from "antd";
import React from "react";

const CAROUSEL_ITEM = [
  "UNIQUE",
  "MEMORABLE",
  "AWESOME",
  "EFFICIENT",
  "INSPIRATIONAL",
];

export const Introduce: React.FC = () => {
  return (
    <>
      <div id="#home">
        <h1 className="text-primary text-4xl font-bold text-center pt-[159px] desktop:text-[88px] desktop:leading-[96px]">
          TRANSFORM YOUR <br />
          SOFTWARE SOLUTION
          <br />
          BECOME MORE
        </h1>
        <Carousel
          className="text-4xl font-bold text-center desktop:text-[88px] desktop:leading-[96px]"
          autoplay
          dots={false}
          dotPosition="left"
        >
          {CAROUSEL_ITEM.map((item) => (
            <span className="text-orange" key={item}>
              {item}
            </span>
          ))}
        </Carousel>
        <h4 className="text-center text-lg text-white pt-6 desktop:text-2xl">
          WE PROVIDE END-TO-END JAVASCRIPT DEVELOPMENT SERVICES <br /> FOR YOUR
          BUSINESS
        </h4>
      </div>
      <Divider
        type="vertical"
        className="bg-white h-24 desktop:h-32 text-center relative -right-1/2 my-[60px]"
      />
    </>
  );
};
