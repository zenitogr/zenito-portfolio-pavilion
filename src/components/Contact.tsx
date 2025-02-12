
import { Mail, MessageCircle } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Let's Connect</h2>
        <div className="max-w-2xl mx-auto grid gap-8 md:grid-cols-2">
          <a
            href="mailto:tsekouras.x@outlook.com"
            className="group p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <Mail className="w-6 h-6 text-primary" />
              <h3 className="font-semibold">Email</h3>
            </div>
            <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              tsekouras.x@outlook.com
            </p>
          </a>
          <a
            href="https://discord.gg/uB5XcA35hq"
            className="group p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <MessageCircle className="w-6 h-6 text-primary" />
              <h3 className="font-semibold">Discord</h3>
            </div>
            <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
              zengodgr
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
