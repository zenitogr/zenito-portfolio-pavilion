import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TimelineItemProps {
  item: {
    year: string;
    title: string;
    description: string;
    icon: LucideIcon;
  };
  index: number;
}

export const TimelineItem = ({ item, index }: TimelineItemProps) => (
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
);