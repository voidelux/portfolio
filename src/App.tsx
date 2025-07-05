import { useTheme } from "./hooks/useTheme";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Journey from "./components/Journey";
import CTA from "./components/CTA";
import CyberSection from "./components/CyberSection";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen">
      {/* Normal Portfolio Section */}
      <div className={`${theme === "dark" ? "dark" : ""}`}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Header theme={theme} toggleTheme={toggleTheme} />
          <Hero />
          <Skills />
          <Projects />
          <About />
          <Journey />
          <CTA />
        </div>
      </div>

      {/* Cybersecurity Section */}
      <CyberSection />
    </div>
  );
}

export default App;
