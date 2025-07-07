import React, { useEffect, useRef, useState } from "react";

interface AnimatedRevealProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  className?: string;
}

const AnimatedReveal: React.FC<AnimatedRevealProps> = ({
  children,
  direction = "left",
  delay = 0,
  duration = 0.3,
  distance = 50,
  once = true,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Calculate initial transform based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case "left":
        return `translateX(-${distance}px)`;
      case "right":
        return `translateX(${distance}px)`;
      case "top":
        return `translateY(-${distance}px)`;
      case "bottom":
        return `translateY(${distance}px)`;
      default:
        return `translateX(-${distance}px)`;
    }
  };

  // Set up intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only animate if it hasn't animated yet or if once is false
        if (entry.isIntersecting && (!hasAnimated || !once)) {
          setIsVisible(true);
          if (once) setHasAnimated(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: "0px", // No margin
      },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, hasAnimated]);

  // Generate styles
  const style = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translate(0)" : getInitialTransform(),
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
};

export default AnimatedReveal;
