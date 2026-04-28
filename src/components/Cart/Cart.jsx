import { MdOutlineShoppingCart } from "react-icons/md";

const Cart = ({ cart, onRemoveFromCart, onContinueShopping }) => {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section className="min-h-screen bg-[#fff5f6] pt-[120px]">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-primary">
              <MdOutlineShoppingCart className="text-xl" />
              Cart Summary
            </span>
            <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">Your cart items</h1>
            <p className="mt-3 text-slate-600 sm:text-lg">
              Review selected fruits, remove items, or continue shopping for more fresh finds.
            </p>
          </div>

          <button
            type="button"
            onClick={onContinueShopping}
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary shadow-sm transition-colors duration-300 hover:bg-primary/10"
          >
            Continue shopping
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="rounded-[2rem] border border-dashed border-slate-300 bg-white p-10 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-900">Your cart is empty</p>
            <p className="mt-3 text-slate-600">Add some fresh fruit to your cart and they will appear here.</p>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-5">
              {cart.map((item) => (
                <div key={item.id} className="rounded-[2rem] bg-white p-6 shadow-[0_18px_64px_rgba(222,44,77,0.12)]">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-24 w-24 overflow-hidden rounded-[1.5rem] bg-secondary/10 p-3">
                        <img src={item.image} alt={item.title} className="h-full w-full object-contain" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">{item.title}</h2>
                        <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-2 text-right sm:items-end">
                      <span className="text-lg font-semibold text-slate-900">{item.price}</span>
                      <span className="text-sm text-slate-500">Quantity: {item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => onRemoveFromCart(item.id)}
                        className="rounded-full bg-red-500 px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="rounded-[2rem] bg-white p-8 shadow-[0_18px_64px_rgba(222,44,77,0.12)]">
              <div className="space-y-5">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-secondary">Cart details</h3>
                  <p className="mt-3 text-2xl font-bold text-slate-900">{totalItems} item{totalItems > 1 ? "s" : ""} in your cart</p>
                </div>
                <div className="rounded-3xl bg-primary/5 p-5 text-sm text-slate-600">
                  <p className="font-semibold text-slate-900">Tip:</p>
                  <p className="mt-2">Click remove to delete items from the cart. Your header badge will update automatically.</p>
                </div>
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
