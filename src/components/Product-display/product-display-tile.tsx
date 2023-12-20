// Import necessary modules
"use client"
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ProductTileProps } from "./product-type";

const ProductTile = ({ id, title, price, image }: ProductTileProps) => {
  function handleClick() {
    alert("Product tile button pressed!!");
  }

  return (
    <div className="max-w-xs sm:max-w-full md:max-w-xs lg:max-w-xs xl:max-w-xs">
      <div className=" flex flex-col items-center justify-center bg-gray-300 border-2 border-black rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
        <div className="relative overflow-hidden w-full h-44 lg:h-60 xl:h-72">
          <Link href={`/product/${title}`}>
            <Image
              src={image}
              alt="Product Image"
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg p-6"
            />
          </Link>
        </div>
        <div className="p-4">
          <Link href={`/product/${title}`}>
            <div className="text-2xl font-bold underline mb-2 line-clamp-2">
              {title}
            </div>
          </Link>
          <div className="text-lg text-bold mb-4">₹ {price}</div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 pb-5">
          <Button
            id={id.toString()}
            onClick={handleClick}
            variant={"destructive"}
            className="w-full sm:w-1/2 "
          >
            Add to Cart
          </Button>
          <Button
            id={id.toString()}
            onClick={handleClick}
            variant="default"
            className="w-full sm:w-1/2 "
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
