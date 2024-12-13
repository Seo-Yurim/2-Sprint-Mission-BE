import prisma from '../utils/prismaClient';
import { CreateProductComment, PatchProductComment } from '../structs';

// Post
const createProductComment = async (data: CreateProductComment) => {
  return await prisma.productComment.create({
    data: {
      content: data.content,
      productId: data.productId,
      ownerUserId: data.ownerUserId
    }
  });
};

// Patch
const updateProductComment = async (
  commentId: string,
  data: PatchProductComment
) => {
  return await prisma.productComment.update({
    where: { id: commentId },
    data: { content: data.content }
  });
};

// Delete
const deleteProductComment = async (commentId: string) => {
  return await prisma.productComment.delete({
    where: { id: commentId }
  });
};

// Get All
const getProductComments = async (productId: string, cursor?: string) => {
  return await prisma.productComment.findMany({
    where: { productId },
    select: {
      id: true,
      content: true,
      createdAt: true
    },
    take: 10,
    ...(cursor && { cursor: { id: cursor }, skip: 1 }),
    orderBy: { createdAt: 'desc' }
  });
};

export default {
  createProductComment,
  updateProductComment,
  deleteProductComment,
  getProductComments
};
