import { useState } from 'react'
import { SaveIcon, CheckIcon } from '../icons/UIIcons'

const SaveButton = ({ onClick }) => {
  const [saved, setSaved] = useState(false)
  const [ripple, setRipple] = useState(null)

  const handleClick = (e) => {
    // Ripple effect
    const rect = e.currentTarget.getBoundingClientRect()
    setRipple({ x: e.clientX - rect.left, y: e.clientY - rect.top })
    setTimeout(() => setRipple(null), 700)

    // Trigger download
    onClick()

    // Show saved state
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Rehberime Kaydet"
      style={{
        width: '100%',
        padding: '16px',
        borderRadius: 16,
        border: 'none',
        cursor: 'pointer',
        background: saved
          ? 'linear-gradient(135deg, #059669, #10b981)'
          : 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #06b6d4 100%)',
        color: '#fff',
        fontFamily: 'Syne, sans-serif',
        fontSize: '1rem',
        fontWeight: 600,
        letterSpacing: '0.2px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        position: 'relative',
        overflow: 'hidden',
        transition: 'background 0.3s ease, box-shadow 0.2s ease, transform 0.1s ease',
        boxShadow: saved
          ? '0 8px 32px rgba(16,185,129,0.35)'
          : '0 8px 32px rgba(99,102,241,0.35)',
      }}
      onMouseEnter={(e) => {
        if (!saved) {
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(99,102,241,0.5)'
          e.currentTarget.style.transform = 'translateY(-1px)'
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = saved
          ? '0 8px 32px rgba(16,185,129,0.35)'
          : '0 8px 32px rgba(99,102,241,0.35)'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
      onMouseDown={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(0.99)'
      }}
      onMouseUp={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)'
      }}
    >
      {/* Ripple */}
      {ripple && (
        <span
          className="animate-ripple"
          style={{
            position: 'absolute',
            borderRadius: '50%',
            width: 8,
            height: 8,
            background: 'rgba(255,255,255,0.4)',
            left: ripple.x - 4,
            top: ripple.y - 4,
            pointerEvents: 'none',
            transformOrigin: 'center',
          }}
        />
      )}

      {/* Shimmer */}
      {!saved && (
        <span
          className="animate-shimmer"
          style={{
            position: 'absolute',
            top: 0,
            left: '-60%',
            width: '60%',
            height: '100%',
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
            pointerEvents: 'none',
          }}
        />
      )}

      {/* Label */}
      <span style={{ position: 'relative', zIndex: 1, display: 'flex', alignItems: 'center', gap: 10 }}>
        {saved ? <CheckIcon /> : <SaveIcon />}
        {saved ? 'Kaydedildi!' : 'Rehberime Kaydet'}
      </span>
    </button>
  )
}

export default SaveButton
