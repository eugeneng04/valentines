import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heartSimple from "@/assets/heart-simple.svg";
import ollie1 from "@/assets/ollie1.png";


interface EntryGateProps {
  onSuccess: () => void;
}

const EntryGate = ({ onSuccess }: EntryGateProps) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const normalizedName = name.trim().toLowerCase();
    
    if (normalizedName === "abby" || normalizedName === "abigail") {
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-valentine-bg flex items-center justify-center p-4">
      <div className="text-center p-8 md:p-12 bg-valentine-card/90 backdrop-blur-sm rounded-3xl shadow-valentine max-w-md mx-4">
        <img src={ollie1} alt="Ollie1" className="w-14 h-14 mx-auto mb-6 text-valentine-heart" />
        <h1 className="font-script text-3xl md:text-4xl text-valentine-text mb-6">
          Who are you?
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setError(false);
            }}
            placeholder="Enter your name..."
            className="text-center text-lg border-valentine-primary/30 focus:border-valentine-primary bg-white/50"
            maxLength={50}
          />
          
          {error && (
            <p className="text-valentine-primary text-sm animate-pulse">
              Hmm, I don't think that's right...
            </p>
          )}
          
          <Button
            type="submit"
            variant="valentine"
            size="lg"
            className="text-lg px-8"
          >
            Enter
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EntryGate;
