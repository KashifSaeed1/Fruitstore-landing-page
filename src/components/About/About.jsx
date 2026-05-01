import { FaLeaf, FaTruck, FaSmile, FaSeedling } from "react-icons/fa";

const aboutItems = [
  {
    id: 1,
    icon: FaLeaf,
    title: "Farm-Fresh Quality",
    description: "We source premium fruits from trusted farms and deliver them directly to your door."
  },
  {
    id: 2,
    icon: FaTruck,
    title: "Fast Delivery",
    description: "Enjoy quick, reliable shipping with careful handling for every order."
  },
  {
    id: 3,
    icon: FaSmile,
    title: "Customer Happiness",
    description: "Our team is always ready to ensure your fruit shopping is easy and delightful."
  },
  {
    id: 4,
    icon: FaSeedling,
    title: "Sustainable Choices",
    description: "We focus on seasonal selections and eco-friendly packaging wherever possible."
  }
];

const About = () => {
  return (
    <section id="about" className="bg-white py-28 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <div>
            <span className="inline-block rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-secondary">
              About Fruitstore
            </span>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
              Fresh fruit, made simple, healthy, and delicious.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              At Fruitstore, we bring the best seasonal fruits straight from local growers to your kitchen. Our mission is to make healthy eating effortless with premium fruit bundles, seasonal deals, and fast delivery.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {aboutItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.id} className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-secondary/10 text-secondary shadow-sm">
                      <Icon className="text-xl" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-slate-500 leading-7">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-primary/5 p-8 shadow-[0_40px_120px_rgba(15,23,42,0.12)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(96,165,250,0.2),transparent_35%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.18),transparent_30%)]" />
            <div className="relative z-10 flex flex-col justify-between h-full gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-secondary">Why choose us</p>
                <h3 className="mt-4 text-3xl font-bold text-slate-900">A healthier fruit experience</h3>
                <p className="mt-4 text-slate-600 leading-7">
                  Every selection is curated for freshness, flavor, and nutritional value. We combine modern convenience with real farmer relationships.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white/90 p-5 shadow-sm">
                  <p className="text-3xl font-bold text-slate-900">650+</p>
                  <p className="mt-2 text-sm text-slate-500">Happy customers served this month</p>
                </div>
                <div className="rounded-[1.5rem] bg-white/90 p-5 shadow-sm">
                  <p className="text-3xl font-bold text-slate-900">95%</p>
                  <p className="mt-2 text-sm text-slate-500">Repeat customers who love our quality</p>
                </div>
              </div>
              <button className="inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-white transition hover:bg-secondary/90">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
