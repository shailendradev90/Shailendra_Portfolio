import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

export default function GitHub() {
  return (
    <section id="github" className="space-y-10 py-16">
      <SectionTitle title="Open source-ready code" subtitle="GitHub portfolio" />
      <div className="grid gap-6 sm:grid-cols-2">
        <Card
          accent="Repository"
          title="Share your best work"
          description="Create a GitHub page with polished project summaries, clean readme content, and standout visuals."
        >
          <p>Use this template as the foundation for open-source projects, case studies, and developer portfolios.</p>
        </Card>

        <Card
          accent="Integration"
          title="Easy developer onboarding"
          description="A project structure designed for fast iteration and clear collaboration."
        >
          <p>Team members can jump in quickly with modern tooling and a scalable component layout.</p>
        </Card>
      </div>
    </section>
  );
}
