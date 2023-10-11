import Link from "next/link";

const aboutPage = () => {
  return (
    <div className="mx-[14px] my-24 min-h-[80vh] w-[unset] max-w-[105vh] rounded-[25px] bg-[#0a0d14] p-2.5 px-[14px] text-[small] font-extralight text-white transition-all duration-300 ease-out xs:mx-auto xs:w-full xs:p-[30px] xs:text-[15px]">
      <h3 className="my-6 text-center text-xl font-bold text-white">
        درباره ما
      </h3>
      <hr />
      <Link
        href={"#"}
        className="relative z-10 my-0.5 mt-2 flex h-10 w-full items-center justify-between overflow-hidden rounded-[10px] bg-[#f90000] px-4 py-2.5 text-right text-[11px] font-normal text-white transition-all duration-300"
      >
        <span>درباره ما در تاریخ 11 آذر ماه 1398 بروزرسانی گردید.</span>
      </Link>
      <div className="relative z-10 flex w-full items-center justify-start px-6 py-2.5 text-justify text-[13px] font-extralight text-white transition-all duration-300 ease-in">
        «تماشاخونه» یک سکوی نمایش درخواستی فیلم درخواستی هوشمند می‌باشد که امکان
        دسترسی به فیلم‌ها و سریال‌ها را از طریق اتصال به اینترنت توسط برخی از
        رایانه‌ها، تلفن‌های همراه، تبلت و سایر دستگاه‌های پخش‌کننده برای
        «مشترکین» یا «کاربران» خود فراهم می‌نماید. سرویس «تماشاخونه» توسط شرکت
        آسیاتک در جمهوری اسلامی ایران، به شما ارائه می‌گردد. استفاده شما از
        سرویس «تماشاخونه» مشروط به شرایط و قوانین آن می باشد.
      </div>
    </div>
  );
};

export default aboutPage;
