import { Col, Form, Modal, Row } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../common/button";
import { Input } from "../common/input";
import { Input as CInput } from "antd";
import { handleScrollIntoView } from "../../ultis";

const { TextArea } = CInput;

export const FormContact: React.FC = () => {
  const [isModalOpening, setIsModalOpening] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (!isModalOpening) return;
    const timer = setTimeout(() => {
      handleBackToTop();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [isModalOpening]);

  const handleSubmit = (data: any): void => {
    setEmail("");
    setName("");
    setIsModalOpening(true);
  };

  const closeModal = (): void => {
    setIsModalOpening(false);
  };

  const handleBackToTop = (): void => {
    handleScrollIntoView("home");
    setIsModalOpening(false);
  };

  return (
    <>
      <Form
        className="pt-[46px] desktop:pt-[96px] flex justify-center"
        onFinish={handleSubmit}
      >
        <Row gutter={[32, 24]} className="justify-center">
          <Col className="flex flex-col gap-10">
            <CustomFormItem rules={[{ required: true }]}>
              <Input
                inputProps={{
                  placeholder: "Your name (*)",
                  value: name,
                  onChange: (e) => setName(e.target.value),
                }}
              />
            </CustomFormItem>
            <CustomFormItem rules={[{ required: true }]}>
              <Input
                inputProps={{
                  placeholder: "Your email (*)",
                  value: email,
                  onChange: (e) => setEmail(e.target.value),
                }}
              />
            </CustomFormItem>
            <CustomFormItem>
              <Input
                inputProps={{
                  placeholder: "Your phone number",
                  type: "number",
                }}
              />
            </CustomFormItem>
          </Col>
          <Col className="flex flex-col justify-between">
            <CustomFormItem>
              <TextArea
                className="w-[327px] desktop:w-[420px] bg-inherit rounded-none text-[#9ca3af] placeholder:text-[#9ca3af] pb-[78px] "
                placeholder="Tell us about your project...."
              />
            </CustomFormItem>
            <CustomFormItem className="pt-[48px] desktop:pt-0">
              <Button
                buttonProps={{ htmlType: "submit", disabled: !name || !email }}
                text="Submit"
                customStyle="!bg-[#F3725C] border-[#F3725C]"
              />
            </CustomFormItem>
          </Col>
        </Row>
      </Form>
      <Modal
        className="!w-screen sm:!w-[640px] flex justify-center"
        title={null}
        open={isModalOpening}
        onCancel={closeModal}
        closable={false}
        footer={null}
      >
        <div className="text-center mx-0 sm:px-[110px] py-[70px] w-full sm:!w-[640px]">
          <div className="text-[28px] leading-9 font-bold text-[#1F2937] mb-2 desktop:text-[40px] desktop:leading-[48px]">
            Thank you!
          </div>
          <div className="text-base font-normal text-[#6B7280] mb-6 desktop:text-[18px] desktop:leading-7">
            We have received your submission and we'll be in touch really soon
          </div>
          <Button
            text="Back to Home"
            customStyle="bg-orange"
            buttonProps={{ onClick: handleBackToTop }}
          />
          <div className="mt-2 text-[12px] leading-5 text-[#6B7280] desktop:text-sm">
            Or It&#39;ll be automatically back to Home in few seconds
          </div>
        </div>
      </Modal>
    </>
  );
};

const CustomFormItem = styled(Form.Item)`
  margin: 0;
`;
