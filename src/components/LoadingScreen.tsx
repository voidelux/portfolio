import React, { useState, useEffect, useRef } from "react";
import { Shield, Terminal, Code, Zap } from "lucide-react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Initializing systems...");
  const [showTerminal, setShowTerminal] = useState(false);
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);

  const bootSequence = [
    { progress: 0, status: "Initializing systems..." },
    { progress: 15, status: "Loading kernel modules..." },
    { progress: 30, status: "Establishing secure connection..." },
    { progress: 45, status: "Checking system integrity..." },
    { progress: 60, status: "Loading security protocols..." },
    { progress: 75, status: "Decrypting database connections..." },
    { progress: 90, status: "Finalizing system startup..." },
    { progress: 100, status: "System ready!" },
  ];

  const terminalCommands = [
    "> sudo systemctl start portfolio.service",
    "> Running security checks...",
    "> Firewall: Active",
    "> Encryption: Enabled",
    "> Establishing connection to secure server...",
    "> Connection established",
    "> Access granted. Welcome back.",
    "> Launching interface...",
    "> Initializing transition sequence...",
  ];

  useEffect(() => {
    // Start showing terminal after a short delay
    const terminalTimer = setTimeout(() => {
      setShowTerminal(true);
      startTypingAnimation();
    }, 800);

    // Handle progress animation
    let currentStep = 0;
    const progressInterval = setInterval(() => {
      if (currentStep < bootSequence.length - 1) {
        currentStep++;
        setProgress(bootSequence[currentStep].progress);
        setStatusText(bootSequence[currentStep].status);

        // When we reach 100%, complete loading after a delay
        if (bootSequence[currentStep].progress === 100) {
          setTimeout(() => {
            setIsComplete(true);
            // Just notify parent component, don't worry about fading out
            onLoadingComplete();
          }, 1200);
          clearInterval(progressInterval);
        }
      } else {
        clearInterval(progressInterval);
      }
    }, 500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(terminalTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onLoadingComplete]);

  const startTypingAnimation = () => {
    let lineIndex = 0;
    let charIndex = 0;
    let currentLine = "";
    const typingInterval = setInterval(() => {
      if (lineIndex < terminalCommands.length) {
        if (charIndex < terminalCommands[lineIndex].length) {
          currentLine += terminalCommands[lineIndex][charIndex];
          setTerminalLines((prev) => {
            const newLines = [...prev];
            if (lineIndex < newLines.length) {
              newLines[lineIndex] = currentLine;
            } else {
              newLines.push(currentLine);
            }
            return newLines;
          });
          charIndex++;
        } else {
          lineIndex++;
          charIndex = 0;
          currentLine = "";

          // Add a small delay between lines
          clearInterval(typingInterval);
          const newLineTimer = setTimeout(() => startTypingAnimation(), 200);
          return () => clearTimeout(newLineTimer);
        }
      } else {
        clearInterval(typingInterval);
        // Final animation after typing is complete
        setTimeout(() => {
          setProgress(100);
          setStatusText("Initialization complete");
        }, 300);
      }
    }, 30);
  };

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="matrix-rain opacity-10"></div>
        <div className="cyber-grid opacity-5"></div>
        <div className="scanning-lines opacity-15"></div>
      </div>

      <div className="relative z-10 w-full max-w-xl px-4">
        {/* Logo */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3">
            <div className="p-4 bg-green-900/30 rounded-lg border border-green-400/50 shadow-lg shadow-green-400/20">
              <Shield className="w-10 h-10 text-green-400" />
            </div>
            <div className="text-4xl font-bold text-green-400 font-mono tracking-wider">
              BOOT.SYS
            </div>
          </div>
        </div>

        {/* Terminal */}
        {showTerminal && (
          <div className="bg-black border border-green-400/50 rounded-lg p-6 mb-8 shadow-2xl shadow-green-400/10 animate-fadeIn">
            <div className="flex items-center gap-3 mb-4">
              <Terminal className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-mono text-sm">
                user@system:~#
              </span>
            </div>
            <div className="font-mono text-green-400 text-sm md:text-base space-y-1.5">
              {terminalLines.map((line, index) => (
                <div key={index} className="line">
                  {line}
                </div>
              ))}
              {terminalLines.length > 0 && (
                <div className="w-2 h-4 bg-green-400 inline-block animate-pulse ml-0.5"></div>
              )}
            </div>
          </div>
        )}

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-green-400 font-mono text-xs md:text-sm">
              SYSTEM BOOT
            </span>
            <span className="text-green-400 font-mono text-xs md:text-sm">
              {progress}%
            </span>
          </div>
          <div className="w-full h-3 bg-gray-800 rounded-full border border-green-400/20 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Status text */}
        <div className="text-center">
          <p className="text-green-400 font-mono text-xs md:text-sm">
            {statusText}
          </p>
        </div>

        {/* Loading indicators */}
        <div className="flex justify-center gap-8 mt-8">
          <div className="flex flex-col items-center">
            <div className="animate-pulse p-2 rounded-full border border-green-400/50">
              <Code className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-green-400/80 font-mono text-xs mt-2">
              modules
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="animate-pulse p-2 rounded-full border border-green-400/50">
              <Zap className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-green-400/80 font-mono text-xs mt-2">
              system
            </span>
          </div>
          <div className="flex flex-col items-center">
            <div className="animate-pulse p-2 rounded-full border border-green-400/50">
              <Shield className="w-5 h-5 text-green-400" />
            </div>
            <span className="text-green-400/80 font-mono text-xs mt-2">
              security
            </span>
          </div>
        </div>
      </div>

      {/* Line height style */}
      <style>{`
        .line {
          line-height: 1.5;
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;
