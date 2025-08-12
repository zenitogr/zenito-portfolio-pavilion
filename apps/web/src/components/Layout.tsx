import { Menu } from "lucide-react";
import { Outlet } from "react-router-dom";

import { Button } from "ui/components/button";
import { Sheet, SheetContent, SheetTrigger } from "ui/components/sheet";

import { useIsMobile } from "../hooks/use-mobile";
import { Sidebar } from "./Sidebar";
import { SidebarNav } from "./SidebarNav";
import { ThemeToggle } from "./theme-toggle";

export const Layout = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className="min-h-screen bg-background relative">
        <header className="fixed top-0 right-0 left-0 h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
          <div className="flex h-full items-center justify-between px-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-4">
                <SidebarNav />
              </SheetContent>
            </Sheet>
            <ThemeToggle />
          </div>
        </header>
        <main className="pt-16 min-h-[calc(100vh-4rem)] bg-background">
          <Outlet />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background relative">
      <Sidebar />
      <div className="pl-64 relative z-10">
        <header className="fixed top-0 right-0 left-64 h-16 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
          <div className="flex h-full items-center justify-end px-4">
            <ThemeToggle />
          </div>
        </header>
        <main className="pt-16 min-h-[calc(100vh-4rem)] bg-background">
          <Outlet />
        </main>
      </div>
    </div>
  );
};