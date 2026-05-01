import { useState } from "react";
import { motion } from "framer-motion";
import { FaTag, FaTruck, FaGift, FaLeaf } from "react-icons/fa";

const deals = [
  {
    id: 1,
    title: "Spring Savings Bundle",
    subtitle: "Mix and match fresh favorites",
    details: ["Save 20% on 5 selected fruits", "Free delivery for orders over $35", "Perfect for smoothies and salads"],
    badge: "Limited Time",
    price: "Save up to $15",
    icon: FaGift,
  },
  {
    id: 2,
    title: "Organic Starter Pack",
    subtitle: "A healthy pack for the week",
    details: ["5 organic fruit varieties", "Curated for maximum freshness", "Great for families and meal prep"],
    badge: "Best Value",
    price: "From $24.99",
    icon: FaLeaf,
  },
  {
    id: 3,
    title: "Express Delivery Deal",
    subtitle: "Fresh fruit delivered today",
    details: ["Next-day delivery available", "Priority packing and handling", "Ideal for last-minute orders"],
    badge: "Fast & Fresh",
    price: "Add express at checkout",
    icon: FaTruck,
  },
];

const Deals = () => {
  const [activeDeal, setActiveDeal] = useState(null);

  const toggleDeal = (id) => {
    setActiveDeal((current) => (current === id ? null : id));
  };

  return (
    <section id="deals" className="bg-slate-950 text-white py-28 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-14">
          <span className="inline-block rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-secondary">
            Featured Deals
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Today&apos;s Best Fruit Deals
          </h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            Click any deal card to open the details and start shopping our freshest offers.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {deals.map((deal) => {
            const Icon = deal.icon;
            const isOpen = activeDeal === deal.id;

            return (
              <motion.article
                key={deal.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: deal.id * 0.1 }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_24px_90px_rgba(15,23,42,0.35)] transition-all duration-300 hover:border-primary/40"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-secondary text-white shadow-lg shadow-black/25">
                    <Icon className="text-2xl" />
                  </div>
                  <span className="rounded-full bg-secondary/15 px-3 py-1 text-xs uppercase tracking-[0.25em] text-secondary">
                    {deal.badge}
                  </span>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-white">{deal.title}</h3>
                  <p className="mt-4 text-slate-300 leading-7">{deal.subtitle}</p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{deal.price}</span>
                  <button
                    type="button"
                    onClick={() => toggleDeal(deal.id)}
                    className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                  >
                    {isOpen ? "Close" : "Open"}
                  </button>
                </div>

                {isOpen && (
                  <div className="mt-8 rounded-3xl bg-slate-900/80 p-6 text-slate-200">
                    <ul className="space-y-3 text-sm leading-7">
                      {deal.details.map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-secondary" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <button className="mt-6 inline-flex items-center rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white transition hover:bg-secondary/90">
                      Shop This Deal
                    </button>
                  </div>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Deals;
