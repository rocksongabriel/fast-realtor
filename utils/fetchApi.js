import axios from "axios";


export const baseUrl = "https://bayut.p.rapidapi.com"

export const fetchAPI = async () => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'aacb4cf585msh54c3d3ca435065ap1dc64cjsn9c32a4957a59'
    }
  })
}