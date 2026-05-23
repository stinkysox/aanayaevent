import React, { useState } from 'react';

export function ShimmerImage({ className, alt, src, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${!isLoaded ? 'bg-gray-200 dark:bg-gray-800' : ''} ${className || ''}`}>
      {/* Shimmer Effect */}
      {!isLoaded && (
        <>
          <div 
            className="absolute inset-0 z-10 w-full h-full bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent -translate-x-full" 
            style={{ animation: "shimmer 1.5s infinite" }}
          />
          <style>{`
            @keyframes shimmer {
              100% { transform: translateX(100%); }
            }
          `}</style>
        </>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />
    </div>
  );
}
