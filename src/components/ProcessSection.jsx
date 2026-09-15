import React, { useState } from 'react';
import { 
  GitMerge, 
  Search, 
  FileText, 
  Compass, 
  Layers, 
  Code, 
  CheckCircle, 
  Rocket, 
  LifeBuoy, 
  TrendingUp,
  ArrowRight
} from 'lucide-react';
import { websiteData } from '../data/websiteContent';

export function ProcessSection({ onOpenContact }) {
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = [
    Search,
    FileText,
    Compass,
    Layers,
    Code,
    CheckCircle,
    Rocket,
    LifeBuoy,
    TrendingUp
  ];

  return (
    <section id="how-we-work" className="section-spacing" style={{ background: '#0c0d10' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge lavender">
            <GitMerge size={14} />
            <span>Structured 9-Step Delivery Framework</span>
          </div>
          <h2 className="section-title">
            How We Work: From Discovery to <span className="text-gradient-lavender">Continuous Scale</span>
          </h2>
          <p className="section-subtitle">
            We follow a structured, transparent process designed to reduce technical risk and keep clients fully informed at every stage of the lifecycle.
          </p>
        </div>

        {/* 9-Step Interactive Horizontal / Vertical Progress Bar */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(110px, 1fr))',
            gap: '8px',
            marginBottom: '32px'
          }}
          className="process-steps-nav"
        >
          {websiteData.howWeWork.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '12px 8px',
                  borderRadius: 'var(--radius-md)',
                  background: isActive ? 'var(--lavender-primary)' : 'var(--bg-card)',
                  color: isActive ? '#ffffff' : 'var(--text-muted)',
                  border: isActive ? '1px solid var(--lavender-light)' : '1px solid var(--border-subtle)',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', fontWeight: 700, marginBottom: '4px' }}>
                  STEP {step.step}
                </span>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: isActive ? '#ffffff' : 'var(--text-secondary)', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', width: '100%' }}>
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Spotlight Card */}
        {(() => {
          const step = websiteData.howWeWork[activeStep];
          const Icon = stepIcons[activeStep] || Layers;
          return (
            <div 
              className="bento-card process-spotlight-card"
              style={{
                background: 'linear-gradient(145deg, #191a22 0%, #14151a 100%)',
                border: '1px solid rgba(139, 123, 247, 0.25)',
                padding: '40px',
                display: 'grid',
                gridTemplateColumns: 'repeat(12, 1fr)',
                gap: '28px',
                alignItems: 'center',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div style={{ gridColumn: 'span 8' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div 
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'var(--lavender-subtle)',
                      border: '1px solid var(--lavender-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Icon size={22} color="var(--lavender-light)" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--lavender-light)', fontWeight: 700 }}>
                      PHASE 0{activeStep + 1} OF 09
                    </span>
                    <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff' }}>
                      {step.title}
                    </h3>
                  </div>
                </div>

                <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  {step.desc}
                </p>

                <div 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'var(--bg-subtle)',
                    padding: '10px 18px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border-subtle)'
                  }}
                >
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase' }}>KEY DELIVERABLE:</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--lime-primary)', fontWeight: 700 }}>{step.deliverable}</span>
                </div>
              </div>

              <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '12px', justifyContent: 'center' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '20px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '8px' }}>COLLABORATION MODEL</div>
                  <div style={{ fontSize: '0.9rem', color: '#ffffff', lineHeight: 1.5 }}>
                    Sprint demos, continuous PR reviews, transparent Jira/Slack channels & bi-weekly milestone approvals.
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button 
                    className="btn btn-secondary"
                    style={{ flex: 1 }}
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 8))}
                  >
                    Previous Step
                  </button>
                  <button 
                    className="btn btn-lime"
                    style={{ flex: 1 }}
                    onClick={() => setActiveStep((prev) => (prev < 8 ? prev + 1 : 0))}
                  >
                    <span>Next Step</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          );
        })()}

        {/* 9-Step Grid Overview */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px',
            marginTop: '28px'
          }}
        >
          {websiteData.howWeWork.map((step, idx) => (
            <div
              key={step.step}
              onClick={() => setActiveStep(idx)}
              className="bento-card"
              style={{
                padding: '20px',
                cursor: 'pointer',
                background: activeStep === idx ? 'rgba(139, 123, 247, 0.08)' : 'var(--bg-card)',
                borderColor: activeStep === idx ? 'var(--lavender-border)' : 'var(--border-subtle)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--lime-primary)', fontWeight: 700 }}>
                  STEP {step.step}
                </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{step.deliverable}</span>
              </div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>{step.title}</h4>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{step.desc}</p>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .process-spotlight-card {
            grid-template-columns: repeat(1, 1fr) !important;
          }
          .process-spotlight-card > div {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
