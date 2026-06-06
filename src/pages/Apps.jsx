import SectionTitle from '../components/SectionTitle';

const apps = [
  {
    title: 'Real Estate App',
    description: 'A modern property search and booking experience with advanced filters and clean listings.',
    href: 'https://github.com/shailendradev90/Propify',
  },
  {
    title: 'SaaS App',
    description: 'A subscription-based platform built to showcase features, pricing, and customer workflows.',
    href: 'https://github.com/your-username/saas-app',
  },
  {
    title: 'Ecommerce',
    description: 'A polished storefront with product browsing, cart flows, and responsive checkout pages.',
    href: 'https://github.com/your-username/ecommerce-app',
  },
];

export default function Apps() {
  return (
    <section id="apps" className="space-y-10 py-16">
      <SectionTitle title="Apps I Developed" subtitle="Recent product work" />
      <div className="space-y-4 rounded-3xl border border-white/10 bg-slate-950/90 p-6 shadow-[0_20px_80px_rgba(77,163,255,0.1)]">
        <ul className="space-y-4 text-slate-300">
          {apps.map((app) => (
            <li key={app.title}>
              <a
                href={app.href}
                target="_blank"
                rel="noreferrer"
                className="group block rounded-3xl border border-white/10 bg-slate-900/90 p-5 transition hover:border-primary/40 hover:bg-slate-900"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-primary">{app.title}</h3>
                    <p className="mt-2 text-slate-400">{app.description}</p>
                  </div>
                  <span className="rounded-full bg-primary/15 px-3 py-1 text-sm text-primary">View repo</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
