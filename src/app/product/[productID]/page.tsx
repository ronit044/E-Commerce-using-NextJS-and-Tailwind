"use client"
import { AllProductsType } from "@/components/Product-display/product-type";
import { useState,useEffect } from "react";
import Image from "next/image";
async function fetchProductData(): Promise<AllProductsType[]> {
  const apiUrl = process.env.NEXT_PUBLIC_PRODUCTS_API || "";

    const res = await fetch(apiUrl);
    const data = await res.json();
    return data;
}
  

const FullProductInfo=({params}:{params:{productID:string}})=>{
    const [products, setProducts] = useState<AllProductsType[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProductData();
      setProducts(data);
    }

    fetchData();
  }, []); 
      if (!products) {
        return <div>Loading...</div>;
      }
  return  <div>
    {products
      .filter((product) => product.id.toString() === params.productID)
      .map((product) => (




        
        <div key={product.id} className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
      <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative h-96">
            <Image
              src={product.image}
              alt={product.title}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h1 className="text-4xl font-bold">{product.title}</h1>
              <p className="text-xl text-blue-500">₹ {product.price?.toFixed(2)}</p>
            </div>

            {/* Star Rating */}
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={`text-yellow-500 text-2xl cursor-pointer ${
                    index < 3 ? "opacity-70" : "opacity-100"
                  }`}
                >
                  ★
                </span>
              ))}
              <span className="text-gray-500 text-lg">(1234 reviews)</span>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4">
              <button className="bg-yellow-500 text-white px-8 py-4 rounded-full hover:bg-yellow-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300">
                Add to Cart
              </button>
              <button className="bg-blue-500 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105 focus:outline-none focus:ring focus:border-blue-300">
                Buy Now
              </button>
            </div>

            {/* Product Description */}
            <div className="text-gray-700">{product.description}</div>
          </div>
        </div>
      </div>
    </div>






















))}
  </div>
}

export default FullProductInfo;