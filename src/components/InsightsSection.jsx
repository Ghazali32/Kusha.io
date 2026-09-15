import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  ArrowUpRight, 
  Clock, 
  X, 
  Share2, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { websiteData } from '../data/websiteContent';

export function InsightsSection({ onOpenContact }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [readingArticle, setReadingArticle] = useState(null);

  const categories = ['All', 'Strategy', 'Architecture', 'AI & ML', 'Cloud', 'Security', 'Data', 'Startups', 'IoT'];

  const filteredArticles = websiteData.insights.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="insights" className="section-spacing" style={{ background: '#0e0f13' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge lime">
            <BookOpen size={14} />
            <span>Strategic Engineering Insights</span>
          </div>
          <h2 className="section-title">
            Perspectives on Architecture, <span className="text-gradient-lime">AI & Modern Delivery</span>
          </h2>
          <p className="section-subtitle">
            Explore our engineering and business technology playbooks written for CTOs, product leaders, and ambitious founders.
          </p>
        </div>

        {/* Controls: Search and Category Pills */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '32px' }}>
          
          {/* Categories */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`btn btn-sm ${selectedCategory === cat ? 'btn-lime' : 'btn-secondary'}`}
                style={{ whiteSpace: 'nowrap' }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              padding: '8px 16px',
              borderRadius: 'var(--radius-full)',
              width: '100%',
              maxWidth: '300px'
            }}
          >
            <Search size={15} color="var(--text-muted)" />
            <input 
              type="text"
              placeholder="Search 24+ insights..."
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

        {/* Articles Bento Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '20px'
          }}
        >
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bento-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                minHeight: '220px'
              }}
              onClick={() => setReadingArticle(article)}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <span 
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      color: 'var(--lime-primary)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-subtle)'
                    }}
                  >
                    {article.category}
                  </span>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                    <Clock size={12} />
                    <span>{article.readTime} read</span>
                  </div>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.4 }}>
                  {article.title}
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-secondary)' }}>
                  Read Playbook
                </span>
                <div className="circle-arrow-btn subtle" style={{ width: '32px', height: '32px' }}>
                  <ArrowUpRight size={15} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ==========================================================================
            ARTICLE PREVIEW MODAL
           ========================================================================== */}
        {readingArticle && (
          <div className="modal-backdrop" onClick={() => setReadingArticle(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '750px' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ background: 'var(--lime-subtle)', color: 'var(--lime-primary)', border: '1px solid var(--lime-border)', fontSize: '0.78rem', fontWeight: 700, padding: '4px 12px', borderRadius: 'var(--radius-full)' }}>
                  {readingArticle.category} • {readingArticle.readTime} Read
                </span>

                <button 
                  onClick={() => setReadingArticle(null)}
                  className="dock-icon-btn"
                  style={{ width: '34px', height: '34px' }}
                >
                  <X size={18} />
                </button>
              </div>

              <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '16px', lineHeight: 1.25 }}>
                {readingArticle.title}
              </h2>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid var(--border-subtle)' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--lavender-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem', color: '#ffffff' }}>
                  K
                </div>
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff' }}>Kusha Engineering Practice</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Netherlands & Global Engineering Hub</div>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', color: 'var(--text-secondary)', fontSize: '0.96rem', lineHeight: 1.65 }}>
                <p>
                  As organizations scale, engineering decision-making must balance speed to market with long-term maintainability. In this strategic overview, Kusha's solutions architecture team synthesizes the practical principles and trade-offs surrounding <strong>{readingArticle.title}</strong>.
                </p>
                <div style={{ background: 'var(--bg-subtle)', padding: '16px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>Executive Summary & Key Takeaways:</h4>
                  <ul style={{ paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.88rem' }}>
                    <li>Understand the root business friction before committing to architectural overhaul.</li>
                    <li>Structure engineering milestones into verifiable, risk-mitigated increments.</li>
                    <li>Leverage standardized testing, CI/CD, and infrastructure-as-code to protect release cadence.</li>
                    <li>Align European legal/compliance frameworks with elastic global engineering scale.</li>
                  </ul>
                </div>
                <p>
                  Interested in implementing these practices directly into your codebase or scaling your dedicated engineering team?
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginTop: '28px', paddingTop: '20px', borderTop: '1px solid var(--border-subtle)' }}>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Share or consult with Kusha team</span>
                <button
                  className="btn btn-lime"
                  onClick={() => {
                    const title = readingArticle.title;
                    setReadingArticle(null);
                    onOpenContact('consultation', `Article Consultation: ${title}`);
                  }}
                >
                  <span>Discuss Strategy With An Architect</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
