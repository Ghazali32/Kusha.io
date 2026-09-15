import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Globe, Shield, Sparkles, Menu, X, MessageSquareCode } from 'lucide-react';

export function Navbar({ onOpenContact, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Global Model', href: '#global-model' },
    { label: 'Industries', href: '#industries' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'How We Work', href: '#how-we-work' },
    { label: 'Engagement', href: '#engagement' },
    { label: 'Insights', href: '#insights' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(12, 13, 16, 0.88)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: '16px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '12px',
              background: '#18191e',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: '0 4px 12px rgba(0,0,0,0.4)'
            }}
          >
            <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
              <rect width="100" height="100" rx="24" fill="#18191e" />
              <path d="M25 25 L42 25 L75 75 L58 75 Z" fill="#d4ff4f" />
              <path d="M58 25 L75 25 L42 75 L25 75 Z" fill="#8b7bf7" />
              <circle cx="75" cy="30" r="10" fill="#d4ff4f" />
            </svg>
          </div>
          <div>
            <span style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#ffffff', fontFamily: 'var(--font-display)' }}>
              Kusha<span style={{ color: 'var(--lime-primary)' }}>.io</span>
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '-2px' }}>
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>NL • KVK 98986708</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(24, 25, 30, 0.65)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            padding: '4px 10px',
            borderRadius: '9999px',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                padding: '6px 14px',
                borderRadius: '9999px',
                transition: 'all 0.18s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ffffff';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={onOpenSearch}
            className="dock-icon-btn"
            title="Search Site (⌘K)"
            style={{ width: '38px', height: '38px' }}
          >
            <span style={{ fontSize: '0.8rem', fontWeight: 700, fontFamily: 'var(--font-mono)' }}>⌘K</span>
          </button>

          <button
            onClick={() => onOpenContact('consultation')}
            className="btn btn-secondary btn-sm"
            style={{ display: 'none' }}
            id="nav-consult-btn"
          >
            Free Consultation
          </button>

          <button
            onClick={() => onOpenContact('project')}
            className="btn btn-lime btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <span>Start Project</span>
            <ArrowUpRight size={15} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="dock-icon-btn mobile-toggle-btn"
            style={{ display: 'none' }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#14151a',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '20px 24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            boxShadow: 'var(--shadow-lg)'
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#ffffff',
                padding: '10px 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact('consultation'); }}
              className="btn btn-secondary"
              style={{ width: '100%' }}
            >
              Book Free Consultation
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenContact('project'); }}
              className="btn btn-lime"
              style={{ width: '100%' }}
            >
              Start Your Project
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) {
          .desktop-nav {
            display: flex !important;
          }
          #nav-consult-btn {
            display: inline-flex !important;
          }
        }
        @media (max-width: 1023px) {
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
