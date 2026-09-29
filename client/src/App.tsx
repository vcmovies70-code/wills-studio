// Style direction: Midnight Cut — the app shell keeps the original home page intact and adds quiet editorial routes around it.
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Events from "@/pages/Events";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Work from "@/pages/Work";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

function Router() {
  return (
    
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
