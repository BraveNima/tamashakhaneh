import React from "react";

const genres = [
  "اکشن",
  "ماجراجویی",
  "کمدی",
  "جنایی",
  "درام",
  "ترسناک",
  "تاریخی",
  "انیمیشن",
  "مستند",
  "رازآلود",
  "فانتزی",
  "موزیکال",
  "علمی-تخیلی",
  "جنگی",
  "وسترن",
  "ورزشی",
  "بیوگرافی",
  "عاشقانه",
  "خانوادگی",
  "هیجان انگیز",
  "فیلم کوتاه",
  "موزیک",
  "خبر",
  "واقع‌نما",
  "فیلم نوآر",
  "انیمه",
  "اجتماعی",
  "مذهبی",
  "ترکیبی",
  "ملودرام",
  "تاک شو",
  "آموزشی",
  "گیم شو",
];

const Filtersearch = () => {
  return (
    <section className=" hidden h-max w-[380px] flex-col-reverse flex-wrap justify-around pr-[35px] pt-[35px] text-center md:flex">
      <section className="my-4 w-full overflow-hidden rounded-xl"></section>
      <section
        style={{ gridTemplateColumns: "36% 64%" }}
        className="my-4 grid w-full overflow-hidden rounded-xl bg-[#171c24] text-white"
      >
        <ul className="min-h-[300px] list-none bg-[#39393a] py-6">
          <li className="flex min-h-[42px] w-full items-center justify-between whitespace-nowrap px-7 text-right">
            <span>‌‌ژانر</span>
          </li>
          <li className="flex min-h-[42px] w-full items-center justify-between whitespace-nowrap px-7 text-right">
            <span>کشور سازنده</span>
          </li>
          <li className="flex min-h-[42px] w-full items-center justify-between whitespace-nowrap px-7 text-right">
            <span>سال انتشار</span>
          </li>
          <li className="flex min-h-[42px] w-full items-center justify-between whitespace-nowrap px-7 text-right">
            <span>امتیاز IMDB</span>
          </li>
        </ul>
        <div className="h-full min-h-[300px] w-full bg-[#2A2A2A]">
          <section className="p-5">
            <input
              type="text"
              className="h-[35px] w-full rounded-[5px] border-none bg-[#707070] text-white outline-none"
            />
            <div className="searchScroll mt-5 h-full max-h-[375px] overflow-y-scroll">
              {genres.map((genre) => (
                <div
                  key={genre}
                  className="flex items-center justify-start py-4 text-[12px]"
                >
                  <label
                    htmlFor=""
                    className="text relative -top-[6px] left-2.5 mb-3 block cursor-pointer select-none pl-[35px]"
                  >
                    <input
                      type="text"
                      className="absolute h-0 w-0 cursor-pointer rounded-[5px] opacity-0"
                    />
                    <span className="absolute left-0 top-0 h-[25px] w-[25px] rounded-[5px] bg-[#707070]"></span>
                  </label>
                  {genre}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Filtersearch;
