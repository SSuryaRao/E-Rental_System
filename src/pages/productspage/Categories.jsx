import { useState } from 'react';

const CategoriesHero1 = () => {
    const categories = ["Furniture", "TV", "Fridge", "Electronics"];
    
    // Mock product data for each category
    const productsByCategory = {
        Furniture: [
            { id: 1, name: "Modern Sofa", price: 299, image: "https://via.placeholder.com/150?text=Sofa" },
            { id: 2, name: "Wooden Table", price: 199, image: "https://via.placeholder.com/150?text=Table" }
        ],
        TV: [
            { id: 3, name: "4K Smart TV", price: 799, image: "https://via.placeholder.com/150?text=TV" },
            { id: 4, name: "OLED 55-inch", price: 1299, image: "https://via.placeholder.com/150?text=OLED" }
        ],
        Fridge: [
            { id: 5, name: "French Door Fridge", price: 1599, image: "https://via.placeholder.com/150?text=Fridge" },
            { id: 6, name: "Mini Fridge", price: 199, image: "https://via.placeholder.com/150?text=MiniFridge" }
        ],
        Electronics: [
            { id: 7, name: "Wireless Headphones", price: 99, image: "https://via.placeholder.com/150?text=Headphones" },
            { id: 8, name: "Smart Watch", price: 199, image: "https://via.placeholder.com/150?text=Watch" }
        ]
    };

    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <div className="bg-gray-100 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                        Explore Our Product Categories
                    </h1>
                    <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4">
                        Browse through our diverse range of product categories to find exactly what you're looking for.
                    </p>
                    <div className="mt-8 space-x-4">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`inline-block border border-gray-300 rounded-md py-2 px-4 text-sm font-medium ${
                                    selectedCategory === category 
                                        ? 'bg-gray-800 text-white' 
                                        : 'bg-white text-gray-700 hover:bg-gray-200'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Products display section */}
                    {selectedCategory && (
                        <div className="mt-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{selectedCategory}</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                                {productsByCategory[selectedCategory].map((product) => (
                                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                        <img 
                                            src={product.image} 
                                            alt={product.name}
                                            className="w-full h-48 object-cover"
                                        />
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                                            <p className="mt-1 text-lg font-medium text-gray-800">${product.price}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CategoriesHero1;