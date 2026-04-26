import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Layout
import MainLayout from './layout/MainLayout';

// Pages
import Home from './pages/Home';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Preloader from './components/Preloader';

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <Preloader />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </MainLayout>
    </>
  );
}

export default App;
