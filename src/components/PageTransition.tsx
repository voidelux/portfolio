import React, { useEffect, useState, useRef } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
  isLoaded: boolean;
}

const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  isLoaded,
}) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [contentElements, setContentElements] = useState<React.ReactNode[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isLoaded) {
      // Set background to prevent white flash
      if (containerRef.current) {
        containerRef.current.style.backgroundColor = "black";
      }

      // Start animation once loading is complete
      setIsAnimating(true);

      // Slight delay before starting content transition
      const timer = setTimeout(() => {
        setIsContentVisible(true);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  useEffect(() => {
    if (isAnimating) {
      // Create a React node array from children to animate them individually
      React.Children.forEach(children, (child) => {
        setContentElements((prev) => [...prev, child]);
      });
    }
  }, [isAnimating, children]);

  if (!isAnimating) {
    return <div ref={containerRef} className="min-h-screen bg-black"></div>;
  }

  return (
    <div
      ref={containerRef}
      className={`transition-opacity duration-1000 min-h-screen bg-black ${
        isContentVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="cyber-construct">
        {/* Main content with staggered animations */}
        <div className="relative">
          {React.Children.map(children, (child, index) => (
            <div
              key={index}
              className={`cyber-element-${index % 2 === 0 ? "left" : "right"}`}
              style={{
                animationDelay: `${0.3 + index * 0.15}s`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PageTransition;
