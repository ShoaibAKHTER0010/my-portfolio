import ResponsiveBox from "@/components/core/ResponsiveBox";
import ConstraintedBox from "@/components/core/ConstraintedBox";
import GridBox from "@/components/core/GridBox";
import Column from "@/components/core/Column";
import SectionTitle from "@/components/common/SectionTitle";
import SocialButton from "./ui/SocialButton";
import socialLinks from "@/data/socialLinks";
import { CONTACT_US_LINK } from "@/constants"
import { FlipWords } from "../common/FlipWords";
import '@/app/global.css';

const HomeSection6 = ({ id }: { id: string }) => {
  return (
    <ResponsiveBox
      classNames="bg-[var(--bgColor)] min-h-[calc(100vh-5rem)] items-center justify-center"
      id={id}
    >
      <ConstraintedBox classNames="p-4 py-16">
        <SectionTitle>Get in Touch</SectionTitle>

        <Column classNames="mt-16 w-full">
          <GridBox classNames="sm:grid-cols-2 w-full mx-auto gap-4">
            {socialLinks.map((link, index) => {
              return (
                <SocialButton
                  key={`social-link-${index}`}
                  text={link.text}
                  icon={link.icon}
                  url={link.url}
                />
              );
            })}

            <a href={CONTACT_US_LINK} target="_blank" className="vibrate-on-hover ">
              <img
                className="relative flex flex-row animated__hover h-[48px] w-full object-contain mt-5"
                src="/images/whatsapp.svg"
                alt="contact me"
              />
            </a>

           
          </GridBox>

          <div className="text-center mx-auto mt-10 text-2xl/6 font-bold">
  <p className="inline-flex">
    I&apos;M&nbsp;
    <span className="text-[var(--primaryColor)]">Available For</span>
  </p>

  <FlipWords
    words={["Web-Developent", "Web-Flow Development"]}/>
</div>

        </Column>
      </ConstraintedBox>
    </ResponsiveBox>
  );
};

export default HomeSection6;
