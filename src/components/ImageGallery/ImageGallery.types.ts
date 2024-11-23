import { Image } from "../../App";

export type ImageGalleryProps = {
  data: Image[];
  onImageOpen: (data: Image) => void;
};
