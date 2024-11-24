import { Modal } from "../../types";

export type ImageCardProps = {
  data: {
    likes: number;
    alt_description: string;
    urls: { regular: string };
    user: {
      name: string;
      profile_image: { large: string };
    };
  };
  onOpenModal: (data: Modal) => void;
};
