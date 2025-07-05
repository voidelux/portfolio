import { Rocket, BookOpen, Shield, GitBranch } from 'lucide-react';

export default function Journey() {
  return (
    <section id="journey" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">My Journey</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">From curiosity to passion</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-xl">
                  <Rocket className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">The Beginning</h3>
              </div>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                What started as curiosity about how websites work evolved into a true passion. 
                I spend hours coding, exploring new tech, contributing to open-source, and trying new ideas.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                When I'm not coding, I'm studying cybersecurity and system security — the future of the web excites me.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <BookOpen className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Continuous Learning</h4>
                  <p className="text-gray-600 dark:text-gray-400">Always exploring new technologies</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <GitBranch className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Open Source</h4>
                  <p className="text-gray-600 dark:text-gray-400">Contributing to the community</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-sm">
                <div className="p-3 bg-red-100 dark:bg-red-900 rounded-lg">
                  <Shield className="w-6 h-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Security Focus</h4>
                  <p className="text-gray-600 dark:text-gray-400">Studying cybersecurity & system security</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}