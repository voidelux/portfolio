import {
  ExternalLink,
  Github,
  Globe,
  Code,
  Zap,
  Shield,
  PersonStanding,
} from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "KahootBOTS",
      description:
        "Python-based CLI tool for flooding Kahoot games with automated bots using proxy rotation. Bypasses IP restrictions, supports up to 60 bots per session, and includes batch control, input automation, and simple configuration.",
      technologies: ["Python", "aiohttp", "kahoot-py", "asyncio"],
      features: [
        "Automated bot spamming for Kahoot sessions",
        "Up to 60 bots using proxy servers",
        "Batch-based bot launching (10 per proxy)",
        "Username and PIN input via CLI",
        "Proxy list support in `proxy.txt`",
        "Modular file structure for easy maintenance",
      ],
      icon: PersonStanding,
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconBg: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "LobbyBot Telegram ecosystem",
      description:
        "Full-stack project with Python backend, HTML+CSS frontend, and secure captcha integration. Features include user authentication, logs management, bots detection, and order processing.",
      technologies: [
        "Python",
        "Flask",
        "HTML",
        "JavaScript",
        "SQLite3",
        "SQLAlchemy",
      ],
      features: [
        "Multi-bot system with master & lobby bots",
        "Captcha & invite link verification",
        "Role-based access control (creator/admin/user)",
        "Admin panel via master bot",
        "SQLAlchemy database with SQLite",
        "Modular & scalable architecture",
      ],
      icon: Globe,
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconBg: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600 dark:text-blue-400",
    },

    {
      title: "BSG-Autogarant Telegram Bot",
      description:
        "Telegram bot that helps securely conduct deals with integrated crypto deposit system. Built with Python and aiogram, using SQLite and SQLAlchemy for data storage. Modular architecture designed for easy scaling and maintenance.",
      technologies: [
        "Python",
        "aiogram",
        "SQLite",
        "SQLAlchemy",
        "Crypto payment integration",
        "Modular design",
      ],
      features: [
        "Secure deal facilitation via Telegram",
        "CryptoPay deposit system integration",
        "Data persistence with SQLite and SQLAlchemy",
        "Modular, scalable project structure",
        "User-friendly interface with real-time feedback",
        "Extensible for future payment methods and services",
      ],

      icon: Shield,
      color: "from-blue-500 to-purple-600",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      iconBg: "bg-blue-100 dark:bg-blue-900",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Real-world applications showcasing my skills
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`${project.bgColor} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Project Info */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className={`p-3 ${project.iconBg} rounded-xl`}>
                      <project.icon
                        className={`w-8 h-8 ${project.iconColor}`}
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                      <Code className="w-5 h-5" />
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <button
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                    >
                      <Github className="w-5 h-5" />
                      View Code
                    </button>
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                      Live Demo
                    </button>
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-6">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                    <Zap className="w-5 h-5" />
                    Key Features
                  </h4>

                  <div className="space-y-3">
                    {project.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-start gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-700">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        100%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Responsive
                      </div>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 text-center border border-gray-200 dark:border-gray-700">
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        A+
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Performance
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Check out my GitHub for more projects and contributions to open
              source.
            </p>
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300">
              <Github className="w-5 h-5" />
              Visit GitHub Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
