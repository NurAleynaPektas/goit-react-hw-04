export default function ImageCard({ image, onImgClick }) {
  return (
    <img
      width={"200px"}
      height={"200px"}
      src={image.urls.small}
      alt={image.description}
      onClick={() => onImgClick(image)}
    />
  );
}
