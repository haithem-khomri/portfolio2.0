import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import {
  About,
  Contact,
  Experience,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  ThemeToggle
} from "./components";
import Hero from "./components/Hero";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="relative z-0">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
          <ThemeToggle />
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
