import { useEffect, useState } from "react";
import React from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";

import fetchPhotos from "./searchImage-api.ts";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

import { Image, ResponseFetchPhoto } from "./App.ts";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [image, setImage] = useState<Image[]>([]);
  const [page, setPage] = useState<number>(1);
  const [userQuery, setUserQuery] = useState<string>("");
  const [modalData, setModalData] = useState<Image | null>(null);
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

  const onOpenModal = (data: Image) => {
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

      {image.length !== 0 && <LoadMoreBtn onLoadMore={onLoadMoreHandle} />}
    </>
  );
}

export default App;
