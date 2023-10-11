"use client";
import Image from "next/image";
import { loginImg } from "@/public/assets/general";
import Link from "next/link";

const loginPage = () => {
  return (
    <>
      <article className="flex h-screen w-full flex-col items-center justify-center text-white">
        <div className="mb-8 flex h-fit w-[400px] justify-center">
          <Image
            src={loginImg}
            className="mt-[15px] h-auto w-2/4 max-w-[400px]"
            alt="image login"
          />
        </div>
        <article className="w-full max-w-[500px]">
          <form action="#">
            <section className="m-auto flex h-fit max-w-[450px] flex-col items-center justify-between">
              <label
                htmlFor="phoneNumber"
                className="relative mb-4 text-center"
              >
                <span>شماره تلفن همراه</span>
              </label>
              <div className="relative min-h-[7rem] w-4/5">
                <div className="mt-1 flex items-center rounded border-2 border-solid border-[#f90000]">
                  <input
                    name="phoneNumber"
                    autoComplete="off"
                    dir="ltr"
                    placeholder="09*********"
                    type="text"
                    className="m-0 min-h-[42px] w-full rounded bg-[#37383e] px-4 text-lg leading-[45px] text-white outline-0 transition-all duration-[5000] ease-in-out"
                  />
                </div>
                <div className=" visible mt-3 flex h-5 items-center justify-end bg-opacity-10 pr-4 text-sm text-[#f90000]">
                  <span>فیلد ورودی خالی می باشد</span>
                </div>
              </div>
              <div className="flex h-[90px] w-4/5 flex-col items-center justify-between">
                <button className="m-[7px] w-full border-2 border-[#ccc] p-2 text-center text-[0.9rem]">
                  <span>ورود/ثبت نام</span>
                </button>
                <button className="m-[7px] w-full border-2 border-[#ccc] p-2 text-center text-[0.9rem]">
                  <span>ورود با رمز یک بار مصرف</span>
                </button>
              </div>
              <Link
                href={"/agreement"}
                className="mt-8 block h-[30px] w-4/5 cursor-pointer select-none text-center text-white no-underline"
              >
                <span>
                  با ورود یا ثبت نام قوانین استفاده از سایت را می پذیرم .
                </span>
              </Link>
            </section>
          </form>
        </article>
      </article>
    </>
  );
};

export default loginPage;
