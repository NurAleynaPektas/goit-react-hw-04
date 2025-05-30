import { useState, useEffect } from "react";
import SearchBar from "./assets/components/SearchBar";
import { Toaster } from "react-hot-toast";
import ImageGallery from "./assets/components/ImageGallery";
import Loader from "./assets/components/Loader";
import LoadMoreBtn from "./assets/components/LoadMore";
import ImageModal from "./assets/components/ImageModal";
import GetAndSetImages from "./assets/components/GetAndSetImages";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState(null);

  //unsplash api url
  const url = `https://api.unsplash.com/search/photos/?client_id=lGotqLU4Gbg74lO2mrl5Qe10pEQdADsoc5g0XvxF9fY&page=${page}&query=${query}`;

  function openModal(image) {
    setModalImg(image);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setModalImg(null);
  }

  useEffect(() => {
    if (query) {
      if (page > 1) {
        GetAndSetImages(url, setLoading, setImages, true);
      } else {
        GetAndSetImages(url, setLoading, setImages);
      }
    }
  }, [query, page, url]);

  return (
    <>
      <SearchBar query={query} setQuery={setQuery} setPage={setPage} />
      <ImageGallery images={images} onImgClick={openModal} />
      {loading && <Loader />}
      {images.lenght > 1 && <LoadMoreBtn setPage={setPage} />}
      {modalImg && (
        <ImageModal
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          modalImg={modalImg}
        />
      )}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
export default App;
