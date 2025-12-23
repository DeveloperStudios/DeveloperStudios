// src/pages/PrivacyPolicy.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <div className="container mx-auto px-6 pt-40 pb-20 max-w-4xl">
      <h1 className="text-4xl font-display font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-invert text-muted-foreground space-y-6">
        <section>
          <h2 className="text-foreground text-xl font-bold">1. Data Collection</h2>
          <p>DeveloperStudios collects project briefs, names, and contact details via our contact forms solely to provide tailored AI development and growth services.</p>
        </section>
        <section>
          <h2 className="text-foreground text-xl font-bold">2. Use of Information</h2>
          <p>We use your information to facilitate B2B lead generation, verify project feasibility, and maintain communication during development cycles.</p>
        </section>
        <section>
          <h2 className="text-foreground text-xl font-bold">3. Regional Compliance</h2>
          <p>As a Riyadh-based studio, we adhere to Saudi Arabian data protection regulations and international standards for global clients.</p>
        </section>
      </div>
    </div>
    <Footer />
  </div>
);

export default PrivacyPolicy;