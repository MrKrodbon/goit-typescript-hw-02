import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos";
const CLIENT_ID = "XRODloqZQ-HPQVrkBUfF14HSH9jTbvdTfTFnnugyfyg";

const fetchPhotos = async (userQuery, currentPage) => {
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
    return await axios.get("/", axiosOptions);
  } catch (error) {
    return error;
  }
};

export default fetchPhotos;
