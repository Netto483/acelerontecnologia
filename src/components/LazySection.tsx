import { useEffect, useRef, useState, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  rootMargin?: string;
  fallbackHeight?: string;
}

const LazySection = ({ children, className = "", rootMargin = "200px", fallbackHeight = "200px" }: LazySectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, [rootMargin]);

  return (
    <div ref={ref} className={className}>
      {isVisible ? children : <div style={{ minHeight: fallbackHeight }} />}
    </div>
  );
};

export default LazySection;
