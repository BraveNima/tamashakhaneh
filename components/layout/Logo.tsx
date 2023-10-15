import Image from "next/image";
import Link from "next/link";
import { logo } from "@/public/assets/logos";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="z-20 flex items-center justify-center font-bold ">
        <Image
          alt="تماشاخانه"
          height={50}
          src={logo}
          className="z-20 h-8 w-[120px] mdl:h-8 mdl:w-auto xl:h-[50px]"
        />
      </div>
    </Link>
  );
};

export default Logo;
