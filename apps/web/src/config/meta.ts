interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    githubOrg: string;
  };
  creator: string;
  keywords: string[];
  metaImage: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
  twitterCard: string;
}

export const siteConfig: SiteConfig = {
  name: "Chris Tsekouras - ZenitoGR - Full Stack Developer",
  description: "Personal portfolio of Chris Tsekouras (ZenitoGR) - Full Stack Developer from Athens, Greece - Full Stack Developer | Tech Enthusiast | Dance Teacher | Musician | Artist | Entrepreneur | Deep Thinker",
  url: "https://portfolio.zengod.gr",
  ogImage: "https://opengraph.b-cdn.net/production/images/072e8151-3c28-470a-a132-5a865fdb00ee.png?token=iHW_gsRE7Fwd23oENiPlMYgO--ebVwPq6vYaab1oI7U&height=346&width=345&expires=33275629978",
  links: {
    twitter: "https://twitter.com/zenitogr",
    github: "https://github.com/zenitogr",
    githubOrg: "https://github.com/ZenORG-P-C"
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
    url: "https://opengraph.b-cdn.net/production/images/072e8151-3c28-470a-a132-5a865fdb00ee.png?token=iHW_gsRE7Fwd23oENiPlMYgO--ebVwPq6vYaab1oI7U&height=346&width=345&expires=33275629978",
    width: 345,
    height: 346,
    alt: "Chris Tsekouras - ZenitoGR Portfolio"
  },
  twitterCard: "summary_large_image"
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
      shareUrl: (url: string, text: string) => 
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`,
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
        `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`${body}

About Chris Tsekouras (ZenitoGR):
${siteConfig.description}

Expertise & Interests:
${siteConfig.keywords.join(' | ')}

Connect with Chris:
Personal GitHub: ${siteConfig.links.github}
Organization GitHub: ${siteConfig.links.githubOrg}
Twitter: ${siteConfig.links.twitter}

Portfolio URL:
${url}`)}`,
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
  defaultEmailSubject: "Discover Chris Tsekouras (ZenitoGR) - Full Stack Developer & Tech Enthusiast",
  defaultEmailBody: "I thought you might be interested in checking out this impressive portfolio:"
} as const;
