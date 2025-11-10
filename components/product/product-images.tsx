"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);
  return (
    <div>
      <Image
        src={images[current]}
        alt="product images"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, index) => (
          <button
            type="button"
            key={image}
            className={cn(
              "border mr-2 cursor-pointer hover:border-orange-600",
              current === index && "border-orange-500"
            )}
            onClick={() => setCurrent(index)}
            onKeyDown={(e) => e.key === "Enter" && setCurrent(index)}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={image}
              alt={`Product image ${index + 1}`}
              height={100}
              width={100}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
