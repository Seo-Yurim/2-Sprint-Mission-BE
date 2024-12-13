import { assert } from 'superstruct';
import { CreateProductComment, PatchProductComment } from '../structs';
import { handleError } from '../utils/handleError';
import { RequestHandler } from 'express';
import productCommentService from '../services/productComment.service';

// 댓글 등록 API
const createProductComment: RequestHandler = async (req, res, next) => {
  try {
    assert(req.body, CreateProductComment);

    const { content } = req.body;
    const { productId } = req.params;

    const ownerUserId = '김철수';

    const newComment = await productCommentService.createProductComment({
      content,
      productId,
      ownerUserId
    });

    res.locals.data = newComment;
    res.status(201).json(newComment);
  } catch (err) {
    handleError(err, next);
  }
};

// 댓글 수정 API
const updateProductComment: RequestHandler = async (req, res, next) => {
  try {
    assert(req.body, PatchProductComment);
    const { content } = req.body;
    const { commentId } = req.params;

    const updatedComment = await productCommentService.updateProductComment(
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
const deleteProductComment: RequestHandler = async (req, res, next) => {
  try {
    const { commentId } = req.params;

    await productCommentService.deleteProductComment(commentId);

    res.sendStatus(204);
  } catch (err) {
    handleError(err, next);
  }
};

// 댓글 목록 조회 API
const getProductComments: RequestHandler = async (req, res, next) => {
  try {
    const { productId } = req.params;
    let { cursor } = req.query;

    if (Array.isArray(cursor)) {
      cursor = cursor[0];
    }

    if (cursor && typeof cursor !== 'string') {
      cursor = undefined;
    }

    const comments = await productCommentService.getProductComments(
      productId,
      cursor
    );

    res.locals.data = comments;
    res.json(comments);
  } catch (err) {
    handleError(err, next);
  }
};

export default {
  createProductComment,
  updateProductComment,
  deleteProductComment,
  getProductComments
};
