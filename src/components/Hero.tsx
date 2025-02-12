
import { motion } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Chris Tsekouras
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            Full Stack Developer | Tech Enthusiast | Dance Teacher | Musician | Artist | Entrepreneur | Deep Thinker
          </p>
          <p className="text-base md:text-lg text-muted-foreground mb-12 leading-relaxed">
            Passionate about creating innovative solutions and helping others succeed in their tech journey.
            Based in Athens, Greece.
          </p>
          <a
            href="#journey"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <span>Explore My Journey</span>
            <ArrowDownCircle className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
