import { contactInfo } from "../config/contact";

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface ResumeData {
  personalInfo: {
    name: string;
    title: string;
    location: string;
    contact: {
      address: string;
      email: string;
      phone: string;
    };
  };
  experience: Experience[];
  education: Education[];
  skills: {
    technical: string[];
    personal: string[];
  };
  additionalActivities: string;
  contactInfo: typeof contactInfo;
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Chris Tsekouras",
    title: "Full Stack Developer",
    location: "Athens, Greece",
    contact: {
      address: "Zografou, Athens, 15773",
      email: "tsekouras.x@outlook.com",
      phone: "0030698****768"
    }
  },
  experience: [
    {
      title: "Tech Community Leader",
      company: "ZenLight",
      period: "Present",
      description: "Building a social network focused on self-improvement and advice exchange. Leading a community of no-code AI developers."
    },
    {
      title: "Website Administrator",
      company: "Financial Company",
      period: "2009 - 2018",
      description: "Maintained and managed company website using HTML, CSS, and cPanel."
    },
    {
      title: "Technical Support Manager",
      company: "Phone Technical Support",
      period: "1/2019 - 4/2019",
      description: "Achieved 90% customer satisfaction rate through excellent technical support and problem-solving."
    },
    {
      title: "Warehouse Runner",
      company: "Seasonal Position - Black Friday/Holidays",
      period: "9/2024 - 12/2024",
      description: "Excellent collaboration and team performance during peak seasons."
    }
  ],
  education: [
    {
      institution: "IEK TEP",
      degree: "Programming Excellence",
      period: "2020-2022",
      description: "Completed intensive programming curriculum with one-year scholarship for academic excellence."
    },
    {
      institution: "English Language Certificate",
      degree: "Lower Certificate",
      period: "2014"
    },
    {
      institution: "Advanced Excel Certification",
      degree: "TUV Hellas Certificate",
      period: "2023"
    }
  ],
  skills: {
    technical: [
      "Full Stack Development",
      "HTML, CSS, cPanel",
      "System Administration",
      "Technical Support",
      "Advanced Excel",
      "English Language Proficiency"
    ],
    personal: [
      "Calm and Composed",
      "Hardworking",
      "Well-organized",
      "Leadership",
      "Problem Solving",
      "Team Collaboration"
    ]
  },
  additionalActivities: "Led dance groups at the Cultural Groups of the Student Center, University of Athens. Organized dozens of dance events and classes. Experienced in event organization and community building through dance education and cultural activities.",
  contactInfo: contactInfo,
} as const;
