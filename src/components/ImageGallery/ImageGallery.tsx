import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import { ImageGalleryProps } from "./ImageGallery.types";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ data, onOpenModal }: ImageGalleryProps) => {
  return (
    <div>
      <ul className={css.imageList}>
        {data.length === 0 ? (
          <li>
            <div>
              <img src="" alt="" />
            </div>
          </li>
        ) : (
          data.map((image) => (
            <li key={image.id}>
              <ImageCard data={image} onOpenModal={onOpenModal} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ImageGallery;
