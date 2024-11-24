import { useEffect, useState } from "react";

import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/Loader/LoadMoreBtn/LoadMoreBtn";

import fetchPhotos from "./api/searchImage-api";
import { Image, Modal, ResponseFetchPhoto } from "./types";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [image, setImage] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [userQuery, setUserQuery] = useState<string>("");
  const [modalData, setModalData] = useState<Modal | null>(null);
  const [totalPage, setTotalPage] = useState<number | null>(null);

  useEffect(() => {
    if (!userQuery) {
      return;
    }

    (async () => {
      setIsLoading(true);
      const response: ResponseFetchPhoto = await fetchPhotos(userQuery, page);

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
  console.log(image);

  useEffect(() => {
    if (isLoading === false && page > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [image]);

  const onHandleSubmit = (query: string) => {
    setImage([]);

    setPage(1);
    setUserQuery(query);
  };

  const onOpenModal = (data: Modal) => {
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
  console.log("modal" + modalData);

  return (
    <>
      <SearchBar onHandleSubmit={onHandleSubmit} />
      <ImageGallery data={image} onOpenModal={onOpenModal} />
      {modalData && (
        <ImageModal
          modalData={modalData}
          onImageClose={onCloseModal}
          isOpen={modalIsOpen}
        />
      )}

      {isLoading && <Loader />}
      {isError && <ErrorMessage />}

      {image.length !== 0 && <LoadMoreBtn onLoadMore={onLoadMoreHandle} />}
    </>
  );
}

export default App;
