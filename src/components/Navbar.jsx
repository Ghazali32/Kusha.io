import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Globe, Shield, Sparkles, Menu, X, ChevronDown, Layers, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar({ onOpenContact, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const location = useLocation();
  const isHome = location.pathname === '/';
  const isWebDev = location.pathname === '/services/website-development';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hover handlers with debounce / grace period to prevent abrupt closing
  const handleDropdownMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleDropdownMouseLeave = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 300); // 300ms forgiving grace period
  };

  const handleDropdownToggle = (e) => {
    e.stopPropagation();
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesDropdownOpen((prev) => !prev);
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const navLinks = [
    { label: 'Global Model', href: isHome ? '#global-model' : '/#global-model' },
    { label: 'Services', isDropdown: true },
    { label: 'Industries', href: isHome ? '#industries' : '/#industries' },
    { label: 'Tech Stack', href: isHome ? '#tech-stack' : '/#tech-stack' },
    { label: 'How We Work', href: isHome ? '#how-we-work' : '/#how-we-work' },
    { label: 'Engagement', href: isHome ? '#engagement' : '/#engagement' },
    { label: 'FAQ', href: isHome ? '#faq' : '/#faq' },
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
        background: isScrolled ? 'rgba(12, 13, 16, 0.92)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: '16px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
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
              <span style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 600 }}>Netherlands • India</span>
            </div>
          </div>
        </Link>

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
            position: 'relative'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div 
                  key={link.label}
                  ref={dropdownRef}
                  style={{ position: 'relative' }}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                >
                  <button
                    type="button"
                    onClick={handleDropdownToggle}
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: isWebDev ? 'var(--lime-primary)' : 'var(--text-secondary)',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      transition: 'all 0.18s ease',
                      background: isWebDev || servicesDropdownOpen ? 'rgba(255, 255, 255, 0.06)' : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <span>Services</span>
                    <ChevronDown size={14} style={{ transform: servicesDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }} />
                  </button>

                  {/* Services Popover / Dropdown with invisible hover bridge */}
                  {servicesDropdownOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        paddingTop: '8px', /* Invisible hover bridge: cursor never leaves hit area */
                        width: '340px',
                        zIndex: 200,
                      }}
                      onMouseEnter={handleDropdownMouseEnter}
                      onMouseLeave={handleDropdownMouseLeave}
                    >
                      <div
                        style={{
                          background: '#16171d',
                          border: '1px solid var(--border-medium)',
                          borderRadius: 'var(--radius-lg)',
                          padding: '12px',
                          boxShadow: '0 16px 40px rgba(0, 0, 0, 0.7)',
                          animation: 'fadeIn 0.2s ease-out'
                        }}
                      >
                        {/* Featured Highlight Item: Website Development */}
                        <Link
                          to="/services/website-development"
                          onClick={() => {
                            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                            setServicesDropdownOpen(false);
                          }}
                          style={{
                            display: 'block',
                            padding: '12px 14px',
                            borderRadius: 'var(--radius-md)',
                            background: 'linear-gradient(135deg, rgba(212, 255, 79, 0.12) 0%, rgba(139, 123, 247, 0.08) 100%)',
                            border: '1px solid var(--lime-border)',
                            textDecoration: 'none',
                            marginBottom: '8px',
                            transition: 'all 0.18s ease'
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                            <span style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff', display: 'flex', alignItems: 'center', gap: '6px' }}>
                              <Sparkles size={14} color="var(--lime-primary)" />
                              Website Development
                            </span>
                            <span style={{ fontSize: '0.65rem', fontWeight: 800, background: 'var(--lime-primary)', color: '#000', padding: '2px 6px', borderRadius: '4px' }}>
                              FEATURED
                            </span>
                          </div>
                          <p style={{ fontSize: '0.74rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                            Responsive, AI Assistant, 2-Way CRM Sync, Stripe Workflows & Messaging
                          </p>
                        </Link>

                        {/* General Services Link */}
                        <a
                          href={isHome ? '#services' : '/#services'}
                          onClick={() => {
                            if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
                            setServicesDropdownOpen(false);
                          }}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: '10px 14px',
                            borderRadius: 'var(--radius-md)',
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            transition: 'background 0.18s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                            e.currentTarget.style.color = '#ffffff';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                          }}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <Layers size={15} color="var(--lavender-light)" />
                            <span>All 10 Core Capabilities</span>
                          </div>
                          <ArrowRight size={13} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
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
                  textDecoration: 'none'
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
            );
          })}
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
            onClick={() => onOpenContact('consultation', 'Web Consultation')}
            className="btn btn-secondary btn-sm"
            style={{ display: 'none' }}
            id="nav-consult-btn"
          >
            Free Consultation
          </button>

          <button
            onClick={() => onOpenContact('project', 'Website Development')}
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
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div key={link.label} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '10px' }}>
                  <a
                    href={isHome ? '#services' : '/#services'}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#ffffff',
                      display: 'block',
                      padding: '8px 0',
                      textDecoration: 'none'
                    }}
                  >
                    Services (All 10 Capabilities)
                  </a>

                  {/* Highlighted Web Development Link in Mobile Menu */}
                  <Link
                    to="/services/website-development"
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'rgba(212, 255, 79, 0.1)',
                      border: '1px solid var(--lime-border)',
                      padding: '10px 14px',
                      borderRadius: 'var(--radius-md)',
                      color: 'var(--lime-primary)',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      textDecoration: 'none',
                      marginTop: '6px'
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Sparkles size={15} />
                      Website Development (AI & CRM)
                    </span>
                    <span style={{ fontSize: '0.65rem', background: 'var(--lime-primary)', color: '#000', padding: '2px 6px', borderRadius: '4px', fontWeight: 800 }}>
                      FEATURED
                    </span>
                  </Link>
                </div>
              );
            }

            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                  textDecoration: 'none'
                }}
              >
                {link.label}
              </a>
            );
          })}

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
