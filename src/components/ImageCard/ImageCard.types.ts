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
  onOpenModal: (alt_description: string, regular: string) => void;
};
