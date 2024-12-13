import prisma from '../utils/prismaClient';
import { CreateArticle, PatchArticle } from '../structs';
import { GetItemsQuery } from '../types/query.type';

// Post
const createArticle = async (data: CreateArticle) => {
  const articleData = {
    title: data.title,
    content: data.content
  };

  return await prisma.article.create({ data: articleData });
};

// Get By ID
const getArticleById = async (id: string) => {
  return await prisma.article.findUniqueOrThrow({
    where: { id },
    include: {
      articleComments: {
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
const updateArticle = async (id: string, data: PatchArticle) => {
  return await prisma.article.update({
    where: { id },
    data
  });
};

// Delete
const deleteArticle = async (id: string) => {
  return await prisma.article.delete({
    where: { id }
  });
};

// Get All
const getArticles = async (query: GetItemsQuery) => {
  const { page = 1, pageSize = 10, order = 'recent', keyword = '' } = query;

  const offset = (page - 1) * pageSize;

  return await prisma.article.findMany({
    where: {
      OR: [{ title: { contains: keyword } }, { content: { contains: keyword } }]
    },
    orderBy: order === 'recent' ? { createdAt: 'desc' } : {},
    skip: offset,
    take: pageSize
  });
};

export default {
  createArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
  getArticles
};
