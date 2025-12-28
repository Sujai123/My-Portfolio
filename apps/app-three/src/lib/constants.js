import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaReact,
  FaCode,
  FaServer,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaRainbow,
} from "react-icons/fa";
import { SiCodepen, SiCodesandbox } from "react-icons/si";

export const CONTACT_INFO = {
  email: "sujaibeniks001@gmail.com",
  phone: "+91 8220752490",
  linkedin: "https://in.linkedin.com/in/sujai-beniks-j-89693616b",
  github: "https://github.com/Sujai123",
  portfolio: "https://sujai-beniks-portfolio.netlify.app/",
  location: "Coimbatore, TamilNadu, India",
};

export const SOCIAL_LINKS = [
  {
    href: CONTACT_INFO.github,
    icon: FaGithub,
    label: "GitHub",
  },
  {
    href: CONTACT_INFO.linkedin,
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    href: `mailto:${CONTACT_INFO.email}`,
    icon: FaEnvelope,
    label: "Email",
  },
  {
    href: `tel:${CONTACT_INFO.phone}`,
    icon: FaPhone,
    label: "Phone",
  },
];

export const PROFESSIONAL_EXPERIENCE = [
  {
    title: "Software Engineer",
    company: "ProcureDesk",
    period: "Dec 2025 - Current",
    description: "Full Stack Developer working on React JS in frontend and Ruby on Rails and Postgres in Backend.",
  },
  {
    title: "Associate Tech Lead",
    company: "Rently",
    period: "Aug 2019 - Nov 2025",
    description: "Worked across several teams and projects under Agile Project Management. Key contributions include integrating Single Sign-On and guiding junior developers. Received the 'Best Team Player' award in Q2 2023.",
  },
];

export const PERSONAL_PROJECTS = [
  {
    name: "Personal Portfolio",
    href: "https://tourmaline-zuccutto-5739fe.netlify.app/",
    description: "Responsive portfolio built using React and TypeScript. I plan to enhance this for more engagement.",
  },
  {
    name: "Old Personal Portfolio",
    href: "https://sujai123.github.io/my-blog/",
    description: "Responsive portfolio built using React. Check out my other mini personal projects by visiting the link.",
  },
];

export const CONTRIBUTIONS = [
  {
    platform: "IcodeThis",
    description: "Completed around 17 challenges.",
    icon: FaCode,
  },
  {
    platform: "CodePen",
    description: "Developed around 10 mini projects.",
    icon: SiCodepen,
  },
  {
    platform: "CodeSandBox",
    description: "Developed a few mini projects.",
    icon: SiCodesandbox,
  },
  {
    platform: "Blogs",
    description: "Released a blog post on 'Discovering the Stale Closure Trap'.",
    href: "https://engineering.rently.com/discovering-the-stale-closure-trap-a-weird-bug/",
  },
];

export const SKILLS = {
  frontend: [
    { name: "HTML", icon: FaHtml5 },
    { name: "CSS", icon: FaCss3Alt },
    { name: "JavaScript", icon: FaJsSquare },
    { name: "ReactJS", icon: FaReact },
    { name: "Redux", icon: FaReact },
    { name: "Material UI", icon: FaReact },
  ],
  backend: [
    { name: "Ruby on Rails", icon: FaServer },
    { name: "Ruby", icon: FaRainbow },
  ],
  database: [
    { name: "Postgres", icon: FaDatabase },
    { name: "SQL", icon: FaDatabase },
  ],
};

export const AREA_OF_INTEREST = [
  "I'm very much interested in UI development to make websites look beautiful yet pleasant. I'm always ready to learn new things about UI development.",
  "I also like to solve problems and I feel I'm strong in problem-solving skills.",
  "I'm also very much interested in writing clean, readable, maintainable code by following SOLID principles and design patterns, which I think is essential and can be applied to almost all languages out there.",
];

export const EDUCATION = {
  degree: "BE Computer Science and Engineering",
  university: "Sri Shakthi Institute of Engineering and Technology",
  graduationYear: 2020,
};
