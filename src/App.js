import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from './components/Sidebar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { DesignWork } from './components/DesignWork';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="app">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <section id="home"><Hero /></section>
          <section id="about"><About /></section>
          <section id="design"><DesignWork /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
          <Footer />
        </main>
      </div>
    </Router>
  );
}

export default App;
