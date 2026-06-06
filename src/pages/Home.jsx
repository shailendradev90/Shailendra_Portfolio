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
            <a
              href="https://linkedin.com/in/shailendra091"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-200 transition hover:border-primary/40 hover:text-primary"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5V24H0V8.5zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.95-2.7 5.3 0 6.3 3.5 6.3 8.05V24h-5V14.6c0-2.2-.04-5-3.05-5-3.05 0-3.5 2.4-3.5 4.9V24h-5V8.5z" />
              </svg>
            </a>

            <a
              href="https://github.com/shailendradev90"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-200 transition hover:border-primary/40 hover:text-primary"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 0a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.16c-3.34.73-4.04-1.62-4.04-1.62-.55-1.38-1.35-1.75-1.35-1.75-1.1-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.08 1.84 2.84 1.31 3.54 1 .1-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 016 0c2.28-1.55 3.28-1.23 3.28-1.23.66 1.64.24 2.86.12 3.16.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.58A12 12 0 0012 0z" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@shailendrasingh90"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube Channel"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-200 transition hover:border-primary/40 hover:text-primary"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M23.5 6.3c-.3-1.3-1.4-2.4-2.7-2.7C18.5 3 12 3 12 3s-6.5 0-8.8.6C1.9 3.9.8 5 0 6.3 0 8.5 0 12 0 12s0 3.5.6 5.7c.3 1.3 1.4 2.4 2.7 2.7 2.3.6 8.8.6 8.8.6s6.5 0 8.8-.6c1.3-.3 2.4-1.4 2.7-2.7.6-2.2.6-5.7.6-5.7s0-3.5-.6-5.7zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm space-y-6">
          <div className="mx-auto h-64 w-64 overflow-hidden rounded-full border-4 border-white/10 bg-slate-900 shadow-[0_20px_80px_rgba(77,163,255,0.12)]">
            <img
              src={profileImage}
              alt="Profile photo"
              className="h-full w-full object-cover object-left"
            />
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 text-slate-300">
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
