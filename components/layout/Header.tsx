import Link from "next/link";
import { Logo, Navbar, MobileMenu } from ".";

//react icons
import { LiaSearchSolid } from "react-icons/lia";
import { HiDownload } from "react-icons/hi";

const Header = ({ leftNav = true }: { leftNav: boolean }) => {
  return (
    <header className="header">
      <div className="flex min-h-[70px] w-fit items-center justify-start text-xs lg:mt-3">
        <MobileMenu />
        <Logo />
        <Navbar />
      </div>
      {leftNav && (
        <div className="flex w-fit items-center justify-between lg:mt-3">
          <div className="ml-[8px] flex h-[30px] w-10 cursor-pointer items-center justify-center text-xl">
            <Link href={"/search"}>
              <LiaSearchSolid className="h-[25px] w-[25px] fill-white" />
            </Link>
          </div>
          <Link
            href={"/sign-up"}
            className="btn-primary 
            inline-block cursor-pointer py-1.5"
          >
            ورود
          </Link>
          <Link
            href={"/apps"}
            className="btn-primary mr-[5px] flex items-center gap-1 px-[5px] py-[5px] md:mr-2.5 md:px-2.5"
          >
            <span className="hidden mdl:inline">اپلیکیشن</span>
            <HiDownload className="h-[15px] w-[15px] overflow-hidden mdl:h-[18px] mdl:w-[18px]" />
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
