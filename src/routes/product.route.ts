import express from 'express';
import productController from '../controllers/product.controller.js';
import productCommentRoutes from './productCommentRoutes.js';

const router = express.Router();

router.post('/', productController.createProduct); // 상품 등록
router.get('/:id', productController.getProductById); // 상품 상세 조회
router.patch('/:id', productController.updateProduct); // 상품 수정
router.delete('/:id', productController.deleteProduct); // 상품 삭제
router.get('/', productController.getProducts); // 상품 목록 조회

router.use('/:productId/comments', productCommentRoutes);

export default router;
