import { CreateProduct, PatchProduct } from '../structs';
import { GetItemsQuery } from '../types/query.type';
import productRepository from '../repositories/product.repository';

const createProduct = async (data: CreateProduct) => {
  return await productRepository.createProduct(data);
};

const getProductById = async (id: string) => {
  return await productRepository.getProductById(id);
};

const updateProduct = async (id: string, data: PatchProduct) => {
  return await productRepository.updateProduct(id, data);
};

const deleteProduct = async (id: string) => {
  return await productRepository.deleteProduct(id);
};

const getProducts = async (query: GetItemsQuery) => {
  return await productRepository.getProducts(query);
};

export default {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getProducts
};
