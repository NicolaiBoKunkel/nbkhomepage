'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import car48 from '/public/car48.png';

export default function MovingCar() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(100);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  useEffect(() => {
    const maxY = window.innerHeight - 50;
    const startY = Math.random() * maxY;
    const initialDirection = Math.random() > 0.5 ? 'right' : 'left';

    setY(startY);
    setDirection(initialDirection);

    let pos = initialDirection === 'right' ? -100 : window.innerWidth + 100;

    const interval = setInterval(() => {
      pos += initialDirection === 'right' ? 2 : -2;
      setX(pos);

      const offScreen = pos > window.innerWidth + 100 || pos < -100;
      if (offScreen) {
        const newDirection = Math.random() > 0.5 ? 'right' : 'left';
        const newY = Math.random() * (window.innerHeight - 50);

        setDirection(newDirection);
        setY(newY);
        pos = newDirection === 'right' ? -100 : window.innerWidth + 100;
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const isRight = direction === 'right';

  return (
    <div
      className="absolute z-10 pointer-events-none"
      style={{
        top: y,
        left: x,
        transition: 'left 0.02s linear',
      }}
    >
      <div className="relative w-fit h-fit">
        {/* Headlight beam */}
        <div
          className="hidden dark:block absolute z-0"
          style={{
            top: '50%',
            left: isRight ? '100%' : 'auto',
            right: isRight ? 'auto' : '100%',
            transform: `translateY(-50%) rotate(${isRight ? '0' : '180'}deg)`,
            width: '120px',
            height: '40px',
            background: 'linear-gradient(to right, rgba(255,255,255,0.5), transparent)',
            clipPath: 'polygon(0% 40%, 100% 0%, 100% 100%, 0% 60%)',
            filter: 'blur(4px)',
            opacity: 0.8,
            mixBlendMode: 'screen',
          }}
        />

        {/* Car image, flipped only if moving left */}
        <Image
          src={car48}
          alt="Car"
          width={24}
          height={24}
          className={`relative z-10 ${!isRight ? 'scale-x-[-1]' : ''}`}
        />
      </div>
    </div>
  );
}
