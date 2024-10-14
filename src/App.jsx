import { useEffect, useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import { MagnifyingGlass } from "react-loader-spinner";

import fetchPhotos from "/src/searchImage-api";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [image, setImage] = useState([]);
  const [page, setPage] = useState([]);
  const [userQuery, setUserQuery] = useState("");
  const [modalData, setModalData] = useState("");

  useEffect(() => {
    if (!userQuery) {
      console.log(userQuery);
    }
    (async () => {
      setIsLoading(true);
      const response = await fetchPhotos(userQuery, 1);

      if (response.status >= 400) {
        setIsError(true);
        setIsLoading(false);
        return;
      }
      setIsLoading(false);
      setIsError(false);

      setImage(response.data.results);
      console.log(response.data);
      console.log(userQuery);
    })();
  }, [userQuery, page]);

  const onHandleSubmit = (query) => {
    setUserQuery(query);
  };

  const onOpenModal = (data) => {
    setModalData(data);
    setModalIsOpen(true);
  };
  console.log(modalIsOpen);
  console.log(modalData);
  ///modal data here only alt-desc...see the url!

  const onCloseModal = () => {
    setModalIsOpen(false);
    setModalData(null);
  };

  return (
    <>
      <SearchBar onHandleSubmit={onHandleSubmit} />

      <ImageGallery data={image} onImageOpen={onOpenModal} />
      {modalIsOpen && (
        <ImageModal data={modalData} onImageClose={onCloseModal} />
      )}
      {isLoading && (
        <MagnifyingGlass
          visible={true}
          height="80"
          width="80"
          ariaLabel="magnifying-glass-loading"
          wrapperStyle={{}}
          wrapperClass="magnifying-glass-wrapper"
          glassColor="#c0efff"
          color="#e15b64"
        />
      )}
      {isError && <ErrorMessage />}
    </>
  );
}

export default App;
