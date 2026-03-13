interface PlaceholderImageProps {
  aspectRatio?: string;
  className?: string;
  label?: string;
}

const PlaceholderImage = ({
  aspectRatio = "4/3",
  className = "",
  label,
}: PlaceholderImageProps) => {
  return (
    <div
      className={`placeholder-image ${className}`}
      style={{ aspectRatio }}
    >
      {label && (
        <span className="editorial-subheading text-muted-foreground/40 select-none">
          {label}
        </span>
      )}
    </div>
  );
};

export default PlaceholderImage;
