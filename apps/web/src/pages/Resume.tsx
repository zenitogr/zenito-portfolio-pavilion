import { motion } from "framer-motion";
import { ChevronLeft, Mail, MessageCircle, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { resumeData } from "../data/resume";
import { cn } from "../lib/utils";
import { CopyButton } from "../components/CopyButton";
import { ShareButton } from "../components/ShareButton";

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
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-2 dark:text-glow-primary">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl text-muted-foreground mb-2">
              {personalInfo.title}
            </h2>
            <p className="text-muted-foreground">{personalInfo.location}</p>
            
            <div className="mt-4 space-y-1">
              <p className="text-sm">{`${personalInfo.contact.address}`}</p>
              <div className="flex items-center justify-center gap-2">
                <a
                  href={`mailto:${personalInfo.contact.email}`}
                  className="text-sm hover:text-primary transition-colors"
                  rel="noopener"
                  target="_blank"
                >
                  Email: {personalInfo.contact.email}
                  <ExternalLink className="w-3 h-3 ml-1 inline-block" />
                </a>
                <button
                  onClick={() => window.open(`mailto:${personalInfo.contact.email}`, '_blank')}
                  className="inline-flex items-center justify-center rounded-md h-6 w-6 text-sm hover:bg-muted hover:text-primary transition-colors"
                  title="Open in email client"
                >
                  <div className="flex items-center">
                    <Mail className="w-4 h-4" />
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </div>
                </button>
                <CopyButton value={personalInfo.contact.email} />
              </div>
              <div className="flex items-center justify-center gap-2">
                <p className="text-sm">Tel: {personalInfo.contact.phone}</p>
                <CopyButton value={personalInfo.contact.phone} />
              </div>
            </div>
          </header>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 dark:text-glow-secondary">
              Experience
            </h2>
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-lg bg-card text-card-foreground dark:glow-accent 
                    ${index === 0 ? 'dark:glow-primary' : 'dark:glow-accent'} 
                    transition-all duration-300 hover:scale-[1.02]
                    dark:border dark:border-primary/20 dark:hover:border-primary/50
                    relative dark:after:absolute dark:after:inset-px dark:after:rounded-lg 
                    dark:after:bg-gradient-to-b dark:after:from-primary/10 dark:after:to-transparent
                    dark:after:-z-10`}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-medium dark:text-glow-primary">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-sm text-accent dark:text-cyan-400">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground dark:text-gray-300">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 dark:text-glow-secondary">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="p-6 rounded-lg bg-card text-card-foreground dark:glow-accent">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{edu.institution}</h3>
                      <p className="text-muted-foreground">{edu.degree}</p>
                    </div>
                    <span className="text-sm text-accent">{edu.period}</span>
                  </div>
                  {edu.description && (
                    <p className="text-muted-foreground dark:text-gray-300">{edu.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="grid md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 dark:text-glow-secondary">
                Technical Skills
              </h2>
              <div className="p-6 rounded-lg bg-card text-card-foreground dark:glow-primary">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {skills.technical.map((skill, index) => (
                    <li key={index} className="dark:text-gray-300">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-6 dark:text-glow-secondary">
                Personal Qualities
              </h2>
              <div className="p-6 rounded-lg bg-card text-card-foreground dark:glow-accent">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {skills.personal.map((skill, index) => (
                    <li key={index} className="dark:text-gray-300">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-6 dark:text-glow-secondary">
              Additional Activities
            </h2>
            <div className="p-6 rounded-lg bg-card text-card-foreground dark:glow-primary">
              <p className="text-muted-foreground dark:text-gray-300">
                {additionalActivities}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 dark:text-glow-secondary">
              Let's Connect
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-lg bg-card text-card-foreground dark:glow-primary">
                <div className="flex items-center justify-between">
                  <a
                    href={`mailto:${personalInfo.contact.email}`}
                    className="flex items-center gap-2 hover:text-primary transition-colors"
                    rel="noopener"
                    target="_blank"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    <span>{personalInfo.contact.email}</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => window.open(`mailto:${personalInfo.contact.email}`, '_blank')}
                      className="inline-flex items-center justify-center rounded-md h-6 w-6 text-sm hover:bg-muted hover:text-primary transition-colors"
                      title="Open in email client"
                    >
                      <div className="flex items-center">
                        <Mail className="w-4 h-4" />
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </div>
                    </button>
                    <CopyButton value={personalInfo.contact.email} />
                  </div>
                </div>
              </div>
              <div className="p-6 rounded-lg bg-card text-card-foreground dark:glow-secondary">
                <div className="flex items-center justify-between">
                  <a
                    href={contactInfo.social.discord.server.invite}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 hover:text-secondary transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-secondary" />
                    <span>{contactInfo.social.discord.server.name}</span>
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                  <CopyButton value={contactInfo.social.discord.server.invite} />
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Resume;
