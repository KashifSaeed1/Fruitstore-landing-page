import { useState } from "react";
import { motion } from "framer-motion";
import { FaTruck, FaGift, FaLeaf, FaAppleAlt, FaHeart } from "react-icons/fa";

const deals = [
  {
    id: 1,
    title: "Spring Savings Bundle",
    subtitle: "Mix and match fresh favorites for every meal",
    details: [
      "Save 20% on 5 premium fruits",
      "Free delivery over $35",
      "Perfect for smoothies, salads, and snacks",
      "Limited stock — fresh arrivals daily",
    ],
    badge: "Limited Time",
    price: "Up to $15 off",
    offer: "Bundle includes apples, berries, mango, kiwi, and grapes",
    icon: FaGift,
    gradient: "from-emerald-500 via-emerald-600 to-teal-500",
  },
  {
    id: 2,
    title: "Organic Starter Pack",
    subtitle: "Clean, organic fruit chosen for busy families",
    details: [
      "5 organic fruit varieties",
      "Hand-picked for premium freshness",
      "Great for meal prep and kids' lunchboxes",
      "Save 15% on weekly subscriptions",
    ],
    badge: "Best Value",
    price: "From $24.99",
    offer: "Includes avocado, berries, apples, pears, and oranges",
    icon: FaLeaf,
    gradient: "from-lime-500 via-emerald-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Express Delivery Deal",
    subtitle: "Need fruit today? We deliver fresher and faster",
    details: [
      "Next-day express delivery available",
      "Priority packing and temperature control",
      "Perfect for last-minute entertaining",
      "Add express at checkout for just $4.99",
    ],
    badge: "Fast & Fresh",
    price: "Express shipping ready",
    offer: "Order before 2pm for same-week delivery",
    icon: FaTruck,
    gradient: "from-amber-500 via-orange-500 to-rose-500",
  },
  {
    id: 4,
    title: "Tropical Treat Trio",
    subtitle: "A sunny selection for exotic cravings",
    details: [
      "Mango, pineapple and passionfruit",
      "Perfect for refreshing fruit bowls",
      "Naturally sweet with tropical aroma",
      "10% off when you buy 3 packs",
    ],
    badge: "Hot Pick",
    price: "Starting at $19.99",
    offer: "Enjoy a tropical getaway in every bite",
    icon: FaAppleAlt,
    gradient: "from-fuchsia-500 via-pink-500 to-orange-500",
  },
];

const Deals = () => {
  const [activeDeal, setActiveDeal] = useState(null);

  const toggleDeal = (id) => {
    setActiveDeal((current) => (current === id ? null : id));
  };

  return (
    <section id="deals" className="relative overflow-hidden bg-slate-950 text-white py-28 scroll-mt-28">
      <div className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
      <div className="pointer-events-none absolute left-0 top-1/2 h-72 w-72 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-3xl text-center mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-secondary">
            <FaHeart className="text-secondary" /> Featured Deals
          </span>
          <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
            Today&apos;s Most Delicious Savings
          </h2>
          <p className="mt-4 text-slate-300 text-lg leading-relaxed">
            Tap any deal card to reveal the full offer, then shop the freshest bundles with unbeatable value.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mb-12">
          <div className="rounded-[2rem] bg-slate-900/80 p-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.45)]">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary">Exclusive</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">4 Deals</h3>
            <p className="mt-3 text-slate-400">Seasonal packs, fast delivery, and organic favorites.</p>
          </div>
          <div className="rounded-[2rem] bg-slate-900/80 p-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.45)]">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary">Freshness</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">100% Fresh</h3>
            <p className="mt-3 text-slate-400">Every order is hand-packed and shipped within 24 hours.</p>
          </div>
          <div className="rounded-[2rem] bg-slate-900/80 p-6 text-center shadow-[0_20px_60px_rgba(15,23,42,0.45)]">
            <p className="text-sm uppercase tracking-[0.3em] text-secondary">Savings</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">Up to 20% Off</h3>
            <p className="mt-3 text-slate-400">Bundle more to save more and enjoy free shipping.</p>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
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
                className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-[0_24px_90px_rgba(15,23,42,0.45)] transition-all duration-300 hover:border-primary/40 hover:bg-slate-900/90`}
              >
                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b opacity-50 blur-3xl" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    <div className={`inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br ${deal.gradient} text-white shadow-lg shadow-black/25`}>
                      <Icon className="text-2xl" />
                    </div>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-secondary">
                      {deal.badge}
                    </span>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-2xl font-semibold text-white">{deal.title}</h3>
                    <p className="mt-4 text-slate-300 leading-7">{deal.subtitle}</p>
                    <p className="mt-4 text-sm text-slate-400">{deal.offer}</p>
                  </div>

                  <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <span className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">{deal.price}</span>
                    <button
                      type="button"
                      onClick={() => toggleDeal(deal.id)}
                      className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
                    >
                      {isOpen ? "Hide details" : "Open deal"}
                    </button>
                  </div>

                  {isOpen && (
                    <div className="mt-8 rounded-[1.75rem] bg-slate-900/90 p-6 text-slate-200 shadow-inner shadow-black/20">
                      <p className="text-sm uppercase tracking-[0.25em] text-secondary">What&apos;s inside</p>
                      <ul className="mt-4 space-y-3 text-sm leading-7">
                        {deal.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3">
                            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-secondary" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-white transition hover:bg-secondary/90">
                        Add this bundle to cart
                      </button>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Deals;
