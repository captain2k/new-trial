import React from "react";
import styled from "styled-components";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NextIcon, PrevIcon } from "../../asset/icon";
import NeliPhoto1 from "../../asset/images/neliPhoto1.png";
import NeliPhoto2 from "../../asset/images/neliPhoto2.png";
import NeliPhoto3 from "../../asset/images/neliPhoto3.png";
import "swiper/css";
import "swiper/css/navigation";

export const CompanySlider: React.FC = () => {
  return (
    <div className="pt-32 relative">
      <CustomSwiper
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        modules={[Navigation]}
        className="pt-[40px] "
        slidesPerView={1.5}
      >
        <div className="flex absolute top-0 right-0 mb-8 z-20 gap-4">
          <div className="prev">
            <PrevIcon />
          </div>
          <div className="next">
            <NextIcon />
          </div>
        </div>
        <SwiperSlide zoom={false}>
          <img src={NeliPhoto2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NeliPhoto1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={NeliPhoto3} />
        </SwiperSlide>
      </CustomSwiper>
    </div>
  );
};

const CustomSwiper = styled(Swiper)`
  .swiper-slide {
    margin-right: 16px;
  }
`;
