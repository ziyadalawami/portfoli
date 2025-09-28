import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TabContent from './components/TabContent';
import Footer from './components/Footer';

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
    return (
      <div className="h-screen bg-[#000a01] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-[#1fea00] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#000a01]">
      <Header />
      <div className="max-w-[1000px] mx-auto bg-[#001a03]">
        <TabContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;