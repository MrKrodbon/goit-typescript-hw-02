import css from "./ImageCard.module.css";
import { FaHeart } from "react-icons/fa6";
import { ImageCardProps } from "./ImageCard.types";

const ImageCard = ({
  data: {
    likes,
    alt_description,
    urls: { regular },
    user: {
      name,
      profile_image: { large },
    },
  },
  onOpenModal,
}: ImageCardProps) => {
  const onClickOpenModal = () => {
    onOpenModal({ alt_description, regular });
  };

  return (
    <div className={css.imageCard}>
      <img
        src={regular}
        alt={alt_description}
        height={100}
        width={200}
        className={css.image}
        onClick={onClickOpenModal}
      />
      <ul className={css.contentList}>
        <li className={css.contentListItem} key={name}>
          <a>
            <img
              src={large}
              alt="author profile image"
              className={css.authorImage}
            />
          </a>
        </li>
        <li className={css.contentListItem}>
          <p className={css.content}>{name}</p>
        </li>
        <li className={css.contentListItem}>
          <p className={css.content}>
            <FaHeart /> {likes}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default ImageCard;
