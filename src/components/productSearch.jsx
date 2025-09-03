import React, { useState } from "react";

// React Component
export default function ProductSearch() {
  const [query, setQuery] = useState("");

  // Products array
  const products = [
    "iPhone",
    "Samsung Galaxy",
    "MacBook",
    "Headphones",
    "Smart Watch",
    "Shoes",
    "Backpack",
    "Camera",
    "Tablet",
  ];

  // Filter products using includes
  const filteredProducts = products.filter((product) =>
    product.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-8 max-w-lg mx-auto bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
         Product Search
      </h2>

      {/* Search Input */}
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search "
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 pl-4 pr-10 py-3 w-full rounded-xl focus:ring-2 focus:ring-blue-400 outline-none shadow-sm"
        />
       
      </div>

      

      {/* Results */}
      <div className="bg-white rounded-xl shadow-md p-4">
        {query ? (
          filteredProducts.length > 0 ? (
            <ul className="space-y-2">
              {filteredProducts.map((product, index) => (
                <li
                  key={index}
                  className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer transition"
                >
                  {product}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-red-500 text-center font-medium">
               No products found
            </p>
          )
        ) : (
          // Default suggestions when input is empty
          <div>
            <p className="text-gray-700 mb-2 font-semibold text-center">
              Popular Products
            </p>
            <ul className="grid grid-cols-2 gap-3">
              <li className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer transition">
                iPhone
              </li>
              <li className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer transition">
                Samsung Galaxy
              </li>
              <li className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer transition">
                Shoes
              </li>
              <li className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer transition">
                Backpack
              </li>
              <li className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer transition">
                MacBook
              </li>
              <li className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer transition">
                Camera
              </li>
              <li className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer transition">
                Tablet
              </li>
              <li className="p-3 rounded-lg bg-blue-50 hover:bg-blue-100 cursor-pointer transition">
                Smart Watch
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
