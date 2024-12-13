import { CreateProduct, PatchProduct } from '../structs';
import { GetItemsQuery } from '../types/query.type';
import productRepository from '../repositories/product.repository';

const createProductService = async (data: CreateProduct) => {
  return await productRepository.createProductRepository(data);
};

const getProductByIdService = async (id: string) => {
  return await productRepository.getProductByIdRepository(id);
};

const updateProductService = async (id: string, data: PatchProduct) => {
  return await productRepository.updateProductRepository(id, data);
};

const deleteProductService = async (id: string) => {
  return await productRepository.deleteProductRepository(id);
};

const getProductsService = async (query: GetItemsQuery) => {
  return await productRepository.getProductsRepository(query);
};

export default {
  createProductService,
  getProductByIdService,
  updateProductService,
  deleteProductService,
  getProductsService
};
