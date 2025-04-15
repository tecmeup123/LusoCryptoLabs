import { useEffect, useState } from 'react';

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);
  
  // Calculate scroll progress (0 to 1)
  const scrollProgress = documentHeight > windowHeight
    ? scrollY / (documentHeight - windowHeight)
    : 0;
  
  useEffect(() => {
    // Get initial measurements
    setWindowHeight(window.innerHeight);
    setDocumentHeight(document.body.scrollHeight);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    const handleResize = () => {
      setWindowHeight(window.innerHeight);
      setDocumentHeight(document.body.scrollHeight);
    };
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    // Initial call
    handleScroll();
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  // Check if element is in viewport
  const isInViewport = (element: HTMLElement, offset = 0): boolean => {
    if (!element) return false;
    
    const rect = element.getBoundingClientRect();
    const isVisible = 
      rect.top <= windowHeight - offset && 
      rect.bottom >= 0 + offset;
      
    return isVisible;
  };
  
  // Calculate progress of element in viewport (0 to 1)
  const getElementViewportProgress = (element: HTMLElement): number => {
    if (!element) return 0;
    
    const rect = element.getBoundingClientRect();
    const elementHeight = rect.height;
    
    // Element is above viewport
    if (rect.bottom <= 0) return 1;
    
    // Element is below viewport
    if (rect.top >= windowHeight) return 0;
    
    // Element is partially in viewport from top
    if (rect.top < 0 && rect.bottom > 0) {
      return rect.bottom / elementHeight;
    }
    
    // Element is partially in viewport from bottom
    if (rect.top < windowHeight && rect.bottom > windowHeight) {
      return (windowHeight - rect.top) / elementHeight;
    }
    
    // Element is fully in viewport
    return 1;
  };
  
  return {
    scrollY,
    windowHeight,
    documentHeight,
    scrollProgress,
    isInViewport,
    getElementViewportProgress
  };
}