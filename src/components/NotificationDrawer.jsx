import React from 'react';
import { Bell, X, ShieldCheck, CheckCircle2, Sparkles, ArrowUpRight } from 'lucide-react';

export function NotificationDrawer({ isOpen, onClose, onOpenContact }) {
  if (!isOpen) return null;

  const notifications = [
    {
      id: 1,
      title: 'Netherlands Registry Update',
      desc: 'Kusha.io corporate governance verified under KVK No. 98986708 for European business contracting.',
      time: 'Today',
      type: 'verify',
      action: 'View Corporate Entity'
    },
    {
      id: 2,
      title: 'Q3 Dedicated Pod Capacity Open',
      desc: 'Senior full-stack & cloud engineers available for immediate sprint integration from India Hub.',
      time: '2h ago',
      type: 'capacity',
      action: 'Check Capacity'
    },
    {
      id: 3,
      title: 'New Strategic Playbook Released',
      desc: '"Microservices vs. Monolith: Making the Right Architecture Choice" added to Insights hub.',
      time: '1d ago',
      type: 'insight',
      action: 'Read Playbook'
    }
  ];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        style={{ maxWidth: '520px', padding: '28px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--lime-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Bell size={18} color="var(--lime-primary)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>Operational Feed</h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Kusha Global Delivery Engine</span>
            </div>
          </div>

          <button onClick={onClose} className="dock-icon-btn" style={{ width: '32px', height: '32px' }}>
            <X size={16} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {notifications.map((n) => (
            <div 
              key={n.id}
              style={{
                background: 'var(--bg-subtle)',
                border: '1px solid var(--border-subtle)',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ffffff' }}>{n.title}</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{n.time}</span>
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {n.desc}
              </p>
              <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '4px' }}>
                <button
                  className="btn btn-ghost btn-sm"
                  style={{ color: 'var(--lime-primary)', padding: '4px 8px', fontSize: '0.78rem' }}
                  onClick={() => {
                    onClose();
                    onOpenContact('consultation');
                  }}
                >
                  <span>{n.action}</span>
                  <ArrowUpRight size={13} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
