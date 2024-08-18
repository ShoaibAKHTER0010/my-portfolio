import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: "E-commerce shopping-website",
    title: "E-commerce Shopping-Website",
    description:
      "Bitshop Project: Developed and launched a dynamic e-commerce website using Next.js, Redux,TypeScript,JavaScript,React-hooks,Css and Tailwind CSS.",
    icon: "/skills/nextjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ShoaibAKHTER0010/bitshop.E-Commerce-Website-by-Redux",
    
    url: "https://bitshop-new-e-commerce-website-by-redux.vercel.app/",
    tags: ["Next.js", "Redux", "JavaScript", "Tailwind-Css","APIs"],
    sceenshots: ["/screenshots/rippl.png"],
  },
  // project-2
  {
    id: "Smile-website",
    title: "Smile-Website",
    description:
      "Smile is a cutting-edge project built with TypeScript, designed to enhance user experiences through a robust, type-safe codebase. This project focuses on delivering a smooth, intuitive, and enjoyable interface, ensuring both reliability and performance.",
    icon: "/skills/typescript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ShoaibAKHTER0010/smile-site",
    url: "https://smile-site-phi.vercel.app/",
    tags: ["TypeScript", "Shade-cn", "Tailwind-Css", "Next-ui"],
  },
  // project-3
  {
    id: "Music Player-App",
    title: "Music Player-App",
    description:
      "This Music Player app, built with JavaScript and HTML5, offers a sleek and intuitive interface for enjoying your favorite tunes. It allows users to play, pause, and skip tracks, manage playlists, and adjust volume settings with ease. ",
    icon: "/skills/javascript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ShoaibAKHTER0010/me-play-new-app",
    url: "https://me-play-new-app.vercel.app/",
    tags: ["JavaScript", "HTML5", "CSS3", "SCSS","APIs"],
  },
  // project-4
  {
    id: "Quran-Website",
    title: "Quran Learning Website",
    description:
      " Quran Project: Developed a comprehensive Quran reading application using TypeScript and Next.js. The project features a clean and intuitive interface, allowing users to easily navigate through Surahs and Ayahs. ",
    icon: "/skills/typescript.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ShoaibAKHTER0010/new-quran-website",
    url: "https://new-quran-website.vercel.app/",
    tags: ["TypeScript", "Next.js", "Tailwind CSS", "Shade-cn"],
  },
  // project-5
  {
    id: "Bank Website-landing page",
    title: "Bank Website",
    description:
      " Bank Project: Developed an interactive banking application using React.js with animation for a seamless user experience. ",
    icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ShoaibAKHTER0010/bank-website-for-you",
    url:"https://bank-website-for-you.vercel.app/",
    tags: ["React.js", "Tailwins CSS", "npm", "MongoDB", "CSS","APIs"],
  },
  // project-6

  {
    id: "Youtube Clone",
    title: "Youtube Clone",
    description:
      "YouTube Clone is a feature-rich web application built using JavaScript, Tailwind CSS, Router, and APIs. It replicates the core functionalities of YouTube, allowing users to browse and watch videos, search for content, and navigate through different categories. ",
    icon: "/skills/nodejs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/ShoaibAKHTER0010/new-youtube-clone",
    url: "https://new-youtube-clone-seven.vercel.app/",
    tags: ["JavaScript", "Node.js", "MongoDB", "APIs"],
  },
];

export default projects;

export function getProjectName(id: string) {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item.title;
}

export function getProjectDetails(id: string): IProjectItem | null {
  const item = projects.find((e) => e.id === id);

  if (!item) return null;

  return item;
}
