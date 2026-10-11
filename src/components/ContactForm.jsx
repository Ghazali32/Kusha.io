import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  ShieldCheck, 
  Calendar, 
  Sparkles,
  RefreshCw,
  Clock,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { 
  submitContactForm, 
  SERVICE_OF_INTEREST_OPTIONS, 
  mapSubjectToService 
} from '../services/contactApi';

export function ContactForm({ 
  initialType = 'project', 
  initialSubject = '', 
  isModal = false,
  onClose = null 
}) {
  const [activeTab, setActiveTab] = useState(initialType === 'consultation' ? 'consultation' : 'project');
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    country: '',
    service: mapSubjectToService(initialSubject),
    projectDetails: initialSubject ? `Inquiry regarding: ${initialSubject}\n\n` : '',
    requestNda: true,
  });

  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [generalError, setGeneralError] = useState(null);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [submissionResult, setSubmissionResult] = useState(null);

  // Sync state if initialType or initialSubject changes from outside
  useEffect(() => {
    if (initialType === 'consultation' || initialType === 'project') {
      setActiveTab(initialType);
    }
  }, [initialType]);

  useEffect(() => {
    if (initialSubject) {
      setFormData(prev => ({
        ...prev,
        service: mapSubjectToService(initialSubject),
        projectDetails: prev.projectDetails ? prev.projectDetails : `Inquiry regarding: ${initialSubject}\n\n`
      }));
    }
  }, [initialSubject]);

  // Handle Tab Switch
  const handleTabChange = (type) => {
    setActiveTab(type);
    setFieldErrors({});
    setGeneralError(null);
  };

  // Clear single field error on change
  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (fieldErrors[field]) {
      setFieldErrors(prev => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  // Client-side Validation
  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      errors.email = 'Business email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errors.email = 'Enter a valid business email address.';
    }

    if (!formData.country.trim()) {
      errors.country = 'Country / location is required.';
    }

    if (activeTab === 'project') {
      if (!formData.service) {
        errors.service = 'Please select a service of interest.';
      }
      if (!formData.projectDetails.trim()) {
        errors.projectDetails = 'Project details are required for project submissions.';
      }
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneralError(null);
    setIsRateLimited(false);

    // Run client validation
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      return;
    }

    setLoading(true);
    setFieldErrors({});

    const isProject = activeTab === 'project';

    const result = await submitContactForm({
      form_type: isProject,
      full_name: formData.fullName,
      business_email: formData.email,
      country_location: formData.country,
      company_name: formData.company,
      service_of_interest: formData.service,
      project_details: formData.projectDetails,
      request_nda: formData.requestNda,
    });

    setLoading(false);

    if (result.success) {
      setSubmissionResult(result);
      try {
        confetti({
          particleCount: 80,
          spread: 65,
          origin: { y: 0.6 }
        });
      } catch (err) {
        // ignore confetti errors
      }
    } else {
      if (result.isRateLimited) {
        setIsRateLimited(true);
        setGeneralError(result.message);
      } else if (result.errors && Object.keys(result.errors).length > 0) {
        // Map backend field names to state keys
        const mapped = {};
        if (result.errors.full_name) mapped.fullName = result.errors.full_name;
        if (result.errors.business_email) mapped.email = result.errors.business_email;
        if (result.errors.country_location) mapped.country = result.errors.country_location;
        if (result.errors.company_name) mapped.company = result.errors.company_name;
        if (result.errors.service_of_interest) mapped.service = result.errors.service_of_interest;
        if (result.errors.project_details) mapped.projectDetails = result.errors.project_details;

        setFieldErrors(mapped);
        setGeneralError(result.message || 'Please check the highlighted fields below.');
      } else {
        setGeneralError(result.message || 'Submission failed. Please try again or reach out to info@kusha.io.');
      }
    }
  };

  const handleReset = () => {
    setSubmissionResult(null);
    setFieldErrors({});
    setGeneralError(null);
    setFormData({
      fullName: '',
      email: '',
      company: '',
      country: '',
      service: mapSubjectToService(initialSubject),
      projectDetails: '',
      requestNda: true,
    });
  };

  // =========================================================================
  // SUCCESS STATE VIEW
  // =========================================================================
  if (submissionResult) {
    const isProject = activeTab === 'project';
    const selectedServiceObj = SERVICE_OF_INTEREST_OPTIONS.find(o => o.value === formData.service);

    return (
      <div style={{ textAlign: 'center', padding: isModal ? '24px 12px' : '36px 20px' }}>
        <div 
          style={{ 
            width: '64px', 
            height: '64px', 
            borderRadius: '50%', 
            background: 'var(--lime-subtle)', 
            border: '2px solid var(--lime-primary)', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            margin: '0 auto 20px auto',
            boxShadow: '0 0 24px var(--lime-glow)'
          }}
        >
          <CheckCircle2 size={36} color="var(--lime-primary)" />
        </div>

        <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--lime-primary)' }}>
          {isProject ? 'Project Scoping Request' : 'Technical Consultation'}
        </span>

        <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#ffffff', marginTop: '6px', marginBottom: '12px' }}>
          {submissionResult.message || 'Submission Received!'}
        </h3>

        <p style={{ fontSize: '0.96rem', color: 'var(--text-secondary)', maxWidth: '500px', margin: '0 auto 24px auto', lineHeight: 1.6 }}>
          Thank you, <strong>{formData.fullName}</strong>. Your request has been queued with our solutions desk. We will review your requirements and reach out to <strong>{formData.email}</strong> within 24 business hours.
        </p>

        {/* Confirmation Details Card */}
        <div 
          style={{ 
            background: 'var(--bg-subtle)', 
            padding: '20px', 
            borderRadius: 'var(--radius-lg)', 
            border: '1px solid var(--border-medium)', 
            textAlign: 'left',
            maxWidth: '520px',
            margin: '0 auto 28px auto'
          }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', fontSize: '0.85rem' }}>
            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>Request Type</span>
              <strong style={{ color: '#ffffff' }}>
                {isProject ? 'Start Your Project' : 'Book Free Consultation'}
              </strong>
            </div>

            <div>
              <span style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>Location</span>
              <strong style={{ color: '#ffffff' }}>{formData.country}</strong>
            </div>

            {formData.company && (
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>Company</span>
                <strong style={{ color: '#ffffff' }}>{formData.company}</strong>
              </div>
            )}

            {isProject && selectedServiceObj && (
              <div>
                <span style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>Service Interest</span>
                <strong style={{ color: 'var(--lime-primary)' }}>{selectedServiceObj.label}</strong>
              </div>
            )}

            {isProject && (
              <div style={{ gridColumn: 'span 2' }}>
                <span style={{ color: 'var(--text-muted)', display: 'block', marginBottom: '2px' }}>NDA Protection</span>
                <strong style={{ color: formData.requestNda ? 'var(--lime-primary)' : 'var(--text-secondary)' }}>
                  {formData.requestNda ? '✓ Mutual NDA Requested (Draft attached to discovery pack)' : 'Standard European Confidentiality'}
                </strong>
              </div>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
          <button className="btn btn-secondary" onClick={handleReset}>
            <RefreshCw size={15} />
            <span>Submit Another Enquiry</span>
          </button>
          {isModal && onClose && (
            <button className="btn btn-lime" onClick={onClose}>
              Done & Close
            </button>
          )}
        </div>
      </div>
    );
  }

  // =========================================================================
  // ACTIVE FORM VIEW
  // =========================================================================
  const isProject = activeTab === 'project';

  return (
    <div>
      {/* Tab Switcher */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px', flexWrap: 'wrap', gap: '10px' }}>
        <div className="pill-switch">
          <button
            type="button"
            className={`pill-switch-item ${isProject ? 'active' : ''}`}
            onClick={() => handleTabChange('project')}
          >
            Start Your Project
          </button>
          <button
            type="button"
            className={`pill-switch-item ${!isProject ? 'active' : ''}`}
            onClick={() => handleTabChange('consultation')}
          >
            Book Free Consultation
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', color: 'var(--lime-primary)', fontWeight: 600 }}>
          <Clock size={13} />
          <span>24h Response SLA</span>
        </div>
      </div>

      {/* Consultation Highlights banner if Consultation tab is active */}
      {!isProject && (
        <div 
          style={{ 
            background: 'rgba(212, 255, 79, 0.06)', 
            border: '1px solid var(--lime-border)', 
            borderRadius: 'var(--radius-md)', 
            padding: '12px 16px', 
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}
        >
          <Sparkles size={20} color="var(--lime-primary)" style={{ flexShrink: 0 }} />
          <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
            <strong style={{ color: '#ffffff' }}>Free 30-Minute Architecture & Scoping Session:</strong> Connect directly with our European solutions desk and senior technical leadership. No sales pitch, no obligation.
          </div>
        </div>
      )}

      {/* General Error / Rate Limit Alert */}
      {generalError && (
        <div className={`form-banner-alert ${isRateLimited ? 'warning' : 'error'}`}>
          <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
          <div>
            <div style={{ fontWeight: 600, marginBottom: '2px' }}>
              {isRateLimited ? 'Rate Limit Reached (5 req/min)' : 'Submission Notice'}
            </div>
            <div>{generalError}</div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Name & Business Email */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '14px' }} className="contact-subgrid">
          <div>
            <label className="form-label">Full Name *</label>
            <input 
              type="text" 
              required
              disabled={loading}
              className={`form-input ${fieldErrors.fullName ? 'is-invalid' : ''}`}
              placeholder="e.g. Alex Morgan"
              value={formData.fullName}
              onChange={(e) => handleChange('fullName', e.target.value)}
            />
            {fieldErrors.fullName && (
              <div className="form-field-error">
                <AlertCircle size={13} />
                <span>{fieldErrors.fullName}</span>
              </div>
            )}
          </div>

          <div>
            <label className="form-label">Business Email *</label>
            <input 
              type="email" 
              required 
              disabled={loading}
              className={`form-input ${fieldErrors.email ? 'is-invalid' : ''}`}
              placeholder="alex@company.com"
              value={formData.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
            {fieldErrors.email && (
              <div className="form-field-error">
                <AlertCircle size={13} />
                <span>{fieldErrors.email}</span>
              </div>
            )}
          </div>
        </div>

        {/* Company Name & Country/Location */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '14px' }} className="contact-subgrid">
          <div>
            <label className="form-label">Company Name <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(Optional)</span></label>
            <input 
              type="text" 
              disabled={loading}
              className={`form-input ${fieldErrors.company ? 'is-invalid' : ''}`}
              placeholder="Company Ltd"
              value={formData.company}
              onChange={(e) => handleChange('company', e.target.value)}
            />
            {fieldErrors.company && (
              <div className="form-field-error">
                <AlertCircle size={13} />
                <span>{fieldErrors.company}</span>
              </div>
            )}
          </div>

          <div>
            <label className="form-label">Country / Location *</label>
            <input 
              type="text" 
              required 
              disabled={loading}
              className={`form-input ${fieldErrors.country ? 'is-invalid' : ''}`}
              placeholder="e.g. Netherlands, UK, USA"
              value={formData.country}
              onChange={(e) => handleChange('country', e.target.value)}
            />
            {fieldErrors.country && (
              <div className="form-field-error">
                <AlertCircle size={13} />
                <span>{fieldErrors.country}</span>
              </div>
            )}
          </div>
        </div>

        {/* Project-Specific Fields (form_type: true) */}
        {isProject && (
          <>
            {/* Service of Interest */}
            <div className="form-group" style={{ marginBottom: '14px' }}>
              <label className="form-label">Service of Interest *</label>
              <select 
                className={`form-select ${fieldErrors.service ? 'is-invalid' : ''}`}
                disabled={loading}
                value={formData.service}
                onChange={(e) => handleChange('service', e.target.value)}
              >
                {SERVICE_OF_INTEREST_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              {fieldErrors.service && (
                <div className="form-field-error">
                  <AlertCircle size={13} />
                  <span>{fieldErrors.service}</span>
                </div>
              )}
            </div>

            {/* Project Details */}
            <div className="form-group" style={{ marginBottom: '16px' }}>
              <label className="form-label">Project Details *</label>
              <textarea 
                rows={isModal ? 3 : 4}
                disabled={loading}
                className={`form-textarea ${fieldErrors.projectDetails ? 'is-invalid' : ''}`}
                placeholder="Briefly describe your project requirements, scope, tech stack preferences, or goals..."
                value={formData.projectDetails}
                onChange={(e) => handleChange('projectDetails', e.target.value)}
              />
              {fieldErrors.projectDetails && (
                <div className="form-field-error">
                  <AlertCircle size={13} />
                  <span>{fieldErrors.projectDetails}</span>
                </div>
              )}
            </div>

            {/* NDA Checkbox */}
            <div style={{ marginBottom: '22px' }}>
              <label className="form-checkbox-label">
                <input 
                  type="checkbox"
                  disabled={loading}
                  className="form-checkbox"
                  checked={formData.requestNda}
                  onChange={(e) => handleChange('requestNda', e.target.checked)}
                />
                <span style={{ fontSize: '0.86rem' }}>
                  Request mutual Non-Disclosure Agreement (NDA) prior to detailed scoping.
                </span>
              </label>
            </div>
          </>
        )}

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={loading}
          className="btn btn-lime btn-lg"
          style={{ 
            width: '100%', 
            opacity: loading ? 0.75 : 1,
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? (
            <>
              <Loader2 size={18} className="spin-animation" />
              <span>{isProject ? 'Submitting Project Details...' : 'Booking Consultation...'}</span>
            </>
          ) : (
            <>
              <span>{isProject ? 'Submit Project Scoping Request' : 'Book Free Technical Consultation'}</span>
              <Send size={18} />
            </>
          )}
        </button>

        {/* Security & Confidentiality Footer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '14px', marginTop: '16px', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
            <ShieldCheck size={13} color="var(--lime-primary)" />
            Confidential & Secure
          </span>
          <span>•</span>
          <span>Zero Obligation</span>
          <span>•</span>
          <span>Direct: info@kusha.io</span>
        </div>
      </form>
    </div>
  );
}
