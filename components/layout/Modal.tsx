const Modal = () => {
  return (
    <div
      style={{ transform: "translate(-50%, -50%)" }}
      className="translate fixed left-2/4 top-2/4 z-50 flex h-screen w-screen items-center justify-center bg-[#0009] text-white"
    >
      <div className="flex w-[300px] flex-col items-center justify-center rounded-[15px] bg-[#171c24] p-[46px] md:w-[400px]">
        <h2 className="my-4 text-xl">اخطار</h2>
        <p>لطفا برای استفاده بهتر vpn خود را خاموش کنید.</p>
        <button className="mt-5 cursor-pointer rounded-[15px] bg-[#f3c007] px-[25px] py-[5px] text-black">
          باشه
        </button>
      </div>
    </div>
  );
};

export default Modal;
