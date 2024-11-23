export type ImageModalProps = {
  modalData: {
    regular: string;
    alt_description: string;
  } | null;
  onImageClose: () => void;
  isOpen: boolean;
};
