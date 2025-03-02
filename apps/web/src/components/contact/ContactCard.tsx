import { LucideIcon, ExternalLink, Mail } from "lucide-react";
import { CopyButton } from "../CopyButton";

interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  href?: string;
  showEmailButton?: boolean;
  glowColor?: "primary" | "secondary" | "accent";
}

export const ContactCard = ({
  icon: Icon,
  title,
  value,
  href,
  showEmailButton,
  glowColor = "primary"
}: ContactCardProps) => {
  return (
    <div className={`group block p-6 rounded-xl bg-card text-card-foreground dark:glow-${glowColor}`}>
      <div className="flex items-center gap-4 mb-4">
        <Icon className={`w-6 h-6 text-${glowColor}`} />
        <h3 className={`font-semibold dark:text-glow-${glowColor}`}>{title}</h3>
      </div>
      <div className="flex items-center justify-between">
        {href ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-sm text-muted-foreground group-hover:text-${glowColor} transition-colors`}
          >
            <span className="flex items-center">
              {value}
              <ExternalLink className="w-3 h-3 ml-1" />
            </span>
          </a>
        ) : (
          <p className="text-sm text-muted-foreground">{value}</p>
        )}
        <div className="flex items-center gap-2">
          {showEmailButton && (
            <button
              onClick={() => window.open(`mailto:${value}`, '_blank')}
              className={`inline-flex items-center justify-center rounded-md h-6 w-6 text-sm hover:bg-muted hover:text-${glowColor} transition-colors`}
              title="Open in email client"
            >
              <div className="flex items-center">
                <Mail className="w-4 h-4" />
                <ExternalLink className="w-3 h-3 ml-1" />
              </div>
            </button>
          )}
          <CopyButton value={value} />
        </div>
      </div>
    </div>
  );
};