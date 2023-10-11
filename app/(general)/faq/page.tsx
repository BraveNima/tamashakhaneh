"use client";
import { QuestionBox } from "@/components";
import { faqData } from "@/constants/general";
import Link from "next/link";
import { useState } from "react";

const FaqPage = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="mx-[14px] my-24 min-h-[80vh] w-[unset] max-w-[105vh] rounded-[25px] bg-[#0a0d14] p-2.5 px-[14px] text-[small] font-extralight text-white transition-all duration-300 ease-out xs:mx-auto xs:w-full xs:p-[30px] xs:text-[15px]">
      <h3 className="my-6 text-center text-xl font-bold text-white">
        قوانین و مقررات
      </h3>
      <hr />
      <Link
        href={"#"}
        className="relative z-10 my-0.5 mb-5 mt-2 flex h-10 w-full items-center justify-center overflow-hidden rounded-[10px] bg-[#f90000] px-4 py-2.5 text-right text-[11px] font-normal text-white transition-all duration-300"
      >
        <span>
          شرایط استفاده از سرویس تماشاخونه در تاریخ ۱۷ خرداد ماه ۱۴۰۲ بروزرسانی
          گردید.
        </span>
      </Link>

      {faqData.map((faq) => (
        <>
          <QuestionBox
            key={faq.id}
            QuestionBoxtitle={faq.title}
            QuestionBoxRespond={faq.respond}
            index={faq.id}
            selected={selected}
            onSelect={setSelected}
          />
        </>
      ))}
    </div>
  );
};

export default FaqPage;
