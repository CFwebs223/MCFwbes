export default function Scene3DStatic() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 -z-10 bg-black overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(234,179,8,0.08),transparent_60%)]" />
      <svg
        viewBox="0 0 800 800"
        className="absolute left-1/2 top-1/2 w-[140vw] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-40"
        fill="none"
      >
        <g stroke="rgba(234,179,8,0.35)" strokeWidth="1">
          <path d="M400 120 L620 240 L620 480 L400 600 L180 480 L180 240 Z" />
          <path d="M400 120 L400 360" />
          <path d="M180 240 L400 360 L620 240" />
          <path d="M180 480 L400 360 L620 480" />
        </g>
        <g stroke="rgba(0,255,255,0.15)" strokeWidth="1">
          {Array.from({ length: 6 }).map((_, i) => (
            <circle key={i} cx="400" cy="360" r={60 + i * 55} />
          ))}
        </g>
      </svg>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
    </div>
  );
}
