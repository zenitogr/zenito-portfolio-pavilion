import { Mail, MessageCircle, Globe, Instagram, Heart, ExternalLink } from "lucide-react";
import { contactInfo } from "../config/contact";
import { CopyButton } from "./CopyButton";

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-glow-primary">
          Let's Connect
        </h2>
        <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="group block p-6 rounded-xl bg-card text-card-foreground dark:glow-primary">
            <div className="flex items-center gap-4 mb-4">
              <Mail className="w-6 h-6 text-primary" />
              <h3 className="font-semibold dark:text-glow-primary">Professional Email</h3>
            </div>
            <div className="flex items-center justify-between">
              <a
                href={`mailto:${contactInfo.emails.professional}`}
                className="text-sm text-muted-foreground group-hover:text-primary transition-colors"
                rel="noopener"
                target="_blank"
              >
                <span className="flex items-center">
                  {contactInfo.emails.professional}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </span>
              </a>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.open(`mailto:${contactInfo.emails.professional}`, '_blank')}
                  className="inline-flex items-center justify-center rounded-md h-6 w-6 text-sm hover:bg-muted hover:text-primary transition-colors"
                  title="Open in email client"
                >
                  <div className="flex items-center">
                    <Mail className="w-4 h-4" />
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </div>
                </button>
                <CopyButton value={contactInfo.emails.professional} />
              </div>
            </div>
          </div>

          <div className="group block p-6 rounded-xl bg-card text-card-foreground dark:glow-secondary">
            <div className="flex items-center gap-4 mb-4">
              <MessageCircle className="w-6 h-6 text-secondary" />
              <h3 className="font-semibold dark:text-glow-secondary">Discord Community</h3>
            </div>
            <div className="flex items-center justify-between">
              <a
                href={contactInfo.social.discord.server.invite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground group-hover:text-secondary transition-colors"
              >
                <span className="flex items-center">
                  {contactInfo.social.discord.server.name}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </span>
              </a>
              <CopyButton value={contactInfo.social.discord.server.invite} />
            </div>
          </div>

          {contactInfo.emails.personal.map((email, index) => (
            <div
              key={email}
              className="group block p-6 rounded-xl bg-card text-card-foreground dark:glow-accent"
            >
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-accent" />
                <h3 className="font-semibold dark:text-glow-accent">Personal Email {index + 1}</h3>
              </div>
              <div className="flex items-center justify-between">
                <a
                  href={`mailto:${email}`}
                  className="text-sm text-muted-foreground group-hover:text-accent transition-colors"
                  rel="noopener"
                  target="_blank"
                >
                  <span className="flex items-center">
                    {email}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </span>
                </a>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => window.open(`mailto:${email}`, '_blank')}
                    className="inline-flex items-center justify-center rounded-md h-6 w-6 text-sm hover:bg-muted hover:text-accent transition-colors"
                    title="Open in email client"
                  >
                    <div className="flex items-center">
                      <Mail className="w-4 h-4" />
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </div>
                  </button>
                  <CopyButton value={email} />
                </div>
              </div>
            </div>
          ))}

          <div className="group block p-6 rounded-xl bg-card text-card-foreground dark:glow-primary">
            <div className="flex items-center gap-4 mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h3 className="font-semibold dark:text-glow-primary">Discord</h3>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                {contactInfo.social.discord.username}
              </p>
              <CopyButton value={contactInfo.social.discord.username} />
            </div>
          </div>

          <div className="group block p-6 rounded-xl bg-card text-card-foreground dark:glow-secondary">
            <div className="flex items-center gap-4 mb-4">
              <Instagram className="w-6 h-6 text-secondary" />
              <h3 className="font-semibold dark:text-glow-secondary">Instagram</h3>
            </div>
            <div className="flex items-center justify-between">
              <a
                href={`https://instagram.com/${contactInfo.social.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground group-hover:text-secondary transition-colors"
              >
                <span className="flex items-center">
                  @{contactInfo.social.instagram}
                  <ExternalLink className="w-3 h-3 ml-1" />
                </span>
              </a>
              <CopyButton value={`https://instagram.com/${contactInfo.social.instagram}`} />
            </div>
          </div>

          <div className="md:col-span-2 p-6 rounded-xl bg-card text-card-foreground dark:glow-accent">
            <div className="flex items-center gap-4 mb-4">
              <Heart className="w-6 h-6 text-accent" />
              <h3 className="font-semibold dark:text-glow-accent">Support My Work</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 items-center">
              <img 
                src="/revolut-qr.png" 
                alt="Revolut QR Code" 
                className="mx-auto w-32 h-32 object-contain dark:invert"
              />
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <a
                    href="https://revolut.me/zenitogr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary/80 transition-colors dark:text-glow-primary"
                  >
                    <span className="flex items-center">
                      Revolut: revolut.me/zenitogr
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </span>
                  </a>
                  <CopyButton value="https://revolut.me/zenitogr" />
                </div>
                <div className="flex items-center justify-between">
                  <a
                    href="https://ko-fi.com/zenitogr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:text-primary/80 transition-colors dark:text-glow-primary"
                  >
                    <span className="flex items-center">
                      Ko-fi: ko-fi.com/zenitogr
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </span>
                  </a>
                  <CopyButton value="https://ko-fi.com/zenitogr" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
