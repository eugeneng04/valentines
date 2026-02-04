import { useEffect, useState } from "react";
<<<<<<< HEAD
import ollie1 from "@/assets/ollie1.png";
=======
import heartSimple from "@/assets/heart-simple.svg";
>>>>>>> parent of 8f9d673 (try use png)

interface Heart {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 3 + Math.random() * 4,
      size: 10 + Math.random() * 20,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <div
          key={heart.id}
<<<<<<< HEAD
          className="absolute animate-float opacity-60"
=======
          src={heartSimple}
          alt=""
          className="absolute animate-float text-valentine-heart opacity-60"
>>>>>>> parent of 8f9d673 (try use png)
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            animationDuration: `${heart.duration}s`,
            fontSize: `${heart.size}px`,
          }}
        >
          ❤️
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
