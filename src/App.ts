export type ResponseFetchPhoto = {
  status: number;
  data: {
    results: Image[];

    total_pages: number;
  };
};

export type Image = {
  id: number;
  likes: number;
  alt_description: string;
  urls: {
    regular: string;
  };

  user: {
    name: string;
    profile_image: {
      large: string;
    };
  };
};
