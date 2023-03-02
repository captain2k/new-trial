import React from "react";
import { Section } from "../common/section";

export const About: React.FC = () => {
  return (
    <div className="pt-8 desktop:20" id="about">
      <Section title="ABOUT" blackText="Making the impossible possible.">
        ​We build software solutions <br />
        that set new industry standards. At lightning speed.
      </Section>
    </div>
  );
};
