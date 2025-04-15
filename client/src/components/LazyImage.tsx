import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
}

const LazyImage = ({ src, alt, className = '', width, height }: LazyImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    // Check if IntersectionObserver is available (for browser support)
    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        // When image comes into view
        if (entries[0].isIntersecting) {
          setIsInView(true);
          // Stop observing once it's in view
          if (imgRef.current) {
            observer.unobserve(imgRef.current);
          }
        }
      },
      {
        // Start loading a bit before it comes into view
        rootMargin: '200px 0px',
        threshold: 0.01
      }
    );
    
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }
    
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);
  
  // Handle image load event
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-r from-[#152747] via-[#0A1128] to-[#152747] animate-pulse"
          style={{ aspectRatio: width && height ? width / height : 'auto' }}
        />
      )}
      
      {/* Actual image with fade-in effect */}
      <motion.img
        ref={imgRef}
        src={isInView ? src : ''}
        alt={alt}
        width={width}
        height={height}
        onLoad={handleImageLoad}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`w-full h-full object-cover ${isLoaded ? '' : 'invisible'}`}
        loading="lazy"
      />
    </div>
  );
};

export default LazyImage;