import Link from "next/link";
import { Logo, Navbar, MobileMenu } from ".";

// react icons
import { LiaSearchSolid } from "react-icons/lia";
import { HiDownload } from "react-icons/hi";
import { SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import { BiSolidBellRing } from "react-icons/bi";

const Header = ({ leftNav = true }: { leftNav: boolean }) => {
  return (
    <header className="header">
      <div className="flex min-h-[70px] w-fit items-center justify-start text-xs lg:mt-3">
        <MobileMenu />
        <Logo />
        <Navbar />
      </div>
      {leftNav && (
        <div className="mt-3 flex w-fit items-center justify-between">
          <div className="ml-[8px] flex h-[30px] cursor-pointer items-center justify-center gap-7 text-xl">
            <Link href={"/search"}>
              <LiaSearchSolid className="h-[25px] w-[25px] fill-white" />
            </Link>
            <SignedIn>
              <div className="flex  gap-3 md:flex md:gap-5">
                <BiSolidBellRing className="h-6 w-6 fill-white md:h-[25px] md:w-[25px]" />
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>

            <SignedOut>
              <Link
                href={"/sign-up"}
                className="btn-primary 
            inline-block cursor-pointer py-1.5"
              >
                ورود
              </Link>
            </SignedOut>
          </div>
          <Link
            href={"/apps"}
            className="btn-primary mr-[5px] flex items-center gap-1 p-[5px] md:mr-2.5 md:px-2.5"
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
