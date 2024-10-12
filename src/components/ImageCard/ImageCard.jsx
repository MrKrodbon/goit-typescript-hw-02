const ImageCard = ({
  data: {
    likes,
    description,
    urls: { regular },
  },
}) => {
  return (
    <div>
      <img src={regular} alt={description} height={100} width={200} />
      <p>Likes: {likes}</p>
    </div>
  );
};

export default ImageCard;
