import { useTheme } from "./hooks/useTheme";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Journey from "./components/Journey";
import CTA from "./components/CTA";
import CyberSection from "./components/CyberSection";
import LoadingScreen from "./components/LoadingScreen";
import AnimatedReveal from "./components/AnimatedReveal";
import PageTransition from "./components/PageTransition";

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [pageBackground, setPageBackground] = useState("bg-black");

  useEffect(() => {
    // You can add logic here to simulate longer loading if needed
    // or to fetch initial data before showing the main content
    const timer = setTimeout(() => {
      // If you need to fetch data before showing content,
      // you can do it here and then set isLoading to false
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleLoadingComplete = () => {
    // First prepare content rendering but keep it invisible
    setShowContent(true);

    // After a small delay, hide the loading screen
    setTimeout(() => {
      setIsLoading(false);
    }, 300);

    // Change background color after content is fully visible for sections that need it
    setTimeout(() => {
      setPageBackground("");
    }, 1500);
  };

  return (
    <div className={`min-h-screen ${pageBackground}`}>
      {/* Loading screen always mounted but with opacity controlled by state */}
      <div
        className="fixed inset-0 z-50 transition-opacity duration-1000"
        style={{
          opacity: isLoading ? 1 : 0,
          pointerEvents: isLoading ? "auto" : "none",
        }}
      >
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      </div>

      {/* Main content */}
      <div
        style={{
          opacity: !isLoading ? 1 : 0,
          transition: "opacity 0.8s ease-in-out",
          visibility: showContent ? "visible" : "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10,
        }}
      >
        <PageTransition isLoaded={showContent}>
          {/* Normal Portfolio Section */}
          <div className={`${theme === "dark" ? "dark" : ""}`}>
            <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
              <AnimatedReveal direction="top" delay={0.1}>
                <Header theme={theme} toggleTheme={toggleTheme} />
              </AnimatedReveal>

              <AnimatedReveal direction="left" delay={0.3}>
                <Hero />
              </AnimatedReveal>

              <AnimatedReveal direction="right" delay={0.5}>
                <Skills />
              </AnimatedReveal>

              <AnimatedReveal direction="left" delay={0.7}>
                <Projects />
              </AnimatedReveal>

              <AnimatedReveal direction="right" delay={0.9}>
                <About />
              </AnimatedReveal>

              <AnimatedReveal direction="left" delay={1.1}>
                <Journey />
              </AnimatedReveal>

              <AnimatedReveal direction="bottom" delay={1.3}>
                <CTA />
              </AnimatedReveal>
            </div>
          </div>

          {/* Cybersecurity Section */}
          <AnimatedReveal direction="bottom" delay={1.5}>
            <CyberSection />
          </AnimatedReveal>
        </PageTransition>
      </div>
    </div>
  );
}

export default App;
