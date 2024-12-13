import { assert } from 'superstruct';
import { CreateArticleComment, PatchArticleComment } from '../structs';
import { handleError } from '../utils/handleError.js';
import { RequestHandler } from 'express';
import articleCommentService from '../services/articleComment.service';

// 댓글 등록 API
const createArticleComment: RequestHandler = async (req, res, next) => {
  try {
    assert(req.body, CreateArticleComment);

    const { content } = req.body;
    const { articleId } = req.params;

    const ownerUserId = '김철수';

    const newComment = await articleCommentService.createArticleComment({
      content,
      articleId,
      ownerUserId
    });

    res.locals.data = newComment;
    res.status(201).json(newComment);
  } catch (err) {
    handleError(err, next);
  }
};

// 댓글 수정 API
const updateArticleComment: RequestHandler = async (req, res, next) => {
  try {
    assert(req.body, PatchArticleComment);
    const { content } = req.body;
    const { commentId } = req.params;

    const updatedComment = await articleCommentService.updateArticleComment(
      commentId,
      {
        content
      }
    );

    res.locals.data = updatedComment;
    res.json(updatedComment);
  } catch (err) {
    handleError(err, next);
  }
};

// 댓글 삭제 API
const deleteArticleComment: RequestHandler = async (req, res, next) => {
  try {
    const { commentId } = req.params;

    await articleCommentService.deleteArticleComment(commentId);

    res.sendStatus(204);
  } catch (err) {
    handleError(err, next);
  }
};

// 댓글 목록 조회 API
const getArticleComments: RequestHandler = async (req, res, next) => {
  try {
    const { articleId } = req.params;
    let { cursor } = req.query;

    if (Array.isArray(cursor)) {
      cursor = cursor[0];
    }

    if (cursor && typeof cursor !== 'string') {
      cursor = undefined;
    }

    const comments = await articleCommentService.getArticleComments(
      articleId,
      cursor
    );

    res.locals.data = comments;
    res.json(comments);
  } catch (err) {
    handleError(err, next);
  }
};

export default {
  createArticleComment,
  updateArticleComment,
  deleteArticleComment,
  getArticleComments
};
