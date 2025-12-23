import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const TermsOfService = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <main className="container mx-auto px-6 pt-40 pb-20 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-12 uppercase tracking-tighter">
          Terms of <span className="text-metallic">Service</span>
        </h1>
        
        <div className="prose prose-invert text-muted-foreground space-y-10">
          <section>
            <h2 className="text-foreground text-2xl font-display font-bold uppercase mb-4">1. Service Scope</h2>
            <p>
              DeveloperStudios provides AI-driven design, web/app development, and demand generation services. 
              Our "Intelligence Lab" workflows combine automated processing with human-led intuition to deliver global-standard digital products.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-2xl font-display font-bold uppercase mb-4">2. Subscription & Payments</h2>
            <p>
              Services are provided on a subscription basis (Starter, Growth, Studio tiers). 
              Subscriptions are billed monthly and may be paused or cancelled at any time through your client dashboard.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-2xl font-display font-bold uppercase mb-4">3. "First Lead Free" Offer</h2>
            <p>
              Our introductory offer of one free verified lead is limited to one per legal entity and is subject to verification by our Riyadh-based strategy team.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-2xl font-display font-bold uppercase mb-4">4. Liability & Uptime</h2>
            <p>
              While we guarantee 99.9% uptime for built systems, DeveloperStudios is not liable for indirect losses resulting from 
              third-party platform failures or API outages beyond our immediate control.
            </p>
          </section>

          <section className="pt-10 border-t border-border">
            <p className="text-xs uppercase tracking-widest">
              Last Updated: December 2025 // Riyadh, Saudi Arabia
            </p>
          </section>
        </div>
      </motion.div>
    </main>
    <Footer />
  </div>
);

export default TermsOfService;