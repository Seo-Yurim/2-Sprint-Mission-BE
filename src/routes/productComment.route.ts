import express from 'express';
import productCommentController from '../controllers/productComment.controller';

const router = express.Router({ mergeParams: true });

router.post('/', productCommentController.createProductComment); // 댓글 등록
router.patch('/:commentId', productCommentController.updateProductComment); // 댓글 수정
router.delete('/:commentId', productCommentController.deleteProductComment); // 댓글 삭제
router.get('/', productCommentController.getProductComments); // 댓글 목록

export default router;
