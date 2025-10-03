import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TabContent from './components/TabContent';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import LoadingSkeleton from './components/LoadingSkeleton';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSkeleton />;
  }

  return (
    <div id="top" className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <ThemeToggle />
      <Header />
      <div className="max-w-[1000px] mx-auto shadow-2xl" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <TabContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;