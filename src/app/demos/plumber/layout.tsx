import DemoShell from "@/components/demos/DemoShell";

export default function PlumberLayout({ children }: { children: React.ReactNode }) {
  return (
    <DemoShell
      theme={{
        name: "Example Plumbing Co.",
        navLinks: [
          { href: "#services", label: "Services" },
          { href: "#gallery", label: "Our Work" },
          { href: "#reviews", label: "Reviews" },
          { href: "#quote", label: "Contact" },
        ],
        accentText: "text-cyan-400",
        accentBg: "bg-cyan-400",
        bg: "bg-[#061018]",
      }}
    >
      {children}
    </DemoShell>
  );
}
