import aiStartupLandingPage from "../../public/images/ai-startup-landing-page.png";
import AboutImage from "../../public/images/aboutme.png";
import AboutImageMobile from "../../public/images/aboutme (2).png";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export const AboutSection = () => {
  return (
    <div className=" flex items-start justify-center -mt-32" id="about">
      <ContainerScroll
        titleComponent={<div className="flex flex-col items-center justify-center md:gap-3 -mb-28 md:-mb-0">
          <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6">
            About Me
          </h1>
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            strong team
          </p>
          <div className="text-left mt-4 text-white/60 md:text-lg">
            <p className="text-left ml-4 mt-4 text-white md:text-lg">Jackson Lee from Singapore.</p>
            <p className="mb-10">
              I have been working as a senior backend developer and development team leader for 5 years.
              After graduating from Hong Kong University, I have worked in several companies and gained rich experience in building backends and APIs.
              2 years ago, I formed a small team with friends I met while studying at university.
              The team was small, but we were always very optimistic.
              Since then, the team has grown and grown, and now we have developers from various countries and regions, and we have built a strong community.
              As a development team leader, I am very happy about this.
              Because this also is our team's mission.
              Thank you for your consideration.
            </p>
          </div>
        </div >}
      >
        <Image
          src={AboutImage}
          alt="hero"
          height={500}
          width={1400}
          className="mx- auto rounded-3xl object-cover h-full object-left-top hidden md:block"
          draggable={false} />
        <Image
          src={AboutImageMobile}
          alt="hero"
          height={500}
          width={1600}
          className="mx-auto rounded-2xl object-cover h-full object-left md:hidden "
          draggable={false} />
      </ContainerScroll >

    </div >
  );
};
