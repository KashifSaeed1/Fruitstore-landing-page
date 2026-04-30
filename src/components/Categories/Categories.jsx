import { motion } from "framer-motion";
import { FaAppleAlt, FaCarrot, FaLemon, FaLeaf, FaSeedling } from "react-icons/fa";

const categories = [
  {
    id: 1,
    title: "Organic Fruits",
    subtitle: "Naturally grown for maximum flavor",
    details: ["Non-GMO selection", "Hand-picked daily", "Rich antioxidant boost"],
    icon: FaLeaf,
    color: "from-emerald-500 to-lime-400",
    badge: "Best Seller",
    price: "From $3.49/kg",
  },
  {
    id: 2,
    title: "Citrus Collection",
    subtitle: "Bright, zesty and full of energy",
    details: ["High vitamin C", "Sun-ripened citrus", "Zesty smoothies"],
    icon: FaLemon,
    color: "from-amber-400 to-orange-500",
    badge: "Fresh Pick",
    price: "From $2.99/pc",
  },
  {
    id: 3,
    title: "Sweet Picks",
    subtitle: "Juicy fruits that taste like summer",
    details: ["Premium dessert fruits", "Bursting with sweetness", "Perfect for snacks"],
    icon: FaAppleAlt,
    color: "from-rose-500 to-fuchsia-500",
    badge: "Fan Favorite",
    price: "From $4.99/kg",
  },
  {
    id: 4,
    title: "Tropical Delights",
    subtitle: "Exotic flavors that transport you",
    details: ["Mangoes, pineapples, and more", "Cruise-worthy refreshment", "Perfect for bowls"],
    icon: FaSeedling,
    color: "from-teal-500 to-cyan-500",
    badge: "Limited Edition",
    price: "From $5.50/kg",
  },
  {
    id: 5,
    title: "Berry Favorites",
    subtitle: "Sweet, tangy and full of color",
    details: ["Plump berries", "Great for desserts", "Packed with vitamins"],
    icon: FaAppleAlt,
    color: "from-pink-500 to-violet-500",
    badge: "Seasonal",
    price: "From $6.25/kg",
  },
  {
    id: 6,
    title: "Seasonal Specials",
    subtitle: "Fresh flavors that change with the season",
    details: ["Curated monthly picks", "Perfect for celebrations", "Always fresh arrivals"],
    icon: FaCarrot,
    color: "from-sky-500 to-indigo-500",
    badge: "New Drop",
    price: "Varies by season",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const Categories = () => {
  return (
    <section id="categories" className="bg-slate-950 text-white py-28 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-secondary">
            Category Highlights
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Discover Fresh Fruit Collections
          </h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            Explore our expanded category lineup with vivid flavors, premium picks and seasonal must-haves. Each collection is crafted to make your fruit shopping easy, delicious, and inspiring.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.article
                key={category.id}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.01 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_24px_90px_rgba(15,23,42,0.35)] transition-all duration-300 hover:border-primary/40"
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-3xl" />
                <div className="absolute left-0 top-0 h-1/2 w-full bg-gradient-to-b from-primary/10 to-transparent" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    <div className={`inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${category.color} text-white shadow-lg shadow-black/25`}>
                      <Icon className="text-2xl" />
                    </div>
                    <span className="rounded-full bg-secondary/15 px-3 py-1 text-xs uppercase tracking-[0.25em] text-secondary">
                      {category.badge}
                    </span>
                  </div>

                  <h3 className="mt-8 text-2xl font-semibold text-white">{category.title}</h3>
                  <p className="mt-4 text-slate-300 leading-7">{category.subtitle}</p>

                  <ul className="mt-6 space-y-3 text-sm text-slate-400">
                    {category.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-secondary" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex items-center justify-between gap-4">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{category.price}</span>
                    <button
                      type="button"
                      className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                    >
                      View
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
