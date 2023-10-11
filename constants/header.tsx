//nav data for desktop

export const Navlist = [
  {
    id: 1,
    navItem: "دسته بندی‌ها",
    href: "/category",
  },
  {
    id: 2,
    navItem: "فیلم",
    href: "/movies",
  },
  {
    id: 3,
    navItem: "سریال",
    href: "/series",
  },
  {
    id: 4,
    navItem: "کودک",
    href: "/kids",
  },
  {
    id: 5,
    navItem: "هنرمندان",
    href: "/casts",
  },
  {
    id: 6,
    navItem: "پخش آنلاین",
    href: "/LiveChannels",
  },
];

import { PiTelevisionDuotone } from "react-icons/pi";
import { BsPeople } from "react-icons/bs";
import {
  BiHomeAlt2,
  BiSortZA,
  BiMoviePlay,
  BiCameraMovie,
  BiLogInCircle,
} from "react-icons/bi";
import { LuBaby } from "react-icons/lu";

///navbar data for the mobile screens with icons

export const NavMobilelist = [
  {
    id: 1,
    navItem: "تماشاخونه",
    icon: <BiHomeAlt2 className="h-6 w-6" />,
    href: "/",
  },
  {
    id: 2,
    navItem: "هنرمندان",
    icon: <BsPeople className="h-6 w-6" />,
    href: "/casts",
  },
  {
    id: 3,
    navItem: "کودک",
    icon: <LuBaby className="h-6 w-6" />,
    href: "/kids",
  },
  {
    id: 4,
    navItem: "پخش آنلاین",
    icon: <PiTelevisionDuotone className="h-6 w-6" />,
    href: "/LiveChannels",
  },
  {
    id: 5,
    navItem: "ورود آسان",
    href: "/login",
    icon: <BiLogInCircle className="h-6 w-6" />,
  },
  {
    id: 6,
    navItem: "فیلم",
    icon: <BiCameraMovie className="h-6 w-6" />,
  },
  {
    id: 7,
    navItem: "سریال",
    icon: <BiMoviePlay className="h-6 w-6" />,
  },
  {
    id: 8,
    navItem: "دسته بندی",
    icon: <BiSortZA className="h-6 w-6" />,
  },
];
