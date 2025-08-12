import { Mail, MessageCircle, ExternalLink, Github } from "lucide-react";
import { CopyButton } from "../CopyButton";

interface ContactInfo {
  social: {
    discord: {
      server: {
        name: string;
        invite: string;
      };
    };
    github: string;
    githubOrg: string;
  };
}

interface PersonalInfo {
  contact: {
    email: string;
  };
}

interface ResumeConnectProps {
  contactInfo: ContactInfo;
  personalInfo: PersonalInfo;
  id?: string;
}

export const ResumeConnect = ({ contactInfo, personalInfo }: ResumeConnectProps) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6 dark:text-glow-secondary">
        Let's Connect
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-lg bg-card text-card-foreground dark:glow-primary">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
              rel="noopener"
              target="_blank"
            >
              <Mail className="w-4 h-4 text-primary" />
              <span className="break-all">{personalInfo.contact.email}</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
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
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
            <CopyButton value={contactInfo.social.discord.server.invite} />
          </div>
        </div>
        <div className="p-6 rounded-lg bg-card text-card-foreground dark:glow-accent">
          <div className="flex items-center justify-between">
            <a
              href={contactInfo.social.github}
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Github className="w-4 h-4 text-accent" />
              <span>Personal GitHub: {contactInfo.social.github.replace('https://github.com/', '')}</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
            <CopyButton value={contactInfo.social.github} />
          </div>
        </div>
        <div className="p-6 rounded-lg bg-card text-card-foreground dark:glow-accent">
          <div className="flex items-center justify-between">
            <a
              href={contactInfo.social.githubOrg}
              target="_blank"
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Github className="w-4 h-4 text-accent" />
              <span>Organization GitHub: {contactInfo.social.githubOrg.replace('https://github.com/', '')}</span>
              <ExternalLink className="w-4 h-4 ml-1" />
            </a>
            <CopyButton value={contactInfo.social.githubOrg} />
          </div>
        </div>
      </div>
    </section>
  );
};