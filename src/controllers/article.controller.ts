import { RequestHandler } from 'express';
import { handleError } from '../utils/handleError';
import { assert } from 'superstruct';
import { CreateArticle, PatchArticle } from '../structs';
import articleService from '../services/article.service';

const createArticle: RequestHandler = async (req, res, next) => {
  try {
    assert(req.body, CreateArticle);
    const newArticle = await articleService.createArticle(req.body);
    res.locals.data = newArticle;
    res.status(201).json(newArticle);
  } catch (err) {
    handleError(err, next);
  }
};

const getArticleById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Article = await articleService.getArticleById(id);
    res.locals.data = Article;
    res.json(Article);
  } catch (err) {
    handleError(err, next);
  }
};

const updateArticle: RequestHandler = async (req, res, next) => {
  try {
    assert(req.body, PatchArticle);
    const { id } = req.params;
    const updatedArticle = await articleService.updateArticle(id, req.body);
    res.locals.data = updatedArticle;
    res.json(updatedArticle);
  } catch (err) {
    handleError(err, next);
  }
};

const deleteArticle: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    await articleService.deleteArticle(id);
    res.status(204).json();
  } catch (err) {
    handleError(err, next);
  }
};

const getArticles: RequestHandler = async (req, res, next) => {
  try {
    const query = req.query;
    const Articles = await articleService.getArticles(query);
    res.locals.data = Articles;
    res.json(Articles);
  } catch (err) {
    handleError(err, next);
  }
};

export default {
  createArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
  getArticles
};
