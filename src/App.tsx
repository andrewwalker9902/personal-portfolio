function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 w-full px-6 py-6">
        <div className="max-w-6xl mx-auto w-full h-screen flex flex-col">

          <header className="text-center space-y-3 mb-6">
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Andrew Walker
              </h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-90 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>
            <p className="text-base text-gray-300 font-light tracking-wide">Junior Software Developer & Game Designer</p>
            <div className="flex items-center justify-center space-x-8 mt-3">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </header>

          {/* Main content in two columns */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0 max-h-[70vh]">
            
            {/* About Me Section */}
            <section className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col max-h-full">
              <h2 className="text-xl font-semibold text-white mb-3 flex items-center flex-shrink-0">
                <span className="w-5 h-5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg mr-2 flex items-center justify-center">
                  👨‍💻
                </span>
                About Me
                <div className="w-0.5 h-5 bg-gray-400 mx-2 rounded-full"></div>
                <div className="flex flex-col">
                  <div className="flex items-center space-x-2 text-xs text-gray-400 mb-1">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent font-medium">
                      Charleston, WV
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <a href="mailto:andrewwalker090902@yahoo.com" className="w-4 h-4 bg-blue-500/20 rounded flex items-center justify-center hover:bg-blue-500/40 transition-colors group">
                      <span className="text-blue-400 group-hover:text-blue-300 text-xs">✉️</span>
                    </a>
                    <a href="https://github.com/andrewwalker9902" target="_blank" className="w-4 h-4 bg-purple-500/20 rounded flex items-center justify-center hover:bg-purple-500/40 transition-colors group">
                      <img src="/src/assets/github-mark-white.svg" alt="GitHub" className="w-2.5 h-2.5 group-hover:opacity-80 transition-opacity" />
                    </a>
                  </div>
                </div>
              </h2>
              
              <div className="flex flex-col gap-3 flex-1 overflow-y-auto min-h-0">
                <div className="group p-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300 flex-shrink-0">
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mb-2">Introduction</h3>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    I'm a recent Computer Science graduate with a passion for video game development and an interest in web development. 
                    I have experience in full-stack development, game design, and emerging technologies like natural language processing.
                  </p>
                </div>

                <div className="group p-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300 flex-shrink-0">
                  <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors mb-2">Technical Skills</h3>
                  <div className="space-y-1.5">
                    <div>
                      <p className="text-gray-300 font-medium mb-1 text-xs">Languages</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 rounded-full text-xs">Python</span>
                        <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 rounded-full text-xs">C#</span>
                        <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 rounded-full text-xs">JavaScript</span>
                        <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 rounded-full text-xs">Java</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium mb-1 text-xs">Frameworks & Tools</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-1.5 py-0.5 bg-yellow-500/20 text-yellow-300 rounded-full text-xs">React</span>
                        <span className="px-1.5 py-0.5 bg-yellow-500/20 text-yellow-300 rounded-full text-xs">Unity</span>
                        <span className="px-1.5 py-0.5 bg-yellow-500/20 text-yellow-300 rounded-full text-xs">Node.js</span>
                        <span className="px-1.5 py-0.5 bg-yellow-500/20 text-yellow-300 rounded-full text-xs">MySQL</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-300 font-medium mb-1 text-xs">Development Practices</p>
                      <div className="flex flex-wrap gap-1">
                        <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">Agile</span>
                        <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">Full-Stack</span>
                        <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">Git Control</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* My Work Section */}
            <section className="backdrop-blur-sm bg-white/5 rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col max-h-full">
              <h2 className="text-xl font-semibold text-white mb-3 flex items-center flex-shrink-0">
                <span className="w-5 h-5 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg mr-2 flex items-center justify-center">
                  🚀
                </span>
                My Work
              </h2>
              
              <div className="flex flex-col gap-3 flex-1 overflow-y-auto min-h-0">
                <div className="group p-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300 flex-shrink-0">
                  <div className="flex items-start justify-between mb-1.5">
                    <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">ChronoSwap</h3>
                    <span className="px-1.5 py-0.5 bg-green-500/20 text-green-300 border border-green-400/50 rounded text-xs font-mono uppercase tracking-wide">
                      Personal Project
                    </span>
                  </div>
                  <p className="text-gray-300 mb-1.5 text-xs">A 2D puzzle platformer built in Unity with time manipulation mechanics.</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-1.5 py-0.5 bg-yellow-500/20 text-yellow-300 rounded-full text-xs">Unity</span>
                    <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 rounded-full text-xs">C#</span>
                    <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">Game Design</span>
                  </div>
                </div>
                
                <div className="group p-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300 flex-shrink-0">
                  <div className="flex items-start justify-between mb-1.5">
                    <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">Inventory Manager</h3>
                    <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 border border-blue-400/50 rounded text-xs font-mono uppercase tracking-wide">
                      Class Project
                    </span>
                  </div>
                  <p className="text-gray-300 mb-1.5 text-xs">Full-stack web application with React and MySQL for store inventory control.</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-1.5 py-0.5 bg-yellow-500/20 text-yellow-300 rounded-full text-xs">React</span>
                    <span className="px-1.5 py-0.5 bg-yellow-500/20 text-yellow-300 rounded-full text-xs">MySQL</span>
                    <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full text-xs">Full-Stack</span>
                  </div>
                </div>
                
                <div className="group p-3 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300 flex-shrink-0">
                  <div className="flex items-start justify-between mb-1.5">
                    <h3 className="text-base font-bold text-white group-hover:text-blue-300 transition-colors">Auto Grader</h3>
                    <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-300 border border-purple-400/50 rounded text-xs font-mono uppercase tracking-wide">
                      Senior Capstone
                    </span>
                  </div>
                  <p className="text-gray-300 mb-1.5 text-xs">Short answer grading system using SBERT embeddings and cosine similarity scores for academic assessment.</p>
                  <div className="flex flex-wrap gap-1">
                    <span className="px-1.5 py-0.5 bg-blue-500/20 text-blue-300 rounded-full text-xs">Python</span>
                    <span className="px-1.5 py-0.5 bg-red-500/20 text-red-300 rounded-full text-xs">NLP</span>
                    <span className="px-1.5 py-0.5 bg-orange-500/20 text-orange-300 rounded-full text-xs">Machine Learning</span>
                  </div>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
