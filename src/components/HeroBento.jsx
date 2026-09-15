import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Sparkles, 
  ShieldCheck, 
  Globe, 
  User, 
  GraduationCap, 
  Briefcase, 
  Clock, 
  ChevronDown, 
  Search, 
  Plus, 
  Bell, 
  UserCheck, 
  TrendingUp, 
  CheckCircle2,
  Activity,
  Layers
} from 'lucide-react';

export function HeroBento({ onOpenContact, onOpenScoper }) {
  const [chartMode, setChartMode] = useState('annually');
  const [activeCellInfo, setActiveCellInfo] = useState(null);
  const [chatSearch, setChatSearch] = useState('');
  const [selectedPillTab, setSelectedPillTab] = useState('Overview');

  // Heatmap matrix data (7 days x 7 hours)
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const hours = ['2pm', '1pm', '12pm', '11am', '10am', '9am', '8am'];

  // Matrix intensities: 0 = subtle, 1 = hatched low, 2 = medium lime, 3 = solid neon lime
  const matrixPattern = [
    [1, 1, 2, 2, 2, 1, 1], // 2pm
    [1, 2, 3, 2, 3, 1, 1], // 1pm
    [2, 3, 3, 3, 3, 2, 1], // 12pm
    [2, 3, 3, 3, 3, 3, 2], // 11am
    [1, 2, 2, 3, 2, 2, 1], // 10am
    [1, 1, 2, 3, 2, 1, 0], // 9am
    [0, 1, 1, 2, 1, 1, 0], // 8am
  ];

  // Chart data
  const chartBars = [
    { month: 'Jan', height: 42, value: '184k', highlight: false },
    { month: 'Feb', height: 68, value: '290k', highlight: false },
    { month: 'Mar', height: 55, value: '240k', highlight: false },
    { month: 'Apr', height: 96, value: '379,502', highlight: true },
    { month: 'May', height: 74, value: '310k', highlight: false },
    { month: 'Jun', height: 62, value: '265k', highlight: false },
  ];

  const messages = [
    {
      id: 1,
      sender: 'Theresa Webb',
      role: 'Lead Cloud Architect @ Kusha',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
      text: "Hi Robert, I'd like to invite you on our team for the Q3 enterprise migration.",
      time: '3 min',
      unread: true
    },
    {
      id: 2,
      sender: 'Alexander Vance',
      role: 'Head of Engineering (India Hub)',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
      text: 'Sprint 14 QA passed with 100% test coverage. Production deployment ready.',
      time: '18 min',
      unread: false
    }
  ];

  const filteredMessages = messages.filter(m => 
    m.sender.toLowerCase().includes(chatSearch.toLowerCase()) || 
    m.text.toLowerCase().includes(chatSearch.toLowerCase())
  );

  return (
    <section style={{ paddingTop: '130px', paddingBottom: '70px', position: 'relative' }}>
      <div className="container">
        
        {/* TOP HERO HEADLINE & ACTIONS */}
        <div style={{ textAlign: 'center', maxWidth: '880px', margin: '0 auto 52px auto' }}>
          
          {/* Top pill badge */}
          <div className="section-badge lime" style={{ cursor: 'pointer' }} onClick={() => onOpenContact('consultation')}>
            <span className="pulse-circle"></span>
            <span>Netherlands Entity • KVK 98986708 • India Engineering Team</span>
          </div>

          <h1 
            style={{ 
              fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)', 
              fontWeight: 900, 
              lineHeight: 1.08, 
              marginBottom: '20px',
              letterSpacing: '-0.035em'
            }}
          >
            Global Technology Partner for <span className="text-gradient-lime">Ambitious Businesses</span>
          </h1>

          <p 
            style={{ 
              fontSize: 'clamp(1.05rem, 1.8vw, 1.25rem)', 
              color: 'var(--text-secondary)', 
              lineHeight: 1.6, 
              marginBottom: '32px',
              maxWidth: '780px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Kusha is a Netherlands-registered technology company helping startups, scale-ups, and enterprises design, build, and scale software that works. From product ideas to enterprise systems, we deliver custom software, cloud, data, and AI solutions.
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

        {/* ==========================================================================
            HERO BENTO GRID (FAITHFUL TO REFERENCE SCREENSHOT)
           ========================================================================== */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '20px',
            alignItems: 'stretch'
          }}
          className="hero-bento-grid"
        >

          {/* ----------------- LEFT COLUMN (4 COLS) ----------------- */}
          <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '18px' }} className="bento-col-left">
            
            {/* Lavender Pill Badge (Net is Working) */}
            <div 
              style={{
                background: 'var(--lavender-primary)',
                color: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '18px 24px',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                boxShadow: 'var(--shadow-lavender)'
              }}
            >
              <div 
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a10 10 0 0 0-7.54 16.58L2 22l3.42-2.46A10 10 0 1 0 12 2z" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>
                  Net is Working
                </div>
                <div style={{ fontSize: '0.78rem', opacity: 0.9, fontWeight: 500 }}>
                  Global SLA & Delivery Pipeline Online
                </div>
              </div>
            </div>

            {/* Stat Card 1: 975,124 */}
            <div className="bento-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '160px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={18} color="var(--text-secondary)" />
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Engineering Operations</span>
                </div>
                <button className="circle-arrow-btn subtle" onClick={() => onOpenContact('project')}>
                  <ArrowUpRight size={18} />
                </button>
              </div>

              <div>
                <div style={{ fontSize: '2.6rem', fontWeight: 800, fontFamily: 'var(--font-display)', letterSpacing: '-0.03em', color: '#ffffff' }}>
                  975,124
                </div>
                <div className="stat-trend-badge positive">
                  <span>+42.8% from previous week</span>
                </div>
              </div>
            </div>

            {/* Stat Card 2: 296,241 */}
            <div className="bento-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '160px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <GraduationCap size={18} color="var(--text-secondary)" />
                  </div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Validated Code Reviews</span>
                </div>
                <button className="circle-arrow-btn subtle" onClick={() => onOpenContact('project')}>
                  <ArrowUpRight size={18} />
                </button>
              </div>

              <div>
                <div style={{ fontSize: '2.6rem', fontWeight: 800, fontFamily: 'var(--font-display)', letterSpacing: '-0.03em', color: '#ffffff' }}>
                  296,241
                </div>
                <div className="stat-trend-badge positive">
                  <span>+26.3% from previous week</span>
                </div>
              </div>
            </div>

            {/* Solid Lime Bento Card: 76,314 (Directly from reference screenshot) */}
            <div className="bento-card lime-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '170px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(0, 0, 0, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Briefcase size={18} />
                  </div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 700 }}>Company & Scale</span>
                </div>
                <button className="circle-arrow-btn dark" onClick={() => onOpenContact('project')}>
                  <ArrowUpRight size={18} />
                </button>
              </div>

              <div>
                <div style={{ fontSize: '2.8rem', fontWeight: 800, fontFamily: 'var(--font-display)', letterSpacing: '-0.03em' }}>
                  76,314
                </div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, opacity: 0.85 }}>
                  -18.4% from previous week (Optimized Pipeline)
                </div>
              </div>
            </div>

          </div>


          {/* ----------------- CENTER COLUMN (4 COLS) ----------------- */}
          <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '18px' }} className="bento-col-center">
            
            {/* Welcome Card: Darlene Robertson */}
            <div className="bento-card" style={{ minHeight: '150px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                Welcome back,
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ fontSize: '1.9rem', fontWeight: 800, fontFamily: 'var(--font-display)', color: '#ffffff', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                  Darlene<br />Robertson
                </div>
                <span 
                  style={{ 
                    background: 'var(--lavender-primary)', 
                    color: '#ffffff', 
                    fontSize: '0.78rem', 
                    fontWeight: 700, 
                    padding: '4px 14px', 
                    borderRadius: 'var(--radius-full)',
                    boxShadow: '0 2px 8px rgba(139, 123, 247, 0.4)'
                  }}
                >
                  Premium
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px' }}>
                <ShieldCheck size={14} color="var(--lime-primary)" />
                <span style={{ fontSize: '0.76rem', color: 'var(--text-secondary)' }}>Netherlands Entity Verified (KVK 98986708)</span>
              </div>
            </div>

            {/* Time visit / Engineering Velocity Matrix Grid */}
            <div className="bento-card" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={18} color="var(--text-secondary)" />
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>Time visit & Velocity</span>
                </div>

                <div 
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--border-subtle)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#ffffff',
                    cursor: 'pointer'
                  }}
                >
                  <span>Follower</span>
                  <ChevronDown size={14} />
                </div>
              </div>

              {/* Legend with hatched styles */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'repeating-linear-gradient(45deg, rgba(212,255,79,0.3), rgba(212,255,79,0.3) 2px, transparent 2px, transparent 4px)', border: '1px solid rgba(212,255,79,0.3)' }}></div>
                  <span>&gt;500</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'repeating-linear-gradient(45deg, rgba(212,255,79,0.5), rgba(212,255,79,0.5) 2px, transparent 2px, transparent 4px)', border: '1px solid rgba(212,255,79,0.5)' }}></div>
                  <span>&gt;1,000</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'rgba(212,255,79,0.5)', border: '1px solid rgba(212,255,79,0.6)' }}></div>
                  <span>&gt;2,000</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: 'var(--lime-primary)' }}></div>
                  <span>&gt;3,000</span>
                </div>
              </div>

              {/* 7x7 Grid */}
              <div style={{ display: 'flex', gap: '8px', flex: 1 }}>
                {/* Y-axis Labels */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingBottom: '24px' }}>
                  {hours.map(h => (
                    <span key={h} style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{h}</span>
                  ))}
                </div>

                {/* Matrix cells container */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {matrixPattern.map((row, rIdx) => (
                    <div key={rIdx} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px' }}>
                      {row.map((val, cIdx) => (
                        <div
                          key={cIdx}
                          className={`matrix-cell lvl-${val}`}
                          onMouseEnter={() => setActiveCellInfo({ day: days[cIdx], hour: hours[rIdx], intensity: val * 1000 + 450 })}
                          onMouseLeave={() => setActiveCellInfo(null)}
                        />
                      ))}
                    </div>
                  ))}

                  {/* X-axis Labels */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px', marginTop: '4px', textAlign: 'center' }}>
                    {days.map(d => (
                      <span key={d} style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{d}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tooltip feedback */}
              <div style={{ minHeight: '22px', marginTop: '8px', fontSize: '0.75rem', color: 'var(--lime-primary)', textAlign: 'center', fontWeight: 600 }}>
                {activeCellInfo ? (
                  <span>{activeCellInfo.day} @ {activeCellInfo.hour} → {activeCellInfo.intensity} Delivery Units</span>
                ) : (
                  <span style={{ color: 'var(--text-muted)' }}>Hover matrix cells to view engineering throughput</span>
                )}
              </div>

            </div>

          </div>


          {/* ----------------- RIGHT COLUMN (4 COLS) ----------------- */}
          <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '18px' }} className="bento-col-right">
            
            {/* Engagement Rate & Bar Chart (Matching Screenshot) */}
            <div className="bento-card" style={{ display: 'flex', flexDirection: 'column' }}>
              
              {/* Top controls */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <UserCheck size={16} color="var(--text-secondary)" />
                  </div>
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>Engagement rate</span>
                </div>

                <div className="pill-switch">
                  <button 
                    className={`pill-switch-item ${chartMode === 'monthly' ? 'active' : ''}`}
                    onClick={() => setChartMode('monthly')}
                  >
                    Monthly
                  </button>
                  <button 
                    className={`pill-switch-item ${chartMode === 'annually' ? 'active' : ''}`}
                    onClick={() => setChartMode('annually')}
                  >
                    Annually
                  </button>
                </div>
              </div>

              {/* Chart container with highlighted pillar */}
              <div style={{ position: 'relative', paddingTop: '42px', paddingBottom: '8px' }}>
                
                {/* Highlighted Tooltip for April: 379,502 */}
                <div 
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '58%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(24, 25, 32, 0.88)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    borderRadius: '16px',
                    padding: '8px 16px',
                    textAlign: 'center',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                    zIndex: 3
                  }}
                >
                  <div className="stat-trend-pill" style={{ marginBottom: '2px', padding: '1px 8px' }}>
                    <span>+12.8%</span>
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>April, 2026</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff', fontFamily: 'var(--font-display)' }}>379,502</div>
                </div>

                {/* Y-axis Guides */}
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pointerEvents: 'none', opacity: 0.15 }}>
                  <div style={{ borderBottom: '1px dashed #ffffff', width: '100%' }}></div>
                  <div style={{ borderBottom: '1px dashed #ffffff', width: '100%' }}></div>
                  <div style={{ borderBottom: '1px dashed #ffffff', width: '100%' }}></div>
                  <div style={{ borderBottom: '1px dashed #ffffff', width: '100%' }}></div>
                </div>

                {/* Bars */}
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '160px', gap: '8px', padding: '0 10px', position: 'relative', zIndex: 1 }}>
                  {chartBars.map((bar) => (
                    <div key={bar.month} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', flex: 1 }}>
                      <div 
                        style={{
                          width: '100%',
                          maxWidth: '36px',
                          height: `${bar.height}%`,
                          borderRadius: '9999px',
                          transition: 'all 0.3s ease',
                          position: 'relative'
                        }}
                        className={bar.highlight ? 'hatched-bar solid-lavender' : 'hatched-bar'}
                      >
                        {bar.highlight && (
                          <div 
                            style={{
                              position: 'absolute',
                              top: '-6px',
                              left: '50%',
                              transform: 'translateX(-50%)',
                              width: '12px',
                              height: '12px',
                              borderRadius: '50%',
                              background: '#ffffff',
                              border: '2px solid var(--lavender-primary)',
                              boxShadow: '0 0 10px #ffffff'
                            }}
                          />
                        )}
                      </div>
                      <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{bar.month}</span>
                    </div>
                  ))}
                </div>

              </div>

            </div>

            {/* Messages & Instant Consultation Widget */}
            <div className="bento-card" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--lime-primary)' }}></div>
                  <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#ffffff' }}>Messages & Discovery</span>
                </div>
                
                <button 
                  className="circle-arrow-btn subtle" 
                  onClick={() => onOpenContact('project')} 
                  title="New Consultation"
                  style={{ width: '34px', height: '34px' }}
                >
                  <Plus size={16} />
                </button>
              </div>

              {/* Search Bar */}
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'var(--bg-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '8px 14px',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '12px'
                }}
              >
                <Search size={15} color="var(--text-muted)" />
                <input 
                  type="text"
                  placeholder="Search message / requirements..."
                  value={chatSearch}
                  onChange={(e) => setChatSearch(e.target.value)}
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

              {/* Message Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {filteredMessages.map((msg) => (
                  <div 
                    key={msg.id}
                    onClick={() => onOpenContact('consultation')}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '8px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(255, 255, 255, 0.02)',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.02)'}
                  >
                    <img 
                      src={msg.avatar} 
                      alt={msg.sender}
                      style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border-subtle)' }}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
                        <span style={{ fontSize: '0.875rem', fontWeight: 700, color: '#ffffff' }}>{msg.sender}</span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{msg.time}</span>
                      </div>
                      <p style={{ fontSize: '0.78rem', color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {msg.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>

        {/* ----------------- BOTTOM BENTO CONTROL DOCK (DIRECT FROM SCREENSHOT) ----------------- */}
        <div 
          style={{
            marginTop: '20px',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-xl)',
            padding: '12px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px'
          }}
        >
          {/* Navigation tabs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
            <button 
              className={`btn btn-sm ${selectedPillTab === 'Overview' ? 'btn-lime' : 'btn-ghost'}`}
              onClick={() => setSelectedPillTab('Overview')}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <Activity size={14} />
              <span>Overview</span>
            </button>

            <button 
              className={`btn btn-sm ${selectedPillTab === 'Insights' ? 'btn-lime' : 'btn-ghost'}`}
              onClick={() => { setSelectedPillTab('Insights'); window.location.href = '#insights'; }}
              style={{ display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              <span>Insights</span>
              <ChevronDown size={14} />
            </button>

            <button 
              className={`btn btn-sm ${selectedPillTab === 'Analytics' ? 'btn-lime' : 'btn-ghost'}`}
              onClick={() => setSelectedPillTab('Analytics')}
              style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <span>Analytics</span>
              <span style={{ background: 'var(--lime-primary)', color: 'var(--lime-text)', fontSize: '0.7rem', fontWeight: 800, padding: '1px 6px', borderRadius: '9999px' }}>7</span>
            </button>

            <button 
              className={`btn btn-sm ${selectedPillTab === 'Audiences' ? 'btn-lime' : 'btn-ghost'}`}
              onClick={() => { setSelectedPillTab('Audiences'); window.location.href = '#industries'; }}
            >
              Audiences & Industries
            </button>

            <button 
              className={`btn btn-sm ${selectedPillTab === 'Reports' ? 'btn-lime' : 'btn-ghost'}`}
              onClick={() => { setSelectedPillTab('Reports'); window.location.href = '#how-we-work'; }}
            >
              Delivery Reports
            </button>
          </div>

          {/* Right action icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button 
              className="dock-icon-btn" 
              onClick={() => onOpenContact('consultation')}
              title="Search"
            >
              <Search size={16} />
            </button>
            <button 
              className="dock-icon-btn" 
              onClick={() => onOpenContact('consultation')}
              title="Notifications"
            >
              <Bell size={16} />
              <span className="dock-dot"></span>
            </button>
            <div 
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid var(--lavender-primary)',
                boxShadow: '0 0 10px rgba(139, 123, 247, 0.4)'
              }}
            >
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" 
                alt="Profile avatar" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .hero-bento-grid {
            grid-template-columns: repeat(1, 1fr) !important;
          }
          .bento-col-left, .bento-col-center, .bento-col-right {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
}
