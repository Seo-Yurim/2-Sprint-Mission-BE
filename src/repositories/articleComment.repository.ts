import prisma from '../utils/prismaClient';
import { CreateArticleComment, PatchArticleComment } from '../structs';

// Post
const createArticleComment = async (data: CreateArticleComment) => {
  return await prisma.articleComment.create({
    data: {
      content: data.content,
      articleId: data.articleId,
      ownerUserId: data.ownerUserId
    }
  });
};

// Patch
const updateArticleComment = async (
  commentId: string,
  data: PatchArticleComment
) => {
  return await prisma.articleComment.update({
    where: { id: commentId },
    data: { content: data.content }
  });
};

// Delete
const deleteArticleComment = async (commentId: string) => {
  return await prisma.articleComment.delete({
    where: { id: commentId }
  });
};

// Get All
const getArticleComments = async (articleId: string, cursor?: string) => {
  return await prisma.articleComment.findMany({
    where: { articleId },
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
  createArticleComment,
  updateArticleComment,
  deleteArticleComment,
  getArticleComments
};
