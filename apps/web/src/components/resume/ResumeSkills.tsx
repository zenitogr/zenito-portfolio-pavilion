interface Skills {
  technical: string[];
  personal: string[];
}

interface ResumeSkillsProps {
  skills: Skills;
  id?: string;
}

export const ResumeSkills = ({ skills, id }: ResumeSkillsProps) => {
  return (
    <section id={id} className="grid md:grid-cols-2 gap-8 mb-12">
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
  );
};