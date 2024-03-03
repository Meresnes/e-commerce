import axios from "axios";

const BASE_URL = "https://api.escuelajs.co/api/v1/products/";

interface IGetProuctPayload {
  categoryUrl: string;
  searchUrl: string;
}
const getProducts = (payload: IGetProuctPayload) => {
  return axios.get(`${BASE_URL}${payload.searchUrl}${payload.categoryUrl}`);
};

export const ProductService = {
  getProducts: getProducts,
};
