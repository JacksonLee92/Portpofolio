import { EvervaultCard } from "@/components/ui/evervault-card";
import {
  IconBrandAndroid,
  IconBrandAngular,
  IconBrandCSharp,
  IconBrandDjango,
  IconBrandFigma,
  IconBrandGolang,
  IconBrandJavascript,
  IconBrandLaravel,
  IconBrandMantine,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPhp,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandRedux,
  IconBrandRust,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandWordpress,
  IconGitPullRequest,
  IconGrain,
  IconSql,
} from "@tabler/icons-react";

export const Experience = () => {
  const experience = [
    {
      name: "Next.Js",
      logo: <IconBrandNextjs size={100} stroke={1.25} />,
    },
    {
      name: "Wordpress",
      logo: <IconBrandWordpress size={100} stroke={1.25} />,
    },
    {
      name: "Figma",
      logo: <IconBrandFigma size={100} stroke={1.25} />,
    },
    {
      name: "Typescript",
      logo: <IconBrandTypescript size={100} stroke={1.25} />,
    },
    {
      name: "Javascript",
      logo: <IconBrandJavascript size={100} stroke={1.25} />,
    },

    {
      name: "React",
      logo: <IconBrandReact size={100} stroke={1.25} />,
    },
    {
      name: "Redux",
      logo: <IconBrandRedux size={100} stroke={1.25} />,
    },
    {
      name: "React Query",
      logo: <IconBrandReactNative size={100} stroke={1.25} />,
    },
    {
      name: "Tailwind",
      logo: <IconBrandTailwind size={100} stroke={1.25} />,
    },

    {
      name: "Node.Js",
      logo: <IconBrandNodejs size={100} stroke={1.25} />,
    },
    {
      name: "MongoDB",
      logo: <IconBrandMongodb size={100} stroke={1.25} />,
    },
    {
      name: "Express",
      logo: <IconGrain size={100} stroke={1.25} />,
    },
    {
      name: "Rust",
      logo: <IconBrandRust size={100} stroke={1.25} />,
    },
    {
      name: "Golang",
      logo: <IconBrandGolang size={100} stroke={1.25} />,
    },
    {
      name: "Php",
      logo: <IconBrandPhp size={100} stroke={1.25} />,
    },
    {
      name: "Laravel",
      logo: <IconBrandLaravel size={100} stroke={1.25} />,
    },
    {
      name: "Sql",
      logo: <IconSql size={100} stroke={1.25} />,
    },
    {
      name: "Django",
      logo: <IconBrandDjango size={100} stroke={1.25} />,
    },
    {
      name: "C#",
      logo: <IconBrandCSharp size={100} stroke={1.25} />,
    },
    {
      name: "Android",
      logo: <IconBrandAndroid size={100} stroke={1.25} />,
    },
    {
      name: "Angular",
      logo: <IconBrandAngular size={100} stroke={1.25} />,
    },
    {
      name: "Git",
      logo: <IconGitPullRequest size={100} stroke={1.25} />,
    },
  ];

  return (
    <div className=" flex flex-col items-center justify-center ">
      <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6 ">
        Experience{" "}
      </h1>
      <div className="font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mt-4 mb-8  max-w-md mx-auto">
        <p>
          These are some of the skills,
        </p>
        and I&apos;m just a part of our team and community. I&apos;m always happy about that.
      </div>

      <div
        id="experience"
        className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-6  w-3/4 mx-auto"
      >
        {experience.map((item) => (
          <div className="border border-white" key={item.name}>
            <EvervaultCard text={item.name} icon={item.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};
