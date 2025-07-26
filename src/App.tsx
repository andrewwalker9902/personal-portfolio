import './App.css';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Andrew Walker</h1>
        <p>Software Developer & Game Designer</p>
      </header>

      <main className="content">
        <section className="about">
          <h2>About Me</h2>
          <p>
            I'm a recent computer science graduate passionate about web
            development, game design, and building cool stuff with code.
          </p>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li>ChronoSwap – 2D puzzle platformer in Unity</li>
            <li>Inventory Manager – Full-stack React/MySQL app</li>
            <li>Auto Short Answer Grader – AI-based grading tool with SBERT</li>
          </ul>
        </section>

        <section className="contact">
          <h2>Contact</h2>
          <p>Email: andrew@example.com</p>
          <p>GitHub: github.com/andrewwalker</p>
        </section>
      </main>

      <footer>
        <p>© 2025 Andrew Walker</p>
      </footer>
    </div>
  );
}

export default App;
