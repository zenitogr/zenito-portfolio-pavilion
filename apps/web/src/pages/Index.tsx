import { Hero } from "../components/Hero";
import { Journey } from "../components/Journey";
import { Contact } from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Hero />
      <Journey />
      <Contact />
    </div>
  );
};

export default Index;
