import { CreateArticleComment, PatchArticleComment } from '../structs';
import articleCommentRepository from '../repositories/articleComment.repository';

// 댓글 생성 서비스
const createArticleComment = async (data: CreateArticleComment) => {
  return await articleCommentRepository.createArticleComment(data);
};

// 댓글 수정 서비스
const updateArticleComment = async (
  commentId: string,
  data: PatchArticleComment
) => {
  return await articleCommentRepository.updateArticleComment(commentId, data);
};

// 댓글 삭제 서비스
const deleteArticleComment = async (commentId: string) => {
  return await articleCommentRepository.deleteArticleComment(commentId);
};

// 댓글 목록 조회 서비스
const getArticleComments = async (articleId: string, cursor?: string) => {
  return await articleCommentRepository.getArticleComments(articleId, cursor);
};

export default {
  createArticleComment,
  updateArticleComment,
  deleteArticleComment,
  getArticleComments
};
