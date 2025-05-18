import ImageCard from "./ImageCard";
import styles from "./ImageGallery.module.css";

export default function ImageGallery({ images, onImgClick }) {
  return (
    <ul className={styles.imageGallery}>
      {images.map((image) => (
        <li className={styles.galleryItem} key={image.id}>
          <ImageCard image={image} onImgClick={onImgClick} />
        </li>
      ))}
    </ul>
  );
}
