import prisma from '../utils/prismaClient';
import { CreateProduct, PatchProduct } from '../structs';
import { GetItemsQuery } from '../types/query.type';

// Post
const createProductRepository = async (data: CreateProduct) => {
  const productData = {
    name: data.name,
    description: data.description,
    price: data.price,
    tags: {
      set: data.tags
    }
  };

  return await prisma.product.create({ data: productData });
};

// Get By ID
const getProductByIdRepository = async (id: string) => {
  return await prisma.product.findUniqueOrThrow({
    where: { id },
    include: {
      productComments: {
        select: {
          content: true,
          createdAt: true,
          ownerUserId: true
        }
      }
    }
  });
};

// Patch
const updateProductRepository = async (id: string, data: PatchProduct) => {
  return await prisma.product.update({
    where: { id },
    data
  });
};

// Delete
const deleteProductRepository = async (id: string) => {
  return await prisma.product.delete({
    where: { id }
  });
};

// Get All
const getProductsRepository = async (query: GetItemsQuery) => {
  const { page = 1, pageSize = 10, order = 'recent', keyword = '' } = query;

  const offset = (page - 1) * pageSize;

  return await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: keyword } },
        { description: { contains: keyword } }
      ]
    },
    select: {
      id: true,
      name: true,
      price: true,
      createdAt: true
    },
    orderBy: order === 'recent' ? { createdAt: 'desc' } : {},
    skip: offset,
    take: pageSize
  });
};

export default {
  createProductRepository,
  getProductByIdRepository,
  updateProductRepository,
  deleteProductRepository,
  getProductsRepository
};
