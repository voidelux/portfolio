import { User, Heart, Target, Lightbulb } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Heart,
      title: "Passionate Developer",
      description: "Fallen in love with programming at a young age",
    },
    {
      icon: Target,
      title: "Full-Stack Focus",
      description: "Mastering both frontend and backend technologies",
    },
    {
      icon: Lightbulb,
      title: "Modern Standards",
      description: "Always staying up-to-date with latest tech trends",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Get to know the person behind the code
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
                  <User className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Who I Am
                </h3>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                At just 15 years old, I've already fallen in love with the art
                of programming. Based in Germany, I spend my time crafting
                modern web applications and exploring the endless possibilities
                of technology.
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I believe in mastering both frontend and backend to build
                seamless user experiences, stay up-to-date with modern web
                standards, and focus on performance and clean code.
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl"
                >
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <feature.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
