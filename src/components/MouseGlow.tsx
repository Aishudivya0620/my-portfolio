import { useEffect, useState, CSSProperties } from 'react';

const MouseGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      className="mouse-glow" 
      style={{ 
        '--x': `${mousePos.x}px`, 
        '--y': `${mousePos.y}px` 
      } as CSSProperties} 
    />
  );
};

export default MouseGlow;
