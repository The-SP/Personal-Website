import { projectImages, skillImages } from "../images";

const Bio = {
  name: "Suraj Pathak",
  roles: ["Full Stack Developer", "Computer Engineer"],
  description:
    "As a fourth-year computer engineering student at Pulchowk Campus, I have developed a keen interest in the areas of web development, backend APIs, and machine learning. With a passion for staying abreast of emerging technologies, I am constantly seeking opportunities to learn and grow my skillset.",
  github: "https://github.com/The-SP",
  linkedin: "https://www.linkedin.com/in/suraj-pathak-aa8035238/",
  resume: "",
};

const skills = [
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
    name: "HTML/CSS",
    image: skillImages.css,
  },
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
    name: "GIT",
    image: skillImages.git,
  },
];

const projects = [
  {
    name: "Hire Nepal",
    description:
      "A Job Portal website for finding your dream job in Nepal. This platform offers job listing, recommendations, and tools for building resumes and cover letters to assist users in finding job opportunities.",
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
    image: projectImages.job,
    links: {
      github: "https://github.com/The-SP/Job-Portal-Frontend",
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
      youtube: "https://www.youtube.com/watch?v=zIf6A0G7pUQ",
    },
  },
  {
    name: "ChatVerse",
    description:
      "ChatVerse is a real-time chat application built with Django and Channels. The app allows users to create chat rooms and communicate with each other in real-time via WebSocket connections.",
    tags: [
      {
        name: "django",
        color: "text-success",
      },
      {
        name: "web-socket",
        color: "text-warning",
      },
    ],
    image: projectImages.chatverse,
    links: {
      github: "https://github.com/The-SP/ChatVerse",
      youtube: "https://www.youtube.com/watch?v=ygIOjBGXJAQ",
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
