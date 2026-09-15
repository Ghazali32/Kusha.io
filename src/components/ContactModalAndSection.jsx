import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Mail, 
  Building, 
  ShieldCheck, 
  ArrowUpRight, 
  Sparkles, 
  X,
  FileCheck,
  Globe2,
  Clock
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { websiteData } from '../data/websiteContent';

export function ContactModalAndSection({ isOpen, onClose, initialType = 'project', initialSubject = '' }) {
  const [activeTab, setActiveTab] = useState(initialType);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    country: '',
    service: initialSubject || 'Software Development',
    budget: '$10k - $25k',
    timeline: '1-3 months',
    message: '',
    referral: '',
    ndaRequested: true
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    if (onClose) onClose();
  };

  return (
    <>
      {/* ==========================================================================
          IN-PAGE CONTACT SECTION (ANCHOR #contact)
         ========================================================================== */}
      <section id="contact" className="section-spacing" style={{ background: '#0e0f13' }}>
        <div className="container">
          
          <div className="section-header center">
            <div className="section-badge lime">
              <Sparkles size={14} />
              <span>Let's Connect</span>
            </div>
            <h2 className="section-title">
              Let's Build Something <span className="text-gradient-lime">That Works</span>
            </h2>
            <p className="section-subtitle">
              Whether you have a fully scoped project or just an early idea you'd like to talk through, we'd like to hear from you.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(12, 1fr)',
              gap: '24px',
              alignItems: 'stretch'
            }}
            className="contact-main-grid"
          >

            {/* Left Column: Why Contact & Entity Info */}
            <div 
              className="bento-card" 
              style={{ 
                gridColumn: 'span 5',
                background: 'linear-gradient(145deg, #181920 0%, #131418 100%)',
                border: '1px solid var(--border-medium)',
                padding: '36px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <span style={{ fontSize: '0.78rem', color: 'var(--lime-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Direct Collaboration
                </span>
                <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#ffffff', marginTop: '6px', marginBottom: '18px' }}>
                  Start Your Project
                </h3>

                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  Tell us about your requirements and we'll get back to you within 24 business hours with an initial architecture overview and discovery plan.
                </p>

                <h4 style={{ fontSize: '0.88rem', fontWeight: 700, color: '#ffffff', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Reasons to Contact Kusha:
                </h4>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {[
                    'You have a product idea and need help scoping & building it',
                    'You need to modernize or replace an existing system',
                    'You want to explore AI, automation, or data capabilities',
                    'You need dedicated engineering capacity (1 dev or full pod)',
                    'You want an independent technical architecture review'
                  ].map((r, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} color="var(--lime-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company & Legal Box */}
              <div style={{ background: 'var(--bg-subtle)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <Building size={16} color="var(--lavender-light)" />
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>Kusha.io</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Registered in the Netherlands</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--lime-primary)', fontWeight: 700 }}>KVK No. 98986708</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '6px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Mail size={14} />
                  <a href="mailto:info@kusha.io" style={{ color: '#ffffff', textDecoration: 'underline' }}>info@kusha.io</a>
                </div>
              </div>

            </div>

            {/* Right Column: Contact & Project Scoping Form */}
            <div 
              className="bento-card" 
              style={{ 
                gridColumn: 'span 7',
                padding: '36px',
                background: 'linear-gradient(145deg, #181920 0%, #14151a 100%)',
                border: '1px solid var(--border-medium)'
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--lime-subtle)', border: '2px solid var(--lime-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto' }}>
                    <CheckCircle2 size={36} color="var(--lime-primary)" />
                  </div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px' }}>
                    Message Received!
                  </h3>
                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
                    Thank you for reaching out, <strong>{formData.fullName}</strong>. Our European solutions desk and lead architects will review your requirements and reply to <strong>{formData.email}</strong> within 24 hours.
                  </p>
                  <div style={{ background: 'var(--bg-subtle)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)', display: 'inline-block', marginBottom: '24px' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--lime-primary)', fontWeight: 700 }}>
                      NDA Requested: {formData.ndaRequested ? 'Yes (Draft will be attached)' : 'Standard Confidentiality'}
                    </span>
                  </div>
                  <div>
                    <button className="btn btn-secondary" onClick={() => setSubmitted(false)}>
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '10px' }}>
                    <div className="pill-switch">
                      <button
                        type="button"
                        className={`pill-switch-item ${activeTab === 'project' ? 'active' : ''}`}
                        onClick={() => setActiveTab('project')}
                      >
                        Start Your Project
                      </button>
                      <button
                        type="button"
                        className={`pill-switch-item ${activeTab === 'consultation' ? 'active' : ''}`}
                        onClick={() => setActiveTab('consultation')}
                      >
                        Book Free Consultation
                      </button>
                    </div>

                    <span style={{ fontSize: '0.78rem', color: 'var(--lime-primary)', fontWeight: 600 }}>
                      ✓ 24h Response SLA
                    </span>
                  </div>

                  {/* Name & Email */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }} className="contact-subgrid">
                    <div>
                      <label className="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input" 
                        placeholder="e.g. Alex Morgan"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="form-label">Business Email *</label>
                      <input 
                        type="email" 
                        required 
                        className="form-input" 
                        placeholder="alex@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Company & Country */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }} className="contact-subgrid">
                    <div>
                      <label className="form-label">Company Name</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="Acme Corp"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="form-label">Country / Location *</label>
                      <input 
                        type="text" 
                        required 
                        className="form-input" 
                        placeholder="e.g. Netherlands, UK, USA"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Service & Budget */}
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '16px' }} className="contact-subgrid">
                    <div>
                      <label className="form-label">Service of Interest</label>
                      <select 
                        className="form-select"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="Software Development">Software & Product Engineering</option>
                        <option value="Web & Mobile Development">Web & Mobile Development</option>
                        <option value="Cloud & DevOps">Cloud & DevOps</option>
                        <option value="Data & Analytics">Data Engineering & Analytics</option>
                        <option value="AI & Machine Learning">AI & Machine Learning</option>
                        <option value="IoT & Automation">IoT & Automation</option>
                        <option value="Cybersecurity & QA">Cybersecurity & Quality Engineering</option>
                        <option value="System Integration">System Integration & Modernization</option>
                        <option value="IT Consulting">IT Consulting & Strategy</option>
                        <option value="Dedicated Team">Dedicated Development Team</option>
                        <option value="Other">Other / General Technical Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label">Project Timeline</label>
                      <select 
                        className="form-select"
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      >
                        <option value="Immediate (< 1 month)">Immediate (&lt; 1 month)</option>
                        <option value="1-3 months">1 to 3 months</option>
                        <option value="3-6 months">3 to 6 months</option>
                        <option value="Flexible / Exploring">Flexible / Exploring</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="form-group">
                    <label className="form-label">Project Details / Message</label>
                    <textarea 
                      rows={4}
                      className="form-textarea"
                      placeholder="Briefly describe your project, technical goals, or key questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  {/* Checkbox: NDA */}
                  <div style={{ marginBottom: '24px' }}>
                    <label className="form-checkbox-label">
                      <input 
                        type="checkbox"
                        className="form-checkbox"
                        checked={formData.ndaRequested}
                        onChange={(e) => setFormData({ ...formData, ndaRequested: e.target.checked })}
                      />
                      <span>Please execute a mutual NDA prior to detailed technical discovery.</span>
                    </label>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="btn btn-lime btn-lg"
                    style={{ width: '100%' }}
                  >
                    <span>{activeTab === 'project' ? 'Submit Project Scoping Request' : 'Book Free Technical Consultation'}</span>
                    <Send size={18} />
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginTop: '16px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                    <span>🔒 Confidential & Secure</span>
                    <span>•</span>
                    <span>No Obligations</span>
                    <span>•</span>
                    <span>Direct: info@kusha.io</span>
                  </div>

                </form>
              )}
            </div>

          </div>

        </div>

        <style>{`
          @media (max-width: 900px) {
            .contact-main-grid {
              grid-template-columns: repeat(1, 1fr) !important;
            }
            .contact-main-grid > div {
              grid-column: span 1 !important;
            }
            .contact-subgrid {
              grid-template-columns: repeat(1, 1fr) !important;
            }
          }
        `}</style>
      </section>

      {/* ==========================================================================
          GLOBAL POPUP MODAL (IF TRIGGERED VIA POPUP BUTTONS)
         ========================================================================== */}
      {isOpen && (
        <div className="modal-backdrop" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'var(--lime-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sparkles size={18} color="var(--lime-primary)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff' }}>
                    {initialType === 'consultation' ? 'Book a Free Consultation' : 'Start Your Project'}
                  </h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Kusha.io • Netherlands KVK 98986708</span>
                </div>
              </div>

              <button onClick={onClose} className="dock-icon-btn" style={{ width: '34px', height: '34px' }}>
                <X size={18} />
              </button>
            </div>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '30px 10px' }}>
                <CheckCircle2 size={48} color="var(--lime-primary)" style={{ margin: '0 auto 16px auto' }} />
                <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff', marginBottom: '8px' }}>Enquiry Submitted!</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', marginBottom: '20px' }}>
                  We have received your request and will contact you at <strong>{formData.email}</strong> shortly.
                </p>
                <button className="btn btn-lime" onClick={handleReset}>Close Window</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '12px' }}>
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="Alex Morgan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label">Business Email *</label>
                    <input 
                      type="email" 
                      required 
                      className="form-input" 
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginBottom: '12px' }}>
                  <div>
                    <label className="form-label">Company Name</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="Company Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="form-label">Country / Location *</label>
                    <input 
                      type="text" 
                      required 
                      className="form-input" 
                      placeholder="e.g. Netherlands, UK"
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '12px' }}>
                  <label className="form-label">Service of Interest</label>
                  <select 
                    className="form-select"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Software Development">Software & Product Engineering</option>
                    <option value="Web & Mobile Development">Web & Mobile Development</option>
                    <option value="Cloud & DevOps">Cloud & DevOps</option>
                    <option value="Data & Analytics">Data Engineering & Analytics</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="Dedicated Team">Dedicated Development Team</option>
                    <option value="Other">Other / General Technical Inquiry</option>
                  </select>
                </div>

                <div className="form-group" style={{ marginBottom: '16px' }}>
                  <label className="form-label">Project Details</label>
                  <textarea 
                    rows={3}
                    className="form-textarea"
                    placeholder="Briefly describe your requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label className="form-checkbox-label">
                    <input 
                      type="checkbox"
                      className="form-checkbox"
                      checked={formData.ndaRequested}
                      onChange={(e) => setFormData({ ...formData, ndaRequested: e.target.checked })}
                    />
                    <span style={{ fontSize: '0.84rem' }}>Request Mutual NDA prior to project discussion.</span>
                  </label>
                </div>

                <button type="submit" className="btn btn-lime" style={{ width: '100%' }}>
                  <span>Submit Request</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
