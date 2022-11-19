import axios from "axios"
import { IProduct } from "../interfaces/product.interface"

const productApi = axios.create({
  baseURL: "http://localhost:3000",
})

export const getProducts = async (): Promise<IProduct[]> => {
  const res = await productApi.get("/products")
  return res.data
}