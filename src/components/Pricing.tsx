import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap, Gift } from 'lucide-react';

const plans = [
  {
    name: 'Free Trial',
    price: '$0',
    period: '/first lead',
    description: 'Experience our AI-driven growth engine with zero risk.',
    features: [
      'Your First Lead for Free',
      'AI-Powered Prospecting',
      'Quality Verification',
      'Strategy Consultation',
      'No Credit Card Required',
    ],
    buttonText: 'Claim Free Lead',
    popular: false,
    isFree: true,
  },
  {
    name: 'Growth',
    price: '$4,999',
    period: '/month',
    description: 'Perfect for brands scaling their demand generation.',
    features: [
      'Unlimited Lead Gen',
      'Weekly Growth Sprints',
      'Web & App Maintenance',
      'AI Content Strategy',
      'Priority Slack Support',
      'Global Market Analytics',
    ],
    buttonText: 'Start Growing',
    popular: true,
    isFree: false,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'Full-scale design and engineering partnership.',
    features: [
      'Dedicated Dev Team',
      'Custom AI Model Training',
      'Full App/Web Build-outs',
      'B2B Strategy & Sales Ops',
      '24/7 Priority Support',
      'On-site Riyadh Sessions',
    ],
    buttonText: 'Contact Sales',
    popular: false,
    isFree: false,
  },
];

const PricingCard = ({ plan, index }: { plan: typeof plans[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative p-8 rounded-2xl border transition-all duration-500 ${
        plan.popular
          ? 'bg-foreground text-background border-foreground scale-105 shadow-2xl'
          : 'bg-card border-border hover:border-primary/30'
      } ${plan.isFree ? 'border-primary/50' : ''}`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
            <Zap size={12} />
            Most Popular
          </span>
        </div>
      )}

      {plan.isFree && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full flex items-center gap-1">
            <Gift size={12} />
            Free Offer
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-xl font-display font-bold mb-2 ${plan.popular ? 'text-background' : 'text-foreground'}`}>
          {plan.name}
        </h3>
        <p className={`text-sm ${plan.popular ? 'text-background/70' : 'text-muted-foreground'}`}>
          {plan.description}
        </p>
      </div>

      <div className="mb-8">
        <span className={`text-4xl md:text-5xl font-display font-bold ${plan.popular ? 'text-background' : 'text-foreground'}`}>
          {plan.price}
        </span>
        <span className={`text-sm ${plan.popular ? 'text-background/70' : 'text-muted-foreground'}`}>
          {plan.period}
        </span>
      </div>

      <ul className="space-y-4 mb-8">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3">
            <Check 
              size={16} 
              className="text-primary" 
            />
            <span className={`text-sm ${plan.popular ? 'text-background/90' : 'text-foreground'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

<a
  href="#contact"
  className={`w-full py-4 rounded-full font-medium text-center transition-all duration-300 block ${
    plan.popular
      ? 'bg-background text-foreground hover:bg-background/90'
      : plan.isFree
      ? 'bg-primary text-primary-foreground hover:opacity-90'
      : 'bg-foreground text-background hover:bg-foreground/90'
  }`}
>
  {plan.buttonText}
</a>
    </motion.div>
  );
};

const Pricing = () => {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-32 bg-card relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label">Pricing</span>
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Scale your business with 
            <br />
            <span className="text-metallic">intelligent pricing</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Try us out with your first lead for free. Our plans are built to scale with your growth from Riyadh to the world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;