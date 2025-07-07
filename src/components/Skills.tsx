import { Server, Globe } from "lucide-react";

export default function Skills() {
  const skills = [
    {
      category: "Backend Development",
      icon: Server,
      items: [
        {
          name: "Python",
          level: "Advanced",
          color: "bg-green-500",
          percentage: 75,
        },
        {
          name: "Go",
          level: "Familiar with",
          color: "bg-blue-500",
          percentage: 30,
        },
        {
          name: "JavaScript",
          level: "Good with",
          color: "bg-yellow-500",
          percentage: 60,
        },
      ],
    },
    {
      category: "Frontend Development",
      icon: Globe,
      items: [
        {
          name: "React",
          level: "Advanced",
          color: "bg-blue-500",
          percentage: 65,
        },
        {
          name: "TypeScript",
          level: "Intermediate",
          color: "bg-blue-600",
          percentage: 70,
        },
        {
          name: "HTML/CSS",
          level: "Advanced",
          color: "bg-orange-500",
          percentage: 70,
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Technologies I work with
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
                  <skillGroup.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="space-y-4">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000`}
                        style={{
                          width: skill.percentage
                            ? `${skill.percentage}%`
                            : "60%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
