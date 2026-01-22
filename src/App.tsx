import { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import { FocusLens } from "./data/focus";

const App = () => {
  const [focus, setFocus] = useState<FocusLens>("all");

  return (
    <div className="app">
      <header className="site-header">
        <div className="container header-content">
          <div>
            <p className="logo">Manasa Surya P</p>
            <p className="logo-subtitle">Data Analytics Engineer</p>
          </div>
          <nav className="nav">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home focus={focus} onFocusChange={setFocus} />} />
          <Route
            path="/projects"
            element={<Projects focus={focus} onFocusChange={setFocus} />}
          />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <p>© 2026 Manasa Surya P. Built with React + TypeScript.</p>
          <div className="footer-links">
            <a href="https://github.com/your-handle">GitHub</a>
            <a href="https://linkedin.com/in/your-handle">LinkedIn</a>
            <a href="mailto:your.email@example.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
