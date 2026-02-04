"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface CyclingPortraitProps {
  images: string[];
  interval?: number; // ms between transitions
  className?: string;
}

export default function CyclingPortrait({
  images,
  interval = 3000,
  className = "",
}: CyclingPortraitProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {images.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
            i === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt="Portrait"
            fill
            className="object-cover"
            priority={i === 0}
            sizes="(max-width: 768px) 96px, 128px"
          />
        </div>
      ))}
    </div>
  );
}
