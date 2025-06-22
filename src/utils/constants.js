import { projectImages, skillImages } from "../images";

const Bio = {
  name: "Suraj Pathak",
  roles: ["Full Stack Developer", "Computer Engineer"],
  description:
    "As a computer engineering graduate from Pulchowk Campus, I have developed a keen interest in the areas of web development, backend APIs, and machine learning. With a passion for staying abreast of emerging technologies, I am constantly seeking opportunities to learn and grow my skillset.",
  github: "https://github.com/The-SP",
  linkedin: "https://www.linkedin.com/in/suraj-pathak-aa8035238/",
  resume: "",
};

const skills = [
  {
    name: "PYTHON",
    image: skillImages.python,
  },
  {
    name: "DJANGO",
    image: skillImages.django,
  },
  {
    name: "SQL",
    image: skillImages.sql,
  },
  {
    name: "AWS",
    image: skillImages.aws,
  },
  {
    name: "JAVASCRIPT",
    image: skillImages.js,
  },
  {
    name: "REACT",
    image: skillImages.react,
  },
  {
    name: "NODE.JS",
    image: skillImages.node,
  },
  {
    name: "GIT",
    image: skillImages.git,
  },
];

const projects = [
  {
    name: "Hire Nepal",
    description:
      "A Job Portal website that facilitates seamless job postings, automated resume parsing and applicant ranking for employers, while providing job seekers with personalized job recommendations and a user-friendly interface to apply for their desired positions.",
    tags: [
      {
        name: "react",
        color: "text-success",
      },
      {
        name: "django-rest",
        color: "text-warning",
      },
      {
        name: "spaCy",
        color: "text-info",
      },
    ],
    image: projectImages.job,
    links: {
      github: "https://github.com/The-SP/Job-Portal-Frontend",
      youtube: "https://youtu.be/T3Hj6fBOIFk",
    },
  },
  {
    name: "Movies For U",
    description:
      "Movies For U is a full-stack application that allows users to  search for movies based on titles or keywords, bookmark them for future viewing, and receive personalized recommendations based on their preferences.",
    tags: [
      {
        name: "react",
        color: "text-success",
      },
      {
        name: "django-rest",
        color: "text-warning",
      },
      {
        name: "scikit-learn",
        color: "text-info",
      },
    ],
    image: projectImages.movies,
    links: {
      github: "https://github.com/The-SP/Movies-For-U",
      youtube: "https://youtu.be/zIf6A0G7pUQ",
    },
  },
  {
    name: "ChatVerse",
    description:
      "ChatVerse is a real-time messaging platform built with FastAPI and Next.js. The app supports both direct messages and channel-based communication, featuring WebSocket connections for instant messaging.",
    tags: [
      {
        name: "FastAPI",
        color: "text-success",
      },
      {
        name: "Next.js",
        color: "text-warning",
      },
      {
        name: "web-socket",
        color: "text-info",
      },
    ],
    image: projectImages.chatverse,
    links: {
      github: "https://github.com/The-SP/ChatVerse",
    },
  },
  {
    name: "Sorting Visualizer",
    description:
      "Visualization of different sorting algorithms (bubble, insertion, selection, quick, merge, radix, shell, heap) using React",
    tags: [
      {
        name: "react",
        color: "text-success",
      },
      {
        name: "sorting-algorithms",
        color: "text-info",
      },
    ],
    image: projectImages.sort,
    links: {
      github: "https://github.com/The-SP/Visualizer",
      website: "https://sortvisualizzer.netlify.app/",
    },
  },
  {
    name: "N-Queen Visualizer",
    description:
      "Visualization of N-Queen problem in React.js. The N Queen is the problem of placing N chess queens on an N×N chessboard so that no two queens attack each other.",
    tags: [
      {
        name: "react",
        color: "text-success",
      },
    ],
    image: projectImages.nqueen,
    links: {
      github: "https://github.com/The-SP/N-Queen-Visualizer",
      website: "https://nqueen-visualizer.netlify.app/",
    },
  },
  {
    name: "Swastik Construction",
    description:
      "A real project where I developed a website for a construction company, showcasing their portfolio and services with user-friendly navigation and modern design elements.",
    tags: [],
    image: projectImages.construction,
    links: {
      website: "https://swastiknepalconstruction.com.np/",
    },
  },
  {
    name: "3D Airplane Modeling",
    description:
      "3D modeling of Airbus A380 using three.js This was done as a part of Computer Graphics course.",
    tags: [
      {
        name: "three.js",
        color: "text-success",
      },
      {
        name: "C++",
        color: "text-warning",
      },
    ],
    image: projectImages.airplane,
    links: {
      github: "https://github.com/The-SP/Airplane-3JS",
    },
  },
  {
    name: "Duel Battle",
    description:
      "Duel Battle is a multiplayer game where 2 players battle against each other in three rounds with different games (Ping Pong, Space Race, Jungle Run) and try to outscore their opponents.",
    tags: [
      {
        name: "C++",
        color: "text-success",
      },
      {
        name: "SFML",
        color: "text-warning",
      },
      {
        name: "OOP",
        color: "text-info",
      },
    ],
    image: projectImages.duel,
    links: {
      github: "https://github.com/The-SP/Duel-Battle",
    },
  },
];

export { Bio, skills, projects };
