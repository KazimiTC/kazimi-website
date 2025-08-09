import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "KAZIMI T-Shirt",
    price: 29.99,
    image: "https://placehold.co/400x400/333/FFF?text=KAZIMI+Shirt"
  },
  {
    id: 2,
    name: "KAZIMI Hoodie",
    price: 49.99,
    image: "https://placehold.co/400x400/333/FFF?text=KAZIMI+Hoodie"
  },
  {
    id: 3,
    name: "KAZIMI Cap",
    price: 24.99,
    image: "https://placehold.co/400x400/333/FFF?text=KAZIMI+Cap"
  },
  {
    id: 4,
    name: "KAZIMI Poster",
    price: 19.99,
    image: "https://placehold.co/400x400/333/FFF?text=KAZIMI+Poster"
  }
];

export default function MerchSection() {
  const [cart, setCart] = useState<number[]>([]);

  const addToCart = (productId: number) => {
    setCart([...cart, productId]);
  };

  return (
    <section id="merch" className="min-h-screen flex items-center scroll-snap-align-start bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Merch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-zinc-800 rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-pink-500 font-bold mt-2">${product.price}</p>
                <button
                  onClick={() => addToCart(product.id)}
                  className="mt-4 w-full bg-[#0066FF] hover:bg-neonPink transition-colors text-white px-6 py-2 rounded-full font-bold shadow-[0_0_10px_rgba(0,102,255,0.5)] hover:shadow-[0_0_15px_rgba(255,46,245,0.6)]"
                >
                  Add to Cart {cart.filter(id => id === product.id).length > 0 && '(Added)'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 