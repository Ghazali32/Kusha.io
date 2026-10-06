import React from 'react';
import { 
  Globe, 
  ShieldCheck, 
  Users, 
  Award, 
  Sparkles, 
  Eye, 
  Building,
  CheckCircle2
} from 'lucide-react';
import { websiteData } from '../data/websiteContent';

export function GlobalDeliverySection({ onOpenContact }) {
  const valueIcons = {
    Transparency: Eye,
    Quality: ShieldCheck,
    Accountability: Award,
    Partnership: Users,
    "Practical Innovation": Sparkles
  };

  return (
    <section id="global-model" className="section-spacing" style={{ background: '#0e0f13' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge lavender">
            <Globe size={14} />
            <span>Global Delivery Model & Presence</span>
          </div>
          <h2 className="section-title">
            One Global Structure. Built to Serve You, <span className="text-gradient-lavender">Wherever You Are.</span>
          </h2>
          <p className="section-subtitle">
            Kusha.io brings together European business accountability with deep, scalable engineering expertise in India.
          </p>
        </div>

        {/* TOP BENTO DUO: NETHERLANDS HQ vs INDIA ENGINEERING LAB */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '24px', marginBottom: '36px' }} className="delivery-model-grid">
          
          {/* Card 1: Netherlands Entity */}
          <div 
            className="bento-card" 
            style={{ 
              gridColumn: 'span 6',
              background: 'linear-gradient(145deg, #191a21 0%, #15161b 100%)',
              border: '1px solid rgba(139, 123, 247, 0.25)',
              boxShadow: '0 16px 36px rgba(0,0,0,0.4)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '32px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--lavender-subtle)', border: '1px solid var(--lavender-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Building size={20} color="var(--lavender-light)" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--lavender-light)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>European Business Entity</span>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>Netherlands HQ</h3>
                  </div>
                </div>
                <div 
                  style={{
                    background: 'rgba(139, 123, 247, 0.15)',
                    color: 'var(--lavender-light)',
                    border: '1px solid var(--lavender-border)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}
                >
                  KVK No. 98986708
                </div>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                Kusha.io is officially registered in the Netherlands under KVK No. 98986708. This registration underpins our contracts, invoicing, and GDPR-compliant business operations for international clients globally.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: '#ffffff' }}>
                  <CheckCircle2 size={16} color="var(--lime-primary)" />
                  <span>Direct European legal accountability & contract governance</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: '#ffffff' }}>
                  <CheckCircle2 size={16} color="var(--lime-primary)" />
                  <span>EU standard invoicing, tax compliance, and mutual NDAs</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: '#ffffff' }}>
                  <CheckCircle2 size={16} color="var(--lime-primary)" />
                  <span>Dedicated European point of contact and client strategy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: India Global Engineering Hub */}
          <div 
            className="bento-card" 
            style={{ 
              gridColumn: 'span 6',
              background: 'linear-gradient(145deg, #191a21 0%, #15161b 100%)',
              border: '1px solid rgba(212, 255, 79, 0.25)',
              boxShadow: '0 16px 36px rgba(0,0,0,0.4)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '32px'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--lime-subtle)', border: '1px solid var(--lime-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Users size={20} color="var(--lime-primary)" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--lime-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Engineering Center</span>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>India Engineering Hub</h3>
                  </div>
                </div>
                <div 
                  style={{
                    background: 'var(--lime-subtle)',
                    color: 'var(--lime-primary)',
                    border: '1px solid var(--lime-border)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.8rem',
                    fontWeight: 700
                  }}
                >
                  Dedicated Engineering Teams
                </div>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                Our engineering team is based in India, giving clients access to deep, specialized software engineering talent across web, mobile, cloud, data, and AI disciplines at sustainable cost without compromising quality.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: '#ffffff' }}>
                  <CheckCircle2 size={16} color="var(--lime-primary)" />
                  <span>Vetted senior developers, QA engineers, and solution architects</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: '#ffffff' }}>
                  <CheckCircle2 size={16} color="var(--lime-primary)" />
                  <span>Integrated extension of your team with daily standups & code reviews</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.875rem', color: '#ffffff' }}>
                  <CheckCircle2 size={16} color="var(--lime-primary)" />
                  <span>Cost-efficient engineering power built for rapid project scaling</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* CORE VALUES BENTO ROW */}
        <div style={{ marginTop: '36px' }}>
          <div style={{ marginBottom: '20px' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)' }}>
              Our Guiding Principles
            </span>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff' }}>Built on 5 Core Values</h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {websiteData.company.values.map((v) => {
              const IconComponent = valueIcons[v.title] || ShieldCheck;
              return (
                <div 
                  key={v.title}
                  className="bento-card"
                  style={{
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                      <IconComponent size={20} color="var(--lime-primary)" />
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>{v.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .delivery-model-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
          .delivery-model-grid > div {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
export default GlobalDeliverySection;
