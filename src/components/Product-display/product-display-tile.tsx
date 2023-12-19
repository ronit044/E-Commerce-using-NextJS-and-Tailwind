"use client"

import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ProductTileProps } from "./product-type";


const ProductTile = ({ id, title, price, image }:ProductTileProps) => {
    function handleClick() {
        alert("Product tile button pressed!!");
    }

    return (
        <div className="max-w-xs ">
            <div className="max-w-xs  flex overflow-hidden flex-col items-center justify-center bg-gray-300  border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
            
                <div className=" relative antialiased overflow-hidden w-full h-52">
                <Link href={`/product/${id}`}><Image
                        src={image}
                        alt="Product Image"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg p-6"
                    /></Link>
                </div>
                <Link href={`/product/${id}`}>
                <div >
                    <div className="text-2xl font-bold underline font- mb-2">
                        {title}
                    </div>
                    <div className="text-lg text-bold mb-4">
                        ₹ {price}
                    </div>
                </div>
            </Link>
                <div className="flex gap-4 pb-5">
                    <Button
                        onClick={handleClick}
                        variant={"destructive"}
                        className="w-full"
                    >
                        Add to Cart
                    </Button>
                    <Button
                        onClick={handleClick}
                        variant="default"
                        className="w-full"
                    >
                        Buy Now
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default ProductTile;
