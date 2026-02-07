import { useLocation, useOutlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { PageSkeleton } from "./PageSkeleton";

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.15, ease: "easeIn" as const } },
};

export function AnimatedOutlet() {
  const location = useLocation();
  const outlet = useOutlet();
  const [showSkeleton, setShowSkeleton] = useState(false);
  const prevPath = useRef(location.pathname);

  useEffect(() => {
    if (prevPath.current !== location.pathname) {
      prevPath.current = location.pathname;
      setShowSkeleton(true);
      const timer = setTimeout(() => setShowSkeleton(false), 120);
      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      {showSkeleton ? (
        <motion.div
          key="skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.08 } }}
          exit={{ opacity: 0, transition: { duration: 0.08 } }}
          className="min-h-full"
        >
          <PageSkeleton />
        </motion.div>
      ) : (
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="min-h-full"
        >
          {outlet}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
