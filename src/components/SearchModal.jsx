import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, Layers, Globe2, Cpu, HelpCircle, BookOpen } from 'lucide-react';
import { websiteData } from '../data/websiteContent';

export function SearchModal({ isOpen, onClose, onSelectService, onOpenContact }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Search results
  const q = query.toLowerCase().trim();

  const services = websiteData.services.filter(s => 
    s.title.toLowerCase().includes(q) || s.shortDesc.toLowerCase().includes(q) || s.capabilities.some(c => c.toLowerCase().includes(q))
  );

  const industries = websiteData.industries.filter(i => 
    i.name.toLowerCase().includes(q) || i.description.toLowerCase().includes(q)
  );

  const technologies = websiteData.technologies.filter(t => 
    t.category.toLowerCase().includes(q) || t.stack.some(s => s.toLowerCase().includes(q))
  );

  const faqs = websiteData.faqs.filter(f => 
    f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q)
  );

  const hasResults = services.length > 0 || industries.length > 0 || technologies.length > 0 || faqs.length > 0;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '650px', padding: '24px' }}
      >
        {/* Search Input */}
        <div 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'var(--bg-subtle)',
            border: '1px solid var(--lime-border)',
            borderRadius: 'var(--radius-md)',
            padding: '12px 16px',
            marginBottom: '20px'
          }}
        >
          <Search size={20} color="var(--lime-primary)" />
          <input 
            type="text" 
            autoFocus
            placeholder="Search services, technologies, industries, or FAQs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontSize: '1.05rem',
              width: '100%',
              fontFamily: 'var(--font-sans)'
            }}
          />
          <button onClick={onClose} className="dock-icon-btn" style={{ width: '30px', height: '30px' }}>
            <X size={16} />
          </button>
        </div>

        {/* Search Results list */}
        <div style={{ maxHeight: '420px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {query.length > 0 && !hasResults && (
            <div style={{ textAlign: 'center', padding: '30px', color: 'var(--text-muted)' }}>
              No matches found for "{query}".
            </div>
          )}

          {/* Services */}
          {services.length > 0 && (
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--lime-primary)', marginBottom: '8px' }}>
                Services ({services.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {services.slice(0, 4).map((s) => (
                  <div
                    key={s.id}
                    onClick={() => {
                      onClose();
                      window.location.href = '#services';
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Layers size={16} color="var(--lime-primary)" />
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>{s.title}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{s.shortDesc}</div>
                      </div>
                    </div>
                    <ArrowRight size={14} color="var(--text-muted)" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Industries */}
          {industries.length > 0 && (
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--lavender-light)', marginBottom: '8px' }}>
                Industries ({industries.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {industries.slice(0, 3).map((ind) => (
                  <div
                    key={ind.id}
                    onClick={() => {
                      onClose();
                      window.location.href = '#industries';
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Globe2 size={16} color="var(--lavender-light)" />
                      <div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>{ind.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{ind.tag}</div>
                      </div>
                    </div>
                    <ArrowRight size={14} color="var(--text-muted)" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs */}
          {faqs.length > 0 && (
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '8px' }}>
                Frequently Asked Questions ({faqs.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {faqs.slice(0, 3).map((faq, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      onClose();
                      window.location.href = '#faq';
                    }}
                    style={{
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(255, 255, 255, 0.03)',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', marginBottom: '2px' }}>{faq.q}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{faq.a}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Footer shortcuts */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)', marginTop: '16px', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          <span>Navigation: <kbd style={{ background: 'rgba(255,255,255,0.1)', padding: '2px 6px', borderRadius: '4px' }}>ESC</kbd> to exit</span>
          <span style={{ color: 'var(--lime-primary)' }}>Kusha Global Engine</span>
        </div>
      </div>
    </div>
  );
}
