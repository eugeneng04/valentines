import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import heartGift from "@/assets/heart-gift.svg";
import heartSparkle from "@/assets/heart-sparkle.svg";
import heartSimple from "@/assets/heart-simple.svg";
import heartBroken from "@/assets/heart-broken.svg";
import ollie1 from "@/assets/ollie1.png";
import ollie_flowers from "@/assets/ollie_flowers.png";
import ollie2 from "@/assets/ollie2.png";

const ValentineCard = () => {
  const [accepted, setAccepted] = useState(false);
  const [showItinerary, setShowItinerary] = useState(false);
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
        <img src={ollie_flowers} alt="Heart" className="w-16 h-16 mx-auto mb-6 text-valentine-heart" />
        <h1 className="font-script text-4xl md:text-5xl text-valentine-text mb-4">
          Yayyyy!!!
        </h1>
        <p className="text-valentine-text/80 text-lg flex items-center justify-center gap-2">
          I knew you'd say yes! <img src={ollie2} alt="Heart" className="w-6 h-6 inline text-valentine-heart" />
        </p>
        
        {!showItinerary ? (
          <Button
            variant="valentine"
            size="lg"
            onClick={() => setShowItinerary(true)}
            className="mt-6"
          >
            View Itinerary
          </Button>
        ) : (
          <div className="mt-6 text-left bg-valentine-text/10 p-4 rounded-lg">
            <h2 className="font-script text-2xl text-valentine-text mb-4">Our Plans</h2>
            <div className="space-y-4 text-valentine-text/80">
              <div>
                <p className="font-bold text-valentine-text">Friday</p>
                <p>I'll pick you up 5-6pm</p>
                <p>Dinner at 7pm</p>
              </div>
              <div>
                <p className="font-bold text-valentine-text">Saturday</p>
                <p>Small hike</p>
              </div>
            </div>
            <Button
              variant="valentineOutline"
              size="sm"
              onClick={() => setShowItinerary(false)}
              className="mt-4"
            >
              Back
            </Button>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative z-10 text-center p-8 md:p-12 bg-valentine-card/90 backdrop-blur-sm rounded-3xl shadow-valentine max-w-md mx-4 min-h-[350px]"
    >
      <img src={ollie_flowers} alt="Heart with gift" className="w-14 h-14 mx-auto mb-6 text-valentine-heart" />
      <h1 className="font-script text-3xl md:text-4xl text-valentine-text mb-8">
        Will you be my Valentine?
      </h1>
      
      <div className="flex justify-center items-center gap-4 relative h-20">
        <Button
          variant="valentine"
          size="lg"
          onClick={() => setAccepted(true)}
          className="text-lg px-8 flex items-center gap-2"
        >
          Yes <img src={ollie2} alt="" className="w-5 h-5" />
        </Button>
        
        <Button
          variant="valentineOutline"
          size="lg"
          onMouseEnter={handleNoHover}
          onTouchStart={handleNoHover}
          className="text-lg px-8 transition-all duration-200 flex items-center gap-2"
          style={{
            position: noPosition.x === 0 && noPosition.y === 0 ? 'relative' : 'absolute',
            transform: noPosition.x === 0 && noPosition.y === 0 ? 'none' : `translate(${noPosition.x}px, ${noPosition.y}px)`,
          }}
        >
          No 💔
        </Button>
      </div>
    </div>
  );
};

export default ValentineCard;
