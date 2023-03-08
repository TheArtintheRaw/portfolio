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
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,

  shopify,
  
 
  Placeholder,
 
  mfm,
  glc,
  threejs,
  realdb,
  chatgpt,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "ABOUT",
  },
  {
    id: "work",
    title: "WORK",
  },
  {
    id: "contact",
    title: "CONTACT",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Web3 Developer",
    icon: backend,
  },
  {
    title: "Graphic Designer",
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
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Made For Marketing",
    icon: mfm,
    iconBg: "#383E56",
    date: "March 2021 - January 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web3 Developer",
    company_name: "GLC",
    icon: glc,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Nov 2022",
    points: [
      "Developing and maintaining web applications using React.js and Next.js.",
      "Collaborating to produce NFTs from assets via generative art.",
      "Developing and producing front end minting experienceS for the obtaining assets.",
      "Participating in the community, answering questions publicly about processes and projections, providing transparency.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "freelance",
    icon: shopify,
    iconBg: "#383E56",
    date: "On going",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with clients to develop software solutions and updating and maintaining ecommerce sites and products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Continuing to educate myself, acquiring knowledge and skills in order to produce to the best of my abilities.",
    ],
  },
  {
    title: "Meta Frontend Developer Professional Certification",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Designing wire frames, user flows, user personas, and prototypes with Figma.",
      "Empathize needs, define problems, ideate creativity, prototype solutions, test everything.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Roger proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Roger does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Roger optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "MERN Dashboard",
    description:
      "Web-based CRUD Dashboard Application for Real Estate using the MERN stack, featuring login and out, creation and deletion of properties, agents directory and more.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: realdb,
    source_code_link: "https://github.com/TheArtintheRaw/dashboard_mern_study",
  },
  {
    name: "Web3 Metaverse Site",
    description:
      "Web3 metaverse application, utilizing xyz.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: Placeholder,
    source_code_link: "https://github.com/",
  },
  {
    name: "ChatGPT Clone",
    description:
      "A study on ChatGPT and how to use OpenAI API to power an application - uses firebase and google oauth2 logins.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chatgpt,
    source_code_link: "https://github.com/TheArtintheRaw/gptclone/",
  },
];

export { services, technologies, experiences, testimonials, projects };
