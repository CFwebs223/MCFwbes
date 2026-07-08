import DemoShell from "@/components/demos/DemoShell";

export default function CafeLayout({ children }: { children: React.ReactNode }) {
  return (
    <DemoShell
      theme={{
        name: "Example Coffee House",
        navLinks: [
          { href: "#menu", label: "Menu" },
          { href: "#about", label: "About" },
          { href: "#reviews", label: "Reviews" },
          { href: "#quote", label: "Book a Table" },
        ],
        accentText: "text-amber-400",
        accentBg: "bg-amber-400",
        bg: "bg-[#150f0a]",
      }}
    >
      {children}
    </DemoShell>
  );
}
