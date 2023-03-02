import React, { ReactNode } from "react";
import Kevin from "../../../asset/images/Kevin.jpg";

type Props = {
  avatar?: ReactNode;
  name?: string;
  role?: string;
  isMember?: boolean;
};

export const Member: React.FC<Props> = ({
  avatar,
  name,
  role,
  isMember = true,
}) => {
  if (!isMember) {
    return (
      <div className=" h-full px-5 flex text-center items-center  border-[1px] border-[#4B5563] hover:bg-orange hover:text-white">
        <div className="text-lg text-[#9CA3AF]">
          If you enjoy our work, here&apos;s your chance to
          <div className="text-lg font-medium text-white">
            MEET OUR EXPERTS.
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-start border-[1px] border-solid border-[#4B5563] w-fit min-w-[160px] desktop:min-w-[240px">
      <img src={avatar as string} className="w-full" />
      <div className="flex-col flex m-5 desktop:m-9">
        <span className="text-base font-semibold text-white desktop:text-[18px] desktop:leading-7">
          {name}
        </span>
        <span className="text-xs font-semibold text-[#9CA3AF] desktop:text-[18px] desktop:leading-7 desktop:font-normal">
          {role}
        </span>
      </div>
    </div>
  );
};
