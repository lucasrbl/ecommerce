type RoundedImagePropsType = {
  className?: string;
  src: string;
  alt: string;
  isAriaHidden?: boolean;
  size: number;
};

export default function RoundedImage({
  alt,
  isAriaHidden,
  src,
  className,
  size,
}: RoundedImagePropsType) {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full ${className}`}
      aria-hidden={isAriaHidden}
      width={size}
      height={size}
    />
  );
}
