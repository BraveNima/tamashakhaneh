import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div dir="ltr" className="flex min-h-[50vh] items-center justify-center">
      <SignUp />
    </div>
  );
}
