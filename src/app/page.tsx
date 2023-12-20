"use client"
import { useState, useEffect } from 'react';
import ImageSlider from "@/components/Home-page-Slider/Slider";
import ProductTile from "@/components/Product-display/product-display-tile";
import Link from "next/link";
import { HomeProps, ProductTileProps } from '@/components/Product-display/product-type';

async function fetchProductData(): Promise<ProductTileProps[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
}

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
            <h1 className="text-5xl font-extrabold p-6 shadow-lg transition-transform duration-300 transform hover:scale-110 "> All Products</h1>
          </div>
        </Link>
      </section>
      <div className="flex justify-center">
      <section id="All-product-displays" className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-10 p-5">
        {products.map((product) => (
          <ProductTile
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </section>
      </div>
    </div>
  );
}
