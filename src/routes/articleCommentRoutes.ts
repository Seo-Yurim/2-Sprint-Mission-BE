import express from 'express';
import articleCommentController from '../controllers/articleComment.controller.js';

const router = express.Router({ mergeParams: true });

router.post('/', articleCommentController.createArticleComment); // 댓글 등록
router.patch('/:commentId', articleCommentController.updateArticleComment); // 댓글 수정
router.delete('/:commentId', articleCommentController.deleteArticleComment); // 댓글 삭제
router.get('/', articleCommentController.getArticleComments); // 댓글 목록

export default router;
