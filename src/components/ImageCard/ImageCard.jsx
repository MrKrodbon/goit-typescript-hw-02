import css from "./ImageCard.module.css";
import { FaHeart } from "react-icons/fa6";

const ImageCard = ({
  data: {
    likes,
    alt_description,
    urls: { full, regular },
    user: {
      name,
      profile_image: { large },
    },
  },
  onOpenModal,
}) => {
  const onClickOpenModal = () => {
    onOpenModal({ alt_description, full });
  };

  return (
    <div className={css.imageCard} onClick={onClickOpenModal}>
      <img
        src={regular}
        alt={alt_description}
        height={100}
        width={200}
        className={css.image}
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
