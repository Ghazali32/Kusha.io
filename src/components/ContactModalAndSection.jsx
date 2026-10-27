import React from 'react';
import { 
  Building, 
  Mail, 
  CheckCircle2, 
  Sparkles, 
  X,
  ShieldCheck,
  Globe2
} from 'lucide-react';
import { ContactForm } from './ContactForm';

export function ContactModalAndSection({ 
  isOpen, 
  onClose, 
  initialType = 'project', 
  initialSubject = '',
  modalOnly = false,
  sectionOnly = false
}) {
  return (
    <>
      {/* ==========================================================================
          IN-PAGE CONTACT SECTION (ANCHOR #contact)
         ========================================================================== */}
      {!modalOnly && (
        <section id="contact" className="section-spacing" style={{ background: '#0e0f13' }}>
        <div className="container">
          
          <div className="section-header center">
            <div className="section-badge lime">
              <Sparkles size={14} />
              <span>Let's Connect</span>
            </div>
            <h2 className="section-title">
              Let's Build Something <span className="text-gradient-lime">That Works</span>
            </h2>
            <p className="section-subtitle">
              Whether you have a fully scoped project or just an early idea you'd like to talk through, we'd like to hear from you.
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

            {/* Left Column: Why Contact & Entity Info */}
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
                  Direct Collaboration
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginTop: '6px', marginBottom: '18px' }}>
                  Start Your Project or Consultation
                </h3>

                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Tell us about your requirements or schedule a discovery session. We'll get back to you within 24 business hours with an initial architecture overview and discovery plan.
                </p>

                <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Reasons to Partner With Kusha.io:
                </h4>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {[
                    'You have a product idea and need help scoping & building it',
                    'You need to modernize or replace an existing system',
                    'You want to explore AI, automation, or data capabilities',
                    'You need dedicated engineering capacity (1 dev or full pod)',
                    'You want an independent technical architecture review'
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
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Mail size={14} />
                  <a href="mailto:info@kusha.io" style={{ color: '#ffffff', textDecoration: 'underline' }}>info@kusha.io</a>
                </div>
              </div>

            </div>

            {/* Right Column: Contact & Project Scoping Form */}
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
                initialType={initialType} 
                initialSubject={initialSubject} 
                isModal={false} 
              />
            </div>

          </div>

        </div>

        <style>{`
          @media (max-width: 900px) {
            .contact-main-grid {
              grid-template-columns: repeat(1, 1fr) !important;
            }
            .contact-main-grid > div {
              grid-column: span 1 !important;
            }
            .contact-subgrid {
              grid-template-columns: repeat(1, 1fr) !important;
            }
          }
        `}</style>
        </section>
      )}

      {/* ==========================================================================
          GLOBAL POPUP MODAL (TRIGGERED VIA HEADER/HERO/DOCK BUTTONS)
         ========================================================================== */}
      {!sectionOnly && isOpen && (
        <div className="modal-backdrop" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--lime-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sparkles size={18} color="var(--lime-primary)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff' }}>
                    {initialType === 'consultation' ? 'Book a Free Consultation' : 'Start Your Project'}
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Kusha.io • Netherlands KVK 98986708</span>
                </div>
              </div>

              <button 
                onClick={onClose} 
                className="dock-icon-btn" 
                style={{ width: '34px', height: '34px' }}
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            <ContactForm 
              initialType={initialType} 
              initialSubject={initialSubject} 
              isModal={true} 
              onClose={onClose} 
            />
          </div>
        </div>
      )}
    </>
  );
}
