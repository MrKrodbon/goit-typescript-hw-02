import ImageCard from "/src/components/ImageCard/ImageCard";

import css from "./ImageGallery.module.css";

const ImageGallery = ({ data, onImageOpen }) => {
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
              <ImageCard data={image} onOpenModal={onImageOpen} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ImageGallery;
