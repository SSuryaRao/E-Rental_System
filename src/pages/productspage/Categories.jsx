import React from 'react';

const CategoriesHero1 = () => {
    const categories = ["Furniture", "TV", "Fridge", "Electronics"];

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
                            <a
                                key={category}
                                href={`/category/${category.toLowerCase()}`} // Replace with your actual category links
                                className="inline-block bg-white border border-gray-300 rounded-md py-2 px-4 text-sm font-medium text-gray-700 hover:bg-gray-200">
                                {category}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesHero1;