import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { GeminiChat } from './components/GeminiChat';

// Pages
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Faculty } from './components/pages/Faculty';
import { Courses } from './components/pages/Courses';
import { Gallery } from './components/pages/Gallery';
import { News } from './components/pages/News';
import { Contact } from './components/pages/Contact';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Layout>
      <GeminiChat />
    </HashRouter>
  );
}

export default App;