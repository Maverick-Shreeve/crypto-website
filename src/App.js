import React from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Dashboard />
      <Newsletter />
    </div>
  );
}

export default App;
