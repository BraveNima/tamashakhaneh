import { tmdbOptions } from "@/lib";
import { BiBookmark } from "react-icons/bi";

const SeriesPage = async ({ params }: any) => {
  async function getData() {
    const res = await fetch(
      `https://api.themoviedb.org/3/person/224513?language=en-US`,
      tmdbOptions,
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }

  const pesronsdata = getData();
  console.log(pesronsdata);

  return (
    <section className="flex w-screen flex-wrap justify-center pt-20 md:justify-between ">
      <div className="flex w-full flex-wrap items-start justify-start px-8 md:px-4">
        <div className="m-[0.5em] flex w-[unset] items-center justify-center overflow-hidden rounded-lg md:w-[15%]">
          <img src="" className="w-[160px] rounded-[30%]" alt="" />
        </div>
        <div className=" flex w-[unset] select-text flex-col items-start justify-start md:w-4/5 md:p-8">
          <h2 className="my-4 text-2xl text-[#f4bf00]">مهران مدیری</h2>
          <h3 className="my-4 w-full px-3 text-justify text-base font-extralight leading-8 text-[#aaaaaa]">
            مهران مدیری خواننده، مجری، طراح صحنه و لباس، مجری طرح، صداپیشه و
            تهیه‌ کننده، کارگردان و بازیگر تلویزیون، سینما و تئاتر، متولد ۱۸
            فروردین ۱۳۴۶ در تهران است. مهران مدیری از سال ۱۳۷۲ با ساخت مجموعه‌
            طنز نوروز ۷۲ فعالیت هنری خود را آغاز کرد و تندیس حافظ بهترین بازیگر
            مرد کمدی تلویزیون برای مجموعه‌های مرد دو هزار چهره و قهوه تلخ را در
            کارنامه دارد. مهران مدیری از شانزده سالگی با تئاتر آشنا شد. در سال
            ۱۳۶۸ وارد رادیو شد و در داستان شب به مدت شش سال به گویندگی پرداخت.
            پس از ساخت و پخش مجموعه پرواز ۵۷، مهران مدیری ساخت سریالی دیگر را به
            نام ساعت خوش، با بازیگرانی نه چندان مطرح آغاز کرد که در سال‌های ۱۳۷۲
            و ۷۳ به صورت هفته‌ای یکبار از شبکه دو پخش می‌ شد. پس از آن در نوروز
            ۱۳۹۵ مجموعه دورهمی را راه اندازی کرد. مهران مدیری در سریال اختصاصی
            نماوا، خاتون حضور یافته است. از جمله افتخارات مهران مدیری می توان به
            طوطی طلایی بهترین بازیگر، تندیس حافظ بهترین بازیگر کمدی، تندیس
            بهترین مجری تلویزیون و نامزد سیمرغ بلورین بهترین بازیگر اشاره کرد.
          </h3>
          <div
            style={{ direction: "ltr" }}
            className="relative h-[30px] w-full"
          >
            <div className="">
              <BiBookmark className="h-[25px] w-[30px] fill-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex min-h-screen w-full flex-col items-start justify-start px-8 text-white">
        <h2 className="relative m-0 w-full pb-[14px] pr-[14px] pt-[84px] text-xl font-normal text-[#f4bf00]">
          <span>فیلم</span>
        </h2>
      </div>
    </section>
  );
};

export default SeriesPage;
