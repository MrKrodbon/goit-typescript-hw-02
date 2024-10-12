import { useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";

import fetchPhotos from "/src/searchImage-api";

function App() {
  const [image, setImage] = useState([]);

  const onHandleSubmit = (query) => {
    (async () => {
      const response = await fetchPhotos({ query }, 1);
      setImage(response.data);
      console.log(response.data);
    })();
  };

  return (
    <>
      <SearchBar onHandleSubmit={onHandleSubmit} />
      <ImageGallery data={image} />
    </>
  );
}

export default App;
