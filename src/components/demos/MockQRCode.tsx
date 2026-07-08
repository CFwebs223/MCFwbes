// Deterministic pseudo-QR pattern for visual purposes only — not a scannable code.
function seededCell(x: number, y: number) {
  const n = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
  return n - Math.floor(n) > 0.5;
}

export default function MockQRCode({ size = 9 }: { size?: number }) {
  const cells = [];
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const isFinder =
        (x < 3 && y < 3) || (x >= size - 3 && y < 3) || (x < 3 && y >= size - 3);
      cells.push({ x, y, on: isFinder ? (x === 1 || y === 1 ? false : true) : seededCell(x, y) });
    }
  }

  return (
    <div
      role="img"
      aria-label="Placeholder QR code graphic representing a scannable link to the digital menu"
      className="inline-block p-4 bg-white rounded-xl"
    >
      <svg viewBox={`0 0 ${size} ${size}`} width={140} height={140}>
        {cells.map(
          (cell, i) =>
            cell.on && (
              <rect key={i} x={cell.x} y={cell.y} width={1} height={1} fill="#0a0a0a" />
            )
        )}
      </svg>
    </div>
  );
}
