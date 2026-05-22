const SocialButton = ({ icon, label, href, color }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="social-btn"
      style={{
        '--social-color': color,
        width: 50,
        height: 50,
        borderRadius: 14,
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.09)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(203,213,225,0.7)',
        textDecoration: 'none',
      }}
    >
      {icon}
    </a>
  )
}

export default SocialButton
