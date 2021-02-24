import axios from "axios";

const api = axios.create({
  baseURL: "https://athena-7.herokuapp.com",
  timeout: 3000,
});

export const authorListing = {
  list: async () => {
    const response01 = await api.get("/ancients.json", {
    });
    return [...response01.data];
  },
};
export const errorListing = {
  list: async () => {
    console.log("mfrenjrvffe")

    const response01 = await api.get("/ancients.json?error=true", {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log("FFF", response01.error)
    return [...response01];
  },
};
