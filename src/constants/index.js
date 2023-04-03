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
  shopify,
  ecommerce,
  mfm,
  glc,
  threejs,
  realdb,
  chatgpt,
  chknsammy,
  jobapp,
  tshirt
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
    title: "Software Engineer",
    icon: web,
  },
  {
    title: "Web Designer",
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
    company_name: "freelance",
    icon: shopify,
    iconBg: "#383E56",
    date: "On going",
    points: [
      "Building and maintaining web applications with React.js and related technologies.",
      "Cooperating with clients to create software solutions and maintaining ecommerce sites and products through updates.",
      "Enforcing responsive design and verifying cross-browser compatibility.",
      "Pursuing ongoing education to acquire knowledge and skills to perform at the highest level of competence.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Made For Marketing",
    icon: mfm,
    iconBg: "#383E56",
    date: "March 2021 - January 2023",
    points: [
      "Utilized React.js and associated technologies to build and maintain web applications.",
      "Worked closely with cross-functional teams comprised product managers, designers, and developers to produce superior quality products.",
      "Incorporated responsive design and verifyed cross-browser compatibility.",
      "Joined code reviews and delivered constructive criticism to fellow developers.",
    ],
  },
  {
    title: "Web3 Developer",
    company_name: "GLC",
    icon: glc,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Nov 2022",
    points: [
      "Created and managed web applications with React.js and Next.js.",
      "Collaborated to generate NFTs using assets through generative art.",
      "Designed and produced front-end experiences for minting assets.",
      "Engaged with the community by publicly addressing inquiries about procedures and projections, and ensuring transparency.",
    ],
  },
  {
    title: "Meta Frontend Developer Professional Certification",
    company_name: "Meta Course",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "June 2022 - Jan 2023",
    points: [
      "React.js and related technologies were utilized to develop and maintain web applications.",
      "Wireframes, user flows, user personas, and prototypes were designed with Figma.",
      "Needs were empathized with, problems were defined, creativity was ideated, solutions were prototyped, and everything was tested.",
      "Code reviews were participated in and constructive feedback was provided to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I couldn't be more impressed with the outstanding work provided by this individual. Their ability to craft compelling content and deliver it within tight deadlines is truly remarkable. Their professionalism and attention to detail are unparalleled, making them an invaluable asset to any project.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "",
  },
  {
    testimonial:
      "I had the pleasure of collaborating with this individual on a project, and I was blown away by their creativity and innovation. They consistently delivered high-quality work that exceeded my expectations, and their exceptional communication skills made the entire process a breeze. I would highly recommend them to anyone in need of top-notch content creation.",
    name: "Standly Inname",
    designation: "COO",
    company: "Generic Company",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "It was an absolute pleasure working with this individual. Their commitment to excellence and their unwavering dedication to their craft is truly inspiring. They were able to take my ideas and transform them into captivating content that effectively communicated my message. I would recommend them without hesitation to anyone seeking a talented and reliable content creator.",
    name: "Thisisa Placeholderer",
    designation: "CTO",
    company: "Placeholder Enterprises",
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
    source_code_link: "https://meek-kitsune-0153ba.netlify.app/",
  },
  {
  name: "React-Native Job Finder App",
    description:
      "A React-Native application that allows users to search for jobs based on their location, skills, expected salary, and more. The app uses RapidApi to retrieve data.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "rapidapi",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobapp,
    source_code_link: "",
  },
  {
    name: "Ecommerce website",
    description:
      "Ecommerce website with stripe integration. Functionality includes checkout, payment, shipping, and more. Connected to headless CMS from sanity.io",
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
    image: ecommerce,
    source_code_link: "https://rgrtht-store.vercel.app/",
  },
  {
    name: "ChatGPT Clone",
    description:
      "The study explores the utilization of ChatGPT and OpenAI API to empower an application, incorporating Firebase and Google OAuth2 logins to store various chats.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chatgpt,
    source_code_link: "https://gptclone.vercel.app/",
  },
  {
  name: "Restaurant Landing Page",
    description:
      "Still under construction - landing page for a restaurant using custom-made 3D graphics to showcase the restaurant in a different light compaire to competition, to leave a lasting impression on potential customers. By utilizing 3D models and interactive features, creating an immersive experience that will entice them to order, and to visit in person.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chknsammy,
    source_code_link: "",
  },
  {
  name: "T-shirt customizer",
    description:
      "T shirt customizer that allows users to customize the appearance of a 3D model, including the colour of the shirt the logo design and placement and even to upgrade their own, not only that it uses openAI API to allow users to create logos from prompts right in the app.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "dall-e",
        color: "pink-text-gradient",
      },
    ],
    image: tshirt,
    source_code_link: "",
  },
];

const socials = [
    {
      url:"https://www.instagram.com/theartintheraw"
    },
    {
      url:"https://twitter.com/TheArtintheRaw"
    },
    {
      url:"https://www.linkedin.com/in/artintheraw"
    },
    {
      url:"https://github.com/TheArtintheRaw"
    },
  ];


export { services, technologies, experiences, testimonials, projects, socials };
