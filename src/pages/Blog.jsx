import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';

const posts = [
  {
    title: 'Building scalable React apps',
    description: 'A quick guide to structuring projects, components, and state for long-term maintainability.',
    accent: 'Article',
  },
  {
    title: 'Deploying with confidence',
    description: 'Best practices for shipping a React + Tailwind app with reliable hosting and performance monitoring.',
    accent: 'Guide',
  },
  {
    title: 'Design to code workflow',
    description: 'How to turn UI ideas into production-ready interfaces with Tailwind and component-driven design.',
    accent: 'Post',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="space-y-10 py-16">
      <SectionTitle title="Recent Blog Post" subtitle="Latest insights" />
      <div className="-mx-6 overflow-x-auto pb-4 sm:-mx-8">
        <div className="flex gap-6 px-6 sm:px-8">
          {posts.map((post) => (
            <div key={post.title} className="min-w-[280px] shrink-0 snap-start">
              <Card accent={post.accent} title={post.title} description={post.description}>
                <p>Read more about practical patterns I use for web development and product growth.</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
