import { api } from "./api";

export const getStores = async () => {
  const { data } = await api.get("stores");
  return data;
};

export const getProducts = async (storeId: number) => {
  const { data } = await api.get(`products?loja_id=${storeId}`);
  return data;
};

export const getStoreById = async (id: number) => {
  const { data } = await api.get("stores/" + id);
  return data;
};

export const getProductById = async (id: number) => {
  const {data} = await api.get("products/" + id)
  return data
}