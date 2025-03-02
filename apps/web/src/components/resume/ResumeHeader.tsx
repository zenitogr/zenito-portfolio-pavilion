import { Mail, ExternalLink } from "lucide-react";
import { CopyButton } from "../CopyButton";

interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  contact: {
    address: string;
    email: string;
    phone: string;
  };
}

interface ResumeHeaderProps {
  personalInfo: PersonalInfo;
  id?: string;
}

export const ResumeHeader = ({ personalInfo, id }: ResumeHeaderProps) => {
  return (
    <header id={id} className="text-center mb-12">
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
  );
};