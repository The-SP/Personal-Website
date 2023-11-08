import { BrowserRouter } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
    </BrowserRouter>
  );
};

export default App;
