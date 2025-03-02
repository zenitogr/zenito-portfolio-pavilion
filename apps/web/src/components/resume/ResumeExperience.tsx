interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface ResumeExperienceProps {
  experience: Experience[];
  id?: string;
}

export const ResumeExperience = ({ experience, id }: ResumeExperienceProps) => {
  return (
    <section id={id} className="mb-12">
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
  );
};