import { Heart, ExternalLink } from "lucide-react";
import { CopyButton } from "../CopyButton";

export const SupportSection = () => {
  return (
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
  );
};