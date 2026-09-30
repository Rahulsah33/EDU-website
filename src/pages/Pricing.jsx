import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "../components/common/Badge.jsx";
import Button from "../components/common/Button.jsx";
import Container from "../components/common/Container.jsx";

const plans = [
  {
    name: "Starter",
    tagline: "Explore core concepts and basic exam readiness.",
    priceMonthly: 0,
    priceAnnual: 0,
    popular: false,
    cta: "Start Free",
    ctaVariant: "outline",
    features: [
      "Access to 25+ free foundational courses",
      "Daily practice questions & solutions",
      "Community student discussion forum",
      "Standard definition (720p) video",
      "Basic formula sheets & notes",
    ],
  },
  {
    name: "Pro Learner",
    tagline: "Everything you need for top percentile exam results.",
    priceMonthly: 999,
    priceAnnual: 799,
    popular: true,
    badge: "Most Popular",
    cta: "Start 7-Day Free Trial",
    ctaVariant: "primary",
    features: [
      "Unlimited access to ALL 250+ courses",
      "Daily Interactive Live Masterclasses & Q&A",
      "Unlimited AI Tutor doubt solver (24/7)",
      "Full-length real exam mock test simulator",
      "Downloadable High-Res PDF revision notes",
      "Personalized learning streak analytics",
      "Full HD 1080p playback & offline access",
    ],
  },
  {
    name: "Elite Mastermind",
    tagline: "Dedicated 1-on-1 mentorship and personalized study plans.",
    priceMonthly: 2499,
    priceAnnual: 1999,
    popular: false,
    cta: "Join Elite",
    ctaVariant: "outline",
    features: [
      "Everything included in Pro Learner",
      "1-on-1 monthly mentorship call with IIT/AIIMS educators",
      "Personalized exam strategy & weak-area tracker",
      "Priority doubt resolution with audio notes",
      "Exclusive mock test ranking & national leaderboards",
      "Printed physical notes delivered to your home",
      "Direct interview prep & resume review",
    ],
  },
];

const faqs = [
  {
    q: "Can I switch between monthly and annual plans anytime?",
    a: "Yes! You can upgrade, downgrade, or cancel your subscription at any time from your account settings with prorated credit.",
  },
  {
    q: "Is there a money-back guarantee?",
    a: "Absolutely. We offer a no-questions-asked 30-day money-back guarantee on all Pro and Elite plans.",
  },
  {
    q: "Does the AI Assistant have any daily query limits on Pro?",
    a: "No! Pro Learner and Elite Mastermind subscribers receive unlimited 24/7 AI tutor access across all subjects.",
  },
  {
    q: "Can I access courses offline on mobile?",
    a: "Yes, you can download video lessons and PDF notes for offline viewing on our mobile and web applications.",
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="pricing-page">
      <section className="pricing-hero">
        <Container>
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Pricing</span>
          </div>

          <div className="pricing-hero-copy">
            <Badge variant="primary">Simple, Transparent Pricing</Badge>
            <h1>Invest In Your Future. Learn Without Limits.</h1>
            <p>
              Choose the plan that fits your ambition. From free foundations to
              full-fledged live mentorship and AI tutoring.
            </p>

            {/* Billing Toggle */}
            <div className="billing-toggle-wrap">
              <span className={!isAnnual ? "active-billing" : ""}>Monthly Billing</span>
              <button
                className={`toggle-switch ${isAnnual ? "is-annual" : ""}`}
                onClick={() => setIsAnnual(!isAnnual)}
                aria-label="Toggle annual billing"
              >
                <span className="toggle-thumb" />
              </button>
              <span className={isAnnual ? "active-billing" : ""}>
                Annual Billing <span className="discount-chip">SAVE 20%</span>
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing Cards Grid */}
      <section className="pricing-cards-section section-space">
        <Container>
          <div className="pricing-grid">
            {plans.map((p) => {
              const price = isAnnual ? p.priceAnnual : p.priceMonthly;
              return (
                <motion.div
                  key={p.name}
                  className={`pricing-card ${p.popular ? "featured-pricing-card" : ""}`}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  {p.popular && (
                    <div className="popular-ribbon">
                      <Sparkles size={13} /> {p.badge}
                    </div>
                  )}

                  <div className="p-card-top">
                    <h3>{p.name}</h3>
                    <p>{p.tagline}</p>

                    <div className="price-number-row">
                      <span className="currency-symbol">₹</span>
                      <strong>{price.toLocaleString("en-IN")}</strong>
                      <span className="period-text">/ month</span>
                    </div>
                    {isAnnual && price > 0 && (
                      <small className="billed-annually-note">
                        Billed annually (₹{(price * 12).toLocaleString("en-IN")}/yr)
                      </small>
                    )}
                  </div>

                  <div className="p-card-features">
                    <span className="features-label">What's included:</span>
                    <ul>
                      {p.features.map((feat, fIdx) => (
                        <li key={fIdx}>
                          <Check size={16} className="feat-check" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-card-footer">
                    <Button
                      variant={p.ctaVariant}
                      size="lg"
                      className="w-full"
                      to="/signup"
                    >
                      {p.cta} <ArrowRight size={16} />
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Guarantee Banner */}
          <div className="guarantee-banner">
            <ShieldCheck size={36} className="text-accent" />
            <div>
              <h4>30-Day 100% Money-Back Guarantee</h4>
              <p>
                Try R Academy risk-free. If you don't feel noticeably more confident
                in your exam preparation within 30 days, we'll refund every rupee.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing FAQs */}
      <section className="pricing-faq-section section-space">
        <Container>
          <div className="faq-heading-centered">
            <span className="eyebrow">Got questions?</span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((f, idx) => (
              <div
                key={idx}
                className={`faq-acc-item ${openFaq === idx ? "open" : ""}`}
              >
                <button
                  className="faq-acc-header"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <span>{f.q}</span>
                  <span className="faq-acc-icon">{openFaq === idx ? "−" : "+"}</span>
                </button>
                {openFaq === idx && (
                  <div className="faq-acc-body">
                    <p>{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
