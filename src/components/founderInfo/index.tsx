import { Col, Divider, Row } from "antd";
import React from "react";
import styled from "styled-components";
import { LinkedInIcon } from "../../asset/icon";
import Founder from "../../asset/images/founder.jpg";

export const FounderInfo: React.FC = () => {
  return (
    <>
      <div className="flex text-center flex-col w-[326px] desktop:w-[640px] m-auto pt-32">
        <h3 className="text-[28px] leading-7 text-white font-semibold mb-2 desktop:text-[40px] desktop:leading-[48px]">
          Meet the Founder
        </h3>
        <span className="text-base text-[#9CA3AF] font-semibold desktop:text-lg">
          Graduated in software engineering from Polytechnique Montréal and now
          with over 10 years of experience, he successfully established and ran
          his own company neliSoftwares since 2017.
        </span>
      </div>
      <Row gutter={[60, 40]} className="mt-20">
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={10}>
          <img src={Founder} />
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={14}>
          <div className="flex items-end justify-between">
            <div className="text-[16px] leading-6 font-semibold">
              <div className=" text-white ">KÉVIN PÉRARD</div>
              <div className="text-[#9CA3AF]">CEO & Founder</div>
            </div>
            <CustomLinkedInIcon>
              <LinkedInIcon />
            </CustomLinkedInIcon>
          </div>
          <Divider className="bg-white" />
          <Detail>
            <p>
              Founded in 2017 by Kévin Perard, neliSoftwares originally was a
              start-up technology company based in Montreal, Canada.
            </p>
            <br />
            <p>
              After people noticed the quality of the software development, the
              company decided to focus on it to provide others enterprises the
              same great services and support.
            </p>
            <br />
            <p>
              neliSoftwares's business philosophy is to assure the highest
              quality product, total client satisfaction, timely delivery of
              solutions, and the best quality/price ratio found in the industry.
            </p>
            <br />
            <p>
              We are working with clients around the globe, with different
              timezones without any communication issues for many years.
            </p>
            <br />
            <p>
              Each project has a team leader assigned, checking on a daily basis
              the code quality and pertinence, making sure all the deadlines
              will be reached on time for your project.
            </p>
          </Detail>
        </Col>
      </Row>
      <Divider className="bg-white mt-16 desktop:mt-24" />
    </>
  );
};

const CustomLinkedInIcon = styled.div`
  .anticon svg {
    width: 32px;
    height: 32px;
  }
`;

const Detail = styled.div`
  p {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    color: #9ca3af;
  }
`;
