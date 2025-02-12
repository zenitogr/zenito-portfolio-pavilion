
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { resumeData } from "@/data/resume";

const Resume = () => {
  const { personalInfo, experience, education, skills, additionalActivities } = resumeData;

  return (
    <div className="min-h-screen bg-background">
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
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">{personalInfo.name}</h1>
            <p className="text-xl text-muted-foreground">{personalInfo.title}</p>
            <p className="text-muted-foreground">{personalInfo.location}</p>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>{personalInfo.contact.address}</p>
              <p>Email: {personalInfo.contact.email}</p>
              <p>Tel: {personalInfo.contact.phone}</p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-primary font-medium">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.institution}</h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                    </div>
                    <span className="text-primary font-medium">{edu.period}</span>
                  </div>
                  {edu.description && (
                    <p className="text-muted-foreground">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-primary">Technical Skills</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {skills.technical.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 text-primary">Personal Qualities</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {skills.personal.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-primary">Additional Activities</h2>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-muted-foreground">{additionalActivities}</p>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
