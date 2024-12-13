import { CreateArticle, PatchArticle } from '../structs';
import { GetItemsQuery } from '../types/query.type';
import articleRepository from '../repositories/article.repository';

const createArticle = async (data: CreateArticle) => {
  return await articleRepository.createArticle(data);
};

const getArticleById = async (id: string) => {
  return await articleRepository.getArticleById(id);
};

const updateArticle = async (id: string, data: PatchArticle) => {
  return await articleRepository.updateArticle(id, data);
};

const deleteArticle = async (id: string) => {
  return await articleRepository.deleteArticle(id);
};

const getArticles = async (query: GetItemsQuery) => {
  return await articleRepository.getArticles(query);
};

export default {
  createArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
  getArticles
};
