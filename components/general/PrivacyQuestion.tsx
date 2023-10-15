type PrivacyQuestionProps = {
  questionTitle: string;
  questionAnswer: string;
};
const PrivacyQuestion = ({
  questionTitle,
  questionAnswer,
}: PrivacyQuestionProps) => {
  return (
    <>
      <h4 className="my-7 text-right text-xl font-bold">{questionTitle}</h4>
      <div className="relative z-10 my-[18px] flex w-full items-center justify-start px-5 py-3 text-justify text-lg font-extralight leading-7 text-white transition-all duration-300 ease-in">
        {questionAnswer}
      </div>
    </>
  );
};

export default PrivacyQuestion;
