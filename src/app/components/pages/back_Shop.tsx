import { useState } from "react";
import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import { SlidersHorizontal } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Lunar Phase Journal",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&q=80",
    category: "physical",
    subcategory: "Journals",
    inStock: true,
  },
  {
    id: 2,
    name: "Cosmic Meditation Guide",
    price: 149,
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
    category: "digital",
    subcategory: "Guides",
    inStock: true,
  },
  {
    id: 3,
    name: "Celestial Tarot Deck",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1591328194231-d5e1f2c78c2f?w=800&q=80",
    category: "physical",
    subcategory: "Divination",
    inStock: true,
  },
  {
    id: 4,
    name: "Moon Ritual Kit",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80",
    category: "physical",
    subcategory: "Ritual Tools",
    inStock: true,
  },
  {
    id: 5,
    name: "Astrology Birth Chart Reading",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=800&q=80",
    category: "digital",
    subcategory: "Readings",
    inStock: true,
  },
  {
    id: 6,
    name: "Crystal Healing Set",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1602524206684-76b7ba355c3f?w=800&q=80",
    category: "physical",
    subcategory: "Crystals",
    inStock: true,
  },
  {
    id: 7,
    name: "Moon Phase Calendar 2026",
    price: 99,
    image:
      "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=800&q=80",
    category: "digital",
    subcategory: "Calendars",
    inStock: true,
  },
  {
    id: 8,
    name: "Sacred Geometry Oracle Cards",
    price: 279,
    image:
      "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80",
    category: "physical",
    subcategory: "Divination",
    inStock: false,
  },
];

export function Shop() {
  const { category } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(category || "all");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;
    const priceMatch =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return categoryMatch && priceMatch;
  });

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <h1
            className="text-5xl md:text-6xl mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Shop
          </h1>
          <p className="text-xl text-muted-foreground">
            Tools and treasures for your spiritual journey
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 shrink-0">
              <div className="sticky top-24">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden flex items-center gap-2 mb-4 px-4 py-2 border border-border rounded-lg w-full justify-center"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>

                <div
                  className={`space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}
                >
                  {/* Category Filter */}
                  <div>
                    <h3 className="mb-4 text-sm tracking-wider uppercase text-secondary">
                      Category
                    </h3>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value="all"
                          checked={selectedCategory === "all"}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 text-primary"
                        />
                        <span>All Products</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value="physical"
                          checked={selectedCategory === "physical"}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 text-primary"
                        />
                        <span>Physical Products</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="category"
                          value="digital"
                          checked={selectedCategory === "digital"}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="w-4 h-4 text-primary"
                        />
                        <span>Digital Products</span>
                      </label>
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <h3 className="mb-4 text-sm tracking-wider uppercase text-secondary">
                      Price Range
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <input
                          type="number"
                          value={priceRange[0]}
                          onChange={(e) =>
                            setPriceRange([
                              parseInt(e.target.value) || 0,
                              priceRange[1],
                            ])
                          }
                          className="w-full px-3 py-2 bg-input-background border border-border rounded"
                          placeholder="Min"
                        />
                        <span>-</span>
                        <input
                          type="number"
                          value={priceRange[1]}
                          onChange={(e) =>
                            setPriceRange([
                              priceRange[0],
                              parseInt(e.target.value) || 500,
                            ])
                          }
                          className="w-full px-3 py-2 bg-input-background border border-border rounded"
                          placeholder="Max"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-muted-foreground">
                  {filteredProducts.length}{" "}
                  {filteredProducts.length === 1 ? "product" : "products"}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link to={`/product/${product.id}`} className="group block">
                      <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square border border-border/50 group-hover:border-primary/30 transition-all shadow-sm group-hover:shadow-xl group-hover:shadow-primary/10">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center">
                            <span className="px-4 py-2 bg-muted border border-border text-sm rounded-full">
                              Out of Stock
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs text-primary tracking-wider uppercase">
                          {product.subcategory}
                        </p>
                        <h3
                          className="text-lg group-hover:text-primary transition-colors"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground">
                          SAR {product.price}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No products found matching your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
