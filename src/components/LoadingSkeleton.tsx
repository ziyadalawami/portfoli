import React from 'react';

const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <header className="w-full" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-[1000px] mx-auto px-6 py-6">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 rounded-full mx-auto bg-white/10 animate-pulse"></div>
            </div>
            <div className="h-12 bg-white/10 rounded-lg mx-auto max-w-md mb-4 animate-pulse"></div>
            <div className="h-8 bg-white/10 rounded-lg mx-auto max-w-sm mb-6 animate-pulse"></div>
            <div className="space-y-2 max-w-2xl mx-auto mb-6">
              <div className="h-6 bg-white/10 rounded-lg animate-pulse"></div>
              <div className="h-6 bg-white/10 rounded-lg animate-pulse"></div>
              <div className="h-6 bg-white/10 rounded-lg w-3/4 mx-auto animate-pulse"></div>
            </div>
            <div className="flex justify-center space-x-6 mb-8">
              <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse"></div>
              <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse"></div>
              <div className="w-10 h-10 rounded-full bg-white/10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="flex justify-center mb-12">
            <div className="flex bg-white/5 rounded-full p-1.5 gap-2">
              <div className="w-32 h-12 bg-white/10 rounded-full animate-pulse"></div>
              <div className="w-32 h-12 bg-white/10 rounded-full animate-pulse"></div>
            </div>
          </div>

          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/5 rounded-2xl p-8 animate-pulse"
              >
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="w-full md:w-32 h-48 md:h-32 bg-white/10 rounded-xl"></div>
                  <div className="flex-grow w-full">
                    <div className="h-8 bg-white/10 rounded-lg mb-4 w-3/4"></div>
                    <div className="space-y-2 mb-4">
                      <div className="h-4 bg-white/10 rounded-lg"></div>
                      <div className="h-4 bg-white/10 rounded-lg w-5/6"></div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <div className="w-20 h-8 bg-white/10 rounded-full"></div>
                      <div className="w-24 h-8 bg-white/10 rounded-full"></div>
                      <div className="w-16 h-8 bg-white/10 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoadingSkeleton;
