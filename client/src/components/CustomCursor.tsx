import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    // Hide cursor when it leaves the window
    const addEventListeners = () => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseenter', onMouseEnter);
      document.addEventListener('mouseleave', onMouseLeave);
    };
    
    const removeEventListeners = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
    
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const onMouseEnter = () => {
      setIsVisible(true);
    };
    
    const onMouseLeave = () => {
      setIsVisible(false);
    };
    
    addEventListeners();
    return () => removeEventListeners();
  }, []);
  
  return (
    <>
      <motion.div
        className="cursor-dot"
        animate={{
          opacity: isVisible ? 1 : 0,
          x: position.x,
          y: position.y,
        }}
      />
      <motion.div
        className="cursor-outline"
        animate={{
          opacity: isVisible ? 1 : 0,
          x: position.x,
          y: position.y,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 200,
          mass: 0.5
        }}
      />
    </>
  );
};

export default CustomCursor;