import DemoShell from "@/components/demos/DemoShell";

export default function ElectricianLayout({ children }: { children: React.ReactNode }) {
  return (
    <DemoShell
      theme={{
        name: "Example Electrical Services",
        navLinks: [
          { href: "#services", label: "Services" },
          { href: "#backup-power", label: "Backup Power" },
          { href: "#reviews", label: "Reviews" },
          { href: "#quote", label: "Contact" },
        ],
        accentText: "text-yellow-400",
        accentBg: "bg-yellow-400",
        bg: "bg-[#120f04]",
      }}
    >
      {children}
    </DemoShell>
  );
}
