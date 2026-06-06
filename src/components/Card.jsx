export default function Card({ title, description, accent, children }) {
  return (
    <article className="container-shadow rounded-3xl border border-white/10 bg-slate-950/90 p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_80px_rgba(77,163,255,0.15)] sm:p-8">
      <div className="mb-3 text-sm uppercase tracking-[0.2em] text-primary">{accent}</div>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-slate-300">{description}</p>
      <div className="mt-6 text-slate-300">{children}</div>
    </article>
  );
}
