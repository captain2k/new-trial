import { Col, Grid, Row } from "antd";
import React from "react";
import { Button } from "../common/button";
import { Member } from "../common/member";
import { MEMBER } from "./constant";

const { useBreakpoint } = Grid;

export const Team: React.FC = () => {
  const { xl } = useBreakpoint();

  return (
    <>
      <h4
        id="team"
        className="pt-16 desktop:pt-24 text-base text-center font-medium text-[#9CA3AF] mb-2 desktop:text-[18px] desktop:leading-7 desktop:font-semibold "
      >
        MEET OUR TEAM
      </h4>
      <span className="text-3xl text-center block font-semibold text-white desktop:text-[40px] desktop:leading-[48px]">
        We hire the best people, period. We bring them together in <br />
        dedicated teams that focus on your project alone.
      </span>
      <Row
        gutter={[24, 64]}
        className="mt-12 desktop:mt-[100px] overflow-scroll flex-nowrap desktop:flex-wrap "
      >
        {MEMBER.map((item) => {
          if (xl) {
            return (
              <Col key={item.name} className="w-1/5">
                <Member
                  avatar={item.avatar}
                  name={item.name}
                  role={item.role}
                />
              </Col>
            );
          }
          return (
            <Col key={item.name} xs={12} sm={8} md={6}>
              <Member avatar={item.avatar} name={item.name} role={item.role} />
            </Col>
          );
        })}
        {xl ? (
          <Col className="w-1/5">
            <Member isMember={false} />
          </Col>
        ) : (
          <Col xs={12} sm={8} md={6}>
            <Member isMember={false} />
          </Col>
        )}
      </Row>
      {!xl && (
        <Button
          text="Start Working With Us"
          customStyle="mt-20 bg-[#F3725C] border-[#F3725C] desktop:!w-1/3 m-auto"
        />
      )}
    </>
  );
};
