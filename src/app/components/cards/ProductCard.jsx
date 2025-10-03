import React from "react";
import Image from "next/image";
import PrimaryButton from "../buttons/PrimaryButton";

const ProductCard = ({ name, price, image }) => {
    return (
        <div className="rounded-lg shadow-md bg-white overflow-hidden flex flex-col">
            {image && (
                <div className="relative w-full h-48">
                    <Image src={image} alt={name} fill className="object-cover" />
                </div>
            )}
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
                <p className="text-gray-700 mt-1">{price}</p>
                <PrimaryButton className="mt-auto">Buy Now</PrimaryButton>
            </div>
        </div>
    );
};

export default ProductCard;
