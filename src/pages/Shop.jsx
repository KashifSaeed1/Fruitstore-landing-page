import Product from "../components/Product/Product";

const Shop = ({ cart, onAddToCart, onRemoveFromCart, onBackHome }) => {
  return (
    <section className="min-h-screen bg-[#fff8f9] pt-28 pb-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
            Fruit Shop
          </span>
          <h1 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Shop Fresh Fruits Online
          </h1>
          <p className="mt-6 text-slate-600 text-base sm:text-lg leading-relaxed">
            Explore our handpicked fruit selections, add your favorites to the cart, and enjoy farm-fresh delivery right to your door.
          </p>
          <button
            type="button"
            onClick={onBackHome}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-secondary px-8 py-3 text-white font-semibold transition hover:bg-secondary/90"
          >
            Back to Home
          </button>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-xl font-bold text-slate-900">Fast Delivery</h2>
            <p className="mt-3 text-slate-500">Get your fresh fruits delivered quickly and safely with every order.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-xl font-bold text-slate-900">Organic Quality</h2>
            <p className="mt-3 text-slate-500">Only premium, hand-picked produce makes it into our shop collection.</p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
            <h2 className="text-xl font-bold text-slate-900">Easy Checkout</h2>
            <p className="mt-3 text-slate-500">Add items to your cart and manage everything from one place.</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <Product
          searchQuery=""
          cart={cart}
          onAddToCart={onAddToCart}
          onRemoveFromCart={onRemoveFromCart}
        />
      </div>
    </section>
  );
};

export default Shop;
