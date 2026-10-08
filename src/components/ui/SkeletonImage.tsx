"use client";

import React, { useState } from "react";
import Image, { ImageProps } from "next/image";

export interface SkeletonImageProps extends ImageProps {
  skeletonClassName?: string;
  wrapperClassName?: string;
}

export const SkeletonImage: React.FC<SkeletonImageProps> = ({
  className = "",
  skeletonClassName = "",
  wrapperClassName = "",
  alt,
  onLoad,
  fill,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // If using fill layout, wrapper must take full parent dimensions
  if (fill) {
    return (
      <div className={`relative w-full h-full overflow-hidden ${wrapperClassName}`}>
        {!isLoaded && (
          <div
            className={`absolute inset-0 z-0 animate-shimmer rounded-[inherit] ${skeletonClassName}`}
          />
        )}
        <Image
          {...props}
          fill
          alt={alt}
          className={`${className} transition-opacity duration-300 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={(e) => {
            setIsLoaded(true);
            if (onLoad) onLoad(e);
          }}
        />
      </div>
    );
  }

  // If using explicit width and height
  return (
    <div className={`relative inline-block overflow-hidden ${wrapperClassName}`}>
      {!isLoaded && (
        <div
          className={`absolute inset-0 z-0 animate-shimmer rounded-[inherit] ${skeletonClassName}`}
        />
      )}
      <Image
        {...props}
        alt={alt}
        className={`${className} transition-opacity duration-300 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={(e) => {
          setIsLoaded(true);
          if (onLoad) onLoad(e);
        }}
      />
    </div>
  );
};
