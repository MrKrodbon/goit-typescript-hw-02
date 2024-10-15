import css from "./ImageModal.module.css";
import { IoMdClose } from "react-icons/io";

const ImageModal = ({ alt_description, full }, onImageClose) => {
  const onModalCloseHandle = () => {
    onImageClose();
  };

  return (
    <div>
      <a href={full}>
        <img src={full} alt={alt_description} />
      </a>
      <button className={css.modalCloseBtn} onClick={onModalCloseHandle}>
        <IoMdClose color="white" />
      </button>
    </div>
  );
};

export default ImageModal;
