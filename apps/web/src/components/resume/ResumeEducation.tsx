interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

interface ResumeEducationProps {
  education: Education[];
  id?: string;
}

export const ResumeEducation = ({ education, id }: ResumeEducationProps) => {
  return (
    <section id={id} className="mb-12">
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
  );
};