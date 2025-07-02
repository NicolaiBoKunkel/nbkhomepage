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
  const [reverseMode, setReverseMode] = useState(false);
  const lastSKeyPressTime = useRef<number | null>(null);

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
      const key = e.key.toLowerCase();
      keysPressed.current[key] = true;

      if (key === 's') {
        const now = Date.now();
        if (lastSKeyPressTime.current && now - lastSKeyPressTime.current < 300) {
          setReverseMode(true);
        }
        lastSKeyPressTime.current = now;
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      keysPressed.current[key] = false;
      if (key === 's') {
        lastSKeyPressTime.current = null;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const interval = setInterval(() => {
      let newAngle = angle;
      let newVelocity = velocity;

      // Only allow turning if moving
      if (velocity !== 0) {
        if (keysPressed.current['a']) newAngle -= 2;
        if (keysPressed.current['d']) newAngle += 2;
      }

      // Accelerate/brake/reverse
      if (keysPressed.current['w']) {
        newVelocity = Math.min(5, newVelocity + 0.1);
        setReverseMode(false);
      } else if (keysPressed.current['s']) {
        if (reverseMode) {
          newVelocity = Math.max(-3, newVelocity - 0.1);
        } else if (newVelocity > 0) {
          newVelocity = Math.max(0, newVelocity - 0.2);
        }
      }

      newVelocity *= 0.98;

      const rad = (newAngle * Math.PI) / 180;
      let newX = x + Math.cos(rad) * newVelocity;
      let newY = y + Math.sin(rad) * newVelocity;

      // Wrap around edges
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
  }, [angle, velocity, x, y, screen, reverseMode]);

  const isBraking = keysPressed.current['s'] && velocity > 0 && !reverseMode;
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

        {/* Tail lights */}
        <div
          className="hidden dark:block absolute z-0"
          style={{
            top: '50%',
            right: '100%',
            transform: 'translateY(-50%)',
            width: '16px',
            height: '20px',
            background: 'rgba(255, 0, 0, 0.3)',
            borderRadius: '4px',
            filter: 'blur(2px)',
          }}
        />

        {/* Brake lights */}
        {isBraking && (
          <div
            className="hidden dark:block absolute z-0"
            style={{
              top: '50%',
              right: '100%',
              transform: 'translateY(-50%)',
              width: '30px',
              height: '20px',
              background: 'linear-gradient(to left, rgba(255, 0, 0, 0.7), transparent)',
              clipPath: 'polygon(100% 40%, 0% 0%, 0% 100%, 100% 60%)',
              filter: 'blur(3px)',
              opacity: 0.8,
              mixBlendMode: 'screen',
            }}
          />
        )}

        {/* Reverse lights */}
        {isReversing && (
          <div
            className="hidden dark:block absolute z-0"
            style={{
              top: '50%',
              right: '100%',
              transform: 'translateY(-50%)',
              width: '20px',
              height: '30px',
              background: 'linear-gradient(to left, rgba(255, 255, 255, 0.6), transparent)',
              clipPath: 'polygon(100% 40%, 0% 0%, 0% 100%, 100% 60%)',
              filter: 'blur(4px)',
              opacity: 0.6,
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
