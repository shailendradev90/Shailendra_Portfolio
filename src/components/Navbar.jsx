const links = [
  { label: 'Home', href: '#home' },
  { label: 'Apps', href: '#apps' },
  { label: 'Blog', href: '#blog' },
];

export default function Navbar() {
  return (
    <header className="border-b border-white/10 bg-[#07101f]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8">
        <div>
          <span className="text-xl font-semibold text-primary">Brand</span>
          <p className="text-sm text-slate-400">Professional UI</p>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-slate-300 transition hover:text-white">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
