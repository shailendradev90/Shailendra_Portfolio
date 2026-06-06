export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8 max-w-2xl sm:mb-12">
      <p className="text-sm uppercase tracking-[0.3em] text-primary">{subtitle}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    </div>
  );
}
