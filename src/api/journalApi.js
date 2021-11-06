import axios from "axios"

const journalApi = axios.create({
  baseURL: "https://vue-demos-dg-default-rtdb.firebaseio.com",
})

export default journalApi
