// src/App.tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { ReactLenis } from 'lenis/react';
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

const queryClient = new QueryClient();

const GlobalSEO = () => {
  // JSON-LD Structured Data for a Professional Agency
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "DeveloperStudios",
    "image": "https://developerstudios.in/logo.png",
    "@id": "https://developerstudios.in",
    "url": "https://developerstudios.in",
    "telephone": "+966XXXXXXXXX", 
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "King Fahad Road",
      "addressLocality": "Riyadh",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 24.7136,
      "longitude": 46.6753
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://linkedin.com/company/developerstudios",
      "https://twitter.com/developerstudios"
    ],
    "description": "Premium software development agency for founders. Hire top React, Node.js, and Mobile developers for high-scale products.",
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://developerstudios.in/#contact",
        "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/IOSPlatform", "http://schema.org/AndroidPlatform"]
      },
      "result": {
        "@type": "Reservation",
        "name": "Book a Consultation"
      }
    }
  };

  return (
    <Helmet>
      {/* 1. Primary Meta Tags */}
      <title>DeveloperStudios | Hire Top Engineers & Build for Founders</title>
      <meta name="title" content="DeveloperStudios | Hire Top Engineers & Build for Founders" />
      <meta name="description" content="Stop searching on Upwork or Toptal. Hire DeveloperStudios for world-class Web & App development. We help global founders build MVP to Scale using React, Node, and AI." />
      
      {/* 2. Advanced Keyword Strategy (High Demand) */}
      <meta name="keywords" content="hire react developers, hire nodejs experts, app development agency for founders, custom software development Riyadh, freelance alternative for startups, MVP development service, digital transformation agency, hire dedicated developers, enterprise software solutions, React Native experts" />

      {/* 3. Global & Regional SEO */}
      <meta name="geo.region" content="SA-01" />
      <meta name="geo.placename" content="Riyadh" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* 4. Open Graph / Social (For LinkedIn & High-End Platforms) */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://developerstudios.in/" />
      <meta property="og:title" content="The Elite Tech Partner for Global Founders | DeveloperStudios" />
      <meta property="og:description" content="Beyond freelancing. We provide dedicated engineering teams that build products people love. React, Node, Cloud, and more." />
      <meta property="og:image" content="https://developerstudios.in/og-global-cover.jpg" />

      {/* 5. Twitter / X */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@developerstudios" />
      <meta name="twitter:title" content="DeveloperStudios | Building the Future for Founders" />
      <meta name="twitter:description" content="Hire the best. Build the fastest. Global software agency for modern startups." />

      {/* 6. JSON-LD Injection */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </script>

      <link rel="canonical" href="https://developerstudios.in/" />
    </Helmet>
  );
};

const App = () => (
  <HelmetProvider>
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <GlobalSEO />
                    <Index />
                  </>
                } 
              />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
          <Analytics />
        </TooltipProvider>
      </QueryClientProvider>
    </ReactLenis>
  </HelmetProvider>
);

export default App;