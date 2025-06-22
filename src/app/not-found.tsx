'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import giphy from '/public/giphy.gif';
import Image from 'next/image';
import lightsaber32 from '/public/lightsaber32.png';

export default function NotFound() {
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

    const width = 4;
    const height = 30;
    const angle = 45;

    blade.style.position = 'absolute';
    blade.style.left = `${e.clientX}px`;
    blade.style.top = `${e.clientY}px`;
    blade.style.width = `${width}px`;
    blade.style.height = `${height}px`;
    blade.style.borderRadius = '2px';
    blade.style.background = 'rgba(33, 150, 243, 0.7)';
    blade.style.boxShadow = '0 0 12px rgba(33, 150, 243, 0.8)';
    blade.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
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

  return (
    <div
      className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-8 space-y-6"
      style={{
        cursor: `url(${lightsaber32.src}) 16 16, auto`,
      }}
    >
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
      >
        Gå til forsiden
      </Link>
    </div>
  );
}
