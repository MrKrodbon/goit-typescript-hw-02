import css from "./ImageModal.module.css";
import { IoMdClose } from "react-icons/io";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    background: "none",
    padding: "0",
    borderStyle: "none",
  },
};

const ImageModal = ({
<<<<<<< HEAD
  modalData: { full, alt_description, name, location, portfolio_url },
=======
  modalData: { regular, alt_description },
>>>>>>> 20979607879f36dac30afaed4eccec1944a9ca12
  onImageClose,
  isOpen,
}) => {
  const onModalCloseHandle = () => {
    onImageClose();
  };

  return (
    <Modal
      style={customStyles}
      isOpen={isOpen}
      onRequestClose={onImageClose}
      contentLabel="Image modal"
    >
<<<<<<< HEAD
      <div className={css.modalWrapper}>
        <img src={full} alt={alt_description} className={css.img} />
        <a href={portfolio_url}>Contact with author</a>
        <p>{name}</p>
        <p>{location}</p>
        <button className={css.modalCloseBtn} onClick={onModalCloseHandle}>
          <IoMdClose color="white" />
        </button>
      </div>
=======
      <img src={regular} alt={alt_description} className={css.img} />
      <button className={css.modalCloseBtn} onClick={onModalCloseHandle}>
        <IoMdClose color="white" />
      </button>
>>>>>>> 20979607879f36dac30afaed4eccec1944a9ca12
    </Modal>
  );
};

export default ImageModal;
