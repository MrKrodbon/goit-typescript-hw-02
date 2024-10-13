import { useEffect, useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";

import fetchPhotos from "/src/searchImage-api";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [image, setImage] = useState([]);
  const [page, setPage] = useState([]);
  const [userQuery, setUserQuery] = useState("");
  const [modalData, setModalData] = useState("");

  useEffect(() => {
    if (!userQuery) {
      console.log(userQuery);
    }
    (async () => {
      const response = await fetchPhotos(userQuery, 1);
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
    </>
  );
}

export default App;
