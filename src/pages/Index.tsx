import { useState } from "react";
import FloatingHearts from "@/components/FloatingHearts";
import ValentineCard from "@/components/ValentineCard";
import EntryGate from "@/components/EntryGate";

const Index = () => {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return <EntryGate onSuccess={() => setEntered(true)} />;
  }

  return (
    <div className="min-h-screen bg-valentine-gradient flex items-center justify-center overflow-hidden relative">
      <FloatingHearts />
      <ValentineCard />
    </div>
  );
};

export default Index;
