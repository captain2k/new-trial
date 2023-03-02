import React, { PropsWithChildren } from "react";

type Props = {
  title: string;
  blackText: string;
};

export const Section: React.FC<PropsWithChildren<Props>> = ({
  title,
  blackText,
  children,
}) => {
  return (
    <div className="bg-primary text-center py-16 -mx-[25px] mt-16 desktop:-mx-[70px] ">
      <h4 className="text-base text-[#1F2937] font-medium mb-2 desktop:text-lg desktop:font-semibold desktop:text-black">
        {title}
      </h4>
      <div className="text-[28px] leading-8 text-white font-semibold px-6 desktop:px-[75px] desktop:text-[40px] desktop:font-semibold desktop:leading-[48px]">
        {children}
      </div>
      <div className="text-[28px] leading-8 text-black font-semibold px-6 desktop:px-[75px] desktop:text-[40px] desktop:font-semibold desktop:leading-[48px]">
        {blackText}
      </div>
    </div>
  );
};
