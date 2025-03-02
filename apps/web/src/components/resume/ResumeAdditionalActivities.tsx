interface ResumeAdditionalActivitiesProps {
  additionalActivities: string;
  id?: string;
}

export const ResumeAdditionalActivities = ({ additionalActivities }: ResumeAdditionalActivitiesProps) => {
  return (
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
  );
};