import { useEffect, useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";

import fetchPhotos from "/src/searchImage-api";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [image, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [userQuery, setUserQuery] = useState("");
  const [modalData, setModalData] = useState([]);
  const [totalPage, setTotalPage] = useState(null);

  useEffect(() => {
    if (!userQuery) {
      return;
    }

    (async () => {
      setIsLoading(true);
      const response = await fetchPhotos(userQuery, page);

      if (response.status >= 400 || response.data.results.length === 0) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      setTotalPage(response.data.total_pages);

      setIsLoading(false);
      setIsError(false);

      setImage((prevImages) => {
        return [...prevImages, ...response.data.results];
      });
    })();
  }, [userQuery, page]);

  useEffect(() => {
    if (isLoading === false && page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [image]);

  const onHandleSubmit = (query) => {
    setImage([]);

    setPage(1);
    setUserQuery(query);
  };

  const onOpenModal = (data) => {
    setModalIsOpen(true);
    setModalData(data);
  };

  const onCloseModal = () => {
    setModalIsOpen(false);
    setModalData(null);
  };

  const onLoadMoreHandle = () => {
    setIsLoading(true);
    setPage(page + 1);
    setIsLoading(false);
  };

  return (
    <>
      <SearchBar onHandleSubmit={onHandleSubmit} />
      <ImageGallery data={image} onImageOpen={onOpenModal} />
      {modalData && (
        <ImageModal
          modalData={modalData}
          onImageClose={onCloseModal}
          isOpen={modalIsOpen}
        />
      )}

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}

      {image.length !== 0 && page !== totalPage && (
        <LoadMoreBtn onLoadMore={onLoadMoreHandle} />
      )}
    </>
  );
}

export default App;
