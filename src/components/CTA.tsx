import { MessageCircle, Github, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Open to new projects, collaborations, or just geeking out about
            code.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Let's Chat
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 border border-white/30 rounded-full font-semibold hover:bg-white/30 transition-colors"
            >
              <Github className="w-5 h-5" />
              View GitHub
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 border border-white/30 rounded-full font-semibold hover:bg-white/30 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email Me
            </a>
          </div>

          <div className="text-center pt-8 border-t border-white/20">
            <p className="text-white/70">
              © 2024 Max. Built with React & TypeScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
