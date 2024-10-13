import css from "./ImageModal.module.css";
import { IoMdClose } from "react-icons/io";

const ImageModal = ({
  data: {
    alt_description,
    urls: { full },
  },
}) => {
  return (
    <div className={css.modal}>
      <div className="modalWrapper">
        <div className="modalContent">
          <a href={full}>
            <img src={full} alt={alt_description} />
          </a>
          <button className={css.modalCloseBtn}>
            <IoMdClose color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
