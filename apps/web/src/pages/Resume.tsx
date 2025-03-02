import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { resumeData } from "../data/resume";
import { ShareButton } from "../components/ShareButton";
import { ResumeHeader } from "../components/resume/ResumeHeader";
import { ResumeExperience } from "../components/resume/ResumeExperience";
import { ResumeEducation } from "../components/resume/ResumeEducation";
import { ResumeSkills } from "../components/resume/ResumeSkills";
import { ResumeAdditionalActivities } from "../components/resume/ResumeAdditionalActivities";
import { ResumeConnect } from "../components/resume/ResumeConnect";

const Resume = () => {
  const { personalInfo, experience, education, skills, additionalActivities, contactInfo } = resumeData;

  return (
    <div className="min-h-screen bg-background text-foreground p-8 transition-colors">
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
        >
          <ChevronLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <ResumeHeader personalInfo={personalInfo} id="ResumeHeader" />
          <ResumeExperience experience={experience} id="ResumeExperience" />
          <ResumeEducation education={education} id="ResumeEducation" />
          <ResumeSkills skills={skills} id="ResumeSkills" />
          <ResumeAdditionalActivities additionalActivities={additionalActivities} id="ResumeAdditionalActivities" />
          <ResumeConnect contactInfo={contactInfo} personalInfo={personalInfo} id="ResumeConnect" />
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
