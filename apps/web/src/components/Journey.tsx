
import { motion } from "framer-motion";
import { Code2, HeartHandshake, Laptop, Music } from "lucide-react";
import { TimelineItem } from "./journey/TimelineItem";
import { JourneyHeader } from "./journey/JourneyHeader";

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
        <JourneyHeader title="My Journey" />
        <div className="max-w-4xl mx-auto">
          {timelineItems.map((item, index) => (
            <TimelineItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
