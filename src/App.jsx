import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

// Import the placeholder pages
import People from "./pages/People";
import { Academics, Research, Repository, News, Collaborators } from "./pages/Pages";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/people" element={<People />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/research" element={<Research />} />
            <Route path="/repository" element={<Repository />} />
            <Route path="/news" element={<News />} />
            <Route path="/collaborators" element={<Collaborators />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;