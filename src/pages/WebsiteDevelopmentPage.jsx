import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Smartphone, 
  RotateCcw, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Building, 
  ChevronDown, 
  FileText, 
  Layers, 
  Compass, 
  Check, 
  MessageSquare,
  Cpu,
  Mail,
  Workflow
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactForm } from '../components/ContactForm';

export function WebsiteDevelopmentPage({ onOpenContact }) {
  const [activeFaq, setActiveFaq] = useState(null);

  // 12. SEO Metadata & Canonical Management
  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Website Development Company | Kusha.io";

    // Set page-specific meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    const originalDesc = metaDesc ? metaDesc.getAttribute('content') : null;
    if (metaDesc) {
      metaDesc.setAttribute(
        'content', 
        'Looking for a website development company? Kusha.io helps businesses build new websites, redesign existing sites and develop custom website functionality.'
      );
    }

    // Set canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    let createdCanonical = false;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
      createdCanonical = true;
    }
    const originalCanonical = canonicalLink.getAttribute('href');
    canonicalLink.setAttribute('href', 'https://www.kusha.io/services/website-development');

    // Clean up on component unmount
    return () => {
      document.title = originalTitle;
      if (metaDesc && originalDesc) {
        metaDesc.setAttribute('content', originalDesc);
      }
      if (canonicalLink) {
        if (createdCanonical) {
          canonicalLink.remove();
        } else if (originalCanonical) {
          canonicalLink.setAttribute('href', originalCanonical);
        }
      }
    };
  }, []);

  // CTA Click Handler with Analytics Measurement
  const handleCtaClick = (source = 'hero') => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      try {
        window.gtag('event', 'click_cta_discuss_project', {
          event_category: 'engagement',
          event_label: `Website Development Page - ${source}`
        });
      } catch (err) {
        // Analytics error ignored
      }
    }

    const formElement = document.getElementById('enquiry-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    } else if (onOpenContact) {
      onOpenContact('project', 'Website Development');
    }
  };

  // 5. Website Development Services Cards Data
  const servicesList = [
    {
      id: "business-website-development",
      title: "Business Website Development",
      description: "Create a professional online presence that explains your services, communicates your value and helps potential customers contact your business.",
      icon: Globe,
      highlights: [
        "Structured service presentation and value proposition",
        "Clear call-to-action placement and lead capture paths",
        "Modern brand presentation tailored to your business audience"
      ]
    },
    {
      id: "website-redesign",
      title: "Website Redesign",
      description: "Refresh an existing website with an updated layout, clearer content structure and a responsive user experience.",
      icon: RotateCcw,
      highlights: [
        "Modernization of legacy page layouts and typography",
        "Improved content hierarchy and user navigation paths",
        "Mobile usability enhancements and code modernization"
      ]
    },
    {
      id: "custom-web-development",
      title: "Custom Web Development",
      description: "Build website features and workflows based on your project requirements, including forms, booking flows and supported third-party integrations.",
      icon: Code2,
      highlights: [
        "Interactive forms, booking flows and quote requests",
        "Supported API integrations (CRM sync, payments, alerts)",
        "Component-driven architecture built for extensibility"
      ]
    },
    {
      id: "responsive-website-development",
      title: "Responsive Website Development",
      description: "Create website experiences designed to work across mobile phones, tablets and desktop screens.",
      icon: Smartphone,
      highlights: [
        "Tested across common phone, tablet and desktop viewports",
        "Fast-loading assets and optimized layout rendering",
        "Consistent accessibility and cross-browser reliability"
      ]
    }
  ];

  // 6. Website Development Process Steps Data
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We understand your business, audience, objectives and project requirements."
    },
    {
      number: "02",
      title: "Planning",
      description: "We define the website structure, required features and project scope."
    },
    {
      number: "03",
      title: "Design & Development",
      description: "We design and develop the agreed website experience."
    },
    {
      number: "04",
      title: "Testing",
      description: "We check responsiveness, links, forms and the agreed functionality."
    },
    {
      number: "05",
      title: "Launch",
      description: "We prepare the website for deployment and discuss any agreed post-launch support."
    }
  ];

  // 7. Practical Website Solutions (Honest Alternative to Fabricated Portfolio)
  const practicalSolutions = [
    {
      title: "Service & Business Sites",
      desc: "Designed for commercial service providers, consulting firms and B2B enterprises needing a credible, clear web presence that communicates core competencies.",
      features: ["Service breakdown pages", "Direct consultation booking", "Search engine-friendly structure"]
    },
    {
      title: "Layout & Brand Refresh",
      desc: "Suitable for businesses with existing websites that feel outdated, difficult to navigate or misaligned with current commercial offerings.",
      features: ["Cleaner visual hierarchy", "Streamlined mobile layout", "Organized information architecture"]
    },
    {
      title: "Workflow & Form Integrations",
      desc: "Ideal when you need interactive workflows such as structured quote builders, appointment calendars or direct CRM notifications.",
      features: ["Custom inquiry routing", "Calendly or Stripe workflows", "Supported webhook sync"]
    }
  ];

  // 8. Why Consider Kusha.io Points Data
  const whyConsiderPoints = [
    {
      title: "Website solutions aligned with your project requirements",
      desc: "We focus on building websites that address your specific business objectives rather than enforcing rigid, one-size-fits-all templates."
    },
    {
      title: "Responsive layouts for mobile and desktop users",
      desc: "Every website layout is developed to provide a smooth, legible experience on phones, tablets and desktop computers."
    },
    {
      title: "Clear project scope and development process",
      desc: "We define deliverables and milestones upfront so you understand what is being built, how testing is conducted and what to expect."
    },
    {
      title: "Custom functionality and integrations where appropriate",
      desc: "From lead capture forms to calendar scheduling and third-party tools, we implement functionality suited to your operational workflows."
    },
    {
      title: "Communication about deliverables, timelines and next steps",
      desc: "Regular progress updates, reviewable development stages and prompt communication throughout your website project."
    }
  ];

  // 9. FAQ Data (Exact 5 Q&As from requirements)
  const faqs = [
    {
      q: "What types of websites can you develop?",
      a: "We can discuss business websites, redesigns and custom website functionality based on your requirements and our available capabilities."
    },
    {
      q: "Can you redesign my existing website?",
      a: "Yes. Share your current website and the improvements you need so we can assess the project scope."
    },
    {
      q: "Can you integrate forms, bookings or third-party tools?",
      a: "Integration options depend on your required workflow, chosen tools and technical feasibility."
    },
    {
      q: "How much does website development cost?",
      a: "Pricing depends on the website scope, design requirements, functionality and integrations. Share your requirements to discuss an appropriate estimate."
    },
    {
      q: "How long does a website project take?",
      a: "Timelines depend on project scope, content readiness, feedback and technical requirements. We can discuss a realistic timeline after reviewing your project."
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-app)', color: 'var(--text-primary)', paddingTop: '100px' }}>

      {/* =========================================================================
          4. HERO SECTION
         ========================================================================= */}
      <section style={{ position: 'relative', paddingBottom: '70px', overflow: 'hidden' }}>
        {/* Subtle ambient lighting */}
        <div 
          style={{
            position: 'absolute',
            top: '-15%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '760px',
            height: '420px',
            background: 'radial-gradient(ellipse at center, rgba(212, 255, 79, 0.1) 0%, rgba(139, 123, 247, 0.05) 50%, transparent 70%)',
            filter: 'blur(75px)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
            <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span style={{ color: 'var(--text-secondary)' }}>Services</span>
            <span aria-hidden="true">/</span>
            <span style={{ color: 'var(--lime-primary)', fontWeight: 600 }}>Website Development</span>
          </nav>

          <div style={{ maxWidth: '920px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Top Label Badge */}
            <div className="section-badge lime" style={{ marginBottom: '20px' }}>
              <Compass size={14} />
              <span>Web Development Services & Solutions</span>
            </div>

            {/* Single Page H1 */}
            <h1 
              style={{ 
                fontSize: 'clamp(2.3rem, 5vw, 3.8rem)', 
                fontWeight: 900, 
                lineHeight: 1.15, 
                letterSpacing: '-0.03em', 
                marginBottom: '22px',
                color: '#ffffff'
              }}
            >
              Website Development Company for <span className="text-gradient-lime">Growing Businesses</span>
            </h1>

            {/* Supporting Description */}
            <div 
              style={{ 
                fontSize: 'clamp(1.05rem, 1.6vw, 1.2rem)', 
                color: 'var(--text-secondary)', 
                lineHeight: 1.68, 
                maxWidth: '780px',
                margin: '0 auto 32px auto'
              }}
            >
              <p style={{ marginBottom: '12px', fontWeight: 600, color: '#f4f4f5' }}>
                Build a professional website designed around your business goals.
              </p>
              <p style={{ margin: 0 }}>
                Kusha.io provides website development services for businesses looking to launch a new website, redesign an existing one, or add custom functionality. We focus on responsive design, clear user journeys and practical solutions tailored to your project requirements.
              </p>
            </div>

            {/* Call-to-Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '16px' }}>
              <button 
                onClick={() => handleCtaClick('hero-primary')}
                className="btn btn-lime btn-lg"
                style={{ boxShadow: '0 6px 24px rgba(212, 255, 79, 0.22)' }}
              >
                <span>Discuss Your Website Project</span>
                <ArrowRight size={18} />
              </button>

              <a 
                href="#services-overview"
                className="btn btn-secondary btn-lg"
                style={{ textDecoration: 'none' }}
              >
                <span>Explore Our Services</span>
              </a>
            </div>

            {/* Supporting Line Below CTA */}
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', margin: 0, fontStyle: 'normal' }}>
              Looking for a new website or planning to improve your current one? Tell us what you need.
            </p>

          </div>

        </div>
      </section>

      {/* =========================================================================
          5. SERVICES SECTION
         ========================================================================= */}
      <section id="services-overview" className="section-spacing" style={{ background: '#0e0f13', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">

          <div className="section-header center" style={{ maxWidth: '780px', margin: '0 auto 48px auto' }}>
            <div className="section-badge lavender">
              <Layers size={14} />
              <span>Core Capabilities</span>
            </div>
            <h2 className="section-title">
              Website Development <span className="text-gradient-lavender">Services</span>
            </h2>
            <p className="section-subtitle">
              We help businesses plan and build websites based on their goals, audience and functional requirements.
            </p>
          </div>

          {/* 4 Clean Service Cards */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px'
            }}
            className="services-twocol-grid"
          >
            {servicesList.map((service, idx) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.id}
                  className="bento-card"
                  style={{
                    background: 'linear-gradient(145deg, #181920 0%, #121316 100%)',
                    border: '1px solid var(--border-medium)',
                    padding: '34px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: 'var(--radius-xl)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '12px',
                          background: 'rgba(212, 255, 79, 0.08)',
                          border: '1px solid var(--lime-border)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}
                      >
                        <ServiceIcon size={22} color="var(--lime-primary)" />
                      </div>
                      <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', margin: 0 }}>
                        {service.title}
                      </h3>
                    </div>

                    <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.62, marginBottom: '22px' }}>
                      {service.description}
                    </p>

                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                      {service.highlights.map((h, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: '#e4e4e7', lineHeight: 1.5 }}>
                          <CheckCircle2 size={16} color="var(--lime-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <button 
                      onClick={() => handleCtaClick(`service-${service.id}`)}
                      className="btn btn-secondary btn-sm"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          6. WEBSITE DEVELOPMENT PROCESS SECTION
         ========================================================================= */}
      <section className="section-spacing" style={{ background: '#0a0b0e', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">

          <div className="section-header center" style={{ maxWidth: '780px', margin: '0 auto 48px auto' }}>
            <div className="section-badge lime">
              <Workflow size={14} />
              <span>Structured Roadmap</span>
            </div>
            <h2 className="section-title">
              Our Website Development <span className="text-gradient-lime">Process</span>
            </h2>
            <p className="section-subtitle">
              A transparent, step-by-step approach to taking your website project from initial concept to launch.
            </p>
          </div>

          {/* Process Timeline */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(5, 1fr)', 
              gap: '16px'
            }}
            className="process-horizontal-grid"
          >
            {processSteps.map((step, idx) => (
              <div 
                key={step.number}
                className="bento-card"
                style={{
                  background: 'linear-gradient(145deg, #16171d 0%, #111215 100%)',
                  border: '1px solid var(--border-subtle)',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-lg)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--lime-primary)', fontWeight: 800 }}>
                      STAGE {step.number}
                    </span>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--lime-primary)', opacity: 0.7 }} />
                  </div>

                  <h3 style={{ fontSize: '1.12rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
                    {step.title}
                  </h3>

                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {step.description}
                  </p>
                </div>

                <div style={{ marginTop: '18px', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                  Step {idx + 1} of 5
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          7. PRACTICAL WEBSITE SOLUTIONS FOR YOUR BUSINESS (PORTFOLIO REPLACEMENT)
         ========================================================================= */}
      <section className="section-spacing" style={{ background: '#0e0f13' }}>
        <div className="container">

          <div className="section-header center" style={{ maxWidth: '820px', margin: '0 auto 44px auto' }}>
            <div className="section-badge lavender">
              <Sparkles size={14} />
              <span>Practical Solutions</span>
            </div>
            <h2 className="section-title">
              Practical Website Solutions <span className="text-gradient-lavender">for Your Business</span>
            </h2>
            <p className="section-subtitle">
              Every website project has different requirements. We focus on understanding your goals, defining the right scope and building an experience suited to your business and audience.
            </p>
          </div>

          {/* Solution Archetypes */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '20px',
              marginBottom: '32px'
            }}
            className="solutions-three-grid"
          >
            {practicalSolutions.map((sol, i) => (
              <div 
                key={i}
                className="bento-card"
                style={{
                  background: 'linear-gradient(145deg, #17181f 0%, #121316 100%)',
                  border: '1px solid var(--border-medium)',
                  padding: '28px',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px' }}>
                    {sol.title}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                    {sol.desc}
                  </p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {sol.features.map((feat, fIdx) => (
                      <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#d4d4d8' }}>
                        <Check size={14} color="var(--lime-primary)" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '22px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <button 
                    onClick={() => handleCtaClick('solution-concept')}
                    style={{ background: 'transparent', border: 'none', color: 'var(--lime-primary)', fontSize: '0.82rem', fontWeight: 700, padding: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>Discuss Similar Scope</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Honest Note About Client Work & NDAs */}
          <div 
            style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: 'var(--radius-md)',
              padding: '16px 20px',
              textAlign: 'center',
              maxWidth: '720px',
              margin: '0 auto',
              fontSize: '0.82rem',
              color: 'var(--text-muted)'
            }}
          >
            <ShieldCheck size={16} color="var(--lavender-light)" style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '6px' }} />
            <span>
              All client contracts and proprietary business codebases are protected under mutual Non-Disclosure Agreements (NDAs). Concept designs and future case study briefs will be published as clearances are finalized.
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================================
          8. WHY CONSIDER KUSHA.IO? SECTION
         ========================================================================= */}
      <section className="section-spacing" style={{ background: '#090a0d', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">

          <div className="section-header center" style={{ maxWidth: '780px', margin: '0 auto 48px auto' }}>
            <div className="section-badge lime">
              <ShieldCheck size={14} />
              <span>Honest Value</span>
            </div>
            <h2 className="section-title">
              Why Consider <span className="text-gradient-lime">Kusha.io?</span>
            </h2>
            <p className="section-subtitle">
              Straightforward delivery, responsive layouts and clear communication for businesses looking for a dependable website development partner.
            </p>
          </div>

          {/* 5 Why Consider Points */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '20px'
            }}
            className="why-consider-grid"
          >
            {whyConsiderPoints.map((point, idx) => (
              <div
                key={idx}
                className="bento-card"
                style={{
                  gridColumn: idx < 2 ? 'span 6' : 'span 4',
                  background: 'linear-gradient(145deg, #17181e 0%, #121316 100%)',
                  border: '1px solid var(--border-medium)',
                  padding: '28px 24px',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  gap: '16px'
                }}
              >
                <div 
                  style={{ 
                    width: '36px', 
                    height: '36px', 
                    borderRadius: '10px', 
                    background: 'rgba(212, 255, 79, 0.08)', 
                    border: '1px solid var(--lime-border)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    flexShrink: 0
                  }}
                >
                  <Check size={18} color="var(--lime-primary)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px', lineHeight: 1.35 }}>
                    {point.title}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55, margin: 0 }}>
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          9. FAQ SECTION (EXACT 5 ACCESSIBLE QUESTIONS)
         ========================================================================= */}
      <section className="section-spacing" style={{ background: '#0e0f13', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ maxWidth: '840px' }}>

          <div className="section-header center" style={{ marginBottom: '40px' }}>
            <div className="section-badge lavender">
              <FileText size={14} />
              <span>Questions & Answers</span>
            </div>
            <h2 className="section-title">
              Frequently Asked <span className="text-gradient-lavender">Questions</span>
            </h2>
            <p className="section-subtitle">
              Clear answers regarding our website development scope, redesigns, pricing and timelines.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              const faqId = `faq-content-${idx}`;
              const buttonId = `faq-btn-${idx}`;

              return (
                <div 
                  key={idx}
                  style={{
                    background: '#15161c',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    transition: 'all var(--transition-fast)'
                  }}
                >
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={faqId}
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      background: 'transparent',
                      border: 'none',
                      color: '#ffffff',
                      fontSize: '1rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown 
                      size={18} 
                      color="var(--lime-primary)" 
                      style={{ 
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                        transition: 'transform 0.2s ease',
                        flexShrink: 0,
                        marginLeft: '12px'
                      }} 
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div 
                      id={faqId}
                      role="region"
                      aria-labelledby={buttonId}
                      style={{ padding: '0 24px 22px 24px', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}
                    >
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          10. FINAL CTA SECTION & 11. PROJECT ENQUIRY FORM
         ========================================================================= */}
      <section id="enquiry-form" className="section-spacing" style={{ background: '#0a0b0e', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">

          <div className="section-header center" style={{ maxWidth: '780px', margin: '0 auto 44px auto' }}>
            <div className="section-badge lime">
              <MessageSquare size={14} />
              <span>Let's Discuss Your Project</span>
            </div>
            <h2 className="section-title">
              Have a Website Project in <span className="text-gradient-lime">Mind?</span>
            </h2>
            <p className="section-subtitle">
              Tell us about your business and the website you want to build. We’ll review your requirements and discuss the next steps.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '24px',
              alignItems: 'stretch'
            }}
            className="contact-main-grid"
          >
            {/* Left Column: Direct Contact & Honest Company Info */}
            <div 
              className="bento-card" 
              style={{ 
                gridColumn: 'span 5',
                background: 'linear-gradient(145deg, #181920 0%, #131418 100%)',
                border: '1px solid var(--border-medium)',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--lime-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Project Scoping & Enquiries
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#ffffff', marginTop: '6px', marginBottom: '16px' }}>
                  Discuss Your Website Project
                </h3>

                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Submit your details using the form. We review the scope, prepare technical clarifying questions if needed, and respond within 24 business hours.
                </p>

                <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  What You Can Expect:
                </h4>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                  {[
                    'Direct review of your requirements by our engineering desk',
                    'Clear scoping of required pages, design and functionality',
                    'Mutual Non-Disclosure Agreement (NDA) available upon request',
                    'Transparent communication regarding deliverables and next steps'
                  ].map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      <CheckCircle2 size={16} color="var(--lime-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Verified Legal Entity Card */}
              <div style={{ background: 'var(--bg-subtle)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Building size={16} color="var(--lavender-light)" />
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>Kusha.io</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Registered in the Netherlands</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--lime-primary)', fontWeight: 700 }}>Chamber of Commerce (KVK No. 98986708)</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Mail size={13} />
                  <span>Email: <a href="mailto:info@kusha.io" style={{ color: '#ffffff', textDecoration: 'underline' }}>info@kusha.io</a></span>
                </div>
              </div>
            </div>

            {/* Right Column: API-connected Enquiry Form */}
            <div 
              className="bento-card" 
              style={{ 
                gridColumn: 'span 7',
                padding: '36px',
                background: 'linear-gradient(145deg, #181920 0%, #14151a 100%)',
                border: '1px solid var(--border-medium)',
                borderRadius: 'var(--radius-xl)'
              }}
            >
              <ContactForm 
                initialType="project"
                initialSubject="Website Development"
                isModal={false}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Responsive media query adjustments */}
      <style>{`
        @media (max-width: 1024px) {
          .services-twocol-grid {
            grid-template-columns: 1fr !important;
          }
          .process-horizontal-grid {
            grid-template-columns: 1fr !important;
          }
          .solutions-three-grid {
            grid-template-columns: 1fr !important;
          }
          .why-consider-grid > div {
            grid-column: span 12 !important;
          }
          .contact-main-grid > div {
            grid-column: span 12 !important;
          }
        }
      `}</style>
    </div>
  );
}
