import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Programming Languages",
    items: [
      {
        title: "JavaScript",
        level: SkillLevel.Expert,
        icon: "/skills/javascript.svg",
      },
      {
        title: "TypeScript",
        level: SkillLevel.Expert,
        icon: "/skills/typescript.svg",
      },
      {
        title: "Html",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },

      {
        title: "CSS",
        level: SkillLevel.Expert,
        icon: "/skills/css.svg",
      },




    ],
  },
  {
    title: "Frontend Development",
    items: [
      {
        title: "Next.js",
        level: SkillLevel.Expert,
        icon: "/skills/nextjs.png",
      },
      {
        title: "React.js",
        level: SkillLevel.Expert,
        icon: "/skills/react.svg",
      },
      {
        title: "HTML",
        level: SkillLevel.Expert,
        icon: "/skills/html.svg",
      },
      {
        title: "CSS",
        level: SkillLevel.Expert,
        icon: "/skills/css.svg",
      },
      {
        title: "SASS",
        level: SkillLevel.Expert,
        icon: "/skills/sass.svg",
      },
      {
        title: "Redux Toolkit",
        level: SkillLevel.Expert,
        icon: "/skills/redux.svg",
      },

      {
        title: "React Hooks",
        level: SkillLevel.Intermediate,
        icon: "/skills/hooks.png",
      },

    ],
  },
  {
    title: "Backend Development",
    items: [
      {
        title: "Node.js",
        level: SkillLevel.Expert,
        icon: "/skills/nodejs.svg",
      },
      {
        title: "Express.js",
        level: SkillLevel.Expert,
        icon: "/skills/express.svg",
      },
      {
        title: "Socket.io",
        level: SkillLevel.Intermediate,
        icon: "/skills/socket-io.png",
      },
      // {
      //   title: "Nest.js",
      //   level: SkillLevel.Begginer,
      //   icon: "/skills/nestjs.svg",
      // },
    ],
  },
  // {
  //   title: "Mobile App Development",
  //   items: [
  //     {
  //       title: "Flutter",
  //       level: SkillLevel.Expert,
  //       icon: "/skills/flutter.svg",
  //     },
  //     {
  //       title: "GetX",
  //       level: SkillLevel.Expert,
  //       icon: "/skills/getx.png",
  //     },
  //   ],
  // },
  {
    title: "Database Management",
    items: [
      {
        title: "MongoDB",
        level: SkillLevel.Intermediate,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "Prism",
        level: SkillLevel.Begginer,
        icon: "/skills/prism.png",
      },
      {
        title: "SQlite",
        level: SkillLevel.Intermediate,
        icon: "/skills/sqlite.svg",
      },

      {
        title: "Strapi",
        level: SkillLevel.Intermediate,
        icon: "/skills/strapi.png",
      },

    ],
  },
  {
    title: "Common Tools",
    items: [
      {
        title: "Vercel",
        level: SkillLevel.Expert,
        icon: "/skills/vercel.png",
      },
      
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
    ],
  },
  // {
  //   title: "Miscellaneous",
  //   items: [
  //     {
  //       title: "Firebase",
  //       level: SkillLevel.Intermediate,
  //       icon: "/skills/firebase.svg",
  //     },
  //     {
  //       title: "Ubuntu",
  //       level: SkillLevel.Intermediate,
  //       icon: "/skills/ubuntu.png",
  //     },
  //   ],
  // },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;
