import LocalConfig from "@/constants/config";
import Link from "next/link";
import Strings from "@/constants/strings";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[12rem] flex items-center justify-center transition-transform duration-300"
      href={Strings.upworkLink}
      target="_blank"
    >
      <span className="ml-2">Hire
      <span className="text-2xl">
        😊
      </span>
         Me</span>
    </Link>
  );
};

export default ResumeButton;

