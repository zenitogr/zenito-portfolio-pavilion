import { Mail, MessageCircle, Globe, Instagram, Heart } from "lucide-react";
import { contactInfo } from "@/config/contact";

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 dark:text-glow-primary">
          Let's Connect
        </h2>
        <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2">
          <a
            href={`mailto:${contactInfo.emails.professional}`}
            className="group block p-6 rounded-xl bg-card text-card-foreground dark:glow-primary hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <Mail className="w-6 h-6 text-primary" />
              <h3 className="font-semibold dark:text-glow-primary">Professional Email</h3>
            </div>
            <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              {contactInfo.emails.professional}
            </p>
          </a>

          <a
            href={contactInfo.social.discord.server.invite}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-xl bg-card text-card-foreground dark:glow-secondary hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <MessageCircle className="w-6 h-6 text-secondary" />
              <h3 className="font-semibold dark:text-glow-secondary">Discord Community</h3>
            </div>
            <p className="text-sm text-muted-foreground group-hover:text-secondary transition-colors">
              {contactInfo.social.discord.server.name}
            </p>
          </a>

          {contactInfo.emails.personal.map((email, index) => (
            <a
              key={email}
              href={`mailto:${email}`}
              className="group block p-6 rounded-xl bg-card text-card-foreground dark:glow-accent hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-accent" />
                <h3 className="font-semibold dark:text-glow-accent">Personal Email {index + 1}</h3>
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                {email}
              </p>
            </a>
          ))}

          <div className="group block p-6 rounded-xl bg-card text-card-foreground dark:glow-primary">
            <div className="flex items-center gap-4 mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h3 className="font-semibold dark:text-glow-primary">Discord</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              {contactInfo.social.discord.username}
            </p>
          </div>

          <a
            href={`https://instagram.com/${contactInfo.social.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-6 rounded-xl bg-card text-card-foreground dark:glow-secondary hover:scale-105 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <Instagram className="w-6 h-6 text-secondary" />
              <h3 className="font-semibold dark:text-glow-secondary">Instagram</h3>
            </div>
            <p className="text-sm text-muted-foreground group-hover:text-secondary transition-colors">
              @{contactInfo.social.instagram}
            </p>
          </a>

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
                <a
                  href="https://revolut.me/zenitogr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-primary hover:text-primary/80 transition-colors dark:text-glow-primary"
                >
                  Revolut: revolut.me/zenitogr
                </a>
                <a
                  href="https://ko-fi.com/zenitogr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-primary hover:text-primary/80 transition-colors dark:text-glow-primary"
                >
                  Ko-fi: ko-fi.com/zenitogr
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
