export type ResponseFetchPhoto = {
  status: number;
  data: {
    results: Image[];

    total_pages: number;
  };
};

export type Urls = {
  regular: string;
};

export type Image = {
  id: number;
  likes: number;
  alt_description: string;
  urls: Urls;

  user: {
    name: string;
    profile_image: {
      large: string;
    };
  };
};

export type Modal = {
  regular: string;
  alt_description: string;
};
