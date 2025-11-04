import React from 'react';
import Hero from './components/Hero';
import ButtonGallery from './components/ButtonGallery';
import Playground from './components/Playground';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <Hero />
      <ButtonGallery />
      <Playground />
      <Footer />
    </div>
  );
}

export default App;
