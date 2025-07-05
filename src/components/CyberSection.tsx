import { useState, useEffect, useRef } from "react";
import {
  Terminal,
  Shield,
  Zap,
  Lock,
  Eye,
  Cpu,
  Server,
  Code,
  Database,
  Globe,
  Monitor,
  Wifi,
  Bug,
  Key,
} from "lucide-react";

export default function CyberSection() {
  const [terminalText, setTerminalText] = useState("");
  const [showContent, setShowContent] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const [hasAnimationPlayed, setHasAnimationPlayed] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const terminalCommands = [
    "> Initializing Cybersecurity Mode...",
    "> Establishing SSH connection...",
    "> Access granted. Welcome boss.",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimationPlayed) {
          startTerminalAnimation();
          setHasAnimationPlayed(true);
        }
      },
      { threshold: 0.05 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  });

  const startTerminalAnimation = () => {
    setTerminalText("");
    setShowContent(false);

    let currentCommand = 0;
    let currentChar = 0;

    const typeWriter = setInterval(() => {
      if (currentCommand < terminalCommands.length) {
        if (currentChar < terminalCommands[currentCommand].length) {
          setTerminalText(
            (prev) => prev + terminalCommands[currentCommand][currentChar],
          );
          currentChar++;
        } else {
          setTerminalText((prev) => prev + "\n");
          currentCommand++;
          currentChar = 0;
        }
      } else {
        clearInterval(typeWriter);
        setTimeout(() => setShowContent(true), 500);
      }
    }, 50);
  };

  const cyberSkills = [
    {
      name: "Web Security",
      level: 95,
      icon: Shield,
      description: "XSS, SQLi, CSRF protection",
    },
    {
      name: "Penetration Testing",
      level: 85,
      icon: Bug,
      description: "Ethical hacking methodologies",
    },
    {
      name: "Linux Systems",
      level: 90,
      icon: Terminal,
      description: "Kali, Arch, BlackArch mastery",
    },
    {
      name: "Network Analysis",
      level: 80,
      icon: Wifi,
      description: "Traffic monitoring & analysis",
    },
  ];

  const tools = [
    { name: "Nmap", category: "Network Scanner", icon: Monitor },
    { name: "Wireshark", category: "Packet Analyzer", icon: Eye },
    { name: "Burp Suite", category: "Web Security", icon: Globe },
    { name: "Metasploit", category: "Exploitation", icon: Zap },
    { name: "Gobuster", category: "Directory Brute", icon: Server },
    { name: "SQLMap", category: "SQL Injection", icon: Database },
    { name: "John the Ripper", category: "Password Cracking", icon: Key },
    { name: "Hashcat", category: "Hash Cracking", icon: Lock },
  ];

  const achievements = [
    { platform: "TryHackMe", rank: "Top 5%", rooms: "150+" },
    { platform: "HackTheBox", rank: "Hacker", machines: "75+" },
    { platform: "OverTheWire", progress: "Bandit Complete", level: "Advanced" },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: Shield },
    { id: "skills", label: "Skills", icon: Cpu },
    { id: "tools", label: "Arsenal", icon: Code },
    { id: "achievements", label: "Achievements", icon: Zap },
  ];

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-black text-green-400 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="matrix-rain opacity-10"></div>
        <div className="cyber-grid opacity-5"></div>
        <div className="scanning-lines opacity-20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-4 bg-green-900/30 rounded-lg border border-green-400/50 shadow-lg shadow-green-400/20">
              <Shield className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-5xl font-bold text-green-400 font-mono tracking-wider">
              CYBER
            </h1>
          </div>

          <div className="bg-black/90 border border-green-400/50 rounded-lg p-8 max-w-3xl mx-auto shadow-2xl shadow-green-400/10">
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-6 h-6 text-green-400" />
              <span className="text-green-400 font-mono text-lg">
                root@max-security:~#
              </span>
              <div className="w-3 h-6 bg-green-400 animate-pulse ml-2"></div>
            </div>
            <pre className="text-green-400 font-mono text-left whitespace-pre-wrap text-lg leading-relaxed">
              {terminalText}
            </pre>
          </div>
        </div>

        {showContent && (
          <div className="animate-fadeIn space-y-16">
            {/* Navigation Tabs */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-900/50 border border-green-400/30 rounded-lg p-2 backdrop-blur-sm">
                <div className="flex gap-2">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-6 py-3 rounded-md font-mono transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-green-400/20 text-green-300 border border-green-400/50"
                          : "text-green-400/70 hover:text-green-300 hover:bg-green-400/10"
                      }`}
                    >
                      <tab.icon className="w-4 h-4" />
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Tab Content */}
            <div className="max-w-6xl mx-auto">
              {activeTab === "overview" && (
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="bg-gray-900/50 border border-green-400/30 rounded-lg p-8 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                      <Shield className="w-7 h-7" />
                      Security Expertise
                    </h3>
                    <div className="space-y-6 text-green-200">
                      <p className="text-lg leading-relaxed">
                        Deep expertise in web application security, penetration
                        testing, and Linux system administration. Specialized in
                        identifying vulnerabilities and implementing robust
                        security measures.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-black/50 border border-green-400/20 rounded-lg p-4">
                          <div className="text-green-400 font-mono text-2xl font-bold">
                            500+
                          </div>
                          <div className="text-green-300 text-sm">
                            Hours Practiced
                          </div>
                        </div>
                        <div className="bg-black/50 border border-green-400/20 rounded-lg p-4">
                          <div className="text-green-400 font-mono text-2xl font-bold">
                            225+
                          </div>
                          <div className="text-green-300 text-sm">
                            Challenges Solved
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-900/50 border border-green-400/30 rounded-lg p-8 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                      <Terminal className="w-7 h-7" />
                      Linux Mastery
                    </h3>
                    <div className="space-y-4 text-green-200">
                      <p className="text-lg leading-relaxed">
                        Extensive experience with Linux distributions, system
                        administration, and command-line proficiency.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <span className="text-green-400">▶</span>
                          <span>Kali Linux, Arch Linux, BlackArch</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-green-400">▶</span>
                          <span>Systemd, PAM, User Management</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-green-400">▶</span>
                          <span>Bash Scripting & Automation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-green-400">▶</span>
                          <span>Network Configuration & Security</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "skills" && (
                <div className="grid md:grid-cols-2 gap-8">
                  {cyberSkills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-900/50 border border-green-400/30 rounded-lg p-6 backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-green-900/50 rounded-lg border border-green-400/30">
                          <skill.icon className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-green-300">
                            {skill.name}
                          </h4>
                          <p className="text-green-400/70 text-sm">
                            {skill.description}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-green-300 font-mono">
                            Proficiency
                          </span>
                          <span className="text-green-400 font-mono font-bold">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-3 border border-green-400/20">
                          <div
                            className="h-3 bg-gradient-to-r from-green-600 to-green-400 rounded-full transition-all duration-2000 shadow-lg shadow-green-400/30"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "tools" && (
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {tools.map((tool, index) => (
                    <div
                      key={index}
                      className="bg-gray-900/50 border border-green-400/30 rounded-lg p-6 backdrop-blur-sm hover:border-green-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-400/20"
                    >
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className="p-3 bg-green-900/50 rounded-lg border border-green-400/30">
                          <tool.icon className="w-6 h-6 text-green-400" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-green-300 font-mono">
                            {tool.name}
                          </h4>
                          <p className="text-green-400/70 text-sm">
                            {tool.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === "achievements" && (
                <div className="space-y-8">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-bold text-green-400 mb-4">
                      Platform Achievements
                    </h3>
                    <p className="text-green-300 text-lg">
                      Proven track record on leading cybersecurity platforms
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="bg-gray-900/50 border border-green-400/30 rounded-lg p-8 text-center backdrop-blur-sm"
                      >
                        <div className="mb-6">
                          <div className="w-16 h-16 bg-green-900/50 rounded-full border border-green-400/50 flex items-center justify-center mx-auto mb-4">
                            <Shield className="w-8 h-8 text-green-400" />
                          </div>
                          <h4 className="text-2xl font-bold text-green-300 font-mono">
                            {achievement.platform}
                          </h4>
                        </div>
                        <div className="space-y-3">
                          <div className="bg-black/50 border border-green-400/20 rounded-lg p-3">
                            <div className="text-green-400 font-mono text-lg font-bold">
                              {achievement.rank}
                            </div>
                            <div className="text-green-300 text-sm">
                              Current Rank
                            </div>
                          </div>
                          <div className="bg-black/50 border border-green-400/20 rounded-lg p-3">
                            <div className="text-green-400 font-mono text-lg font-bold">
                              {achievement.rooms ||
                                achievement.machines ||
                                achievement.progress}
                            </div>
                            <div className="text-green-300 text-sm">
                              {achievement.rooms
                                ? "Rooms Completed"
                                : achievement.machines
                                  ? "Machines Pwned"
                                  : "Progress"}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-900/50 border border-green-400/30 rounded-lg p-8 backdrop-blur-sm">
                    <h4 className="text-xl font-bold text-green-400 mb-4 text-center">
                      Specialization Areas
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h5 className="text-lg font-semibold text-green-300">
                          Web Application Security
                        </h5>
                        <ul className="space-y-2 text-green-200">
                          <li className="flex items-center gap-2">
                            <span className="text-green-400">→</span>
                            Cross-Site Scripting (XSS) Detection & Prevention
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-400">→</span>
                            SQL Injection Testing & Mitigation
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-400">→</span>
                            CSRF Protection Implementation
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-400">→</span>
                            Authentication & Authorization Bypass
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-3">
                        <h5 className="text-lg font-semibold text-green-300">
                          System Security
                        </h5>
                        <ul className="space-y-2 text-green-200">
                          <li className="flex items-center gap-2">
                            <span className="text-green-400">→</span>
                            Privilege Escalation Techniques
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-400">→</span>
                            Network Reconnaissance & Enumeration
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-400">→</span>
                            Binary Exploitation & Reverse Engineering
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-400">→</span>
                            Cryptography & Hash Cracking
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="text-center pt-16 border-t border-green-400/20">
              <div className="inline-block bg-green-400/10 border border-green-400/30 rounded-lg px-8 py-4">
                <p className="text-green-400 font-mono text-lg">
                  [SECURITY MODE ACTIVE - SCROLL UP TO RETURN]
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>
        {`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .matrix-rain {
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 0, 0.03) 2px,
            rgba(0, 255, 0, 0.03) 4px
          );
          animation: matrix 20s linear infinite;
          height: 200%;
        }

        .cyber-grid {
          background-image:
            linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .scanning-lines {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(0, 255, 0, 0.1),
            transparent
          );
          animation: scan 3s linear infinite;
        }

        @keyframes matrix {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        @keyframes scan {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        `}
      </style>
    </div>
  );
}
