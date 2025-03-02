import { Outlet } from "react-router-dom";

import { Sidebar } from "./Sidebar";
import { ThemeToggle } from "./theme-toggle";

export const Layout = () => {
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