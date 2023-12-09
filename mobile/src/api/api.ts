import axios from "axios";

const apiURL = "http://192.168.100.43:5000"; //COLOCAR IP DA SUA MAQUINA AQUI

export const api = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
