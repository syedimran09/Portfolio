import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  mongodb,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  VTS,
  AGR,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React.js",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Responsive UI/UX Design",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];
const projects = [
   {
    name: "VTS (Vehicle Tracking System)",
    description: "A GPS-enabled Arduino-based system that allows real-time tracking and location monitoring of vehicles.",
    
    tags: [
      { name: "Arduino", color: "pink-text-gradient" },
      { name: "GPS", color: "blue-text-gradient" },
      { name: "Networks", color: "green-text-gradient" },
    ],
    image: VTS,
    source_code_link: "https://github.com/",
  },
  {
    name:"Enhancing crop yield and Resource Efficiency using LoRa Smart Agriculture System.",
    description:"A smart yeild mamagement system with LoRa(long Range) real time crop and soil monitor. User dashboard and control system.",
    tags: [
      {
        name:"LoRa",
        color:"pink-text-gradient"
      },
      {
        name:"Sensors",
        color:"green-text-gradient",
      },
      {
        name:"Ardunio",
        color:"blue-text-gradient"
      }
    ],
    image: AGR,
    source_code_link: "https://github.com/"
  },
];

export { services, technologies, projects };