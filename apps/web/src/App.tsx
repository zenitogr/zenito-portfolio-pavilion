import { Toaster } from "ui/components/toaster";
import { Toaster as Sonner } from "ui/components/sonner";
import { TooltipProvider } from "ui/components/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Resume from "./pages/Resume";
import NotFound from "./pages/NotFound";
import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "./components/theme-toggle";
import { ShareButton } from "./components/ShareButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/resume" element={<Resume />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <div className="fixed top-4 right-4 theme-transition">
          <ThemeToggle />
        </div>
        <ShareButton />
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
