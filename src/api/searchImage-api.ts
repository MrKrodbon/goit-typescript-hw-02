import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
const CLIENT_ID = "XRODloqZQ-HPQVrkBUfF14HSH9jTbvdTfTFnnugyfyg";

const fetchPhotos = async <T>(
  userQuery: string,
  currentPage: number
): Promise<T> => {
  const axiosOptions = {
    params: {
      client_id: CLIENT_ID,
      query: userQuery,
      page: currentPage,
      // orientation: "landscape",
      per_page: 10,
    },
  };

  try {
    const response: T = await axios.get("/", axiosOptions);
    return response;
  } catch (error) {
    throw error;
  }
};

export default fetchPhotos;
