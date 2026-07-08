import type { LucideIcon } from 'lucide-react';

export default function DemoPhotoTile({
  icon: Icon,
  label,
  gradient,
  alt,
}: {
  icon: LucideIcon;
  label: string;
  gradient: string;
  alt: string;
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-3 border border-white/10`}
    >
      <Icon className="w-10 h-10 text-white/70" aria-hidden="true" />
      <span className="text-white/70 text-sm font-medium text-center px-4">{label}</span>
    </div>
  );
}
