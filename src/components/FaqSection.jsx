import React, { useState } from 'react';
import { 
  HelpCircle, 
  ChevronDown, 
  Search, 
  MessageSquare, 
  ArrowUpRight 
} from 'lucide-react';
import { websiteData } from '../data/websiteContent';

export function FaqSection({ onOpenContact }) {
  const [openIdx, setOpenIdx] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = websiteData.faqs.filter((faq) => 
    faq.q.toLowerCase().includes(searchQuery.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="faq" className="section-spacing" style={{ background: '#0c0d10' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge lavender">
            <HelpCircle size={14} />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="section-title">
            Answers to Common <span className="text-gradient-lavender">Questions</span>
          </h2>
          <p className="section-subtitle">
            Clear, straightforward information about our Netherlands entity, India engineering hub, engagement models, and delivery practices.
          </p>
        </div>

        {/* Search & Grid Layout */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '24px',
            alignItems: 'start'
          }}
          className="faq-layout-grid"
        >

          {/* Left Column: Quick Contact Bento Box */}
          <div 
            className="bento-card"
            style={{
              gridColumn: 'span 4',
              background: 'linear-gradient(145deg, #181920 0%, #131418 100%)',
              border: '1px solid var(--border-medium)',
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            <div>
              <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'var(--lime-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <MessageSquare size={20} color="var(--lime-primary)" />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>
                Have a specific question?
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                Our solutions engineering team in the Netherlands and India is available to answer any questions about your project, team requirements, or architecture.
              </p>
            </div>

            {/* Instant Search in FAQs */}
            <div>
              <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
                Filter Questions
              </label>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--bg-subtle)',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)'
                }}
              >
                <Search size={16} color="var(--text-muted)" />
                <input 
                  type="text"
                  placeholder="Type keywords (e.g. NDA, KVK)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    width: '100%',
                    fontFamily: 'var(--font-sans)'
                  }}
                />
              </div>
            </div>

            <div>
              <button
                className="btn btn-lime"
                style={{ width: '100%' }}
                onClick={() => onOpenContact('consultation')}
              >
                <span>Book a Discovery Call</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {filteredFaqs.length === 0 ? (
              <div className="bento-card" style={{ padding: '36px', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)' }}>No questions match your search query.</p>
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div
                    key={idx}
                    className="bento-card"
                    style={{
                      padding: '22px 26px',
                      cursor: 'pointer',
                      background: isOpen ? 'var(--bg-card-elevated)' : 'var(--bg-card)',
                      borderColor: isOpen ? 'var(--border-hover)' : 'var(--border-subtle)',
                      transition: 'all 0.2s ease'
                    }}
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                      <h4 style={{ fontSize: '1.08rem', fontWeight: 700, color: isOpen ? 'var(--lime-primary)' : '#ffffff', lineHeight: 1.35 }}>
                        {faq.q}
                      </h4>
                      <div 
                        style={{ 
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', 
                          transition: 'transform 0.2s ease',
                          color: isOpen ? 'var(--lime-primary)' : 'var(--text-muted)',
                          flexShrink: 0
                        }}
                      >
                        <ChevronDown size={20} />
                      </div>
                    </div>

                    {isOpen && (
                      <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .faq-layout-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
          .faq-layout-grid > div {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
