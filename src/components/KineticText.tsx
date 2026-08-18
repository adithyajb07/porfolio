import React, { useState, useEffect } from 'react';

const PHRASES = [
  'intelligent AI models',
  'computer vision systems',
  'neural ML backends',
  'end-to-end AI pipelines',
];

export const KineticText: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % PHRASES.length);
        setIsFading(false);
      }, 400);
    }, 3200);

    return () => clearInterval(timer);
  }, []);

  const currentPhrase = PHRASES[index];

  return (
    <span className="inline-block relative text-left mx-1">
      <span
        className={`inline-block transition-all duration-500 transform ${
          isFading
            ? 'opacity-0 translate-y-3 blur-sm'
            : 'opacity-100 translate-y-0 blur-0'
        } text-emerald-400 font-heading font-bold`}
      >
        {currentPhrase}
      </span>
    </span>
  );
};
