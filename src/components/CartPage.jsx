// src/pages/cartpage/CartPage.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);   // always an array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("accessToken");

  useEffect(() => {
    const fetchCart = async () => {
      if (!token) {
        setError("You must be logged in to view your cart.");
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(
          "http://localhost:8000/api/v1/cart/get-cart",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        // Your API returns { statusCode, data: [ ... ], message, success }
        const data = response.data?.data;

        if (Array.isArray(data)) {
          setCartItems(data);
        } else {
          console.error("Expected data array, got:", data);
          setCartItems([]);
        }
      } catch (err) {
        console.error("Error fetching cart:", err);
        if (err.response?.status === 401) {
          setError("Session expired. Please log in again.");
        } else {
          setError("Failed to load cart items.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [token]);

  const calculateTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (loading) {
    return (
      <div className="p-8 text-center">
        <p>Loading your cart…</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.productId}
                className="flex items-center bg-white p-4 rounded shadow"
              >
                <img
                  src={item.productImage}
                  alt={item.productName}
                  className="w-16 h-16 object-cover rounded mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-xl font-semibold">
                    {item.productName}
                  </h2>
                  <p className="text-gray-600">₹{item.price}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
                <div className="text-lg font-bold">
                  ₹{item.price * item.quantity}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <span className="text-2xl font-bold">
              Total: ₹{calculateTotal()}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
