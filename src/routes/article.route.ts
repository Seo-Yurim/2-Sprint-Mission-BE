import express from 'express';
import articleController from '../controllers/article.controller';
import articleCommentRoutes from './articleComment.route';

const router = express.Router();

router
  .route('/')
  .get(articleController.getArticles) // 게시글 목록 조회
  .post(articleController.createArticle); // 게시글 등록
router
  .route('/:id')
  .get(articleController.getArticleById) // 게시글 상세 조회
  .patch(articleController.updateArticle) // 게시글 수정
  .delete(articleController.deleteArticle); // 게시글 삭제

router.use('/:articleId/comments', articleCommentRoutes);

export default router;
