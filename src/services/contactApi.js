/**
 * Contact & Consultation API Integration Service
 * 
 * Endpoint: POST /api/contact/submit/
 * Auth: Public
 * Rate Limit: 5 requests per minute per IP
 */

const DEFAULT_API_HOST = 'https://inventory-system-fk2g.onrender.com';
const rawBase = (typeof import.meta !== 'undefined' && (import.meta.env?.VITE_BACKEND_URL || import.meta.env?.VITE_API_BASE_URL)) 
  || DEFAULT_API_HOST;
const API_BASE_URL = rawBase.replace(/\/+$/, '');
export const CONTACT_SUBMIT_ENDPOINT = `${API_BASE_URL}/api/contact/submit/`;




/**
 * Valid options for service_of_interest as defined in API specification:
 * - software_product_engineering
 * - cloud_devops
 * - data_ai
 * - ui_ux_design
 * - consulting
 * - other
 */
export const SERVICE_OF_INTEREST_OPTIONS = [
  { value: 'software_product_engineering', label: 'Software & Product Engineering' },
  { value: 'cloud_devops', label: 'Cloud & DevOps' },
  { value: 'data_ai', label: 'Data Engineering & AI' },
  { value: 'ui_ux_design', label: 'UI/UX & Product Design' },
  { value: 'consulting', label: 'IT Consulting & Technical Strategy' },
  { value: 'other', label: 'Other / Custom Inquiry' },
];

/**
 * Maps incoming subject or text (e.g. from service cards or estimator)
 * to a valid service_of_interest enum key.
 */
export function mapSubjectToService(subject = '') {
  if (!subject) return 'software_product_engineering';
  const s = subject.toLowerCase();
  if (s.includes('cloud') || s.includes('devops') || s.includes('kubernetes') || s.includes('infra')) {
    return 'cloud_devops';
  }
  if (s.includes('data') || s.includes('ai') || s.includes('ml') || s.includes('analytics') || s.includes('learning')) {
    return 'data_ai';
  }
  if (s.includes('design') || s.includes('ui') || s.includes('ux')) {
    return 'ui_ux_design';
  }
  if (s.includes('consult') || s.includes('strategy') || s.includes('advisory') || s.includes('audit')) {
    return 'consulting';
  }
  if (s.includes('software') || s.includes('engineering') || s.includes('mvp') || s.includes('web') || s.includes('mobile') || s.includes('app') || s.includes('team')) {
    return 'software_product_engineering';
  }
  return 'other';
}

/**
 * Normalizes backend error response:
 * Backend returns:
 * {
 *   success: false,
 *   errors: {
 *     business_email: ["Enter a valid email address."],
 *     service_of_interest: ["This field is required for project submissions."]
 *   }
 * }
 */
function normalizeErrors(errorData) {
  const fieldErrors = {};
  if (errorData && typeof errorData.errors === 'object') {
    for (const [field, messages] of Object.entries(errorData.errors)) {
      if (Array.isArray(messages)) {
        fieldErrors[field] = messages.join(' ');
      } else if (typeof messages === 'string') {
        fieldErrors[field] = messages;
      }
    }
  }
  return fieldErrors;
}

/**
 * Submits the Contact / Consultation form to POST /api/contact/submit/
 * 
 * @param {Object} params
 * @param {boolean} params.form_type - true for "Start Your Project", false for "Book Free Consultation"
 * @param {string} params.full_name - Required
 * @param {string} params.business_email - Required
 * @param {string} params.country_location - Required
 * @param {string} [params.company_name] - Optional
 * @param {string} [params.service_of_interest] - Required if form_type === true
 * @param {string} [params.project_details] - Required if form_type === true
 * @param {boolean} [params.request_nda] - Optional boolean for project submissions
 * 
 * @returns {Promise<{success: boolean, message: string, data?: any, errors?: Record<string, string>, isRateLimited?: boolean}>}
 */
export async function submitContactForm({
  form_type,
  full_name,
  business_email,
  country_location,
  company_name,
  service_of_interest,
  project_details,
  request_nda
}) {
  let payload;

  if (form_type === true) {
    // 1️⃣ "Start Your Project" Form Request
    payload = {
      form_type: true,
      full_name: full_name?.trim() || '',
      business_email: business_email?.trim() || '',
      country_location: country_location?.trim() || '',
      service_of_interest: service_of_interest || 'software_product_engineering',
      project_details: project_details?.trim() || '',
    };

    if (company_name && company_name.trim()) {
      payload.company_name = company_name.trim();
    }
    if (typeof request_nda === 'boolean') {
      payload.request_nda = request_nda;
    }
  } else {
    // 2️⃣ "Book Free Consultation" Form Request
    payload = {
      form_type: false,
      full_name: full_name?.trim() || '',
      business_email: business_email?.trim() || '',
      country_location: country_location?.trim() || '',
    };

    if (company_name && company_name.trim()) {
      payload.company_name = company_name.trim();
    }
  }

  try {
    const response = await fetch(CONTACT_SUBMIT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    let resJson = null;
    try {
      resJson = await response.json();
    } catch (parseErr) {
      // response might be empty or non-JSON
    }

    // Success: 201 Created or 200 OK
    if (response.status === 201 || (response.ok && resJson?.success !== false)) {
      return {
        success: true,
        message: resJson?.message || (form_type 
          ? 'Thank you! Your project request has been received.' 
          : 'Thank you! Your consultation request has been received.'),
        email_sent: resJson?.email_sent ?? true,
        data: resJson?.data || null,
      };
    }

    // Rate Limit (429 Too Many Requests)
    if (response.status === 429) {
      return {
        success: false,
        isRateLimited: true,
        message: resJson?.message || 'Rate limit reached (maximum 5 requests per minute per IP). Please wait a moment before trying again.',
      };
    }

    // Validation Failed (400 Bad Request)
    if (response.status === 400 || resJson?.success === false) {
      const fieldErrors = normalizeErrors(resJson);
      return {
        success: false,
        status: 400,
        errors: fieldErrors,
        message: resJson?.message || 'Please correct the highlighted errors and try again.',
      };
    }

    // Other HTTP errors (500, 502, etc.)
    return {
      success: false,
      status: response.status,
      message: resJson?.message || `Server error (${response.status}). Please try again or email us directly at info@kusha.io.`,
    };

  } catch (networkErr) {
    console.error('Contact form API error:', networkErr);
    return {
      success: false,
      isNetworkError: true,
      message: 'Network error: Unable to reach the server. Please verify your connection or contact us at info@kusha.io.',
    };
  }
}
