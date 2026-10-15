import React, { useState } from 'react';
import { 
  Globe, 
  Smartphone, 
  BrainCircuit, 
  Database, 
  CreditCard, 
  MessageSquare, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Clock, 
  Users, 
  Check, 
  Code2, 
  Layers, 
  Calendar, 
  Bell, 
  Building, 
  ChevronRight,
  ExternalLink,
  ChevronDown,
  Shield,
  Search,
  Sliders
} from 'lucide-react';
import { ContactForm } from '../components/ContactForm';
import { Link } from 'react-router-dom';

export function WebsiteDevelopmentPage({ onOpenContact }) {
  const [activePillar, setActivePillar] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);

  // 6 Core Pillars as requested by the user
  const pillars = [
    {
      id: "responsive-website",
      number: "01",
      title: "Professional Responsive Website",
      badge: "Pixel-Perfect & Lightning-Fast",
      icon: Smartphone,
      accentColor: "var(--lime-primary)",
      shortDesc: "Mobile-first, ultra-performant websites engineered to look stunning and load in sub-seconds across all screen sizes.",
      description: "We don't build generic template sites. We engineer modern, custom-coded web platforms with responsive fluid layouts, sub-second TTFB, and flawless 100/100 Core Web Vitals scores that give your brand instant authority.",
      features: [
        "Fluid responsive design across Mobile, Tablet, Laptop, and Ultrawide monitors",
        "Sub-second load times with 95+ Google Core Web Vitals performance guarantee",
        "Modern component-driven stack: React, Next.js, Vite & high-fidelity CSS",
        "Full WCAG 2.1 AA accessibility compliance and cross-browser resilience",
        "Interactive micro-animations and polished dark/light mode experiences",
        "Zero layout shifts (CLS < 0.05) and optimized responsive asset pipelines"
      ],
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Cloudflare CDN"],
      stats: { metric: "< 0.8s", label: "Average First Contentful Paint" },
      useCase: "Ideal for fast-scaling startups, corporate entities, and ambitious B2B businesses wanting high credibility."
    },
    {
      id: "ai-integration",
      number: "02",
      title: "AI Integration",
      badge: "Autonomous Intelligence",
      icon: BrainCircuit,
      accentColor: "var(--lavender-light)",
      shortDesc: "Turn your website into an intelligent 24/7 autonomous engine that understands buyer intent and answers complex questions.",
      description: "Supercharge your online presence with embedded AI assistants, Retrieval-Augmented Generation (RAG) trained on your company knowledge base, smart semantic search, and predictive content personalization.",
      features: [
        "24/7 Intelligent AI Copilots trained strictly on your documentation and product catalog",
        "RAG (Retrieval-Augmented Generation) pipeline for 100% hallucination-free answers",
        "Semantic vector search that understands customer intent rather than just keywords",
        "Automated lead qualification scoring and smart objection handling in real-time",
        "AI-powered meeting preparation summaries generated for your sales team",
        "Direct integration with OpenAI GPT-4o, Anthropic Claude, and custom vector DBs"
      ],
      techStack: ["OpenAI API", "Anthropic Claude", "LangChain", "Pinecone", "LlamaIndex", "FastAPI"],
      stats: { metric: "24/7", label: "Instant Prospect Engagement" },
      useCase: "Perfect for technical SaaS, high-ticket services, and companies with deep product catalogs or complex offerings."
    },
    {
      id: "crm-integration",
      number: "03",
      title: "CRM Integration",
      badge: "Real-Time 2-Way Sync",
      icon: Database,
      accentColor: "var(--lime-primary)",
      shortDesc: "Seamless two-way data pipelines between your website interactions and your core customer relationship management platform.",
      description: "Eliminate manual data entry and never lose another prospect. Every inquiry, page view, download, and booking dynamically updates your sales pipeline in real-time with complete attribution data.",
      features: [
        "Bidirectional real-time sync with HubSpot, Salesforce, Zoho CRM, Pipedrive, and Notion",
        "Automatic contact creation, deal pipeline updates, and company domain enrichment",
        "Full attribution tracking: UTM parameters, referral sources, and visitor session history",
        "Custom field mapping and automated lead routing rules to specific account reps",
        "Webhook triggers, automated follow-up sequences, and task creation for sales teams",
        "Secure OAuth 2.0 and API token governance with zero data leakage"
      ],
      techStack: ["HubSpot API", "Salesforce REST", "Zoho CRM", "Zapier / Make", "n8n", "Webhooks"],
      stats: { metric: "0 min", label: "Manual Data Entry Overhead" },
      useCase: "Crucial for B2B sales teams, agency pipelines, and companies investing heavily in marketing and lead tracking."
    },
    {
      id: "workflows-booking-payment",
      number: "04",
      title: "Form Submission, Booking & Payment Workflows",
      badge: "Frictionless Conversion",
      icon: CreditCard,
      accentColor: "var(--lavender-light)",
      shortDesc: "High-converting multi-step forms, real-time calendar scheduling, and frictionless global payment gateways.",
      description: "Remove every barrier between a curious visitor and a confirmed appointment or closed deal. We design interactive quote builders, live calendar synchronizations, and PCI-compliant one-click checkouts.",
      features: [
        "Smart multi-step dynamic forms with conditional branching logic and instant validation",
        "Automated calendar booking with time-zone synchronization (Calendly, Cal.com, custom slots)",
        "Secure global payment gateways: Stripe, PayPal, Mollie, Apple Pay, Google Pay, SEPA",
        "Interactive Project Scope & Cost Estimators that calculate instant quotes on the fly",
        "Automated invoice generation, PDF receipts, and instant email dispatch upon booking",
        "Built-in spam prevention, rate limiting, and GDPR-compliant consent capture"
      ],
      techStack: ["Stripe Connect", "Cal.com API", "Calendly", "Postmark", "HMAC Signatures"],
      stats: { metric: "+340%", label: "Average Form Conversion Lift" },
      useCase: "Ideal for consultative businesses, agencies, software vendors, and digital service providers."
    },
    {
      id: "messaging-integration",
      number: "05",
      title: "Messaging Integration",
      badge: "Instant Omnichannel Alerting",
      icon: MessageSquare,
      accentColor: "var(--lime-primary)",
      shortDesc: "Engage prospects immediately on WhatsApp, Telegram, SMS, or Live Chat, and alert internal teams within seconds.",
      description: "Speed to lead determines conversion. We connect your website to WhatsApp Business API, Telegram bots, SMS gateways, and internal Slack channels so your team can respond to high-intent inquiries in seconds.",
      features: [
        "Official WhatsApp Business Cloud API integration for instant customer messaging",
        "Live chat widget options (Intercom, Crisp, Drift, or ultra-fast custom WebSockets)",
        "Instant SMS alerts (via Twilio) dispatched to on-call account managers for urgent leads",
        "Real-time Slack / Microsoft Teams channel notifications with interactive action buttons",
        "Unified inbox syncing allowing reps to reply from their preferred messaging tools",
        "Automated WhatsApp appointment confirmations and calendar reminders"
      ],
      techStack: ["WhatsApp Cloud API", "Twilio SMS", "Slack Webhooks", "Intercom", "WebSockets"],
      stats: { metric: "< 5s", label: "Instant Lead Alert To Your Team" },
      useCase: "Essential for businesses where closing high-ticket deals requires rapid response times."
    },
    {
      id: "lead-generation-integration",
      number: "06",
      title: "Modern Website with Lead Generation Integration",
      badge: "Engineered Growth Engine",
      icon: TrendingUp,
      accentColor: "var(--lavender-light)",
      shortDesc: "Full-funnel conversion optimization, behavioral tracking, SEO infrastructure, and automated lead capture hooks.",
      description: "A website is only as valuable as the revenue it generates. We build websites engineered from the ground up to attract organic traffic, track user intent, and turn passive visitors into qualified commercial leads.",
      features: [
        "Lead magnets, interactive assessment tools, and gated content delivery pipelines",
        "Google Tag Manager (GTM) + GA4 full-funnel event tracking and Meta/LinkedIn Pixel integration",
        "Technical SEO mastery: SSG/SSR rendering, OpenGraph social cards, JSON-LD Schema markup",
        "A/B testing infrastructure (PostHog / custom telemetry) for continuous CRO experiments",
        "Exit-intent overlays and contextual bottom-sheet action triggers",
        "Heatmaps and session recording setup to eliminate user friction points"
      ],
      techStack: ["Google Tag Manager", "GA4", "PostHog", "Schema.org JSON-LD", "Cloudflare Edge"],
      stats: { metric: "3.5x", label: "Higher Commercial Inbound Leads" },
      useCase: "Designed for ambitious companies scaling paid ads, content marketing, and organic search campaigns."
    }
  ];

  // Website Development FAQs
  const webFaqs = [
    {
      q: "How fast can Kusha.io deliver a professional responsive website with AI & CRM integration?",
      a: "Our agile engineering pods typically deliver a fully custom, responsive website with CRM sync, custom forms, and messaging integrations within 2 to 4 weeks. For complex enterprise portals with advanced RAG AI assistants and multi-tier workflows, timelines range from 4 to 8 weeks with continuous bi-weekly sprint demos."
    },
    {
      q: "Which CRMs can be integrated into our new website?",
      a: "We natively support bidirectional integrations with HubSpot, Salesforce, Zoho CRM, Pipedrive, ActiveCampaign, Notion, and Airtable. We also build custom webhook pipelines using n8n, Make, or custom REST APIs to sync with your internal proprietary databases."
    },
    {
      q: "How does the AI assistant integration work on the website?",
      a: "We ingest your company documentation, FAQs, product catalog, and past customer inquiries into a secure vector database (Pinecone/Chroma). When a visitor asks questions, the AI retrieves relevant factual context using RAG (Retrieval-Augmented Generation) and provides accurate, brand-aligned answers while capturing their contact details for your sales team."
    },
    {
      q: "Can the website accept payments and schedule calendar bookings directly?",
      a: "Yes! We implement complete self-service workflows: automated appointment scheduling via Calendly or Cal.com, and seamless global payments powered by Stripe (supporting credit cards, Apple Pay, Google Pay, SEPA, and local EU payment methods) with instant PDF invoice delivery."
    },
    {
      q: "How does Kusha.io ensure enterprise-grade security and GDPR compliance?",
      a: "Kusha.io is a legally registered business entity in the Netherlands (KVK No. 98986708). All web architectures, form submissions, and customer data workflows adhere strictly to EU GDPR regulations. We sign standard mutual NDAs, and our forms use encrypted HTTPS payloads, rate limiting, and secure tokenization."
    },
    {
      q: "Will our in-house marketing team be able to update content easily?",
      a: "Absolutely. We can connect your website to modern headless CMS platforms (such as Strapi, Sanity, Contentful, or WordPress headless) or provide clean Markdown/JSON content files so your team can publish blog posts, case studies, and landing page copy without needing a developer."
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-app)', color: 'var(--text-primary)', paddingTop: '110px' }}>

      {/* =========================================================================
          HERO SECTION
         ========================================================================= */}
      <section style={{ position: 'relative', paddingBottom: '70px', overflow: 'hidden' }}>
        {/* Glow ambient backdrops */}
        <div 
          style={{
            position: 'absolute',
            top: '-20%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '800px',
            height: '450px',
            background: 'radial-gradient(ellipse at center, rgba(212, 255, 79, 0.12) 0%, rgba(139, 123, 247, 0.08) 50%, transparent 70%)',
            filter: 'blur(70px)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          
          {/* Breadcrumb Navigation */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
            <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--text-secondary)' }}>Services</span>
            <span>/</span>
            <span style={{ color: 'var(--lime-primary)', fontWeight: 600 }}>Website Development</span>
          </div>

          <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Top Glowing Badge */}
            <div className="section-badge lime" style={{ marginBottom: '22px' }}>
              <Sparkles size={14} />
              <span>Full-Stack Web Engineering & Intelligent Growth</span>
            </div>

            {/* Main Headline */}
            <h1 
              style={{ 
                fontSize: 'clamp(2.4rem, 5.2vw, 4.3rem)', 
                fontWeight: 900, 
                lineHeight: 1.12, 
                letterSpacing: '-0.035em', 
                marginBottom: '24px' 
              }}
            >
              High-Performance Websites Engineered with{' '}
              <span className="text-gradient-lime">AI, CRM & Automation</span>
            </h1>

            {/* Subtitle */}
            <p 
              style={{ 
                fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', 
                color: 'var(--text-secondary)', 
                lineHeight: 1.65, 
                marginBottom: '32px',
                maxWidth: '820px',
                margin: '0 auto 32px auto'
              }}
            >
              We build custom responsive web platforms that do far more than look beautiful. We integrate autonomous AI assistants, 2-way CRM synchronization, frictionless booking/payment workflows, and omnichannel messaging into a unified lead-generating ecosystem.
            </p>

            {/* Key Capabilities Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '38px' }}>
              {[
                { icon: Smartphone, label: "Responsive Web Design" },
                { icon: BrainCircuit, label: "Embedded AI Assistants" },
                { icon: Database, label: "2-Way CRM Sync" },
                { icon: CreditCard, label: "Stripe & Booking Workflows" },
                { icon: MessageSquare, label: "WhatsApp & SMS Alerting" },
                { icon: TrendingUp, label: "Lead Gen Optimization" }
              ].map((pill, idx) => {
                const IconComponent = pill.icon;
                return (
                  <div 
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      fontSize: '0.83rem',
                      color: '#ffffff',
                      fontWeight: 600
                    }}
                  >
                    <IconComponent size={14} color="var(--lime-primary)" />
                    <span>{pill.label}</span>
                  </div>
                );
              })}
            </div>

            {/* Primary Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <button 
                onClick={() => onOpenContact('project', 'Website Development & AI Integration')}
                className="btn btn-lime btn-lg"
                style={{ boxShadow: '0 8px 30px rgba(212, 255, 79, 0.28)' }}
              >
                <span>Start Your Web Project</span>
                <ArrowRight size={18} />
              </button>

              <button 
                onClick={() => onOpenContact('consultation', 'Web Development Architecture Consultation')}
                className="btn btn-secondary btn-lg"
              >
                <span>Book Free Technical Consultation</span>
              </button>

              <a 
                href="#services-breakdown"
                className="btn btn-ghost"
                style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}
              >
                <Sliders size={16} color="var(--lavender-light)" />
                <span>Explore 6 Pillars ↓</span>
              </a>
            </div>

          </div>

          {/* Quick Metrics Bento Card */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: '16px', 
              marginTop: '60px',
              background: 'linear-gradient(145deg, #181920 0%, #121317 100%)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-xl)',
              padding: '24px 32px',
              boxShadow: 'var(--shadow-lg)'
            }}
            className="stats-quad-grid"
          >
            {[
              { val: "100/100", label: "Core Web Vitals Performance", desc: "Sub-second speed across all devices" },
              { val: "24/7", label: "Autonomous AI Lead Capture", desc: "Trained on your business documentation" },
              { val: "100%", label: "Real-Time CRM Data Accuracy", desc: "Zero manual data entry or lost leads" },
              { val: "EU + India", label: "Global Hybrid Advantage", desc: "Netherlands KVK 98986708 + India engineering" },
            ].map((stat, i) => (
              <div key={i} style={{ borderRight: i < 3 ? '1px solid rgba(255, 255, 255, 0.08)' : 'none', paddingRight: i < 3 ? '20px' : '0' }} className="stat-col">
                <div style={{ fontSize: '1.9rem', fontWeight: 900, color: 'var(--lime-primary)', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                  {stat.val}
                </div>
                <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff', marginTop: '4px' }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {stat.desc}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================================
          THE 6 CORE SERVICES / PILLARS SECTION (User Requested Core Requirements)
         ========================================================================= */}
      <section id="services-breakdown" className="section-spacing" style={{ background: '#0e0f13' }}>
        <div className="container">

          <div className="section-header center">
            <div className="section-badge lavender">
              <Layers size={14} />
              <span>Comprehensive Service Scope</span>
            </div>
            <h2 className="section-title">
              The 6 Core Pillars of Modern <span className="text-gradient-lavender">Web Development</span>
            </h2>
            <p className="section-subtitle">
              Every modern digital product needs more than clean layout. Explore our 6 specialized disciplines engineered to power your online revenue.
            </p>
          </div>

          {/* Interactive Bento Grid for the 6 Core Services */}
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '24px',
              marginBottom: '48px'
            }}
            className="pillars-bento-grid"
          >
            {pillars.map((pillar, idx) => {
              const PillarIcon = pillar.icon;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={pillar.id}
                  className="bento-card"
                  style={{
                    gridColumn: 'span 6',
                    background: 'linear-gradient(145deg, #191a21 0%, #131418 100%)',
                    border: '1px solid var(--border-medium)',
                    padding: '36px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    transition: 'all 0.28s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Subtle top indicator line */}
                  <div 
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '3px',
                      background: isEven ? 'var(--lime-primary)' : 'var(--lavender-light)'
                    }}
                  />

                  <div>
                    {/* Header: Number, Icon, Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '14px',
                            background: isEven ? 'var(--lime-subtle)' : 'var(--lavender-subtle)',
                            border: `1px solid ${isEven ? 'var(--lime-border)' : 'var(--lavender-border)'}`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                        >
                          <PillarIcon size={24} color={isEven ? 'var(--lime-primary)' : 'var(--lavender-light)'} />
                        </div>
                        <div>
                          <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', fontWeight: 700 }}>
                            SERVICE #{pillar.number}
                          </span>
                          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: isEven ? 'var(--lime-primary)' : 'var(--lavender-light)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {pillar.badge}
                          </div>
                        </div>
                      </div>

                      <div 
                        style={{ 
                          background: 'rgba(255, 255, 255, 0.05)', 
                          padding: '6px 14px', 
                          borderRadius: '9999px', 
                          fontSize: '0.8rem', 
                          fontWeight: 700, 
                          color: '#ffffff' 
                        }}
                      >
                        {pillar.stats.metric}
                      </div>
                    </div>

                    {/* Title & Narrative */}
                    <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '12px', lineHeight: 1.3 }}>
                      {pillar.title}
                    </h3>

                    <p style={{ fontSize: '0.93rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '22px' }}>
                      {pillar.description}
                    </p>

                    {/* Features Bullet List */}
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '24px' }}>
                      {pillar.features.map((feat, fIdx) => (
                        <li key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: '#e4e4e7', lineHeight: 1.5 }}>
                          <CheckCircle2 size={16} color={isEven ? 'var(--lime-primary)' : 'var(--lavender-light)'} style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    {/* Tech Badges */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {pillar.techStack.map((tech) => (
                        <span 
                          key={tech} 
                          style={{
                            fontSize: '0.74rem',
                            fontWeight: 600,
                            padding: '4px 10px',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.08)',
                            borderRadius: '6px',
                            color: 'var(--text-secondary)'
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Card Action */}
                    <button 
                      onClick={() => onOpenContact('project', `Website Development: ${pillar.title}`)}
                      className="btn btn-secondary btn-sm"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>Inquire About {pillar.title}</span>
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
          INTERACTIVE ARCHITECTURE WORKFLOW (VISUAL PIPELINE)
         ========================================================================= */}
      <section className="section-spacing" style={{ background: '#090a0d', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">

          <div className="section-header center">
            <div className="section-badge lime">
              <Zap size={14} />
              <span>Unified Technical Pipeline</span>
            </div>
            <h2 className="section-title">
              How Everything Connects <span className="text-gradient-lime">In Production</span>
            </h2>
            <p className="section-subtitle">
              From visitor entry to confirmed closed deal — here is how your responsive website, AI, CRM, Stripe, and WhatsApp sync in real-time.
            </p>
          </div>

          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(5, 1fr)', 
              gap: '16px',
              position: 'relative'
            }}
            className="pipeline-grid"
          >
            {[
              {
                step: "01",
                title: "1. Visitor Arrives",
                desc: "Responsive web loaded via Cloudflare Edge in < 0.8s. GA4 and Meta Pixel track channel attribution.",
                icon: Globe,
                badge: "Frontend"
              },
              {
                step: "02",
                title: "2. AI Interaction",
                desc: "Autonomous assistant engages the user, clarifies scope, and retrieves answers from knowledge base.",
                icon: BrainCircuit,
                badge: "Intelligence"
              },
              {
                step: "03",
                title: "3. Quote / Booking",
                desc: "Smart multi-step form triggers Calendly sync or collects credit card deposit via Stripe securely.",
                icon: CreditCard,
                badge: "Conversion"
              },
              {
                step: "04",
                title: "4. CRM 2-Way Sync",
                desc: "HubSpot / Salesforce auto-creates deal, contact, and company with complete UTM attribution.",
                icon: Database,
                badge: "Pipeline"
              },
              {
                step: "05",
                title: "5. Real-Time Alert",
                desc: "Instant WhatsApp Cloud API & Slack notifications hit sales reps in < 5 seconds for rapid closing.",
                icon: Bell,
                badge: "Closing"
              }
            ].map((pipe, idx) => {
              const PipeIcon = pipe.icon;
              return (
                <div 
                  key={idx}
                  className="bento-card"
                  style={{
                    background: 'linear-gradient(145deg, #16171d 0%, #111215 100%)',
                    border: '1px solid var(--border-subtle)',
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '260px'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <span style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--lime-primary)', fontWeight: 800 }}>
                        STEP {pipe.step}
                      </span>
                      <span style={{ fontSize: '0.7rem', background: 'rgba(255, 255, 255, 0.06)', padding: '3px 8px', borderRadius: '4px', color: 'var(--text-muted)' }}>
                        {pipe.badge}
                      </span>
                    </div>

                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--lime-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                      <PipeIcon size={20} color="var(--lime-primary)" />
                    </div>

                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                      {pipe.title}
                    </h4>

                    <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      {pipe.desc}
                    </p>
                  </div>

                  <div style={{ marginTop: '14px', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: 'var(--lime-primary)' }}>
                    <Check size={13} />
                    <span>Automated Event</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================================
          COMPARISON TABLE: TRADITIONAL WEBSITES VS KUSHA.IO INTELLIGENT WEB
         ========================================================================= */}
      <section className="section-spacing" style={{ background: '#0c0d10' }}>
        <div className="container">

          <div className="section-header center">
            <div className="section-badge lavender">
              <ShieldCheck size={14} />
              <span>Why Choose Kusha.io</span>
            </div>
            <h2 className="section-title">
              Standard Website Agency vs <span className="text-gradient-lavender">Kusha.io Intelligent Platform</span>
            </h2>
            <p className="section-subtitle">
              See why high-growth enterprises and ambitious founders choose our full-stack engineering approach.
            </p>
          </div>

          <div 
            style={{ 
              background: '#14151a', 
              border: '1px solid var(--border-medium)', 
              borderRadius: 'var(--radius-xl)', 
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '650px' }}>
                <thead>
                  <tr style={{ background: '#181920', borderBottom: '1px solid var(--border-subtle)' }}>
                    <th style={{ padding: '20px 24px', fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 700 }}>Capability</th>
                    <th style={{ padding: '20px 24px', fontSize: '0.9rem', color: '#a1a1aa', fontWeight: 700 }}>Typical Web Agency</th>
                    <th style={{ padding: '20px 24px', fontSize: '0.9rem', color: 'var(--lime-primary)', fontWeight: 800, background: 'rgba(212, 255, 79, 0.04)' }}>
                      Kusha.io Web Engineering
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      feat: "Core Architecture",
                      typical: "Slow WordPress / bloated drag-and-drop builder with 40+ plugins",
                      kusha: "Custom React / Next.js / TypeScript with zero bloat and clean component code"
                    },
                    {
                      feat: "Page Speed & Vitals",
                      typical: "3 to 6 second load times, 45-65 Google PageSpeed scores",
                      kusha: "Sub-second load times (<0.8s) with 95+ Core Web Vitals score guarantee"
                    },
                    {
                      feat: "AI Integration",
                      typical: "None, or basic third-party iframe widget",
                      kusha: "Native RAG AI assistant trained on company docs with lead qualification"
                    },
                    {
                      feat: "CRM Syncing",
                      typical: "Basic form submission forwarded to an inbox (leads get forgotten)",
                      kusha: "Bidirectional 2-way sync directly into HubSpot, Salesforce, Zoho or Notion"
                    },
                    {
                      feat: "Booking & Payments",
                      typical: "External link redirects that bleed conversion rates",
                      kusha: "Frictionless embedded Stripe payments, custom quotes & live calendar booking"
                    },
                    {
                      feat: "Team Alerting",
                      typical: "Manual email checks, average response time 12-24 hours",
                      kusha: "Instant WhatsApp Cloud API & Slack alerts to sales reps in < 5 seconds"
                    },
                    {
                      feat: "Legal & Delivery Governance",
                      typical: "Unvetted overseas freelancers or exorbitant Western agency fees",
                      kusha: "Netherlands HQ (KVK 98986708) European contracts + scalable India engineering pod"
                    }
                  ].map((row, idx) => (
                    <tr key={idx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <td style={{ padding: '18px 24px', fontSize: '0.88rem', fontWeight: 700, color: '#ffffff' }}>
                        {row.feat}
                      </td>
                      <td style={{ padding: '18px 24px', fontSize: '0.85rem', color: '#a1a1aa' }}>
                        {row.typical}
                      </td>
                      <td style={{ padding: '18px 24px', fontSize: '0.85rem', color: '#ffffff', fontWeight: 600, background: 'rgba(212, 255, 79, 0.02)' }}>
                        <span style={{ color: 'var(--lime-primary)', marginRight: '6px' }}>✓</span>
                        {row.kusha}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          FAQS SPECIFIC TO WEBSITE DEVELOPMENT
         ========================================================================= */}
      <section className="section-spacing" style={{ background: '#0e0f13' }}>
        <div className="container" style={{ maxWidth: '860px' }}>

          <div className="section-header center">
            <div className="section-badge lime">
              <Sparkles size={14} />
              <span>Got Questions?</span>
            </div>
            <h2 className="section-title">
              Website Development <span className="text-gradient-lime">FAQ</span>
            </h2>
            <p className="section-subtitle">
              Common questions about our tech stack, timelines, AI integration, CRM syncing, and delivery terms.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {webFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
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
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 22px 24px', fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
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
          IN-PAGE CONTACT SECTION & ESTIMATE REQUEST
         ========================================================================= */}
      <section className="section-spacing" style={{ background: '#090a0d', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">

          <div className="section-header center">
            <div className="section-badge lime">
              <Zap size={14} />
              <span>Let's Build It</span>
            </div>
            <h2 className="section-title">
              Ready to Upgrade Your <span className="text-gradient-lime">Website Platform?</span>
            </h2>
            <p className="section-subtitle">
              Send us your project details or book a free discovery session. We will get back to you within 24 business hours with an initial architecture roadmap and estimated scope.
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
            {/* Left Column: Why Partner with Kusha.io */}
            <div 
              className="bento-card" 
              style={{ 
                gridColumn: 'span 5',
                background: 'linear-gradient(145deg, #181920 0%, #131418 100%)',
                border: '1px solid var(--border-medium)',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--lime-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Web Development Services
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginTop: '6px', marginBottom: '18px' }}>
                  Start Your Web Transformation
                </h3>

                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Whether you need a brand-new responsive website, custom AI agents, automated CRM pipeline sync, or Stripe payment integration, our hybrid team is ready.
                </p>

                <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  What You Get with Kusha.io:
                </h4>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {[
                    '100% custom codebase, zero slow bloated templates',
                    'Bi-weekly sprint demos and reviewable GitHub milestones',
                    'Mutual Non-Disclosure Agreement (NDA) standard practice',
                    'Direct access to senior full-stack architects in your timezone',
                    'Full post-launch warranty, ongoing support & maintenance'
                  ].map((r, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} color="var(--lime-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company & Legal Box */}
              <div style={{ background: 'var(--bg-subtle)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Building size={16} color="var(--lavender-light)" />
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>Kusha.io</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Registered in the Netherlands</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--lime-primary)', fontWeight: 700 }}>KVK No. 98986708</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '6px' }}>
                  Direct Solutions Desk: <a href="mailto:info@kusha.io" style={{ color: '#ffffff', textDecoration: 'underline' }}>info@kusha.io</a>
                </div>
              </div>
            </div>

            {/* Right Column: API-connected Contact Form */}
            <div 
              className="bento-card" 
              style={{ 
                gridColumn: 'span 7',
                padding: '36px',
                background: 'linear-gradient(145deg, #181920 0%, #14151a 100%)',
                border: '1px solid var(--border-medium)'
              }}
            >
              <ContactForm 
                initialType="project"
                initialSubject="Website Development & AI Integration"
                isModal={false}
              />
            </div>
          </div>

        </div>
      </section>

      {/* Responsive media query adjustments */}
      <style>{`
        @media (max-width: 1024px) {
          .pillars-bento-grid > div {
            grid-column: span 12 !important;
          }
          .stats-quad-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .pipeline-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .stats-quad-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
          .stat-col {
            border-right: none !important;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
            padding-bottom: 16px;
            margin-bottom: 16px;
          }
          .stat-col:last-child {
            border-bottom: none !important;
            padding-bottom: 0;
            margin-bottom: 0;
          }
        }
      `}</style>
    </div>
  );
}
