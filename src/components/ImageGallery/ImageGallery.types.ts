import { Image, Modal } from "../../App";

export type ImageGalleryProps = {
  data: Image[];
  onImageOpen: (data: Modal) => void;
};
