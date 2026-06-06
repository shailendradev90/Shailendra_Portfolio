import SectionTitle from '../components/SectionTitle';
import profileImage from '../assets/profile.jpg';

export default function Home() {
  return (
    <section id="home" className="space-y-16 py-16">
      <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-primary">Full Stack Developer</p>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">
            I build full-stack experiences that connect design, performance, and growth.
          </h1>
          <p className="max-w-2xl text-slate-300 sm:text-lg">
            As I am a Full Stack Developer, I craft solutions that span frontend, backend, and deployment. I build fast, responsive interfaces with clean architecture and real-world production readiness.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="rounded-full bg-primary/15 px-4 py-2 text-sm text-primary">React + Tailwind</span>
            <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">Vite</span>
            <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">API integrations</span>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-4 shadow-[0_20px_80px_rgba(77,163,255,0.12)]">
          <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.75rem] bg-slate-900 text-slate-500">
            <img
              src={profileImage}
              alt="Profile photo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-5 rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-slate-300">
            <p className="text-sm uppercase tracking-[0.3em] text-primary">About me</p>
            <p className="mt-3 text-base leading-7 text-slate-200">
              Passionate about building scalable apps, clean interfaces, and production-ready deployments across web and mobile platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
