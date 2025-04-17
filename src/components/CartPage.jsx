import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCart = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("accessToken");

      const response = await axios.get("http://localhost:8000/api/v1/cart/get-cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCartItems(response.data.message);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching cart:", err);
      setError("Failed to fetch cart data");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = (productId, delta) => {
    const updatedItems = cartItems.map((item) => {
      if (item.productId === productId) {
        const newQuantity = item.quantity + delta;
        return {
          ...item,
          quantity: newQuantity > 0 ? newQuantity : 1,
        };
      }
      return item;
    });

    setCartItems(updatedItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };

  if (loading) return <div className="text-white p-8">Loading...</div>;
  if (error) return <div className="text-red-500 p-8">{error}</div>;

  return (
    <div className="bg-gray-900 min-h-screen text-white py-12 px-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.productId}
              className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg shadow"
            >
              <img
                src={item.productImage}
                alt={item.productName}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.productName}</h2>
                <p className="text-gray-400">₹{item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => updateQuantity(item.productId, -1)}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.productId, 1)}
                    className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="text-lg font-semibold">
                ₹{item.quantity * item.price}
              </div>
            </div>
          ))}

          <div className="mt-8 text-2xl font-bold">
            Total: ₹{calculateTotal()}
          </div>
        </div>
      )}
    </div>
  );
}
