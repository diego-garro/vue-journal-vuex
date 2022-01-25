import axios from "axios";

const authApi = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts",
  params: {
    key: "AIzaSyBcTjbDEKAIJ-EtCpSyN9P7Y6FaXkO60ls",
  },
});

export default authApi;
