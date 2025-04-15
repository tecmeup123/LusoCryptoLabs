import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import BackToTopButton from "./components/BackToTopButton";
import FloatingNav from "./components/FloatingNav";
import LoadingScreen from "./components/LoadingScreen";
import CookieConsent from "./components/CookieConsent";
import CustomCursor from "./components/CustomCursor";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingScreen />
      <Router />
      <BackToTopButton />
      <FloatingNav />
      <CookieConsent />
      <CustomCursor />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
