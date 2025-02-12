
import { Mail, MessageCircle, Globe, Instagram } from "lucide-react";
import { contactInfo } from "@/config/contact";

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Let's Connect</h2>
        <div className="max-w-3xl mx-auto grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <a
              href={`mailto:${contactInfo.emails.professional}`}
              className="group block p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <Mail className="w-6 h-6 text-primary" />
                <h3 className="font-semibold">Professional Email</h3>
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                {contactInfo.emails.professional}
              </p>
            </a>
            
            {contactInfo.emails.personal.map((email, index) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="group block p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold">Personal Email {index + 1}</h3>
                </div>
                <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {email}
                </p>
              </a>
            ))}
          </div>

          <div className="space-y-8">
            <a
              href={contactInfo.social.discord.server.invite}
              className="group block p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h3 className="font-semibold">Discord Server</h3>
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                {contactInfo.social.discord.server.name}
              </p>
            </a>

            <div className="p-6 rounded-xl bg-white shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h3 className="font-semibold">Discord Username</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {contactInfo.social.discord.username}
              </p>
            </div>

            <a
              href={`https://instagram.com/${contactInfo.social.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <Instagram className="w-6 h-6 text-primary" />
                <h3 className="font-semibold">Instagram</h3>
              </div>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                @{contactInfo.social.instagram}
              </p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
