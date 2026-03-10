import { useState, memo } from "react";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const OptimizedImage = memo(({ src, alt, className = "", ...props }: OptimizedImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={`transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"} ${className}`}
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
});

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
