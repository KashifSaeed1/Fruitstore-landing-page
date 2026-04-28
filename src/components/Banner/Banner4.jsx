import { motion } from "framer-motion";
import { FaLeaf, FaGift, FaClock } from "react-icons/fa";

const stats = [
  { id: 1, icon: <FaLeaf className="text-2xl text-primary" />, title: "Organic Picks", description: "Farm-fresh fruits picked daily." },
  { id: 2, icon: <FaGift className="text-2xl text-primary" />, title: "Gift Ready", description: "Perfect fruit bundles for every occasion." },
  { id: 3, icon: <FaClock className="text-2xl text-primary" />, title: "Same Day Delivery", description: "Fast delivery for orders placed before noon." },
];

const Banner4 = () => {
  return (
    <section className="bg-gradient-to-r from-[#fff5f6] via-white to-[#fff5f6] py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center"
        >
          <div className="space-y-6 rounded-[2.5rem] bg-white p-10 shadow-[0_28px_80px_rgba(222,44,77,0.12)]">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              Freshness Promise
            </span>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                Discover More Seasonal Fruit Stories
              </h2>
              <p className="text-slate-600 leading-7">
                From juicy berries to exotic mangoes, our new banner section showcases special offers and seasonal favorites. Each harvest is curated to bring vibrant taste, health benefits, and beautiful presentation straight to your table.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div key={item.id} className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center">
                  <div className="mx-auto mb-3 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-500">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2.5rem] bg-primary/5 p-10 shadow-[0_34px_110px_rgba(241,146,151,0.18)]">
            <div className="rounded-[2rem] bg-white p-8 shadow-lg">
              <div className="flex flex-col gap-3">
                <div className="inline-flex items-center gap-3 rounded-full bg-primary/10 px-4 py-3 text-sm font-semibold text-primary">
                  New Arrival
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Seasonal Fruit Box</h3>
                <p className="text-slate-600">
                  Enjoy a curated box of our favorite seasonal fruits, packed fresh and ready to enjoy for breakfast, snacks, or recipes.
                </p>
              </div>

              <div className="mt-8 grid gap-4">
                <FeatureCard title="Hand-picked favorites" description="Only the best pieces are included." />
                <FeatureCard title="Eco-friendly packaging" description="Sustainably wrapped for zero waste." />
                <FeatureCard title="Perfect for gifting" description="A delightful surprise for any celebration." />
              </div>

              <button className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-primary to-pink-500 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-pink-200/40 transition-transform duration-300 hover:-translate-y-1">
                Explore the offer
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

function FeatureCard({ title, description }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <h4 className="text-lg font-semibold text-slate-900">{title}</h4>
      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </div>
  );
}

export default Banner4;
