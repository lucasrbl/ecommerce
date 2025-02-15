type ImagePropsType = {
  className?: string;
  src: string;
  alt: string;
  isAriaHidden?: boolean;
  width?: number;
  height?: number;
};

export function Image({
  alt,
  isAriaHidden,
  src,
  className,
  height,
  width,
}: ImagePropsType) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      aria-hidden={isAriaHidden}
      width={width}
      height={height}
    />
  );
}
