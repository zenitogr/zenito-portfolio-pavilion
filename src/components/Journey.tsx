
import { motion } from "framer-motion";
import { Code2, HeartHandshake, Laptop, Music } from "lucide-react";

const timelineItems = [
  {
    year: "Early Years",
    title: "Tech Enthusiast | Can read documentation",
    description: "Managing Windows, Linux, and Android | desktop, server, mobile systems | maintaining family business website for 10 years",
    icon: Laptop,
  },
  {
    year: "Career Shift",
    title: "Dancer | Dance Teacher",
    description: "Argentine Tango and Latin dancer and teacher | Event organizer",
    icon: Music,
  },
  {
    year: "Education | Experience",
    title: "Programming Excellence and personal experience",
    description: "2-year programming school with scholarship | More than 20 years of personal experience",
    icon: Code2,
  },
  {
    year: "Present",
    title: "Tech Community",
    description: "Helping no-code AI developers | building ZenLight the self-improvement social media",
    icon: HeartHandshake,
  },
];

export const Journey = () => {
  return (
    <section id="journey" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          My Journey
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex items-start gap-6 mb-12"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-sm text-primary font-medium">{item.year}</span>
                <h3 className="text-xl font-semibold mt-1 mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
