import express from 'express';
import productController from '../controllers/product.controller';
import productCommentRoutes from './productComment.route';

const router = express.Router();

router
  .route('/')
  .get(productController.getProducts) // 상품 목록 조회
  .post(productController.createProduct); // 상품 등록
router
  .route(':id')
  .get(productController.getProductById) // 상품 상세 조회
  .patch(productController.updateProduct) // 상품 수정
  .delete(productController.deleteProduct); // 상품 삭제

router.use('/:productId/comments', productCommentRoutes);

export default router;
