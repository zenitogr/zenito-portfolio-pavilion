import { useState, useCallback } from "react";
import { Share2, type LucideIcon } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "ui/components/dialog";
import { Button } from "ui/components/button";
import { useToast } from "ui/hooks/use-toast";
import { motion } from "framer-motion";
import { useShareConfig } from "../config/share-config";
import { siteConfig } from "../config/meta";

// Import all icons we need
import {
  Twitter,
  Facebook,
  Linkedin,
  MessageCircle,
  Send,
  Mail,
  Link
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Twitter,
  Facebook,
  Linkedin,
  MessageCircle,
  Send,
  Mail,
  Link
};

interface ShareButtonProps {
  url?: string;
  title?: string;
  text?: string;
  emailSubject?: string;
  emailBody?: string;
  className?: string;
}

const pulseAnimation = {
  scale: [1, 1.1, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "reverse" as const,
    ease: "easeInOut"
  }
};

export const ShareButton = ({
  url = siteConfig.url,
  title,
  text,
  emailSubject,
  emailBody,
  className = ""
}: ShareButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();
  const config = useShareConfig();

  const handleShare = useCallback(async (platform: typeof config.platforms[number]) => {
    const currentTitle = title ?? config.defaultTitle;
    const currentText = text ?? config.defaultText;
    const currentEmailSubject = emailSubject ?? config.defaultEmailSubject;
    const currentEmailBody = emailBody ?? config.defaultEmailBody;

    try {
      if (platform.name === "Copy Link") {
        await navigator.clipboard.writeText(url);
        toast({
          title: "Link copied to clipboard",
          description: "You can now paste it anywhere",
        });
        setIsOpen(false);
        return;
      }

      let shareUrl = "";
      switch (platform.name) {
        case "Email":
          shareUrl = platform.shareUrl(url, currentEmailSubject, currentEmailBody);
          break;
        case "Twitter":
        case "WhatsApp":
        case "Telegram":
        case "Facebook":
          shareUrl = platform.shareUrl(url, currentText);
          break;
        case "LinkedIn":
          shareUrl = platform.shareUrl(url, currentTitle);
          break;
      }

      window.open(shareUrl, "_blank", "noopener,noreferrer");
      setIsOpen(false);
    } catch (error) {
      toast({
        title: "Failed to share",
        description: "Please try again or use a different method",
        variant: "destructive",
      });
    }
  }, [url, title, text, emailSubject, emailBody, toast, config]);

  return (
    <>
      <div className="fixed bottom-4 right-4 z-[100]">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 1 
          }}
          className="relative"
        >
          <motion.div
            className="absolute -inset-4 border border-primary/40 rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.6, 0.4]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -inset-8 border border-primary/50 rounded-full"
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.5, 0.7, 0.5]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -inset-12 border border-primary/30 rounded-full"
            animate={{
              scale: [1, 2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div
            animate={pulseAnimation}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="default"
                  size="lg"
                  className={`rounded-full shadow-lg hover:shadow-xl transition-shadow px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 ${className}`}
                  title="Share"
                >
                  <Share2 className="w-5 h-5 mr-3" />
                  <span className="font-medium">Share</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-[200] sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Share</DialogTitle>
                  <DialogDescription>
                    Choose how you'd like to share this content. You can share via social media, messaging apps, email, or copy the link directly.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-3 gap-4 py-4">
                  {config.platforms.map((platform) => {
                    const Icon = iconMap[platform.icon];
                    return (
                      <Button
                        key={platform.name}
                        variant="outline"
                        className="flex flex-col items-center gap-2 h-auto py-4"
                        onClick={() => handleShare(platform)}
                        style={{ 
                          "--platform-color": platform.color,
                          borderColor: "var(--platform-color)",
                        } as React.CSSProperties}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = `${platform.color}10`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "transparent";
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: platform.color }} />
                        <span className="text-xs" style={{ color: platform.color }}>
                          {platform.name}
                        </span>
                      </Button>
                    );
                  })}
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};