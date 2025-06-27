'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import car48 from '/public/car48.png';

/**
 * 
 * Component that renders a moving car image across the screen. 
 */

export default function MovingCar() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(100);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    // Initialize Y-position and direction randomly
    const maxY = window.innerHeight - 50; // Avoid bottom cutoff - readjust later
    const startY = Math.random() * maxY;
    const initialDirection = Math.random() > 0.5 ? 'right' : 'left';

    setY(startY);
    setDirection(initialDirection);

    let pos = initialDirection === 'right' ? -100 : window.innerWidth + 100;

    const interval = setInterval(() => {
      pos += initialDirection === 'right' ? 2 : -2;
      setX(pos);

      const offScreenRight = pos > window.innerWidth + 100;
      const offScreenLeft = pos < -100;

      if (offScreenRight || offScreenLeft) {
        // Restart movement in a new direction and Y position
        const newDirection = Math.random() > 0.5 ? 'right' : 'left';
        const newY = Math.random() * (window.innerHeight - 50);

        setDirection(newDirection);
        setY(newY);
        pos = newDirection === 'right' ? -100 : window.innerWidth + 100;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute z-0 pointer-events-none"
      style={{
        top: y,
        left: x,
        transition: 'transform 0.2s linear',
        transform: direction === 'left' ? 'scaleX(-1)' : 'scaleX(1)',
      }}
    >
      <Image src={car48} alt="Car" width={24} height={24} />
    </div>
  );
}
