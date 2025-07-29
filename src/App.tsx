import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isEmailMenuOpen, setIsEmailMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const emailMenuRef = useRef<HTMLDivElement>(null);
  const emailButtonRef = useRef<HTMLButtonElement>(null);
  const [emailPopupPosition, setEmailPopupPosition] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (emailMenuRef.current && !emailMenuRef.current.contains(event.target as Node)) {
        setIsEmailMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('andrewwalker090902@yahoo.com');
    setIsEmailMenuOpen(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const sendEmail = () => {
    window.location.href = 'mailto:andrewwalker090902@yahoo.com';
    setIsEmailMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 -right-32 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

      {isResumeOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-xl border border-gray-700 w-full max-w-4xl h-[90vh] flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-white">Resume - Andrew Walker</h3>
              <div className="flex items-center space-x-3">
                <a
                  href="/src/assets/Andrew Walker Resume.pdf"
                  download="Andrew_Walker_Resume.pdf"
                  className="px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center space-x-2"
                >
                  <h3 className="text-lg font-semibold text-white">Download</h3>
                </a>
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="flex-1 p-4">
              <iframe
                src="/src/assets/Andrew Walker Resume.pdf"
                className="w-full h-full rounded-lg border border-gray-700"
                title="Resume Preview"
              />
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 px-4 py-6 lg:px-8 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col min-h-[90vh]">
          <header className="text-center space-y-3 mb-6">
            <div className="relative inline-block">
              <h1 className="text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Andrew Walker
              </h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-300 font-light tracking-wide">Junior Software Developer & Game Designer</p>
            <div className="flex items-center justify-center space-x-8 mt-2">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for opportunities</span>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1 min-h-0 max-h-[70vh] text-base">
            {/* About Me */}
            <section className="backdrop-blur-sm bg-white/5 rounded-xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col overflow-hidden">
              <div className="flex justify-between items-start gap-4 mb-4">
                <h2 className="text-2xl font-semibold text-white flex items-center">
                  About Me
                  <div className="w-0.5 h-5 bg-gray-400 mx-2 rounded-full"></div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <img src="src/assets/location-2952.svg" alt="Location" className="w-4 h-4" />
                      <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent font-medium">
                        Charleston, WV
                      </span>
                      <div className="relative" ref={emailMenuRef}>
                        <button
                          ref={emailButtonRef}
                          onClick={() => {
                            if (emailButtonRef.current) {
                              const rect = emailButtonRef.current.getBoundingClientRect();
                              setEmailPopupPosition({
                                top: rect.top - 90,
                                left: rect.left,
                              });
                            }
                            setIsEmailMenuOpen((prev) => !prev);
                          }}
                          className="relative z-10 h-8 px-1 flex items-center justify-center hover:bg-gray-700/20 rounded transition-colors"
                        >
                          <img src="src/assets/mail-142.svg" alt="Email" className="w-4 h-4 filter brightness-0 invert flex-shrink-0" />
                        </button>
                      </div>
                      <a href="https://github.com/andrewwalker9902" target="_blank"
                        className="w-5 h-5 bg-purple-700 hover:bg-purple-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white">
                        <img src="src/assets/github-mark-white.svg" alt="GitHub" className="w-3 h-3 filter brightness-0 invert" />
                      </a>
                    </div>
                  </div>
                </h2>
                <button
                  onClick={() => setIsResumeOpen(true)}
                  className="h-8 px-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg text-sm font-medium transition-all duration-300 flex items-center space-x-2 hover:scale-105"
                >
                  <img src="src/assets/cloud-arrow-down.svg" alt="Download Resume" className="w-4 h-4" />
                  <span>Resume</span>
                </button>
              </div>
              <div className="flex-1 min-h-0 overflow-y-auto space-y-4">
                <div className="group p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg border border-gray-600/30 hover:border-blue-400/50">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 mb-2">Introduction</h3>
                  <p className="text-gray-300 leading-relaxed">
                    I'm a recent Computer Science graduate with a passion for video game development and an interest in web development.
                    I have experience in full-stack development, game design, and emerging technologies like natural language processing.
                  </p>
                </div>
                <div className="group p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg border border-gray-600/30 hover:border-blue-400/50">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-300 mb-2">Technical Skills</h3>
                  <div className="space-y-2">
                    {[
                      { title: 'Languages', items: ['Python', 'C#', 'JavaScript', 'Java'], color: 'blue' },
                      { title: 'Frameworks & Tools', items: ['React', 'Unity', 'Node.js', 'MySQL'], color: 'yellow' },
                      { title: 'Development Practices', items: ['Agile', 'Full-Stack', 'Git Control'], color: 'emerald' }
                    ].map(({ title, items, color }) => (
                      <div key={title}>
                        <p className="text-gray-300 font-medium mb-1">{title}</p>
                        <div className="flex flex-wrap gap-2">
                          {items.map(item => (
                            <span key={item} className={`px-2 py-0.5 bg-${color}-500/20 text-${color}-300 rounded-full text-sm`}>{item}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {isEmailMenuOpen && emailPopupPosition && (
              <div
                className="fixed z-50 bg-gray-800 border border-gray-600 rounded-lg shadow-xl min-w-[160px] text-sm text-gray-300"
                style={{
                  top: emailPopupPosition.top,
                  left: emailPopupPosition.left,
                }}
                ref={emailMenuRef}
              >
                <button
                  onClick={copyEmailToClipboard}
                  className="w-full px-3 py-2 text-left hover:bg-gray-700 hover:text-white transition-colors rounded-t-lg flex items-center space-x-2"
                >
                  <span>📋</span>
                  <span>Copy Email</span>
                </button>
                <button
                  onClick={sendEmail}
                  className="w-full px-3 py-2 text-left hover:bg-gray-700 hover:text-white transition-colors rounded-b-lg flex items-center space-x-2"
                >
                  <span>📧</span>
                  <span>Send Email</span>
                </button>
              </div>
            )}

            {/* My Work */}
            <section className="backdrop-blur-sm bg-white/5 rounded-xl p-4 md:p-6 border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col overflow-hidden">
              <div className="flex justify-between items-start gap-4 mb-4">
                <h2 className="text-2xl font-semibold text-white flex items-center">
                  My Work
                  <div className="w-0.5 h-5 bg-gray-400 mx-2 rounded-full"></div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-3 text-sm text-gray-400">
                      <span className="bg-gradient-to-r from-gray-400 to-gray-300 bg-clip-text text-transparent font-medium">
                        Recent Projects
                      </span>
                    </div>
                  </div>
                </h2>
              </div>
              <div className="flex-1 min-h-0 overflow-y-auto space-y-4">
                {[
                  {
                    title: "ChronoSwap",
                    type: "Personal Project",
                    desc: "A 2D puzzle platformer built in Unity with time manipulation mechanics.",
                    tags: ["Unity", "C#", "Game Design"],
                    tagColor: "green"
                  },
                  {
                    title: "Inventory Manager",
                    type: "Class Project",
                    desc: "Full-stack web application with React and MySQL for store inventory control.",
                    tags: ["React", "MySQL", "Full-Stack"],
                    tagColor: "blue"
                  },
                  {
                    title: "Auto Grader",
                    type: "Senior Capstone",
                    desc: "Short answer grading system using SBERT embeddings and cosine similarity scores for academic assessment.",
                    tags: ["Python", "NLP", "Machine Learning"],
                    tagColor: "purple"
                  }
                ].map((proj, i) => (
                  <div key={i} className="group p-4 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-lg border border-gray-600/30 hover:border-blue-400/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-white group-hover:text-blue-300">{proj.title}</h3>
                      <span className={`px-2 py-0.5 bg-${proj.tagColor}-500/20 text-${proj.tagColor}-300 border border-${proj.tagColor}-400/50 rounded text-sm font-mono uppercase tracking-wide`}>
                        {proj.type}
                      </span>
                    </div>
                    <p className="text-gray-300 text-base mb-2 leading-relaxed">{proj.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {proj.tags.map(tag => {
                        // Map tags to appropriate colors
                        let colorClass = 'bg-gray-600/20 text-gray-300';
                        if (['Unity', 'React', 'Node.js', 'MySQL'].includes(tag)) {
                          colorClass = 'bg-yellow-500/20 text-yellow-300';
                        } else if (['C#', 'Python', 'JavaScript', 'Java', 'Full-Stack'].includes(tag)) {
                          colorClass = 'bg-blue-500/20 text-blue-300';
                        } else if (['Game Design', 'NLP', 'Machine Learning'].includes(tag)) {
                          colorClass = 'bg-emerald-500/20 text-emerald-300';
                        }

                        return (
                          <span key={tag} className={`px-2 py-0.5 ${colorClass} rounded-full text-sm`}>
                            {tag}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg border border-green-500 z-50 flex items-center space-x-3 animate-slide-up">
          <span className="text-lg">✅</span>
          <span className="font-medium">Email copied to clipboard!</span>
        </div>
      )}
    </div>
  );
}

export default App;
