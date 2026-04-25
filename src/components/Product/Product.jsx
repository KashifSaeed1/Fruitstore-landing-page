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

const Product = () => {
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
          {products.map((product) => (
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

              <div className="mt-8 flex items-center justify-between gap-4">
                <button className="primary-btn w-full rounded-full py-3 text-sm font-semibold sm:w-auto sm:px-6">
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
