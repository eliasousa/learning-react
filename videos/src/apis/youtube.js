import axios from "axios";

const KEY = "AIzaSyCBp7zhsTttzkVgywsK0pi2norQrf7D-pY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
