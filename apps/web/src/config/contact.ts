import { siteConfig } from "./meta";

export const contactInfo = {
  emails: {
    professional: "tsekouras.x@outlook.com",
    personal: ["zenitogr@gmail.com", "zenito@zengod.gr"],
  },
  social: {
    discord: {
      username: "zengodgr",
      server: {
        name: "Zen Learn | ZenLight Dev",
        invite: "https://discord.gg/uB5XcA35hq",
      },
    },
    instagram: "zengodgr",
    github: siteConfig.links.github,
    githubOrg: siteConfig.links.githubOrg,
  },
} as const;
