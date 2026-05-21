import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { WelcomeSection } from "@/components/sections/WelcomeSection";
import { WhyGuestsLove } from "@/components/sections/WhyGuestsLove";
import { Gallery } from "@/components/sections/Gallery";
import { ExploreKochi } from "@/components/sections/ExploreKochi";
import { BookYourStay } from "@/components/sections/BookYourStay";
import { HostSection } from "@/components/sections/HostSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <TrustBar />
      <WelcomeSection />
      <WhyGuestsLove />
      <Gallery />
      <ExploreKochi />
      <BookYourStay />
      <HostSection />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
