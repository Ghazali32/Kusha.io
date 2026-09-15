import React, { useState } from 'react';
import { ShieldCheck, Mail, Globe2, Building2, ArrowUpRight, X } from 'lucide-react';
import { websiteData } from '../data/websiteContent';

export function Footer({ onOpenContact }) {
  const [legalModalContent, setLegalModalContent] = useState(null);

  const openLegalModal = (title, text) => {
    setLegalModalContent({ title, text });
  };

  const legalDocs = {
    privacy: {
      title: "Privacy Policy (GDPR Aligned)",
      content: "Kusha.io is registered in the Netherlands (KVK No. 98986708) and adheres to strict European Union General Data Protection Regulation (GDPR) standards. We process client information solely for project scoping, technical delivery, and communication. We never sell, rent, or trade client personal or proprietary business data."
    },
    terms: {
      title: "Terms & Conditions",
      content: "All technical consulting, custom software development, cloud, and engineering services provided by Kusha.io are governed by explicit Master Services Agreements (MSA), Statements of Work (SOW), and mutual Non-Disclosure Agreements (NDA) executed under Netherlands law."
    },
    cookies: {
      title: "Cookie Policy",
      content: "This website uses essential session and performance cookies to optimize site navigation, responsiveness, and user experience. No invasive marketing or cross-site tracking scripts are executed."
    },
    gdpr: {
      title: "GDPR Compliance Statement",
      content: "As a Dutch-registered legal entity, Kusha.io maintains secure-by-design data handling, end-to-end encryption in transit and at rest, and strict access controls across all European and global engineering operations."
    }
  };

  return (
    <footer style={{ background: '#090a0d', borderTop: '1px solid var(--border-subtle)', paddingTop: '80px', paddingBottom: '120px' }}>
      <div className="container">
        
        {/* Top Footer Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '36px',
            marginBottom: '60px'
          }}
          className="footer-grid"
        >

          {/* Col 1: Brand & Entity (4 cols) */}
          <div style={{ gridColumn: 'span 4' }}>
            <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: '#18191e',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 100 100" fill="none">
                  <path d="M25 25 L42 25 L75 75 L58 75 Z" fill="#d4ff4f" />
                  <path d="M58 25 L75 25 L42 75 L25 75 Z" fill="#8b7bf7" />
                  <circle cx="75" cy="30" r="10" fill="#d4ff4f" />
                </svg>
              </div>
              <span style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)' }}>
                Kusha<span style={{ color: 'var(--lime-primary)' }}>.io</span>
              </span>
            </a>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
              Global technology company registered in the Netherlands helping startups, scale-ups, and enterprises design, build, and scale software that works.
            </p>

            <div style={{ background: 'var(--bg-card)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', marginBottom: '16px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#ffffff' }}>Kusha.io (Netherlands)</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--lime-primary)', fontWeight: 700 }}>KVK No. 98986708</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>European Business Headquarters</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem' }}>
              <Mail size={16} color="var(--lime-primary)" />
              <a href="mailto:info@kusha.io" style={{ color: '#ffffff', textDecoration: 'underline' }}>
                info@kusha.io
              </a>
            </div>
          </div>

          {/* Col 2: Services (3 cols) */}
          <div style={{ gridColumn: 'span 3' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '18px' }}>
              Core Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              {websiteData.services.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <a href="#services" style={{ color: 'var(--text-secondary)', transition: 'color 0.18s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#ffffff'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#services" style={{ color: 'var(--lime-primary)', fontWeight: 600 }}>
                  View All 10 Services →
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Delivery & Engagement (3 cols) */}
          <div style={{ gridColumn: 'span 3' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '18px' }}>
              Delivery & Process
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li><a href="#global-model" style={{ color: 'var(--text-secondary)' }}>Global Delivery Model</a></li>
              <li><a href="#global-model" style={{ color: 'var(--text-secondary)' }}>Netherlands Entity & India Hub</a></li>
              <li><a href="#how-we-work" style={{ color: 'var(--text-secondary)' }}>9-Step Delivery Roadmap</a></li>
              <li><a href="#engagement" style={{ color: 'var(--text-secondary)' }}>6 Engagement Models</a></li>
              <li><a href="#tech-stack" style={{ color: 'var(--text-secondary)' }}>Technology Expertise</a></li>
              <li><a href="#industries" style={{ color: 'var(--text-secondary)' }}>14+ Target Industries</a></li>
            </ul>
          </div>

          {/* Col 4: Legal & Target Markets (2 cols) */}
          <div style={{ gridColumn: 'span 2' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '18px' }}>
              Governance & Markets
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li><button onClick={() => openLegalModal(legalDocs.privacy.title, legalDocs.privacy.content)} style={{ color: 'var(--text-secondary)' }}>Privacy Policy</button></li>
              <li><button onClick={() => openLegalModal(legalDocs.terms.title, legalDocs.terms.content)} style={{ color: 'var(--text-secondary)' }}>Terms & Conditions</button></li>
              <li><button onClick={() => openLegalModal(legalDocs.gdpr.title, legalDocs.gdpr.content)} style={{ color: 'var(--text-secondary)' }}>GDPR Compliance</button></li>
              <li><button onClick={() => openLegalModal(legalDocs.cookies.title, legalDocs.cookies.content)} style={{ color: 'var(--text-secondary)' }}>Cookie Policy</button></li>
              <li><a href="#faq" style={{ color: 'var(--text-secondary)' }}>FAQ</a></li>
            </ul>
          </div>

        </div>

        {/* Target Markets Pills */}
        <div style={{ padding: '20px 0', borderTop: '1px solid rgba(255, 255, 255, 0.06)', borderBottom: '1px solid rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            <Globe2 size={16} color="var(--lavender-light)" />
            <span>Serving Global Markets:</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {websiteData.company.targetMarkets.map((m) => (
              <span key={m} style={{ fontSize: '0.76rem', background: 'rgba(255, 255, 255, 0.04)', color: 'var(--text-secondary)', padding: '3px 10px', borderRadius: 'var(--radius-full)' }}>
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Imprint */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', paddingTop: '28px', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
          <div>
            © {new Date().getFullYear()} Kusha.io. All rights reserved. Registered in the Netherlands (KVK No. 98986708).
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>European Business Operations</span>
            <span>•</span>
            <span>India Engineering Hub</span>
          </div>
        </div>

      </div>

      {/* Legal Content Modal */}
      {legalModalContent && (
        <div className="modal-backdrop" onClick={() => setLegalModalContent(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '560px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#ffffff' }}>{legalModalContent.title}</h3>
              <button onClick={() => setLegalModalContent(null)} className="dock-icon-btn" style={{ width: '32px', height: '32px' }}>
                <X size={16} />
              </button>
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '0.94rem' }}>
              {legalModalContent.text}
            </p>
            <div style={{ marginTop: '24px', textAlign: 'right' }}>
              <button className="btn btn-lime btn-sm" onClick={() => setLegalModalContent(null)}>Understood</button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
          .footer-grid > div {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </footer>
  );
}
