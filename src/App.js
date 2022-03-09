import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Projects from './pages/Projects'
import Experience from './pages/Experience'

import Footer from './components/Footer'

function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/experience" element={<Experience />} />

      </Routes>

      <Footer />

    </Router>
  );
}

export default App;