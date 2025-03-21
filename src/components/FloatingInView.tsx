import React, { ReactNode, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface FloatingInViewProps {
  children: ReactNode;
  threshold?: number;
  className?: string;
}

const FloatingInView: React.FC<FloatingInViewProps> = ({
  children,
  threshold = 0.1,
  className,
}) => {
  const { ref, inView } = useInView({ threshold });
  const [hasAnimated, setHasAnimated] = useState(false);

  if (inView && !hasAnimated) {
    setHasAnimated(true);
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 100 }}
      animate={hasAnimated ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingInView;
