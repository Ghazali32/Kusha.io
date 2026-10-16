import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Building, 
  Mail, 
  Globe2, 
  ArrowLeft, 
  Lock, 
  FileText, 
  CheckCircle2, 
  AlertCircle, 
  Scale, 
  Clock, 
  Key, 
  Server,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('controller');

  const sections = [
    { id: 'controller', label: '1. Data Controller & Entity' },
    { id: 'collection', label: '2. Information We Collect' },
    { id: 'legal-basis', label: '3. Legal Basis (GDPR Art. 6)' },
    { id: 'usage', label: '4. How We Use Data' },
    { id: 'security', label: '5. Security & Encryption' },
    { id: 'international', label: '6. International Transfers' },
    { id: 'retention', label: '7. Data Retention' },
    { id: 'rights', label: '8. Your Rights Under GDPR' },
    { id: 'cookies', label: '9. Cookies & Analytics' },
    { id: 'contact', label: '10. Inquiries & DPO Contact' },
  ];

  const scrollTo = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-app)', color: 'var(--text-primary)', paddingTop: '110px', paddingBottom: '90px' }}>
      
      {/* Glow ambient backdrops */}
      <div 
        style={{
          position: 'absolute',
          top: '-20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '350px',
          background: 'radial-gradient(ellipse at center, rgba(139, 123, 247, 0.12) 0%, rgba(212, 255, 79, 0.06) 50%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* Breadcrumb & Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '28px', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.84rem', color: 'var(--text-muted)' }}>
            <Link to="/" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} className="hover:text-white">
              Home
            </Link>
            <span>/</span>
            <span style={{ color: 'var(--lime-primary)', fontWeight: 600 }}>Privacy Policy</span>
          </div>

          <Link 
            to="/" 
            className="btn btn-secondary btn-sm"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <ArrowLeft size={14} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header Header Card */}
        <div 
          className="bento-card"
          style={{
            background: 'linear-gradient(145deg, #181920 0%, #121316 100%)',
            border: '1px solid var(--border-medium)',
            padding: '36px 40px',
            marginBottom: '40px',
            boxShadow: 'var(--shadow-md)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ maxWidth: '720px' }}>
              <div className="section-badge lavender" style={{ marginBottom: '14px' }}>
                <ShieldCheck size={14} />
                <span>European Legal Governance • GDPR Compliant</span>
              </div>
              <h1 
                style={{ 
                  fontSize: 'clamp(2.2rem, 4.2vw, 3.2rem)', 
                  fontWeight: 900, 
                  lineHeight: 1.15, 
                  letterSpacing: '-0.03em', 
                  marginBottom: '16px' 
                }}
              >
                Privacy Policy & <span className="text-gradient-lavender">Data Protection</span>
              </h1>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                This Privacy Policy outlines how <strong>Kusha.io</strong> processes, protects, and governs personal and proprietary technical data across our website, discovery consultations, software engineering contracts, and client portals.
              </p>
            </div>

            {/* Entity Badge Box */}
            <div 
              style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                border: '1px solid var(--border-subtle)', 
                borderRadius: 'var(--radius-lg)', 
                padding: '18px 22px',
                minWidth: '220px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Building size={16} color="var(--lime-primary)" />
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>Kusha.io</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Registered in the Netherlands</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--lime-primary)', fontWeight: 700 }}>KVK No. 98986708</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '8px' }}>
                Effective Date: October 2026
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout: Sidebar Table of Contents + Policy Body */}
        <div 
          style={{ 
            display: 'grid', 
            gridTemplateColumns: '280px 1fr', 
            gap: '36px',
            alignItems: 'start'
          }}
          className="privacy-layout-grid"
        >

          {/* Sticky Sidebar Table of Contents */}
          <aside 
            style={{ 
              position: 'sticky', 
              top: '110px',
              background: '#14151a',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xl)',
              padding: '24px 20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}
            className="privacy-toc"
          >
            <div style={{ fontSize: '0.78rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: '10px', paddingLeft: '8px' }}>
              Table of Contents
            </div>
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollTo(sec.id)}
                style={{
                  textAlign: 'left',
                  background: activeSection === sec.id ? 'var(--lavender-subtle)' : 'transparent',
                  border: activeSection === sec.id ? '1px solid var(--lavender-border)' : '1px solid transparent',
                  color: activeSection === sec.id ? '#ffffff' : 'var(--text-secondary)',
                  padding: '9px 12px',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.84rem',
                  fontWeight: activeSection === sec.id ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {sec.label}
              </button>
            ))}

            <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
              <Link
                to="/services/website-development"
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--lime-primary)',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontWeight: 600
                }}
              >
                <Sparkles size={13} />
                <span>Web Services Overview →</span>
              </Link>
            </div>
          </aside>

          {/* Policy Text Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>

            {/* Section 1: Data Controller */}
            <section id="controller" className="policy-block">
              <h2 className="policy-heading">1. Data Controller & Legal Entity</h2>
              <p className="policy-p">
                Under the European Union General Data Protection Regulation (GDPR) (Regulation (EU) 2016/679) and applicable member state data protection legislations, the designated Data Controller responsible for your personal data is:
              </p>

              <div className="policy-highlight-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <Building size={18} color="var(--lime-primary)" />
                  <strong style={{ fontSize: '1.05rem', color: '#ffffff' }}>Kusha.io</strong>
                </div>
                <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Business Entity registered in the Netherlands<br />
                  Chamber of Commerce Registration (KVK): <strong>98986708</strong><br />
                  Governing Law: <strong>Netherlands / European Union</strong><br />
                  Official Data Protection Inquiry Desk: <a href="mailto:info@kusha.io" style={{ color: 'var(--lime-primary)' }}>info@kusha.io</a>
                </p>
              </div>

              <p className="policy-p">
                Kusha.io operates a structured global model comprising European legal headquarters in the Netherlands for governance, contracting, and client stewardship, paired with a specialized engineering center in India for technical delivery.
              </p>
            </section>

            {/* Section 2: Information We Collect */}
            <section id="collection" className="policy-block">
              <h2 className="policy-heading">2. Information We Collect</h2>
              <p className="policy-p">
                We collect personal information to scope prospective projects, provide software engineering services, execute confidentiality agreements, and maintain high-quality communications. We only process data that is relevant and strictly necessary.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginTop: '16px' }} className="policy-subgrid">
                <div className="bento-card" style={{ padding: '20px', background: '#15161c' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <FileText size={16} color="var(--lime-primary)" />
                    <strong style={{ color: '#ffffff', fontSize: '0.92rem' }}>Information You Provide Directly</strong>
                  </div>
                  <ul className="policy-list">
                    <li>Full Name and Professional Title</li>
                    <li>Business Email Address</li>
                    <li>Company Name and Location/Country</li>
                    <li>Technical Project Briefs and Requirements</li>
                    <li>Mutual NDA & Contractual Preferences</li>
                    <li>Preferred Engagement Models (Fixed-Price, Pod, etc.)</li>
                  </ul>
                </div>

                <div className="bento-card" style={{ padding: '20px', background: '#15161c' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <Server size={16} color="var(--lavender-light)" />
                    <strong style={{ color: '#ffffff', fontSize: '0.92rem' }}>Information Collected Automatically</strong>
                  </div>
                  <ul className="policy-list">
                    <li>IP Address and approximate geographic location</li>
                    <li>Browser user-agent, operating system, and screen resolution</li>
                    <li>Referring URL, timestamp, and session duration</li>
                    <li>Telemetry via Google Tag Manager (GTM-M77HWJ4W) and GA4</li>
                    <li>API request timestamps for IP rate-limiting protection</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3: Legal Basis */}
            <section id="legal-basis" className="policy-block">
              <h2 className="policy-heading">3. Legal Basis for Processing (GDPR Art. 6)</h2>
              <p className="policy-p">
                We process your personal information strictly under lawful bases recognized by Article 6 of the GDPR:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '14px' }}>
                {[
                  {
                    basis: "Performance of a Contract / Pre-Contractual Steps (Art. 6(1)(b))",
                    desc: "Processing project scoping briefs, formulating technical architecture proposals, preparing cost estimates, and executing mutual NDAs requested by you."
                  },
                  {
                    basis: "Legitimate Business Interests (Art. 6(1)(f))",
                    desc: "Ensuring website uptime and network security, enforcing IP rate limits (5 req/min) to prevent DDoS and spam abuse, and measuring technical website usability."
                  },
                  {
                    basis: "Consent (Art. 6(1)(a))",
                    desc: "Where you have given explicit consent for specific communications, analytics telemetry, or optional cookies."
                  },
                  {
                    basis: "Legal & Regulatory Compliance (Art. 6(1)(c))",
                    desc: "Maintaining tax, accounting, and corporate records under Dutch commercial law and KVK statutory requirements."
                  }
                ].map((item, idx) => (
                  <div key={idx} style={{ background: '#131418', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', padding: '16px 20px' }}>
                    <strong style={{ color: '#ffffff', fontSize: '0.9rem', display: 'block', marginBottom: '4px' }}>
                      {item.basis}
                    </strong>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 4: How We Use Data */}
            <section id="usage" className="policy-block">
              <h2 className="policy-heading">4. How We Use Your Data</h2>
              <p className="policy-p">
                Kusha.io uses collected information solely for legitimate enterprise and software engineering objectives:
              </p>
              <ul className="policy-list">
                <li><strong>Initial Scoping & Discovery:</strong> Reviewing project briefs and technical architectures to assess feasibility and prepare discovery roadmaps within 24 business hours.</li>
                <li><strong>Contractual Execution:</strong> Executing Statements of Work (SOW), Master Services Agreements (MSA), and bilateral Non-Disclosure Agreements (NDA).</li>
                <li><strong>Customer Service:</strong> Responding to inquiries submitted through our contact forms or email at <code>info@kusha.io</code>.</li>
                <li><strong>Security & Resilience:</strong> Identifying and mitigating malicious traffic, automated scrapers, and spam abuse.</li>
              </ul>

              <div className="policy-callout-lime">
                <CheckCircle2 size={18} color="var(--lime-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.88rem', color: '#ffffff', lineHeight: 1.55 }}>
                  <strong>Zero Commercial Sale Guarantee:</strong> Kusha.io strictly <strong>never sells, rents, monetizes, or trades</strong> client personal data, confidential architecture documents, or business information to any third-party data broker or advertiser.
                </div>
              </div>
            </section>

            {/* Section 5: Security & Encryption */}
            <section id="security" className="policy-block">
              <h2 className="policy-heading">5. Security & Technical Safeguards</h2>
              <p className="policy-p">
                We implement state-of-the-art organizational and technical security measures aligned with ISO/IEC 27001 and GDPR Article 32 guidelines:
              </p>
              <ul className="policy-list">
                <li><strong>Encryption in Transit:</strong> All website traffic, API calls, and form submissions are encrypted using modern Transport Layer Security (TLS 1.3 / HTTPS).</li>
                <li><strong>Encryption at Rest:</strong> Database records and backups are encrypted using standard AES-256 protocols.</li>
                <li><strong>Role-Based Access Control (RBAC):</strong> Access to client data is strictly restricted to designated solution architects and project leads with a legitimate need-to-know basis.</li>
                <li><strong>DDoS & Rate Limiting:</strong> Public submission endpoints enforce automated IP rate-limiting (5 requests per minute per IP) to mitigate unauthorized automated spam and resource exhaustion.</li>
                <li><strong>Secure Development Lifecycle:</strong> Code commits undergo static vulnerability scanning and peer reviews before deployment to production environments.</li>
              </ul>
            </section>

            {/* Section 6: International Transfers */}
            <section id="international" className="policy-block">
              <h2 className="policy-heading">6. International Transfers & Global Hub</h2>
              <p className="policy-p">
                Kusha.io operates a Netherlands-registered legal headquarters alongside a software engineering center in India. Where client inquiries or project delivery require collaboration across these entities:
              </p>
              <ul className="policy-list">
                <li>Transfers between our European and Indian delivery pods are governed by <strong>European Commission Standard Contractual Clauses (SCCs)</strong> pursuant to GDPR Article 46.</li>
                <li>Our Indian engineering center operates under strict confidentiality protocols, zero local storage of production client databases without explicit consent, and European GDPR data protection standards.</li>
                <li>All European client contracts are executed under Netherlands jurisdiction with direct legal enforceability.</li>
              </ul>
            </section>

            {/* Section 7: Data Retention */}
            <section id="retention" className="policy-block">
              <h2 className="policy-heading">7. Data Retention Policy</h2>
              <p className="policy-p">
                We do not retain personal data longer than necessary for the purposes for which it was collected:
              </p>
              <div style={{ overflowX: 'auto', marginTop: '12px' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.86rem' }}>
                  <thead>
                    <tr style={{ background: '#181920', borderBottom: '1px solid var(--border-subtle)' }}>
                      <th style={{ padding: '12px 16px', color: 'var(--lime-primary)' }}>Data Category</th>
                      <th style={{ padding: '12px 16px', color: '#ffffff' }}>Retention Period</th>
                      <th style={{ padding: '12px 16px', color: '#ffffff' }}>Purpose</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <td style={{ padding: '12px 16px', fontWeight: 600 }}>Project Inquiries & Scoping</td>
                      <td style={{ padding: '12px 16px', color: 'var(--text-secondary)' }}>24 months from last contact</td>
                      <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>Follow-up proposals & architecture alignment</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <td style={{ padding: '12px 16px', fontWeight: 600 }}>Executed Contracts & SOWs</td>
                      <td style={{ padding: '12px 16px', color: 'var(--text-secondary)' }}>7 years post-contract completion</td>
                      <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>Dutch statutory tax & commercial law compliance</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '12px 16px', fontWeight: 600 }}>Security Logs & IP Tokens</td>
                      <td style={{ padding: '12px 16px', color: 'var(--text-secondary)' }}>30 to 90 days</td>
                      <td style={{ padding: '12px 16px', color: 'var(--text-muted)' }}>Abuse detection & rate limit enforcement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 8: Your Rights Under GDPR */}
            <section id="rights" className="policy-block">
              <h2 className="policy-heading">8. Your Rights Under GDPR</h2>
              <p className="policy-p">
                Under European Union data protection regulations, you possess enforceable legal rights regarding your personal data:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginTop: '14px' }} className="policy-subgrid">
                {[
                  { title: "Right of Access (Art. 15)", desc: "Request confirmation and an export copy of all personal data we hold about you." },
                  { title: "Right to Rectification (Art. 16)", desc: "Request correction of any inaccurate or incomplete personal details." },
                  { title: "Right to Erasure (Art. 17)", desc: "Request permanent deletion of your data where statutory retention is not required." },
                  { title: "Right to Restrict Processing (Art. 18)", desc: "Request restriction of processing while a verification claim is pending." },
                  { title: "Right to Data Portability (Art. 20)", desc: "Receive your provided personal data in a structured, machine-readable format." },
                  { title: "Right to Object (Art. 21)", desc: "Object at any time to processing based on legitimate interests." }
                ].map((r, i) => (
                  <div key={i} style={{ background: '#14151a', padding: '14px 16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                    <strong style={{ fontSize: '0.86rem', color: '#ffffff', display: 'block', marginBottom: '4px' }}>
                      {r.title}
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {r.desc}
                    </span>
                  </div>
                ))}
              </div>

              <p className="policy-p" style={{ marginTop: '16px' }}>
                To exercise any of these rights, email our team directly at <a href="mailto:info@kusha.io" style={{ color: 'var(--lime-primary)' }}>info@kusha.io</a>. We respond to all verified requests within 30 days without fee.
              </p>

              <p className="policy-p" style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                You also have the right to lodge a formal complaint with the Dutch Data Protection Supervisory Authority: <em>Autoriteit Persoonsgegevens (AP)</em> at <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--lavender-light)', textDecoration: 'underline' }}>autoriteitpersoonsgegevens.nl</a>.
              </p>
            </section>

            {/* Section 9: Cookies & Analytics */}
            <section id="cookies" className="policy-block">
              <h2 className="policy-heading">9. Cookies & Analytics Technologies</h2>
              <p className="policy-p">
                Our website uses essential technical cookies and privacy-respecting analytics telemetry:
              </p>
              <ul className="policy-list">
                <li><strong>Essential Cookies:</strong> Required to enable core site navigation, form security, CSRF protection, and user session persistence.</li>
                <li><strong>Analytics Telemetry (Google Tag Manager GTM-M77HWJ4W & GA4):</strong> Measures aggregate site performance, page engagement, and device compatibility without storing invasive personal profiling tokens.</li>
                <li><strong>Browser Controls:</strong> You can configure your browser to block or alert you about cookies. Note that blocking essential cookies may impact certain interactive form features.</li>
              </ul>
            </section>

            {/* Section 10: Inquiries & Contact */}
            <section id="contact" className="policy-block">
              <h2 className="policy-heading">10. Data Protection Officer & Inquiries</h2>
              <p className="policy-p">
                If you have questions, feedback, or requests regarding this Privacy Policy or our security practices, our dedicated compliance desk is at your disposal:
              </p>

              <div 
                className="bento-card"
                style={{
                  background: 'linear-gradient(145deg, #181920 0%, #121316 100%)',
                  border: '1px solid var(--lime-border)',
                  padding: '28px',
                  marginTop: '16px'
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '18px' }} className="policy-subgrid">
                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Data Protection Desk</span>
                    <strong style={{ fontSize: '0.98rem', color: '#ffffff' }}>Kusha.io Privacy & Compliance</strong>
                    <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
                      Netherlands Chamber of Commerce (KVK): 98986708
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>Official Communication</span>
                    <a href="mailto:info@kusha.io" style={{ fontSize: '1rem', color: 'var(--lime-primary)', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Mail size={16} />
                      <span>info@kusha.io</span>
                    </a>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                      Standard response SLA: Within 24 business hours
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '22px', paddingTop: '18px', borderTop: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                  <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Mutual Non-Disclosure Agreements (NDAs) available upon request.
                  </span>
                  <Link to="/" className="btn btn-lime btn-sm" style={{ textDecoration: 'none' }}>
                    <span>Return to Homepage</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </section>

          </div>
        </div>

      </div>

      <style>{`
        .policy-block {
          background: #121317;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-xl);
          padding: 32px;
          scroll-margin-top: 110px;
        }
        .policy-heading {
          font-size: 1.35rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 14px;
          letter-spacing: -0.02em;
        }
        .policy-p {
          font-size: 0.93rem;
          color: var(--text-secondary);
          line-height: 1.68;
          margin-bottom: 14px;
        }
        .policy-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin: 14px 0 16px 0;
          padding: 0;
        }
        .policy-list li {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
          position: relative;
          padding-left: 20px;
        }
        .policy-list li::before {
          content: "•";
          position: absolute;
          left: 4px;
          color: var(--lime-primary);
          font-weight: 800;
          font-size: 1.1rem;
        }
        .policy-highlight-card {
          background: #17181e;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: var(--radius-lg);
          padding: 18px 22px;
          margin: 16px 0;
        }
        .policy-callout-lime {
          background: rgba(212, 255, 79, 0.06);
          border: 1px solid var(--lime-border);
          border-radius: var(--radius-md);
          padding: 14px 18px;
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin: 18px 0;
        }
        @media (max-width: 900px) {
          .privacy-layout-grid {
            grid-template-columns: 1fr !important;
          }
          .privacy-toc {
            display: none !important;
          }
          .policy-subgrid {
            grid-template-columns: 1fr !important;
          }
          .policy-block {
            padding: 24px !important;
          }
        }
      `}</style>
    </div>
  );
}
