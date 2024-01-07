"use client";
import { useState, useEffect } from 'react';
import ImageSlider from "@/components/Home-page-Slider/Slider";
import ProductTile from "@/components/Product-display/product-display-tile";
import Link from "next/link";
import { ProductTileProps } from '@/components/Product-display/product-type';

async function fetchProductData(): Promise<ProductTileProps[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_PRODUCTS_API);
  const data = await res.json();
  return data;
}

const LoadingPlaceholder = () => (
  

  <div className="max-w-xs sm:max-w-full md:max-w-xs lg:max-w-xs xl:max-w-xs animate-pulse">
    <div className="flex flex-col items-center justify-center bg-gray-200 border-2 border-gray-300 rounded-lg shadow-lg h-72">
      <div className="relative overflow-hidden w-60 h-44 lg:h-60 xl:h-72">
        <div className="bg-gray-400 w-full h-full"></div>
      </div>
      <div className="p-4">
        <div className="bg-gray-400 w-2/3 h-6 mb-2"></div>
        <div className="bg-gray-400 w-1/2 h-6"></div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 pb-5">
        <div className="bg-gray-400 w-full sm:w-1/2 h-12"></div>
        <div className="bg-gray-400 w-full sm:w-1/2 h-12"></div>
      </div>
    </div>
  </div>




);

export default function Home() {
  const [products, setProducts] = useState<ProductTileProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetchProductData();
      setProducts(data);
    }

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <div className="flex flex-col">
      <section id="home-page-ads">
        <ImageSlider />
      </section>
      <section>
        <Link href="/allproducts">
          <div className="bg-gray-200 flex items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 overflow-hidden">
            <h1 className="text-5xl font-extrabold p-6 shadow-lg transition-transform duration-300 transform hover:scale-110"> All Products</h1>
          </div>
        </Link>
      </section>
      <div className="flex justify-center">
        <section id="All-product-displays" className="grid -ml-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 p-4">
          {products.length === 0 ? (
            // Display loading placeholders until products are loaded
            
            Array.from({ length: 8 }).map((_, index) => (
              <LoadingPlaceholder key={index} />
            ))
          ) : (
            // Display actual product tiles once products are loaded
            products.map((product) => (
              <ProductTile
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                image={product.image}
              />
            ))
          )}
        </section>
      </div>
    </div>
  );
}
