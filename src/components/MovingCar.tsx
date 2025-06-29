'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import car48 from '/public/car48.png';

export default function MovingCar() {
  const [x, setX] = useState(200);
  const [y, setY] = useState(200);
  const [angle, setAngle] = useState(0);
  const [velocity, setVelocity] = useState(0);
  const keysPressed = useRef<{ [key: string]: boolean }>({});
  const [screen, setScreen] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateScreen = () => {
      setScreen({ width: window.innerWidth, height: window.innerHeight });
    };
    updateScreen();
    window.addEventListener('resize', updateScreen);
    return () => window.removeEventListener('resize', updateScreen);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.key.toLowerCase()] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.key.toLowerCase()] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const interval = setInterval(() => {
      let newAngle = angle;
      let newVelocity = velocity;

      if (keysPressed.current['a']) newAngle -= 2;
      if (keysPressed.current['d']) newAngle += 2;
      if (keysPressed.current['w']) newVelocity = Math.min(5, newVelocity + 0.1);
      if (keysPressed.current['s']) newVelocity = Math.max(-3, newVelocity - 0.1);

      newVelocity *= 0.98;

      const rad = (newAngle * Math.PI) / 180;
      let newX = x + Math.cos(rad) * newVelocity;
      let newY = y + Math.sin(rad) * newVelocity;

      // Wrap around screen edges
      if (newX < 0) newX = screen.width;
      if (newX > screen.width) newX = 0;
      if (newY < 0) newY = screen.height;
      if (newY > screen.height) newY = 0;

      setX(newX);
      setY(newY);
      setAngle(newAngle);
      setVelocity(newVelocity);
    }, 16);

    return () => {
      clearInterval(interval);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [angle, velocity, x, y, screen]);

  const isReversing = velocity < -0.1;

  return (
    <div
      className="absolute z-10 pointer-events-none"
      style={{
        top: y,
        left: x,
        transform: `translate(-50%, -50%) rotate(${angle}deg)`,
      }}
    >
      <div className="relative w-fit h-fit">
        {/* Headlights */}
        <div
          className="hidden dark:block absolute z-0"
          style={{
            top: '50%',
            left: '100%',
            transform: 'translateY(-50%)',
            width: '120px',
            height: '40px',
            background: 'linear-gradient(to right, rgba(255,255,255,0.5), transparent)',
            clipPath: 'polygon(0% 40%, 100% 0%, 100% 100%, 0% 60%)',
            filter: 'blur(4px)',
            opacity: 0.8,
            mixBlendMode: 'screen',
          }}
        />

        {/* Reverse lights */}
        {isReversing && (
          <div
            className="hidden dark:block absolute z-0"
            style={{
              top: '50%',
              right: '100%',
              transform: 'translateY(-50%)',
              width: '80px',
              height: '30px',
              background: 'linear-gradient(to left, rgba(255, 50, 50, 0.5), transparent)',
              clipPath: 'polygon(100% 40%, 0% 0%, 0% 100%, 100% 60%)',
              filter: 'blur(4px)',
              opacity: 0.7,
              mixBlendMode: 'screen',
            }}
          />
        )}


        <Image
          src={car48}
          alt="Car"
          width={24}
          height={24}
          className="relative z-10"
        />
      </div>
    </div>
  );
}
