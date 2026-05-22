const InfoItem = ({ icon, label, value, href }) => {
  const content = (
    <div className="flex items-center gap-3">
      {/* Icon container */}
      <div
        className="flex-shrink-0 flex items-center justify-center rounded-[10px]"
        style={{
          width: 38,
          height: 38,
          background: 'rgba(99, 102, 241, 0.12)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          color: '#818cf8',
        }}
      >
        {icon}
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p
          className="font-dm font-medium uppercase tracking-widest mb-0.5"
          style={{ fontSize: '0.68rem', color: 'rgba(148, 163, 184, 0.7)' }}
        >
          {label}
        </p>
        <p
          className="font-dm truncate"
          style={{ fontSize: '0.875rem', color: '#cbd5e1' }}
        >
          {value}
        </p>
      </div>
    </div>
  )

  const commonStyle = {
    padding: '11px 14px',
    borderRadius: 14,
    display: 'block',
    textDecoration: 'none',
  }

  if (href) {
    return (
      <a href={href} className="info-item" style={commonStyle}>
        {content}
      </a>
    )
  }

  return (
    <div className="info-item cursor-default" style={commonStyle}>
      {content}
    </div>
  )
}

export default InfoItem
