import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  FileCode, 
  Award, 
  Layers, 
  Globe2, 
  HeartHandshake, 
  Sliders, 
  TrendingUp, 
  MessageSquare, 
  Zap,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { websiteData } from '../data/websiteContent';

export function TrustAndCaseStudyBlueprint({ onOpenContact }) {
  const whyIcons = {
    Globe: Globe2,
    Layers: Layers,
    Sliders: Sliders,
    TrendingUp: TrendingUp,
    MessageSquare: MessageSquare,
    Shield: ShieldCheck,
    Zap: Zap,
    HeartHandshake: HeartHandshake
  };

  return (
    <section className="section-spacing" style={{ background: '#0c0d10' }}>
      <div className="container">
        
        {/* ==========================================================================
            WHY KUSHA & TRUST SECTION
           ========================================================================== */}
        <div className="section-header">
          <div className="section-badge lime">
            <ShieldCheck size={14} />
            <span>Trust & Corporate Integrity</span>
          </div>
          <h2 className="section-title">
            Built on Trust, Proven by <span className="text-gradient-lime">Transparency</span>
          </h2>
          <p className="section-subtitle">
            As a growing international technology company, we believe trust is earned through radical transparency and engineering rigor, not inflated marketing claims.
          </p>
        </div>

        {/* Trust Badges Bento Row */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '16px',
            marginBottom: '48px'
          }}
        >
          <div className="bento-card" style={{ padding: '24px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--lime-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <ShieldCheck size={20} color="var(--lime-primary)" />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>Registered Legal Entity</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              Kusha.io is officially registered in the Netherlands under KVK No. 98986708.
            </p>
          </div>

          <div className="bento-card" style={{ padding: '24px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--lavender-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Lock size={20} color="var(--lavender-light)" />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>Mutual NDAs Standard</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              We gladly sign mutual NDAs prior to any technical disclosure or discovery.
            </p>
          </div>

          <div className="bento-card" style={{ padding: '24px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Globe2 size={20} color="#ffffff" />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>Dual-Continent Scale</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              European business governance backed by India engineering depth.
            </p>
          </div>

          <div className="bento-card" style={{ padding: '24px' }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(74, 222, 128, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
              <Award size={20} color="var(--green-positive)" />
            </div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>Zero-Fabrication Policy</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              No artificial logos or fabricated testimonials. What you see is genuine.
            </p>
          </div>
        </div>

        {/* 8 Core Why Kusha Bento Grid */}
        <div style={{ marginBottom: '80px' }}>
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>Why Ambitious Leaders Choose Kusha</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '18px' }}>
            {websiteData.whyKusha.map((item, idx) => {
              const Icon = whyIcons[item.icon] || ShieldCheck;
              return (
                <div key={idx} className="bento-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                      <Icon size={18} color="var(--lime-primary)" />
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==========================================================================
            PORTFOLIO & CASE STUDY BLUEPRINTS (SECTION 9 AS PER STRATEGY DOCUMENT)
           ========================================================================== */}
        <div className="section-header">
          <div className="section-badge lavender">
            <FileCode size={14} />
            <span>Case Study & Architecture Blueprints</span>
          </div>
          <h2 className="section-title">
            Engineering Rigor: <span className="text-gradient-lavender">How We Solve Complex Problems</span>
          </h2>
          <p className="section-subtitle">
            We follow a standardized, measurable engineering blueprint across every engagement: Business Context → Technical Challenge → Solution Architecture → Measurable Impact.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '20px' }}>
          {websiteData.caseStudyBlueprints.map((cs, i) => (
            <div 
              key={i} 
              className="bento-card" 
              style={{ 
                background: 'linear-gradient(145deg, #181920 0%, #131418 100%)',
                border: '1px solid rgba(139, 123, 247, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--lavender-light)', textTransform: 'uppercase' }}>
                    BLUEPRINT 0{i + 1}
                  </span>
                  <span style={{ background: 'rgba(255, 255, 255, 0.05)', fontSize: '0.72rem', color: 'var(--text-muted)', padding: '2px 8px', borderRadius: 'var(--radius-full)' }}>
                    NDA Standard
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '14px' }}>
                  {cs.domain}
                </h3>

                <div style={{ background: 'var(--bg-subtle)', padding: '12px 16px', borderRadius: 'var(--radius-md)', marginBottom: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 700 }}>THE CHALLENGE:</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', marginTop: '2px' }}>{cs.challenge}</div>
                </div>

                <div style={{ background: 'var(--bg-subtle)', padding: '12px 16px', borderRadius: 'var(--radius-md)', marginBottom: '12px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--lavender-light)', fontWeight: 700 }}>ENGINEERING SOLUTION:</div>
                  <div style={{ fontSize: '0.88rem', color: '#ffffff', marginTop: '2px' }}>{cs.solution}</div>
                </div>

                <div style={{ background: 'rgba(212, 255, 79, 0.06)', padding: '12px 16px', borderRadius: 'var(--radius-md)', marginBottom: '16px', border: '1px solid var(--lime-border)' }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--lime-primary)', fontWeight: 700 }}>OUTCOMES & IMPACT:</div>
                  <div style={{ fontSize: '0.88rem', color: '#ffffff', fontWeight: 600, marginTop: '2px' }}>{cs.outcomes}</div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {cs.stack.map(st => (
                    <span key={st} style={{ fontSize: '0.72rem', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-secondary)', padding: '2px 8px', borderRadius: '4px' }}>
                      {st}
                    </span>
                  ))}
                </div>

                <button 
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                  onClick={() => onOpenContact('project', `Architecture Blueprint: ${cs.domain}`)}
                >
                  <span>Build Similar Solution</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
