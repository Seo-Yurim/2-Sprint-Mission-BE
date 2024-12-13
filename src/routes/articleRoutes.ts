import express from 'express';
import articleController from '../controllers/article.controller.js';
import articleCommentRoutes from './articleCommentRoutes.js';

const router = express.Router();

router.post('/', articleController.createArticle); // 게시글 등록
router.get('/:id', articleController.getArticleById); // 게시글 상세 조회
router.patch('/:id', articleController.updateArticle); // 게시글 수정
router.delete('/:id', articleController.deleteArticle); // 게시글 삭제
router.get('/', articleController.getArticles); // 게시글 목록 조회

router.use('/:articleId/comments', articleCommentRoutes);

export default router;
