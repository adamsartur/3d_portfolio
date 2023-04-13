import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  hookit,
  zustand,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  neon,
  mindmaps,
  sap,
  logo
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
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
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "SDK Support Expert",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Zustand",
    icon: zustand,
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
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Independent",
    icon: logo,
    iconBg: "#383E56",
    date: "Mar 2009 - Apr 2014",
    points: [
      "Developing and maintaining web applications either for direct customers, or hired as outsource.",
      "Raising requisites and delivering end-to-end projects.",
      "According to project needs I would sometimes gather a team to work toghether.",
      "Mostly used techs: Php, Js, MySQL, jQuery, Wordpress and git",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Hookit",
    icon: hookit,
    iconBg: "#E6DEDD",
    date: "Apr 2013 - Jan 2014",
    points: [
      "Raise requirements, build out functionalities to deliver MVP of the startup.",
      "With few resources we were selected for 2 acceleration programs which founded the company.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Hookit",
    icon: hookit,
    iconBg: "#383E56",
    date: "Jan 2014 - Sep 2016",
    points: [
      "Build and ship Frontend Stack for the applications, delivering responsive layouts with Pixel Precision.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Maintaining coding standards and studying best technologies to approach requirements.",
      "Keep a close communication with Customer, Designer and Backend Engineers, in order to coordinate and function optimally.",
    ],
  },
  {
    title: "SDK Support for Partners",
    company_name: "SAP",
    icon: sap,
    iconBg: "#E6DEDD",
    date: "Sep 2016 - Jan 2022",
    points: [
      "Provide support for Partners making use of custom SDK to enhance C4C and ByD products from SAP.",
      "Review complex scenarios from customers, to identify either SDK is behaving incorrectly, or if the partner's implementation needs to be fixed.",
      "Collaborate with international teams in a big organization which requires following processes, generating documentation and communicating clearly.",
      "Participated and started different projects and iniciatives. Also received several trainings on both technical and soft skills, and delivered a few.",
      "Drive end-to-end escalations, acting under pressure while maintaining the customer calm. Ensuring customer's success on critical scenarios.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Project STA was awarded with both Product Support Innovation All-Star Award, and Team of the Quarter. Project automated actions which reduces processes for global team from 17 clicks to 3.",
    name: "SAP",
    designation: "2020",
    company: "Team of the Quarter Award",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Pluginfication - a chrome extension that adds context help to the user to gather the relevant data for support, and some information for the user.",
    name: "SAP",
    designation: "2021",
    company: "Most Impactful Idea Award",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Guide.me - an app to facilitate learning with mentors. Guide me facilitates matching who wants to learn with who wants to teach.",
    name: "SAP",
    designation: "2020",
    company: "1 Billion Lives LAT Challenge Winner",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Mindmaps",
    description:
      "An App to create mindmaps, flows and diagrams in general, with validation based on data and integration with openai",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "prismadb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: mindmaps,
    source_code_link: "https://github.com/adamsartur/mindmaps",
    live_link: "https://mymindmaps.netlify.app/",
  },
  {
    name: "Neon",
    description:
      "Just some animations I'm designing. Currently it's just pretty, but it's still being developed.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "gsap",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
      {
        name: "next",
        color: "blue-text-gradient",
      },
    ],
    image: neon,
    source_code_link: "https://github.com/adamsartur/neon",
    live_link: "https://arturneon.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
