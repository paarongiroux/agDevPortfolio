interface ImageWithCaptionProps {
  src: string;
  alt: string;
  caption: string;
  width?: number | string;
  centered?: boolean;
}

const ImageWithCaption: React.FC<ImageWithCaptionProps> = ({ src, alt, caption, width, centered }) => {
  return (
    <div
      className={`image-container ${centered ? 'centered' : ''}`}
      style={{ width }}
    >
      <img src={src} alt={alt} className="image" />
      <p className="caption">{caption}</p>
    </div>
  );
};

export default ImageWithCaption;