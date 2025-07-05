import { ChevronDown, MapPin, Code, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-lighten filter blur-xl opacity-30 animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Germany</span>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Max
            </h1>

            <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-gray-700 dark:text-gray-300">
              <Code className="w-6 h-6" />
              <span>15-year-old Developer</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating modern web experiences with Python
            backends and cutting-edge frontend technologies.
          </p>

          <div className="flex items-center justify-center gap-2 text-lg text-gray-500 dark:text-gray-500">
            <Zap className="w-5 h-5" />
            <span>Building the future, one line of code at a time.</span>
          </div>

          <div className="pt-8">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <span>Explore My Work</span>
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  );
}
