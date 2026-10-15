import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowLeft, 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  Building, 
  Mail, 
  ArrowRight,
  FileCheck,
  Calendar,
  Globe2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { SERVICE_OF_INTEREST_OPTIONS } from '../services/contactApi';

export function ThankYouPage() {
  const location = useLocation();
  const state = location.state || {};

  const isProject = state.formType === 'project' || state.formType === true;
  const isConsultation = state.formType === 'consultation' || state.formType === false;

  const selectedServiceObj = SERVICE_OF_INTEREST_OPTIONS.find(o => o.value === state.service);

  useEffect(() => {
    // Fire celebratory confetti on page mount
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.55 },
        colors: ['#d4ff4f', '#8b7bf7', '#ffffff', '#4ade80']
      });
      // Second burst after 400ms for extra delight
      const timer = setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 400);

      return () => clearTimeout(timer);
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-app)', color: 'var(--text-primary)', paddingTop: '120px', paddingBottom: '90px' }}>
      <div className="container" style={{ maxWidth: '820px', position: 'relative' }}>
        
        {/* Glow ambient background */}
        <div 
          style={{
            position: 'absolute',
            top: '-60px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '350px',
            background: 'radial-gradient(ellipse at center, rgba(212, 255, 79, 0.15) 0%, rgba(139, 123, 247, 0.08) 50%, transparent 70%)',
            filter: 'blur(60px)',
            pointerEvents: 'none',
            zIndex: 0
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          
          {/* Main Success Checkmark Avatar */}
          <div 
            style={{ 
              width: '84px', 
              height: '84px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, rgba(212, 255, 79, 0.2) 0%, rgba(212, 255, 79, 0.05) 100%)', 
              border: '2px solid var(--lime-primary)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 24px auto',
              boxShadow: '0 0 35px var(--lime-glow)',
              animation: 'scaleUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            <CheckCircle2 size={46} color="var(--lime-primary)" />
          </div>

          {/* Section Badge */}
          <div className="section-badge lime" style={{ marginBottom: '16px' }}>
            <Sparkles size={14} />
            <span>
              {isConsultation ? 'Consultation Request Confirmed' : 'Project Request Confirmed'} • 24h Response SLA
            </span>
          </div>

          {/* Title */}
          <h1 
            style={{ 
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', 
              fontWeight: 900, 
              lineHeight: 1.15, 
              letterSpacing: '-0.03em', 
              marginBottom: '16px' 
            }}
          >
            Thank You! Your Request Has Been <span className="text-gradient-lime">Received</span>
          </h1>

          {/* Subtitle */}
          <p 
            style={{ 
              fontSize: 'clamp(1rem, 1.5vw, 1.18rem)', 
              color: 'var(--text-secondary)', 
              lineHeight: 1.65, 
              maxWidth: '680px', 
              margin: '0 auto 36px auto' 
            }}
          >
            {state.fullName ? (
              <>Thank you, <strong>{state.fullName}</strong>. </>
            ) : null}
            Our European solutions desk and lead technical architects are reviewing your details. 
            {state.email ? (
              <> A confirmation email has been dispatched to <strong>{state.email}</strong>.</>
            ) : (
              <> We will get back to you within 24 business hours.</>
            )}
          </p>

          {/* Submission Details Card */}
          <div 
            className="bento-card"
            style={{
              background: 'linear-gradient(145deg, #181920 0%, #121316 100%)',
              border: '1px solid var(--border-medium)',
              padding: '28px 32px',
              textAlign: 'left',
              marginBottom: '32px',
              boxShadow: 'var(--shadow-md)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', paddingBottom: '14px', borderBottom: '1px solid var(--border-subtle)' }}>
              <span style={{ fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--lime-primary)' }}>
                Submission Summary
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                <Clock size={12} />
                <span>Queued For Review</span>
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '18px' }} className="thankyou-details-grid">
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '3px' }}>Form Category</span>
                <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>
                  {isConsultation ? 'Book Free Technical Consultation' : 'Start Your Project Scoping'}
                </strong>
              </div>

              {state.fullName && (
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '3px' }}>Contact Name</span>
                  <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>{state.fullName}</strong>
                </div>
              )}

              {state.email && (
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '3px' }}>Business Email</span>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--lime-primary)' }}>{state.email}</strong>
                </div>
              )}

              {state.country && (
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '3px' }}>Location</span>
                  <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>{state.country}</strong>
                </div>
              )}

              {state.company && (
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '3px' }}>Company</span>
                  <strong style={{ fontSize: '0.95rem', color: '#ffffff' }}>{state.company}</strong>
                </div>
              )}

              {isProject && selectedServiceObj && (
                <div>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '3px' }}>Service of Interest</span>
                  <strong style={{ fontSize: '0.95rem', color: 'var(--lime-primary)' }}>{selectedServiceObj.label}</strong>
                </div>
              )}

              {isProject && (
                <div style={{ gridColumn: 'span 2' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '3px' }}>Confidentiality / NDA</span>
                  <strong style={{ fontSize: '0.88rem', color: state.requestNda ? 'var(--lime-primary)' : 'var(--text-secondary)' }}>
                    {state.requestNda 
                      ? '✓ Mutual NDA Requested (Draft will be shared before discovery call)' 
                      : 'Standard European GDPR Confidentiality Policy'}
                  </strong>
                </div>
              )}
            </div>
          </div>

          {/* Next Steps 3-Stage Progress Timeline */}
          <div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '14px', 
              marginBottom: '38px',
              textAlign: 'left'
            }}
            className="thankyou-steps-grid"
          >
            {[
              {
                step: "01",
                title: "Inquiry Logged",
                desc: "Safely received and verified by our backend systems.",
                active: true
              },
              {
                step: "02",
                title: "Architect Review",
                desc: "Lead engineers analyze your tech stack requirements.",
                active: false
              },
              {
                step: "03",
                title: "Discovery Call & Plan",
                desc: "We reach out with initial architecture & timeline proposals.",
                active: false
              }
            ].map((st, idx) => (
              <div 
                key={idx}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: st.active ? '1px solid var(--lime-border)' : '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px 18px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: st.active ? 'var(--lime-primary)' : 'var(--text-muted)', fontWeight: 800 }}>
                    STAGE {st.step}
                  </span>
                  {st.active && <CheckCircle2 size={14} color="var(--lime-primary)" />}
                </div>
                <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                  {st.title}
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Reassurance Entity Badges */}
          <div 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: '24px', 
              flexWrap: 'wrap',
              marginBottom: '40px',
              fontSize: '0.82rem',
              color: 'var(--text-muted)'
            }}
          >
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Building size={15} color="var(--lavender-light)" />
              Netherlands KVK No. 98986708
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={15} color="var(--lime-primary)" />
              GDPR Compliant Data Governance
            </span>
            <span>•</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Mail size={15} />
              info@kusha.io
            </span>
          </div>

          {/* Action Buttons: Prominent Back to Home + Secondary options */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <Link 
              to="/" 
              className="btn btn-lime btn-lg"
              style={{ 
                boxShadow: '0 8px 28px rgba(212, 255, 79, 0.3)',
                padding: '14px 28px',
                fontSize: '1rem',
                textDecoration: 'none'
              }}
            >
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>

            <Link 
              to="/services/website-development"
              className="btn btn-secondary btn-lg"
              style={{ textDecoration: 'none' }}
            >
              <span>Explore Website Development Services</span>
              <ArrowRight size={16} />
            </Link>

            <a 
              href="/#services"
              className="btn btn-ghost"
              style={{ border: '1px solid rgba(255, 255, 255, 0.1)', textDecoration: 'none' }}
            >
              <span>View All 10 Capabilities</span>
            </a>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .thankyou-details-grid {
            grid-template-columns: 1fr !important;
          }
          .thankyou-details-grid > div {
            grid-column: span 1 !important;
          }
          .thankyou-steps-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
