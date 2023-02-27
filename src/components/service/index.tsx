import { Col, Row } from "antd";
import React from "react";
import { Button } from "../common/button";
import { Technology } from "../common/technology";
import { TECHNOLOGIES } from "./constant";

export const Service: React.FC = () => {
  return (
    <div id="services" className="text-center">
      <h4 className="text-base font-medium text-[#9CA3AF] pb-2 ">SERVICES</h4>
      <span className="text-[28px] leading-[36px] text-white desktop:text-[40px] desktop:leading-[48px]">
        We are specialized in Javascript <br /> and provide solutions in its
        main frameworks
      </span>
      <Row gutter={[16, 80]} className="overflow-scroll mt-20">
        {TECHNOLOGIES.map((item) => (
          <Col
            key={item.technology}
            xs={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
          >
            <Technology
              logo={item.logo}
              technology={item.technology}
              description={item.description}
            />
          </Col>
        ))}
      </Row>
      <Button text="Start Working With Us" />
    </div>
  );
};
