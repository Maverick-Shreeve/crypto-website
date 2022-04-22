import React from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Accounts from './components/Accounts';
import Newsletter from './components/Newsletter';


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Dashboard />
      <Accounts />
      <Newsletter />
      
    </div>
  );
}

export default App;
