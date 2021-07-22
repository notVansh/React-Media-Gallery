import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: "Client-ID PLACE_YOUR_UNSPLASH_KEY_HERE",
  },
});
