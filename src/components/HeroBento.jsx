import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export function HeroBento({ onOpenContact, onOpenScoper }) {
  return (
    <section style={{ paddingTop: '160px', paddingBottom: '90px', position: 'relative' }}>
      <div className="container">
        
        {/* TOP HERO HEADLINE & ACTIONS */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto' }}>
          
          <h1 
            style={{ 
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)', 
              fontWeight: 900, 
              lineHeight: 1.1, 
              marginBottom: '24px',
              letterSpacing: '-0.035em'
            }}
          >
            Global Technology Partner for <span className="text-gradient-lime">Ambitious Businesses</span>
          </h1>

          <p 
            style={{ 
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', 
              color: 'var(--text-secondary)', 
              lineHeight: 1.65, 
              marginBottom: '16px',
              maxWidth: '800px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Kusha.io is a Netherlands-based technology company helping startups, scale-ups, and enterprises turn ambitious ideas into reliable, scalable technology.
          </p>

          <p 
            style={{ 
              fontSize: 'clamp(0.98rem, 1.5vw, 1.15rem)', 
              color: 'var(--text-muted)', 
              lineHeight: 1.65, 
              marginBottom: '36px',
              maxWidth: '780px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            We design and build custom software, cloud platforms, data systems, and AI solutions, from early product development to complex enterprise transformation.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <button 
              onClick={() => onOpenContact('project')} 
              className="btn btn-lime btn-lg"
              style={{ boxShadow: '0 8px 30px rgba(212, 255, 79, 0.3)' }}
            >
              <span>Start Your Project</span>
              <ArrowUpRight size={20} />
            </button>
            <button 
              onClick={() => onOpenContact('consultation')} 
              className="btn btn-secondary btn-lg"
            >
              Book a Free Consultation
            </button>
            <button 
              onClick={onOpenScoper} 
              className="btn btn-ghost"
              style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            >
              <Sparkles size={16} color="var(--lavender-light)" />
              <span>Interactive Scope Estimator</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
export default HeroBento;
