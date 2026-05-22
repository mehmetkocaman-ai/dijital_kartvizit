const Avatar = ({ initials }) => {
  return (
    <div className="animate-avatar-in mx-auto mb-5 relative" style={{ width: 104, height: 104 }}>
      {/* Gradient ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          padding: 3,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #14b8a6)',
        }}
      >
        {/* Inner dark background */}
        <div
          className="w-full h-full rounded-full flex items-center justify-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)',
            border: '2px solid #0f172a',
          }}
        >
          <img
  src="/profile.jpg"
  alt="Mehmet Kocaman"
  className="w-full h-full object-cover rounded-full"
 />
        </div>
      </div>

      {/* Pulse ring */}
      <div
        className="animate-pulse-ring absolute rounded-full border pointer-events-none"
        style={{
          inset: -6,
          borderColor: 'rgba(99, 102, 241, 0.3)',
        }}
      />
    </div>
  )
}

export default Avatar
