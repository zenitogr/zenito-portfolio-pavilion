export const siteConfig = {
  name: "Zenito Portfolio",
  description: "Full Stack Developer | Tech Enthusiast | Dance Teacher | Musician | Artist | Entrepreneur | Deep Thinker",
  url: "https://portfolio.zengod.gr",
  ogImage: "/og-image.png",
  links: {
    twitter: "https://twitter.com/zenitogr",
    github: "https://github.com/zenitogr"
  },
  creator: "Chris Tsekouras",
  keywords: [
    "Full Stack Developer",
    "Web Development",
    "React",
    "TypeScript",
    "Node.js",
    "Dance Teacher",
    "Tech Community",
    "ZenLight"
  ],
  metaImage: {
    url: "/og-image.png",
    width: 1200,
    height: 630,
    alt: "ZenitoGR Portfolio"
  }
} as const;

export const sharingConfig = {
  platforms: [
    {
      name: "Twitter",
      icon: "Twitter",
      shareUrl: (url: string, text: string) => 
        `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      color: "#1DA1F2"
    },
    {
      name: "Facebook",
      icon: "Facebook",
      shareUrl: (url: string) => 
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: "#1877F2"
    },
    {
      name: "LinkedIn",
      icon: "Linkedin",
      shareUrl: (url: string, title: string) => 
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
      color: "#0A66C2"
    },
    {
      name: "WhatsApp",
      icon: "MessageCircle",
      shareUrl: (url: string, text: string) => 
        `https://wa.me/?text=${encodeURIComponent(`${text} ${url}`)}`,
      color: "#25D366"
    },
    {
      name: "Telegram",
      icon: "Send",
      shareUrl: (url: string, text: string) => 
        `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      color: "#0088CC"
    },
    {
      name: "Email",
      icon: "Mail",
      shareUrl: (url: string, subject: string, body: string) => 
        `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${body} ${url}`)}`,
      color: "#EA4335"
    },
    {
      name: "Copy Link",
      icon: "Link",
      shareUrl: (url: string) => url,
      color: "#6E6E6E"
    }
  ] as const,
  defaultTitle: "Check out Zenito's Portfolio",
  defaultText: "Explore the work and journey of a Full Stack Developer, Tech Community Leader, and Creative Mind; ZenitoGR or Chris Tsekouras in his eCV/portfolio web and app!",
  defaultEmailSubject: "Interesting Portfolio: Zenito's Tech & Creative Journey",
  defaultEmailBody: "I thought you might be interested in checking out this portfolio:"
} as const;