export type ImageModalProps = {
  modalData: {
    regular: string;
    alt_description: string;
  };
  onImageClose: () => void;
  isOpen: boolean;
};
