import Axios from "axios";

export default Axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID 651442dcd1fb6acebd9a48a97e74ed8fd5a182b652633c76edcf9f13881718a9"
  }
});
