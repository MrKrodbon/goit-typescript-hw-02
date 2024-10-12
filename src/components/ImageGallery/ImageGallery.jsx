import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ data }) => {
  return (
    <div>
      <ul>
        {data.length === 0 ? (
          <li>
            <div>
              <img src="" alt="" />
            </div>
          </li>
        ) : (
          data.map((image) => (
            <li key={image.id}>
              <ImageCard data={image} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ImageGallery;
