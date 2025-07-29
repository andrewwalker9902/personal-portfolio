import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isEmailMenuOpen, setIsEmailMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [activeProject, setActiveProject] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
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
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsResumeOpen(false)}
        >
          <div
            className="bg-gray-900 rounded-xl border border-gray-700 w-full max-w-4xl h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
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

      {/* Project Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="bg-gray-900 rounded-xl border border-gray-700 w-full max-w-5xl h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-700">
              <h3 className="text-xl font-semibold text-white">{activeProject}</h3>
              <button
                onClick={() => setActiveProject(null)}
                className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center text-gray-300 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 p-6 overflow-y-auto">
              {activeProject === 'ChronoSwap' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Project Demo GIF */}
                    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-600 relative aspect-video">
                      <img
                        src="src/assets/chronoswap-demo.gif"
                        alt="ChronoSwap gameplay demo showing time manipulation mechanics"
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback if GIF doesn't exist yet
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      {/* Fallback for when GIF is not available */}
                      <div className="absolute inset-0 bg-gray-800 flex items-center justify-center" style={{ display: 'none' }}>
                        <div className="text-center text-gray-400">
                          <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-3 flex items-center justify-center text-2xl">
                            🎮
                          </div>
                          <p className="text-sm">ChronoSwap Gameplay Demo</p>
                          <p className="text-xs mt-1">Add chronoswap-demo.gif to src/assets/ folder</p>
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Project Overview</h4>
                        <p className="text-gray-300 leading-relaxed">
                          ChronoSwap is a 2D time-manipulation puzzle platformer where players record and replay their past actions to solve intricate environmental puzzles. It emphasizes creative problem-solving and experimentation with non-linear solutions.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• Record-and-replay clone mechanic to interact with puzzles</li>
                          <li>• Timing-based switches, traps, and platforming challenges</li>
                          <li>• Atmospheric pixel art and dynamic parallax backgrounds</li>
                          <li>• Original sound design and ambient effects</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Unity 2022.3</span>
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">C#</span>
                          <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Game Architecture & Design</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Development Process */}
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                    <h4 className="text-lg font-semibold text-white mb-3">Development Process</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h5 className="font-medium text-blue-300 mb-1">Planning</h5>
                        <p className="text-gray-300">Conceptualized time mechanics, level design, and core gameplay loop</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-300 mb-1">Development</h5>
                        <p className="text-gray-300">Implemented time system, physics, level editor, and player controls</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-purple-300 mb-1">Polish</h5>
                        <p className="text-gray-300">Added animations, sound effects, UI polish, and performance optimization</p>
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="space-y-3">
                    {/* Password Notice */}
                    <div className="bg-yellow-500/10 border border-yellow-400/30 rounded-lg p-3 text-center">
                      <p className="text-yellow-300 text-sm font-medium">
                        <strong>Game Password:</strong> <span className="font-mono bg-yellow-400/20 px-2 py-1 rounded text-yellow-200">ChronoSwapKey</span>
                      </p>
                      <p className="text-yellow-400/80 text-xs mt-1">Enter this password when prompted on itch.io</p>
                    </div>

                    <div className="flex gap-3">
                      <a
                        href="https://github.com/andrewwalker9902/ChronoSwap"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-colors text-center"
                      >
                        <h3 className="text-lg font-semibold text-white">View on GitHub</h3>
                      </a>
                      <a
                        href="https://xkippa.itch.io/chronoswap"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-lg font-semibold transition-colors text-center"
                      >
                        <h3 className="text-lg font-semibold text-white">Play Demo</h3>
                      </a>
                    </div>
                  </div>
                </div>
              )}

              {activeProject === 'Inventory Manager' && (
                <div className="space-y-6">
                  {/* Project Demo Carousel - Full Width */}
                  <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-600 relative">
                    {(() => {
                      const inventoryImages = [
                        'src/assets/sportsmanager1.png',
                        'src/assets/sportsmanager2.png',
                        'src/assets/sportsmanager3.png',
                        'src/assets/sportsmanager4.png'
                      ];

                      return (
                        <div className="relative w-full h-96">
                          <img
                            src={inventoryImages[currentImageIndex]}
                            alt={`Inventory Manager Screenshot ${currentImageIndex + 1}`}
                            className="w-full h-full object-contain bg-gray-900 cursor-pointer hover:opacity-90 transition-opacity"
                            onClick={() => setIsImageExpanded(true)}
                            onError={(e) => {
                              // Fallback if image doesn't exist
                              e.currentTarget.style.display = 'none';
                              const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                              if (fallback) fallback.style.display = 'flex';
                            }}
                          />
                          {/* Fallback for when images are not available */}
                          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center" style={{ display: 'none' }}>
                            <div className="text-center text-gray-400">
                              <div className="w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-3 flex items-center justify-center text-2xl">
                                🏪
                              </div>
                              <p className="text-sm">Inventory Manager Screenshots</p>
                              <p className="text-xs mt-1">Add sportsmanager*.png files to src/assets/ folder</p>
                            </div>
                          </div>

                          {/* Expand icon overlay */}
                          <div className="absolute top-4 left-4 bg-black/60 text-white p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity pointer-events-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                          </div>

                          {/* Navigation Arrows */}
                          <button
                            onClick={() => setCurrentImageIndex((prev) => prev === 0 ? inventoryImages.length - 1 : prev - 1)}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition-colors text-xl font-bold"
                          >
                            &#8249;
                          </button>
                          <button
                            onClick={() => setCurrentImageIndex((prev) => prev === inventoryImages.length - 1 ? 0 : prev + 1)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-3 transition-colors text-xl font-bold"
                          >
                            &#8250;
                          </button>

                          {/* Image Counter */}
                          <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                            {currentImageIndex + 1} / {inventoryImages.length}
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Project Details */}
                  <div className="space-y-6">
                    {/* Overview and Key Features side by side */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Project Overview</h4>
                        <p className="text-gray-300 leading-relaxed">
                          A full-stack inventory management system created with three peers tailored for a sports retail
                          store. It supports adding, editing, deleting, and viewing stock for categories like Shoes, Apparel,
                          and Equipment. Designed for ease of use with clear data visualization and reliable backend integration.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• CRUD operations for Shoes, Apparel, Equipment, and Employees</li>
                          <li>• Summary statistics and item count by category</li>
                          <li>• RESTful API integration with MySQL backend</li>
                          <li>• Responsive, React-based frontend interface</li>
                        </ul>
                      </div>
                    </div>

                    {/* Technologies Used - full width */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">React</span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Tailwind CSS</span>
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Node.js</span>
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">Express.js</span>
                        <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">MySQL</span>
                        <span className="px-2 py-1 bg-red-500/20 text-red-300 rounded-full text-sm">REST API</span>
                      </div>
                    </div>
                  </div>

                  {/* Architecture */}
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                    <h4 className="text-lg font-semibold text-white mb-3">System Architecture</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h5 className="font-medium text-blue-300 mb-1">Frontend</h5>
                        <p className="text-gray-300">Built with React and Tailwind CSS, features dynamic rendering and category filtering</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-300 mb-1">Backend</h5>
                        <p className="text-gray-300">Express.js REST API handling route-based CRUD operations and server-side validation</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-purple-300 mb-1">Database</h5>
                        <p className="text-gray-300">MySQL relational schema with foreign key relationships and efficient join queries</p>
                      </div>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex justify-center">
                    <a
                      href="https://github.com/andrewwalker9902/CS440"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-semibold transition-colors text-center"
                    >
                      <h3 className="text-lg font-semibold text-white">View on GitHub</h3>
                    </a>
                  </div>
                </div>
              )}

              {activeProject === 'Auto Grader' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Project Demo Video */}
                    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-600 relative">
                      {/* Replace 'YOUR_AUTOGRADER_VIDEO_ID' with your actual YouTube video ID */}
                      <iframe
                        width="100%"
                        height="250"
                        src="https://www.youtube.com/embed/DjFQ1tRR0Wo"
                        title="Auto Grader System Demo"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                      {/* Fallback for when video ID is not set */}
                      {/* Remove this section once you add your video ID */}
                    </div>

                    {/* Project Details */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Project Overview</h4>
                        <p className="text-gray-300 leading-relaxed">
                          This senior design capstone project, developed in a team of five, focused on building an automated short answer grading system for introductory computer science courses.
                          The system uses SBERT (Sentence-BERT) embeddings to evaluate student-written answers against instructor-provided reference responses, offering automated scoring and feedback.
                        </p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Key Features</h4>
                        <ul className="text-gray-300 space-y-1 text-sm">
                          <li>• SBERT-based semantic similarity scoring</li>
                          <li>• Batch processing from Excel spreadsheets</li>
                          <li>• Instructor-configurable grading thresholds</li>
                          <li>• Grade generation based on cosine distance</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">Python</span>
                          <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full text-sm">SBERT</span>
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm">Pandas</span>
                          <span className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm">NumPy</span>
                          <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded-full text-sm">Jupyter</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Architecture */}
                  <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-600/30">
                    <h4 className="text-lg font-semibold text-white mb-3">System Architecture</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <h5 className="font-medium text-indigo-300 mb-1">Model Pipeline</h5>
                        <p className="text-gray-300">Preprocesses student and reference answers, then uses SBERT to compute semantic similarity scores</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-green-300 mb-1">Scoring Logic</h5>
                        <p className="text-gray-300">Applies instructor-defined thresholds to classify answer accuracy</p>
                      </div>
                      <div>
                        <h5 className="font-medium text-yellow-300 mb-1">Data Handling</h5>
                        <p className="text-gray-300">Reads input from Excel spreadsheets and outputs results with grading columns</p>
                      </div>
                    </div>
                  </div>

                  {/* Notes & Links */}
                  <div className="bg-gray-700/30 text-sm text-gray-300 p-4 rounded-lg border border-gray-600">
                    <p><strong className="text-white">Note:</strong> This was a <span className="text-blue-300 font-medium">senior design capstone project</span> developed by a 5-person team under faculty supervision at <span className="text-white">West Virginia University</span>.</p>
                    <p className="mt-2">The project repository is <span className="text-red-300 font-medium">private</span> due to academic integrity restrictions, but a demo and detailed explanation are available.</p>
                  </div>
                </div>

              )}
            </div>
          </div>
        </div>
      )}

      {/* Expanded Image Modal */}
      {isImageExpanded && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          onClick={() => setIsImageExpanded(false)}
        >
          <div
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`src/assets/sportsmanager${currentImageIndex + 1}.png`}
              alt={`Inventory Manager Screenshot ${currentImageIndex + 1} - Expanded View`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onError={(e) => {
                // Fallback if image doesn't exist
                e.currentTarget.style.display = 'none';
              }}
            />
            
            {/* Close button */}
            <button
              onClick={() => setIsImageExpanded(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center text-xl font-bold transition-colors"
            >
              ✕
            </button>

            {/* Navigation in expanded view */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) => prev === 0 ? 3 : prev - 1);
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-4 transition-colors text-2xl font-bold"
            >
              &#8249;
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex((prev) => prev === 3 ? 0 : prev + 1);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white rounded-full p-4 transition-colors text-2xl font-bold"
            >
              &#8250;
            </button>

            {/* Image counter in expanded view */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / 4
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
                    <div className="flex items-center gap-1 text-sm text-gray-400">
                      <img src="src/assets/location-pin-svgrepo-com.svg" alt="Location" className="w-4 h-4" />
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
                          style={{
                            width: '20px',
                            height: '20px',
                            minWidth: '20px',
                            minHeight: '20px',
                            maxWidth: '20px',
                            maxHeight: '20px',
                            backgroundColor: '#374151',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: 'none',
                            cursor: 'pointer',
                            padding: '0',
                            margin: '0',
                            boxSizing: 'border-box'
                          }}
                        >
                          <img
                            src="src/assets/email-svgrepo-com.svg"
                            alt="Email"
                            style={{
                              width: '12px',
                              height: '12px',
                              filter: 'brightness(0) invert(1)',
                              display: 'block'
                            }}
                          />
                        </button>
                      </div>
                      <a href="https://github.com/andrewwalker9902" target="_blank"
                        className="w-5 h-5 bg-purple-700 hover:bg-purple-600 rounded-full flex items-center justify-center text-gray-300 hover:text-white">
                        <img src="src/assets/github-mark-white.svg" alt="GitHub" className="w-3 h-3" />
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
                    <div className="flex items-center justify-between">
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
                      <button
                        onClick={() => setActiveProject(proj.title)}
                        className="px-2 py-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded text-xs font-medium transition-all duration-300 flex items-center space-x-1 hover:scale-105 ml-2 flex-shrink-0"
                      >
                        <span>Learn more!</span>
                      </button>
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
