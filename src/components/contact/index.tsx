import React from "react";
import { Section } from "../common/section";

export const Contact: React.FC = () => {
  return (
    <div id="contact" className="pt-12 desktop:pt-20">
      <Section
        title="CONTACT US"
        blackText="This ensures generating the best solution on our path to success."
      >
        We truly aim for complete partnership. We discuss challenges, business
        models and goals, before ever writing a line of code. This ensures
        generating the best solution on our path to success.
      </Section>
      <h1 className="text-primary text-4xl font-bold text-center pt-[159px] desktop:text-[88px] desktop:leading-[96px]">
        START <br /> COLLABORATING <br /> WITH US
        <span className="text-orange"> NOW</span>
      </h1>
    </div>
  );
};
