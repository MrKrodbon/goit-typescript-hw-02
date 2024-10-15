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
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "none",
  },
};

const ImageModal = ({
  modalData: { full, alt_description },
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
      contentLabel="Example Modal"
    >
      <div className={css.modalWrapper}>
        <img src={full} alt={alt_description} className={css.img} />
        <button className={css.modalCloseBtn} onClick={onModalCloseHandle}>
          <IoMdClose color="white" />
        </button>
      </div>
    </Modal>
  );
};

export default ImageModal;
