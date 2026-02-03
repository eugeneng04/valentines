import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const ValentineCard = () => {
  const [accepted, setAccepted] = useState(false);
  const [noPosition, setNoPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleNoHover = () => {
    if (!containerRef.current) return;
    
    const container = containerRef.current.getBoundingClientRect();
    const buttonWidth = 120;
    const buttonHeight = 48;
    const padding = 20;
    
    const maxX = container.width - buttonWidth - padding;
    const maxY = container.height - buttonHeight - padding;
    
    const newX = Math.random() * maxX - maxX / 2;
    const newY = Math.random() * maxY - maxY / 2;
    
    setNoPosition({ x: newX, y: newY });
  };

  if (accepted) {
    return (
      <div className="relative z-10 text-center p-8 md:p-12 bg-valentine-card/90 backdrop-blur-sm rounded-3xl shadow-valentine max-w-md mx-4 animate-pulse-love">
        <div className="text-6xl mb-6">💕</div>
        <h1 className="font-script text-4xl md:text-5xl text-valentine-text mb-4">
          Yay!
        </h1>
        <p className="text-valentine-text/80 text-lg">
          I knew you'd say yes! 💖
        </p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative z-10 text-center p-8 md:p-12 bg-valentine-card/90 backdrop-blur-sm rounded-3xl shadow-valentine max-w-md mx-4 min-h-[350px]"
    >
      <div className="text-5xl mb-6">💝</div>
      <h1 className="font-script text-3xl md:text-4xl text-valentine-text mb-8">
        Will you be my Valentine?
      </h1>
      
      <div className="flex justify-center items-center gap-4 relative h-20">
        <Button
          variant="valentine"
          size="lg"
          onClick={() => setAccepted(true)}
          className="text-lg px-8"
        >
          Yes 💖
        </Button>
        
        <Button
          variant="valentineOutline"
          size="lg"
          onMouseEnter={handleNoHover}
          onTouchStart={handleNoHover}
          className="text-lg px-8 transition-all duration-200 absolute"
          style={{
            transform: `translate(${noPosition.x}px, ${noPosition.y}px)`,
          }}
        >
          No 💔
        </Button>
      </div>
    </div>
  );
};

export default ValentineCard;
