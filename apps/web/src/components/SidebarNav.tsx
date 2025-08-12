import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

type NavItem = {
  label: string;
  href: string;
  sections?: { label: string; id: string }[];
};

const navigation: NavItem[] = [
  {
    label: "Home",
    href: "/",
    sections: [
      { label: "Hero", id: "hero" },
      { label: "Journey", id: "journey" },
      { label: "Contact", id: "contact" },
    ],
  },
  {
    label: "Resume",
    href: "/resume",
    sections: [
      { label: "Experience", id: "ResumeExperience" },
      { label: "Education", id: "ResumeEducation" },
      { label: "Skills", id: "ResumeSkills" },
      { label: "Additional Activities", id: "ResumeAdditionalActivities" },
      { label: "Connect", id: "ResumeConnect" },
    ],
  },
];

export function SidebarNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const handleSectionClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="space-y-6 flex-1">
      <div className="space-y-2">
        {navigation.map((item) => (
          <div key={item.href}>
            <Link
              to={item.href}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className={cn(
                "flex h-10 w-full items-center justify-start rounded-md px-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                currentPath === item.href
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
            {currentPath === item.href && item.sections && (
              <div className="ml-4 mt-2 space-y-1">
                {item.sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => handleSectionClick(section.id)}
                    className="flex h-8 w-full items-center justify-start rounded-md px-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}