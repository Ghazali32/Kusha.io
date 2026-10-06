import React from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Globe2, 
  Award, 
  Layers, 
  HeartHandshake, 
  Sliders, 
  TrendingUp, 
  MessageSquare, 
  Zap
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
            WHY KUSHA.IO & TRUST SECTION
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
              Kusha.io is officially registered as an accountable European business entity in the Netherlands.
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

        {/* 8 Core Why Kusha.io Bento Grid */}
        <div>
          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>Why Ambitious Leaders Choose Kusha.io</h3>
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

      </div>
    </section>
  );
}
export default TrustAndCaseStudyBlueprint;
