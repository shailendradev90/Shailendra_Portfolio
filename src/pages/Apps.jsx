import SectionTitle from '../components/SectionTitle';

const appCategories = [
  //{
    // category: 'E-Commerce',
    // apps: [
    //   {
    //     id: 1,
    //     title: 'Fashion Store',
    //     description: 'Modern clothing marketplace with filters',
    //     image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop',
    //     href: 'https://github.com/your-username/fashion-store',
    //   },
    //   {
    //     id: 2,
    //     title: 'Electronics Hub',
    //     description: 'Tech products with detailed specs',
    //     image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    //     href: 'https://github.com/your-username/electronics-hub',
    //   },
    //   {
    //     id: 3,
    //     title: 'Grocery Plus',
    //     description: 'Fast food delivery & shopping',
    //     image: 'https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&h=300&fit=crop',
    //     href: 'https://github.com/your-username/grocery-plus',
    //   },
    // ],
  //},
  {
    category: 'Real Estate',
    apps: [
      {
        id: 4,
        title: 'Propify',
        description: 'Property search with advanced filters',
        image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
        href: 'https://github.com/shailendradev90/Propify',
      },
      {
        id: 5,
        title: 'Home Finder',
        description: 'Virtual tours and property insights',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop',
        href: 'https://github.com/your-username/home-finder',
      },
      {
        id: 6,
        title: 'Rental Hub',
        description: 'Apartment rentals made easy',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
        href: 'https://github.com/your-username/rental-hub',
      },
    ],
  },
  // {
  //   category: 'SaaS Products',
  //   apps: [
  //     {
  //       id: 7,
  //       title: 'TaskFlow',
  //       description: 'Project management & collaboration',
  //       image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
  //       href: 'https://github.com/your-username/taskflow',
  //     },
  //     {
  //       id: 8,
  //       title: 'Analytics Pro',
  //       description: 'Real-time data insights dashboard',
  //       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
  //       href: 'https://github.com/your-username/analytics-pro',
  //     },
  //     {
  //       id: 9,
  //       title: 'CRM Suite',
  //       description: 'Customer relationship management',
  //       image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop',
  //       href: 'https://github.com/your-username/crm-suite',
  //     },
  //   ],
  // },
];

export default function Apps() {
  return (
    <section id="apps" className="space-y-10 py-16">
      <SectionTitle title="Apps Developed" subtitle="Recent product work" />
      
      <div className="space-y-8">
        {appCategories.map((categoryItem) => (
          <div key={categoryItem.category} className="space-y-4">
            {/* Category Title */}
            <h3 className="text-2xl font-bold text-white">{categoryItem.category}</h3>
            
            {/* Horizontal Scroll Container */}
            <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-6 shadow-[0_20px_80px_rgba(77,163,255,0.1)]">
              <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
                {categoryItem.apps.map((app) => (
                  <a
                    key={app.id}
                    href={app.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex-shrink-0 w-80 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 transition hover:border-primary/40 hover:shadow-[0_10px_30px_rgba(77,163,255,0.2)]"
                  >
                    {/* App Thumbnail Image */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                      <img
                        src={app.image}
                        alt={app.title}
                        className="h-full w-full object-cover transition group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                    </div>

                    {/* App Info */}
                    <div className="p-5">
                      <h4 className="text-lg font-semibold text-white group-hover:text-primary transition">
                        {app.title}
                      </h4>
                      <p className="mt-2 text-sm text-slate-400 line-clamp-2">
                        {app.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between">
                        <span className="rounded-full bg-primary/15 px-3 py-1 text-xs text-primary">
                          View repo
                        </span>
                        <svg
                          className="h-5 w-5 text-slate-500 transition group-hover:text-primary group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                          />
                        </svg>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
