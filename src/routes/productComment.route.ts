import express from 'express';
import productCommentController from '../controllers/productComment.controller';

const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(productCommentController.getProductComments) // 댓글 목록
  .post(productCommentController.createProductComment); // 댓글 등록
router
  .route(':commentId')
  .patch(productCommentController.updateProductComment) // 댓글 수정
  .delete(productCommentController.deleteProductComment); // 댓글 삭제

export default router;
