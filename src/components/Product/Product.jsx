import { MdOutlineShoppingCart } from "react-icons/md";
import apple from "../../assets/fruits/apple.png";
import avocado from "../../assets/fruits/avocado.png";
import cherry from "../../assets/fruits/cherry.png";
import orange from "../../assets/fruits/orange.png";

const products = [
  {
    id: 1,
    title: "Red Apple",
    category: "Fruit",
    price: "$4.99/kg",
    description: "Crisp, juicy apples packed with natural sweetness and antioxidants.",
    image: apple,
  },
  {
    id: 2,
    title: "Fresh Avocado",
    category: "Organic",
    price: "$2.99/pc",
    description: "Creamy, ripe avocados perfect for toast, salads, and smoothies.",
    image: avocado,
  },
  {
    id: 3,
    title: "Sweet Cherry",
    category: "Seasonal",
    price: "$7.99/kg",
    description: "Bright red cherries with a juicy bite and rich fruity flavor.",
    image: cherry,
  },
  {
    id: 4,
    title: "Orange Juice",
    category: "Fresh",
    price: "$3.49/pc",
    description: "Sun-ripened oranges rich in vitamin C and vibrant citrus taste.",
    image: orange,
  },
];

const Product = ({ searchQuery, cart, onAddToCart, onRemoveFromCart }) => {
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="products" className="bg-[#fff5f6] py-16 scroll-mt-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="inline-block rounded-full bg-secondary/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.35em] text-secondary">
            Our Product Range
          </span>
          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
            Fresh, Vibrant Fruits Delivered Straight to Your Door
          </h2>
          <p className="mt-4 text-slate-600 sm:text-lg">
            Indulge in the finest selection of seasonal fruits, hand-picked for their exceptional quality and flavor. From juicy apples to creamy avocados, each piece is sourced sustainably to ensure freshness and nutrition in every bite.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const cartItem = cart.find((item) => item.id === product.id);
              const inCart = Boolean(cartItem);
              return (
                <article
                  key={product.id}
                  className="group rounded-[2rem] bg-white p-6 shadow-[0_18px_64px_rgba(222,44,77,0.12)] transition-transform duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
                      {product.category}
                    </span>
                    <span className="text-sm font-semibold text-slate-500">{product.price}</span>
                  </div>

                  <div className="relative mb-6 h-40 overflow-hidden rounded-[2rem] bg-secondary/10 p-5">
                    <img src={product.image} alt={product.title} className="absolute inset-x-0 bottom-0 mx-auto h-full object-contain" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">{product.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-slate-500">{product.description}</p>
                  </div>

                  <div className="mt-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-5 shadow-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_28px_80px_rgba(222,44,77,0.15)]">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">{product.price}</p>
                        {inCart && (
                          <p className="mt-2 inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                            <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
                            In cart ({cartItem.quantity})
                          </p>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => (inCart ? onRemoveFromCart(product.id) : onAddToCart(product))}
                        className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 ${inCart ? "bg-red-500 hover:bg-red-600" : "bg-gradient-to-r from-primary to-pink-500 hover:from-pink-500 hover:to-primary"}`}
                      >
                        <MdOutlineShoppingCart className="text-lg" />
                        {inCart ? "Remove" : "Add to cart"}
                      </button>
                    </div>
                    <p className="mt-4 text-center text-sm text-slate-500">
                      {inCart
                        ? "This item stays in your cart until you remove it."
                        : "Tap add to cart to reserve this fresh fruit for later."}
                    </p>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-lg text-gray-500">
                {searchQuery ? `No products found matching "${searchQuery}"` : "No products available"}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Product;
