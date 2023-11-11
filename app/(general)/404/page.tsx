/**
 * errorPage component displays a 404 error page.
 * It shows a 404 image and text indicating the page is not found.
 */
import Image from "next/image";
import error404 from "../../../public/assets/error/error.png";

const errorPage = () => {
  return (
    <div className="relative flex h-screen min-h-[40vh] w-screen flex-col-reverse items-center justify-center text-center text-white mdl:h-full mdl:flex-row mdl:pt-[12rem]">
      <Image src={error404} alt="error" className="w-[80%] mdl:w-2/4" />
      <div className="mr-16 mt-[25px] text-6xl font-bold">
        <div className="p-5 py-6 text-[#93e09d] mdl:p-0">404</div>
        <div className="p-5 text-lg mdl:p-0 mdl:text-3xl">
          !صفحه مورد نظر یافت نشد
        </div>
      </div>
    </div>
  );
};

export default errorPage;
