import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  cancelToken: axios.CancelToken
})

export default instance