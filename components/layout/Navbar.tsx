import Link from "next/link";

//import navlist items for maping them
import { Navlist } from "@/constants/header";

const Navbar = () => {
  return (
    <div className="hidden h-[42px] w-auto cursor-pointer items-center justify-center text-[1.1rem] mdl:flex">
      {Navlist.map((navLink) => (
        <Link
          key={navLink?.id}
          href={`${navLink?.href}`}
          className="flex w-auto cursor-pointer items-center py-[0.9rem] font-medium text-white transition-all hover:text-[#f9c000]"
        >
          <span className="mr-[15px]">{navLink?.navItem}</span>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
