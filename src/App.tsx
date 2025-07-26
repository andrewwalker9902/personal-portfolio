function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 w-full px-8 py-16">
        <div className="max-w-6xl mx-auto w-full space-y-16">

          <header className="text-center space-y-6">
            <div className="relative inline-block">
              <h1 className="text-6xl md:text-7xl font-bold text-white bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Andrew Walker
              </h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-300 font-light tracking-wide">Junior Software Developer & Game Designer</p>
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </header>

        <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
          <h2 className="text-3xl font-semibold text-white mb-6 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg mr-3 flex items-center justify-center">
              👨‍💻
            </span>
            About Me
            <div className="w-1 h-8 bg-gray-400 mx-4 rounded-full"></div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent font-medium">
                Location: Charleston, WV
              </span>
            </div>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            I'm a recent Computer Science graduate with a passion for video game development and an interest in web development. 
            I have experience in full-stack development, game design, and emerging technologies like natural language processing.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg p-6 border border-blue-500/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-blue-400 rounded mr-3 flex items-center justify-center">
                  🛠️
                </span>
                Skills
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-300 font-medium mb-2">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Python</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">C#</span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Java</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-2">Frameworks & Tools</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Unity</span>
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">MySQL</span>
                  </div>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-2">Development Practices</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">Agile</span>
                    <span className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">Full-Stack</span>
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-sm">Git Version Control</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-lg p-6 border border-green-500/20">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <span className="w-6 h-6 bg-green-400 rounded mr-3 flex items-center justify-center">
                  �
                </span>
                Experiences
              </h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Bachelor's of Computer Science from West Virginia University</li>
                <li>• Developed automatic grader tool using natural language processing</li>
                <li>• Built full-stack sports inventory management application</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
          <h2 className="text-3xl font-semibold text-white mb-6 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg mr-3 flex items-center justify-center">
              🚀
            </span>
            My Work
          </h2>
          <div className="grid gap-6">
            <div className="group p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">ChronoSwap</h3>
              <p className="text-gray-300 mb-3">A 2D puzzle platformer built in Unity with time manipulation mechanics.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Unity</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">C#</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Game Design</span>
              </div>
            </div>
            
            <div className="group p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Inventory Manager</h3>
              <p className="text-gray-300 mb-3">Full-stack web application with React and MySQL for store inventory control.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">MySQL</span>
                <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">Full-Stack</span>
              </div>
            </div>
            
            <div className="group p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-xl border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300 hover:transform hover:-translate-y-1">
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">Auto Grader</h3>
              <p className="text-gray-300 mb-3">Short answer grading system using SBERT embeddings and cosine similarity scores for academic assessment.</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">NLP</span>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm">Machine Learning</span>
              </div>
            </div>
          </div>
        </section>

        <section className="backdrop-blur-sm bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
          <h2 className="text-3xl font-semibold text-white mb-6 flex items-center">
            <span className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg mr-3 flex items-center justify-center">
              📧
            </span>
            Contact
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition-colors">
                ✉️
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <a className="text-blue-400 hover:text-blue-300 transition-colors font-medium" href="mailto:andrew@example.com">andrewwalker090902@yahoo.com</a>
              </div>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:bg-purple-500/30 transition-colors">
                🐙
              </div>
              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <a className="text-blue-400 hover:text-blue-300 transition-colors font-medium" href="https://github.com/andrewwalker9902" target="_blank">github.com/andrewwalker9902</a>
              </div>
            </div>
          </div>
        </section>

        <footer className="text-center text-sm text-gray-500 border-t border-gray-800 pt-6">
          © 2025 Andrew Walker
        </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
