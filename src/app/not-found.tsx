'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import giphy from '/public/giphy.gif';
import lightsaber32 from '/public/lightsaber32.png';
import deathstar100 from '/public/deathstar100.png';

export default function NotFound() {
  const [score, setScore] = useState(0);
  const [explosions, setExplosions] = useState<{ id: number; x: number; y: number }[]>([]);
  const droidRef = useRef<HTMLImageElement | null>(null);
  const explosionId = useRef(0);

  useEffect(() => {
    const trailContainer = document.createElement('div');
    document.body.appendChild(trailContainer);

    trailContainer.style.position = 'fixed';
    trailContainer.style.top = '0';
    trailContainer.style.left = '0';
    trailContainer.style.width = '100%';
    trailContainer.style.height = '100%';
    trailContainer.style.pointerEvents = 'none';
    trailContainer.style.overflow = 'hidden';
    trailContainer.style.zIndex = '50';

    const handleMouseMove = (e: MouseEvent) => {
      const blade = document.createElement('div');
      blade.style.position = 'absolute';
      blade.style.left = `${e.clientX}px`;
      blade.style.top = `${e.clientY}px`;
      blade.style.width = '4px';
      blade.style.height = '30px';
      blade.style.borderRadius = '2px';
      blade.style.background = 'rgba(33, 150, 243, 0.7)';
      blade.style.boxShadow = '0 0 12px rgba(33, 150, 243, 0.8)';
      blade.style.transform = 'translate(-50%, -50%) rotate(45deg)';
      blade.style.transition = 'opacity 0.5s ease-out';
      blade.style.opacity = '1';
      blade.style.zIndex = '50';

      trailContainer.appendChild(blade);
      setTimeout(() => {
        blade.style.opacity = '0';
        setTimeout(() => {
          if (blade.parentNode) {
            trailContainer.removeChild(blade);
          }
        }, 500);
      }, 10);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeChild(trailContainer);
    };
  }, []);

  // Automatic movement every 1–2s
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const moveDroid = () => {
      if (droidRef.current) {
        const maxX = window.innerWidth - 100;
        const maxY = window.innerHeight - 100;
        droidRef.current.style.left = `${Math.random() * maxX}px`;
        droidRef.current.style.top = `${Math.random() * maxY}px`;
      }
      timeoutId = setTimeout(moveDroid, 500 + Math.random() * 1000);
    };
    moveDroid();
    return () => clearTimeout(timeoutId);
  }, []);

  const handleHit = () => {
    setScore(prev => prev + 1);
    if (!droidRef.current) return;

    // Capture position for explosion effect
    const rect = droidRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Trigger explosion
    explosionId.current += 1;
    setExplosions(prev => [...prev, { id: explosionId.current, x: centerX, y: centerY }]);

    // Hide droid temporarily and move
    droidRef.current.style.display = 'none';

    setTimeout(() => {
      if (droidRef.current) {
        const maxX = window.innerWidth - 100;
        const maxY = window.innerHeight - 100;
        droidRef.current.style.left = `${Math.random() * maxX}px`;
        droidRef.current.style.top = `${Math.random() * maxY}px`;
        droidRef.current.style.display = 'block';
      }
    }, 300);

    // Remove explosion after animation
    setTimeout(() => {
      setExplosions(prev => prev.filter(e => e.id !== explosionId.current));
    }, 500);
  };

  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-8 space-y-6 relative overflow-hidden"
      style={{ cursor: `url(${lightsaber32.src}) 16 16, auto` }}
    >
      {/* Score */}
      <div className="absolute top-4 right-4 bg-gray-900/80 text-yellow-300 px-4 py-2 rounded shadow-lg z-50">
        Score: {score}
      </div>

      {/* Droid */}
      <img
        ref={droidRef}
        src={deathstar100.src}
        onClick={handleHit}
        alt="Droid target"
        style={{
          position: 'fixed',
          width: '60px',
          height: '60px',
          zIndex: 40,
          cursor: 'crosshair',
          transition: 'top 0.3s ease, left 0.3s ease',
        }}
      />

      {/* Explosions */}
      {explosions.map(explosion => (
        <div
          key={explosion.id}
          className="absolute bg-yellow-400 rounded-full opacity-70"
          style={{
            width: '80px',
            height: '80px',
            left: explosion.x - 40,
            top: explosion.y - 150,
            zIndex: 45,
            animation: 'explode 0.4s ease-out forwards',
          }}
        />
      ))}

      {/* Headline */}
      <h2 className="text-4xl font-bold text-yellow-300 text-center">
        404 – Siden blev ikke fundet
      </h2>

      <Image
        src={giphy}
        alt="Obi-Wan Kenobi gif"
        priority
        className="rounded-lg shadow-lg max-w-full w-[500px] h-auto"
      />

      <p className="text-lg text-gray-300 text-center">
        Denne side eksisterer ikke – eller er blevet fjernet.
      </p>

      <Link
        href="/"
        className="mt-4 inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 px-4 rounded transition"
        onMouseEnter={e => (e.currentTarget.textContent = 'Move along')}
        onMouseLeave={e => (e.currentTarget.textContent = 'Gå til forsiden')}
      >
        Gå til forsiden
      </Link>

      {/* Explosion Animation */}
      <style jsx>{`
        @keyframes explode {
          0% {
            transform: scale(0.6);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
