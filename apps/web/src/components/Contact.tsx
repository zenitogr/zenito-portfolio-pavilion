import { Mail, MessageCircle, Globe, Instagram, Heart, ExternalLink, Github } from "lucide-react";
import { contactInfo } from "../config/contact";
import { CopyButton } from "./CopyButton";
import { ContactCard } from "./contact/ContactCard";
import { ContactHeader } from "./contact/ContactHeader";
import { SupportSection } from "./contact/SupportSection";


export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-4">
        <ContactHeader />
        <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2">
          <ContactCard
            icon={Mail}
            title="Professional Email"
            value={contactInfo.emails.professional}
            href={`mailto:${contactInfo.emails.professional}`}
            showEmailButton
            glowColor="primary"
          />

          <ContactCard
            icon={MessageCircle}
            title="Discord Community"
            value={contactInfo.social.discord.server.name}
            href={contactInfo.social.discord.server.invite}
            glowColor="secondary"
          />

          <ContactCard
            icon={Github}
            title="Personal GitHub"
            value={contactInfo.social.github.replace('https://github.com/', '')}
            href={contactInfo.social.github}
            glowColor="accent"
          />

          <ContactCard
            icon={Github}
            title="Organization GitHub"
            value={contactInfo.social.githubOrg.replace('https://github.com/', '')}
            href={contactInfo.social.githubOrg}
            glowColor="accent"
          />

          {contactInfo.emails.personal.map((email, index) => (
            <ContactCard
              key={email}
              icon={Mail}
              title={`Personal Email ${index + 1}`}
              value={email}
              href={`mailto:${email}`}
              showEmailButton
              glowColor="accent"
            />
          ))}

          <ContactCard
            icon={MessageCircle}
            title="Discord"
            value={contactInfo.social.discord.username}
            glowColor="primary"
          />

          <ContactCard
            icon={Instagram}
            title="Instagram"
            value={`@${contactInfo.social.instagram}`}
            href={`https://instagram.com/${contactInfo.social.instagram}`}
            glowColor="secondary"
          />

          <SupportSection />
        </div>
      </div>
    </section>
  );
};
