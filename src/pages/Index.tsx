import FloatingHearts from "@/components/FloatingHearts";
import ValentineCard from "@/components/ValentineCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-valentine-gradient flex items-center justify-center overflow-hidden relative">
      <FloatingHearts />
      <ValentineCard />
    </div>
  );
};

export default Index;
