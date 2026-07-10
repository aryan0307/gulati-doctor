import { motion, useReducedMotion } from 'framer-motion';

// Premium easing functions inspired by Apple, Linear, Stripe
export const easing = {
  easeOutCubic: [0.33, 1, 0.68, 1],
  easeInOutCubic: [0.65, 0, 0.35, 1],
  easeOutQuart: [0.25, 1, 0.5, 1],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeOutBack: [0.34, 1.56, 0.64, 1],
};

// Reusable animation variants
export const variants = {
  // Fade in animations
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, ease: easing.easeOutCubic } },
  },
  // Slide up animations
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing.easeOutCubic } },
  },
  // Slide left animations
  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easing.easeOutCubic } },
  },
  // Slide right animations
  slideRight: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: easing.easeOutCubic } },
  },
  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: easing.easeOutCubic } },
  },
  scaleBounce: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { 
        duration: 0.6, 
        ease: easing.easeOutBack 
      } 
    },
  },
  // Stagger container for children
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  },
};

// Motion-aware wrapper component that respects prefers-reduced-motion
export function MotionWrapper({ children, ...props }) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <>{children}</>;
  }
  
  return <motion.div {...props}>{children}</motion.div>;
}

// Scroll reveal component (enhanced version)
export function ScrollReveal({
  children,
  delay = 0,
  variant = 'slideUp',
  margin = '-80px',
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  
  if (shouldReduceMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin }}
      variants={variants[variant]}
      transition={{ delay, duration: 0.6, ease: easing.easeOutCubic }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

// Button hover effects
export function PremiumButton({ children, className, ...props }) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.button
      whileHover={shouldReduceMotion ? {} : { scale: 1.02, y: -2 }}
      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
      transition={{ duration: 0.2, ease: easing.easeOutCubic }}
      className={className}
      {...props}
    >
      {children}
    </motion.button>
  );
}

// Premium link component
export function PremiumLink({ children, className, ...props }) {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.a
      whileHover={shouldReduceMotion ? {} : { y: -1 }}
      transition={{ duration: 0.2, ease: easing.easeOutCubic }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
}
