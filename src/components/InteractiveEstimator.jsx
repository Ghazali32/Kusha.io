import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  ArrowUpRight, 
  CheckCircle2, 
  Layers, 
  Clock, 
  Users, 
  ShieldCheck, 
  Building2,
  Cpu
} from 'lucide-react';

export function InteractiveEstimator({ onOpenContact }) {
  const [serviceType, setServiceType] = useState('Custom Software / MVP');
  const [projectStage, setProjectStage] = useState('Early Idea to MVP');
  const [timeline, setTimeline] = useState('2-4 Months');
  const [teamCapacity, setTeamCapacity] = useState('Cross-Functional Pod (3-4 Devs)');

  // Dynamic recommendation logic
  const getRecommendation = () => {
    if (projectStage === 'Early Idea to MVP') {
      return {
        model: 'Fixed-Price Project or Agile MVP Sprint',
        badge: 'Predictable Budget',
        sprints: '4 to 6 Structured Sprints',
        architecture: 'Modular Serverless / Cloud-Native React & Node.js/Python Stack',
        benefits: 'Fixed milestone checkpoints, rapid validation, investor-ready prototype'
      };
    } else if (teamCapacity.includes('Dedicated')) {
      return {
        model: 'Dedicated Engineering Pod (India Hub)',
        badge: 'Elastic Scale',
        sprints: 'Continuous 2-Week Sprints',
        architecture: 'Microservices, CI/CD, Containerized with Kubernetes & Terraform',
        benefits: 'Direct daily integration with your team, high sprint velocity, zero hiring lag'
      };
    } else if (projectStage === 'Legacy Modernization') {
      return {
        model: 'Time & Material / Phased Modernization',
        badge: 'Zero Downtime',
        sprints: 'Multi-Phase Strangler Architecture',
        architecture: 'API Gateways, Microservices, Event-Driven Kafka / RabbitMQ',
        benefits: 'Continuous migration without service disruption, lower long-term technical debt'
      };
    } else {
      return {
        model: 'Long-Term Strategic Technology Partnership',
        badge: 'European Accountability + India Scale',
        sprints: 'Continuous Delivery Roadmap',
        architecture: 'Enterprise-grade multi-tenant architecture with high-availability cloud SLA',
        benefits: 'Netherlands contract governance (KVK 98986708), dedicated pods, proactive optimization'
      };
    }
  };

  const rec = getRecommendation();

  return (
    <section id="estimator" className="section-spacing" style={{ background: '#0e0f13' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge lime">
            <Calculator size={14} />
            <span>Interactive Project Scoper</span>
          </div>
          <h2 className="section-title">
            Configure Your <span className="text-gradient-lime">Project Architecture</span>
          </h2>
          <p className="section-subtitle">
            Select your technology goals, stage, and capacity needs to explore the optimal engagement model, sprint blueprint, and recommended delivery plan.
          </p>
        </div>

        {/* Bento Grid: Inputs (Left 7 cols) & Recommendation Output (Right 5 cols) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            alignItems: 'stretch'
          }}
          className="estimator-grid"
        >

          {/* LEFT: INTERACTIVE CONTROLS */}
          <div 
            className="bento-card" 
            style={{ 
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}
          >
            {/* Step 1: Service Focus */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                1. Select Primary Service Focus
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '8px' }}>
                {[
                  'Custom Software / MVP',
                  'Web & Mobile App',
                  'Cloud & DevOps Pipeline',
                  'AI & Generative ML',
                  'Data & Analytics Lake',
                  'Dedicated Dev Pod'
                ].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setServiceType(s)}
                    style={{
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      textAlign: 'left',
                      background: serviceType === s ? 'var(--lime-primary)' : 'var(--bg-subtle)',
                      color: serviceType === s ? 'var(--lime-text)' : 'var(--text-secondary)',
                      border: serviceType === s ? '1px solid var(--lime-primary)' : '1px solid var(--border-subtle)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Project Stage */}
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                2. Project Maturity Stage
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '8px' }}>
                {[
                  'Early Idea to MVP',
                  'Scaling Existing Product',
                  'Legacy Modernization',
                  'Enterprise System Build'
                ].map((stage) => (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => setProjectStage(stage)}
                    style={{
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-md)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      textAlign: 'left',
                      background: projectStage === stage ? 'var(--lavender-primary)' : 'var(--bg-subtle)',
                      color: projectStage === stage ? '#ffffff' : 'var(--text-secondary)',
                      border: projectStage === stage ? '1px solid var(--lavender-light)' : '1px solid var(--border-subtle)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Target Timeline & Team Pod */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="estimator-subgrid">
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                  3. Expected Timeline
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {['4 to 8 Weeks (Rapid MVP)', '2-4 Months (Core Release)', '6+ Months (Enterprise)'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTimeline(t)}
                      style={{
                        padding: '8px 12px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        textAlign: 'left',
                        background: timeline === t ? 'rgba(255,255,255,0.1)' : 'var(--bg-subtle)',
                        color: timeline === t ? '#ffffff' : 'var(--text-secondary)',
                        border: timeline === t ? '1px solid rgba(255,255,255,0.3)' : '1px solid var(--border-subtle)'
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                  4. Team Structure
                </label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {['1-2 Dedicated Specialists', 'Cross-Functional Pod (3-4 Devs)', 'Full Autonomous Squad (6+)'].map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setTeamCapacity(c)}
                      style={{
                        padding: '8px 12px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        textAlign: 'left',
                        background: teamCapacity === c ? 'rgba(212,255,79,0.15)' : 'var(--bg-subtle)',
                        color: teamCapacity === c ? 'var(--lime-primary)' : 'var(--text-secondary)',
                        border: teamCapacity === c ? '1px solid var(--lime-border)' : '1px solid var(--border-subtle)'
                      }}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>

          </div>


          {/* RIGHT: RECOMMENDED BLUEPRINT CARD */}
          <div 
            className="bento-card" 
            style={{ 
              gridColumn: 'span 5',
              background: 'linear-gradient(145deg, #1b1c23 0%, #16171d 100%)',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--lime-primary)', letterSpacing: '0.05em' }}>
                  Architecture Recommendation
                </span>
                <span style={{ background: 'var(--lime-subtle)', color: 'var(--lime-primary)', border: '1px solid var(--lime-border)', fontSize: '0.725rem', fontWeight: 700, padding: '3px 10px', borderRadius: 'var(--radius-full)' }}>
                  {rec.badge}
                </span>
              </div>

              <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#ffffff', marginBottom: '18px' }}>
                {rec.model}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                
                <div style={{ background: 'var(--bg-subtle)', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '2px' }}>ESTIMATED CADENCE</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Clock size={16} color="var(--lime-primary)" />
                    <span>{rec.sprints} ({timeline})</span>
                  </div>
                </div>

                <div style={{ background: 'var(--bg-subtle)', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '2px' }}>RECOMMENDED STACK & SPECS</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '4px' }}>
                    <Cpu size={16} color="var(--lavender-light)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{rec.architecture}</span>
                  </div>
                </div>

                <div style={{ background: 'var(--bg-subtle)', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '2px' }}>KEY OUTCOMES</div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '4px' }}>
                    <CheckCircle2 size={16} color="var(--lime-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{rec.benefits}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* CTA */}
            <div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '12px', textAlign: 'center' }}>
                Direct European Contracting (KVK 98986708) • NDAs Guaranteed
              </div>
              <button
                type="button"
                className="btn btn-lime"
                style={{ width: '100%', padding: '14px 20px' }}
                onClick={() => onOpenContact('project', `${serviceType} (${projectStage})`)}
              >
                <span>Book Scoping Session For This Plan</span>
                <ArrowUpRight size={18} />
              </button>
            </div>

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 990px) {
          .estimator-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
          .estimator-grid > div {
            grid-column: span 1 !important;
          }
          .estimator-subgrid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
