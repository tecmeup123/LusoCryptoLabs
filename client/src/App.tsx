import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { AnimatePresence } from "framer-motion";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import BackToTopButton from "./components/BackToTopButton";
import LoadingScreen from "./components/LoadingScreen";
import CookieConsent from "./components/CookieConsent";
import PageTransition from "./components/PageTransition";

function Router() {
  const [location] = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Switch location={location} key={location}>
        <Route path="/">
          <PageTransition>
            <Home />
          </PageTransition>
        </Route>
        {/* Fallback to 404 */}
        <Route>
          <PageTransition>
            <NotFound />
          </PageTransition>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LoadingScreen />
      <Router />
      <BackToTopButton />
      <CookieConsent />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
