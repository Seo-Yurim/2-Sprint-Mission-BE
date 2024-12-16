import express from 'express';
import articleCommentController from '../controllers/articleComment.controller';

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(articleCommentController.getArticleComments) // 댓글 목록 조회
  .post(articleCommentController.createArticleComment); // 댓글 등록
router
  .route('/:commentId')
  .patch(articleCommentController.updateArticleComment) // 댓글 수정
  .delete(articleCommentController.deleteArticleComment); // 댓글 삭제

export default router;
