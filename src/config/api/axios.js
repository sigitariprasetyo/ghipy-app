import axios from "axios";

const instance = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/search?api_key=xjJZRQdSarPlslcHx29PQTOgZ11Pe3p7`,
})

export default instance