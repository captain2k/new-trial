import React, { ReactNode } from "react";

type Props = {
  logo: ReactNode;
  technology: string;
  description: string;
};

export const Technology: React.FC<Props> = ({
  logo,
  technology,
  description,
}) => {
  return (
    <div className="flex flex-col items-center">
      <div className="border-white border-[1px] border-solid rounded-full h-[152px] w-[152px] flex flex-col items-center justify-center">
        <img src={logo as string} />
      </div>
      <div>
        <h4 className="text-2xl text-white mt-6 mb-2">{technology}</h4>
        <span className="text-base text-[#9CA3AF]">{description}</span>
      </div>
    </div>
  );
};
