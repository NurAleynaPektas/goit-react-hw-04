import Modal from "react-modal";
import styles from "./ImageModal.module.css";
Modal.setAppElement("#root");

export default function ImageModal({ isModalOpen, closeModal, modalImg }) {
  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button className={styles.closeBtn} onClick={closeModal}>
        &#10006;
      </button>

      {modalImg && (
        <>
          <img
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            src={modalImg.urls.regular}
            alt={modalImg.alt_description}
          />
        </>
      )}
    </Modal>
  );
}
