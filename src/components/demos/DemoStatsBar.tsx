import DemoStatCounter from './DemoStatCounter';

export type DemoStat = { value: number; suffix?: string; prefix?: string; label: string };

export default function DemoStatsBar({
  stats,
  accentClassName,
}: {
  stats: DemoStat[];
  accentClassName?: string;
}) {
  return (
    <div className="py-16 px-5 md:px-12 border-y border-white/10">
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <DemoStatCounter key={stat.label} {...stat} accentClassName={accentClassName} />
        ))}
      </div>
    </div>
  );
}
