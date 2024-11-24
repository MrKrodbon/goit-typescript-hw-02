import { Image, Modal } from "../../types";

export type ImageGalleryProps = {
  data: Image[];
  onOpenModal: (data: Modal) => void;
};
