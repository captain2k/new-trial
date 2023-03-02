import { ReactNode } from "react";
import Kevin from "../../asset/images/Kevin.jpg";
import TrungHai from "../../asset/images/TrungHai.jpg";
import QuynhLe from "../../asset/images/QuynhLe.jpg";
import QuanNguyen from "../../asset/images/QuanNguyen.jpg";
import ThangDo from "../../asset/images/ThangDo.jpg";
import CongThai from "../../asset/images/CongThai.jpg";
import TrungHieu from "../../asset/images/TrungHieu.jpg";
import GiangDiep from "../../asset/images/GiangDiep.jpg";
import NhatLe from "../../asset/images/NhatLe.jpg";

type member = {
  avatar: ReactNode;
  name: string;
  role: string;
};

export const MEMBER: member[] = [
  {
    avatar: Kevin,
    name: "Kévin Pérard",
    role: "CEO & Senior Dev",
  },
  {
    avatar: TrungHai,
    name: "Trung Hai",
    role: "Full-stack Dev",
  },
  {
    avatar: QuynhLe,
    name: "Quynh Le",
    role: "Full-stack Dev",
  },
  {
    avatar: QuanNguyen,
    name: "Quan Nguyen",
    role: "Full-stack Dev",
  },
  {
    avatar: ThangDo,
    name: "Thang Do",
    role: "Full-stack Dev",
  },
  {
    avatar: CongThai,
    name: "Cong Thai",
    role: "Full-stack Dev",
  },
  {
    avatar: TrungHieu,
    name: "Trung Hieu",
    role: "Full-stack Dev",
  },
  {
    avatar: NhatLe,
    name: "Nhat Le",
    role: "Project Manager",
  },
  {
    avatar: GiangDiep,
    name: "Giang Diep",
    role: "QA",
  },
];
