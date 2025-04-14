import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// Consider adding icons if you have an icon library like react-icons
// import { FaShoppingCart, FaBolt } from 'react-icons/fa';

// Get the base API URL from Vite environment variables
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            setProduct(null);
            setError(null);

            // Check if the API base URL is defined
            if (!API_BASE_URL) {
                setError("API base URL is not configured. Please check your .env file and ensure VITE_API_BASE_URL is set.");
                console.error("VITE_API_BASE_URL is not defined in environment variables.");
                return; // Stop execution if base URL is missing
            }

            try {
                // Construct the full API endpoint using the base URL and product ID
                const apiUrl = `${API_BASE_URL}/product/productByID/${id}`;
                console.log("Fetching from:", apiUrl); // Optional: Log the URL for debugging

                const res = await axios.get(apiUrl); // Use the constructed URL

                if (res.data && res.data.data) {
                    setProduct(res.data.data);
                } else {
                    setError("Product data not found in API response.");
                }
            } catch (fetchError) {
                console.error("Error fetching product details:", fetchError);
                setError(`Failed to load product. ${fetchError.response?.data?.message || fetchError.message}`);
            }
        };

        if (id) {
            fetchProduct();
        } else {
            setError("No product ID provided in the URL.");
        }

    }, [id]); // Dependency array includes 'id'

    // --- Loading State ---
    if (!product && !error) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <p className="text-center py-20 text-2xl font-semibold text-gray-500 animate-pulse">
                    Loading Awesome Product...
                </p>
            </div>
        );
    }

    // --- Error State ---
    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
                <p className="text-center py-20 text-xl text-red-700 bg-red-100 p-6 rounded-lg shadow">
                    Error: {error}
                </p>
            </div>
        );
    }

    // --- Product Display ---
    // (The JSX for displaying the product remains the same as the previous version)
    // ... (keep the aggressive ecommerce design from the previous response here)
    return (
        <div className="bg-gray-50 min-h-screen py-16 md:py-24 px-4"> {/* Lighter page bg, more vertical padding */}
            <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden"> {/* Wider container, more shadow/rounding */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0"> {/* Grid layout, no gap between image/text sections */}

                    {/* Image Section - More Prominent */}
                    <div className="p-6 md:p-8 bg-gray-100 flex items-center justify-center min-h-[300px] md:min-h-[500px]"> {/* Subtle bg for image area, ensures height */}
                        <img
                            src={product.image || 'https://via.placeholder.com/600x600.png?text=No+Image'} // Larger placeholder
                            alt={product.name || 'Product image'}
                            className="max-w-full max-h-[500px] h-auto object-contain rounded-lg transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer" // Allow natural width/height up to max, pointer on hover
                        />
                    </div>

                    {/* Details Section - Aggressive Styling */}
                    <div className="p-8 md:p-12 flex flex-col"> {/* More padding */}
                        <div>
                            {/* Category/Brand (optional but common) */}
                            <p className="text-sm font-medium text-orange-600 uppercase tracking-wider mb-2">
                                {product.categoryID?.name || 'General Category'}
                            </p>

                            {/* Product Name - Bolder */}
                            <h1 className="text-4xl lg:text-5xl font-extrabold mb-4 text-gray-900 leading-tight"> {/* Larger, bolder name */}
                                {product.name}
                            </h1>

                            {/* Placeholder for Rating */}
                            {/* <div className="flex items-center mb-4">
                                <span className="text-yellow-500">★★★★☆</span>
                                <span className="ml-2 text-sm text-gray-500">(120 Reviews)</span>
                            </div> */}

                            {/* Price - Very Prominent */}
                            <p className="text-4xl font-bold text-orange-700 mb-6"> {/* Stronger price color */}
                                ₹{product.price ? product.price.toFixed(2) : 'Price Unavailable'}
                            </p>

                             {/* Stock Status (Example) - Use optional chaining for safety */}
                             <p className={`font-semibold mb-6 ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                            </p>

                            {/* Description - Cleaned up */}
                            <p className="text-gray-700 mb-8 leading-relaxed text-base md:text-lg"> {/* Slightly larger description */}
                                {product.description}
                            </p>

                            {/* Divider */}
                            <hr className="my-6 border-gray-200" />

                            {/* Seller Info - More Subtle */}
                            <div className="space-y-2 text-sm">
                                <p className="text-gray-600">
                                    <span className="font-medium text-gray-800">Sold by:</span>
                                    {' '}{product.sellerID?.storeName || 'Unknown Seller'}
                                </p>
                                {product.sellerID?.gstNumber && (
                                    <p className="text-gray-600">
                                        <span className="font-medium text-gray-800">GSTIN:</span>
                                        {' '}{product.sellerID.gstNumber}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Action Buttons - Large and Bold */}
                        <div className="mt-auto pt-8"> {/* Pushes buttons to bottom */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* Add to Cart - Primary Action */}
                                <button
                                    disabled={!product.stock || product.stock <= 0} // Disable if out of stock
                                    className={`w-full sm:w-auto flex-1 bg-orange-600 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md transform focus:outline-none focus:ring-4 focus:ring-orange-300 transition duration-200 ease-in-out ${product.stock > 0 ? 'hover:bg-orange-700 hover:scale-105 active:scale-100' : 'opacity-50 cursor-not-allowed'}`}
                                >
                                    {/* Optional Icon: <FaShoppingCart className="inline mr-2" /> */}
                                    Add to Cart
                                </button>

                                {/* Buy Now - Secondary Action */}
                                <button
                                    disabled={!product.stock || product.stock <= 0} // Disable if out of stock
                                    className={`w-full sm:w-auto flex-1 bg-gray-800 text-white text-lg font-semibold px-8 py-4 rounded-lg shadow-md transform focus:outline-none focus:ring-4 focus:ring-gray-400 transition duration-200 ease-in-out ${product.stock > 0 ? 'hover:bg-gray-900 hover:scale-105 active:scale-100' : 'opacity-50 cursor-not-allowed'}`}
                                >
                                    {/* Optional Icon: <FaBolt className="inline mr-2" /> */}
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;