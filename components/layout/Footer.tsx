import Link from "next/link";
import { enamad } from "@/assets/general";
import Image from "next/image";
import { footerNavList } from "@/constants/footer";

const Footer = () => {
  return (
    <footer className="relative h-fit min-h-[28vh] bg-primary text-sm text-[#aaa]">
      <div className="mx-auto flex flex-wrap pt-[50px]">
        <nav className="flex w-full flex-wrap text-white">
          <div className="flex w-full justify-center p-0">
            <Link
              scroll={false}
              href={"#"}
              className="mx-auto block rounded-[10px] md:h-[70%] md:p-[5px]"
            >
              <Image
                className="mb-[80px] h-[130px] w-[130px] md:w-auto md:rounded-[10px]"
                alt="اینماد"
                src={enamad}
              />
            </Link>
          </div>
          <div className="block w-full px-8 text-center">
            {footerNavList.map((footerLink) => (
              <Link
                key={footerLink.id}
                className="mr-6 inline-flex cursor-pointer select-none list-none text-base font-extralight text-[#bbb] no-underline first:mr-0"
                href={footerLink.href}
              >
                {footerLink.title}
              </Link>
            ))}
          </div>
        </nav>
        <div className="mt-5 h-auto w-full text-center text-[11px] font-thin leading-[18px] text-[#aaaaaa]">
          <p className=" bg-primary px-2 leading-6 md:px-0">
            خدمات ارایه شده در تماشاخونه، دارای مجوز های لازم از مراجع مربوطه می
            باشد و هر گونه بهره برداری و سوء استفاده از محتوای تماشاخونه، پیگرد
            قانونی دارد.
          </p>
          <p className="my-[11px] leading-6">© تماشاخونه</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
