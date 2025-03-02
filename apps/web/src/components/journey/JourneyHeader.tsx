import { motion } from "framer-motion";

interface JourneyHeaderProps {
  title: string;
}

export const JourneyHeader = ({ title }: JourneyHeaderProps) => (
  <motion.h2
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="text-3xl md:text-4xl font-bold text-center mb-16"
  >
    {title}
  </motion.h2>
);