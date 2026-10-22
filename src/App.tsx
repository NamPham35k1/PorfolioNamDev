import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { AIAssistant } from './components/ai/AIAssistant';
import { LofiPlayer } from './components/common/LofiPlayer';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { ProjectDetail } from './pages/ProjectDetail';
import { Services } from './pages/Services';
import { Blog } from './pages/Blog';
import { BlogDetail } from './pages/BlogDetail';
import { Contact } from './pages/Contact';

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen selection:bg-emerald-500/30 selection:text-emerald-300">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>

        <Footer />
        <AIAssistant />
        {/* Feature 5: Lo-Fi Music Player floating widget */}
        <LofiPlayer />
      </div>
    </Router>
  );
};

export default App;
