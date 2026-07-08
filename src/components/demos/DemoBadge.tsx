export default function DemoBadge() {
  return (
    <div
      role="note"
      className="sticky top-0 z-[60] w-full bg-black text-center py-2.5 px-4 text-xs md:text-sm font-medium text-white border-b border-white/10"
    >
      Concept Demo &mdash; built by{' '}
      <a href="/" className="underline hover:text-yellow-500 transition-colors">
        MCFWebs
      </a>{' '}
      to showcase our work. Not a real business.
    </div>
  );
}
