import { PrivacyQuestion } from "@/components";
import { privacyData } from "@/constants/general";

const privacyPage = () => {
  return (
    <div className="mx-[14px] my-24 w-[unset] max-w-[105vh] rounded-[25px] bg-[#0a0d14] p-2.5 px-[14px] text-[small] font-extralight text-white transition-all duration-300 ease-out xs:mx-auto xs:w-full xs:p-[30px] xs:text-[15px]">
      <h3 className="my-6 text-center text-xl font-bold text-white">
        سیاست حفظ حریم خصوصی
      </h3>
      <hr />
      <div className="relative z-10 my-[18px] flex w-full items-center justify-start px-5 py-3 text-justify text-lg font-extralight leading-7 text-white transition-all duration-300 ease-in">
        در این اطلاعیه حفظ حریم خصوصی شرکت آسیاتک، توضیح داده شده که چگونه و یا
        چرا احتمال دارد که اطلاعات شما جمع‌آوری، ذخیره، استفاده و یا فرآوری شود.
        هنگامی که شما از یکی از خدمات ما استفاده می کنید، برای مثال در هنگام
        دانلود و استفاده از نرم افزار مخصوص تلفن همراه (تماشاخونه) یا هر نرم
        افزار دیگری که متعلق به آسیاتک که به این اطلاعیه حفظ حریم خصوصی پیوند
        داده شده، و یا از راه‌های مرتبط دیگر از جمله فروش، بازاریابی یا رویدادها
        این احتمال وجود دارد.
      </div>
      {privacyData.map((privacy) => (
        <PrivacyQuestion
          key={privacy.id}
          questionTitle={privacy.title}
          questionAnswer={privacy.respond}
        />
      ))}
    </div>
  );
};

export default privacyPage;
