import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
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
import { FloatingLeaves } from "@/components/ui/floating-leaves";
import { WaveDivider, CurvedDivider } from "@/components/ui/wave-divider";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

const queryClient = new QueryClient();

function Home() {
  useSmoothScroll();

  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <FloatingLeaves />
      <Navbar />

      {/* Hero */}
      <Hero />

      {/* Trust Bar floats above wave */}
      <div className="relative z-10">
        <TrustBar />
      </div>

      {/* Welcome */}
      <WaveDivider fillColor="#F7F3EC" className="mt-6" />
      <WelcomeSection />

      {/* Why Guests Love — sand bg */}
      <CurvedDivider fillColor="#EDE4D3" />
      <WhyGuestsLove />

      {/* Gallery — back to cream */}
      <CurvedDivider fillColor="#F7F3EC" />
      <Gallery />

      {/* Explore Kochi — beige bg */}
      <WaveDivider fillColor="#E8DCC2" />
      <ExploreKochi />

      {/* Book Your Stay — cream */}
      <WaveDivider fillColor="#F7F3EC" />
      <BookYourStay />

      {/* Host — sand bg */}
      <CurvedDivider fillColor="#EDE4D3" />
      <HostSection />

      {/* Testimonials — cream */}
      <CurvedDivider fillColor="#F7F3EC" />
      <Testimonials />

      {/* Contact — sand bg */}
      <WaveDivider fillColor="#EDE4D3" />
      <ContactSection />

      {/* Footer */}
      <CurvedDivider fillColor="#3E6B4F" />
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
        <Analytics />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
