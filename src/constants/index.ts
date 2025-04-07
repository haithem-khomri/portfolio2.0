import {
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
  tesla,
  threejs,
  envirovision,
  sneackers
} from "../assets";
import { 
  FaLaptopCode,
  FaBrain,
  FaInstagram 
} from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface NavLink {
  id: string;
  title: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  source_code_link: string;
}

export const navLinks: NavLink[] = [
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

interface Service {
  title: string;
  icon: IconType;
  description: string;
  color: string;
}

export const services: Service[] = [
  {
    title: "Web Developer",
    icon: FaLaptopCode,
    description: "Creating responsive and dynamic web applications using modern technologies.",
    color: "#4f46e5"
  },
  {
    title: "AI Models Builder",
    icon: FaBrain,
    description: "Developing and training custom AI models for various applications.",
    color: "#06b6d4"
  },
  {
    title: "Content Creator",
    icon: FaInstagram,
    description: "Producing engaging technical content and tutorials.",
    color: "#ef4444"
  }
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
    title: "Mobile Developer",
    company_name: "KIA Motors",
    icon: "/company-logos/kia.png",
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Jun 2022",
    points: [
      "Developing and maintaining cross-platform mobile applications using Flutter for both Android and iOS.",
      "Building intuitive and responsive user interfaces for a management-focused application, ensuring smooth user experience.",
      "Integrating backend services and APIs to enable real-time data handling and app functionality.",
      "Collaborating with designers, product managers, and QA testers to deliver high-quality features on time.",
      "Optimizing app performance, handling state management, and implementing best practices in mobile development.",
    ]
  },
  {
    title: "Programing Teacher",
    company_name: "WikiSpace Learning Center ",
    icon: "/company-logos/wiki.png",
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Teaching Python programming and frontend development (HTML, CSS, JavaScript, and React.js) to students of amatures.",
      "Designing and delivering engaging lessons, hands-on coding exercises, and real-world projects to enhance learning outcomes.",
      "Guiding students through problem-solving techniques and debugging strategies to build strong programming foundations.",
      "Staying up to date with industry trends to ensure course content remains relevant and effective.",
      "Mentoring students, reviewing their code, and providing personalized feedback to support their growth and confidence in coding."
    ]
  },
  {
    title: "M",
    company_name: "Google Developers Groupe",
    icon: "/company-logos/gdg.png",
    iconBg: "#383E56",
    date: "Sept 2023 - Jan2025",
    points: [
      "Contributing as a member of the Google Developer Group (GDG), supporting the organization of tech-related events, workshops, and hackathons for students.",
      "Assisting the public relations team in coordinating with university departments, industry professionals, and attendees to ensure effective communication and outreach.",
      "Helping to promote a culture of innovation, collaboration, and continuous learning within the student tech community through event engagement and support.",
      "Supporting fellow members and event participants by facilitating smooth logistics and ensuring resources and venues were prepared and accessible.",
      "Collaborating with the logistics and PR teams to manage operations, event planning, and stakeholder coordination for the successful execution of GDGC initiatives."
    ]
    
  },
  {
    title: "Manager",
    company_name: "Google Developers Groupe on Campus ",
    icon: "/company-logos/gdg.png",
    iconBg: "#383E56",
    date: "Sept 2024 - Present",
    points: [
      "Leading the Google Developer Groupe on Campus (GDGC) and organizing tech-related events, workshops, and hackathons for students.",
      "Collaborating with club members, university departments, and industry professionals to create impactful learning experiences.",
      "Promoting a culture of innovation, collaboration, and continuous learning within the student tech community.",
      "Supporting members in their journey to develop technical skills in areas like web development, machine learning, and cloud technologies.",
      "Managing communications, partnerships, and club operations to ensure the success and sustainability of the club's initiatives."
    ]
  },
  {
    title: "Full-Stack dev",
    company_name: "Envirovision",
    icon: "/company-logos/envirovision.png",
    iconBg: "#383E56",
    date: "Jan 2025 - Present",
    points: [
      "Developing and maintaining a full-stack agriculture platform using Node.js for backend and frontend framework React.js.",
      "Designing RESTful APIs to handle data related to crops, weather, farm management, and user interactions.",
      "Integrating third-party services and databases to provide real-time updates and analytics for farmers and stakeholders.",
      "Collaborating with a cross-functional team including agronomists, designers, and product managers to build user-centered features.",
      "Ensuring scalability, security, and performance of the platform to support rural and urban agricultural operations.",
    ]
  },
];

const projects: Project[] = [
  {
    name: "EnviroVision",
    description:
      "An AI-powered agriculture platform that helps farmers track plant growth and monitor crop health in real time",
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
      {
        name: "pytorch",
        color: "pink-text-gradient",
      },
    ],
    image: envirovision,
    source_code_link: "https://github.com/",
  },
  {
    name: "Shoes Shop",
    description:
      "Web application that enables users to search for latest Shoes and shop in a simple way ",
    tags: [
      {
        name: "html",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "JS",
        color: "yellow-text-gradient",
      },
    ],
    image: sneackers,
    source_code_link: "https://github.com/",
  },
];

export { technologies, experiences, projects }; 