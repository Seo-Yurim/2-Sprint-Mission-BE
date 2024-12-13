import { CreateProductComment, PatchProductComment } from '../structs';
import productCommentRepository from '../repositories/productComment.repository';

// 댓글 생성 서비스
const createProductComment = async (data: CreateProductComment) => {
  return await productCommentRepository.createProductComment(data);
};

// 댓글 수정 서비스
const updateProductComment = async (
  commentId: string,
  data: PatchProductComment
) => {
  return await productCommentRepository.updateProductComment(commentId, data);
};

// 댓글 삭제 서비스
const deleteProductComment = async (commentId: string) => {
  return await productCommentRepository.deleteProductComment(commentId);
};

// 댓글 목록 조회 서비스
const getProductComments = async (productId: string, cursor?: string) => {
  return await productCommentRepository.getProductComments(productId, cursor);
};

export default {
  createProductComment,
  updateProductComment,
  deleteProductComment,
  getProductComments
};
