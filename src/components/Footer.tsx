import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const links = {
  services: [
    { name: 'Branding & Design', href: '#services' },
    { name: 'App & Web Dev', href: '#services' },
    { name: 'Growth Marketing', href: '#services' },
    { name: 'Demand Generation', href: '#services' },
  ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Projects', href: '#projects' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Contact', href: '#contact' },
    ],
social: [
    { name: 'GitHub', href: 'https://github.com/Developerstudios' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/developer-studios' },
    { name: 'Instagram', href: 'https://www.instagram.com/developerstudios.in' },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100094521793367' },
  ],
  };

  return (
    <footer className="py-20 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
        <div className="lg:col-span-1">
  <a href="#" className="flex items-center gap-2 mb-6">
    <span className="text-2xl font-display font-bold text-foreground">Developer Studios</span>
    <span className="text-primary text-2xl">®</span>
  </a>
  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
    Premier AI-driven design and development studio based in Riyadh, Saudi Arabia. 
    Engineering global digital ecosystems with human-led intuition.
  </p>
  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Riyadh, Saudi Arabia</p>
  <a
    href="mailto:hello@developerstudios.in"
    className="text-sm text-foreground hover:text-primary transition-colors flex items-center gap-1"
  >
    hello@developerstudios.in
    <ArrowUpRight size={14} />
  </a>
</div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-6">Services</h4>
            <ul className="space-y-4">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a
                  target='_blank'
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-6">Company</h4>
            <ul className="space-y-4">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-medium text-foreground mb-6">Connect</h4>
            <ul className="space-y-4">
              {links.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {link.name}
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 DeveloperStudios Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
