import * as s from 'superstruct';

export const CreateProduct = s.object({
  name: s.size(s.string(), 1, 10),
  description: s.size(s.string(), 10, 50),
  price: s.min(s.number(), 1),
  tags: s.array(s.size(s.string(), 1, 5))
});

export const CreateArticle = s.object({
  title: s.string(),
  content: s.string()
});

export const CreateArticleComment = s.object({
  content: s.string()
});

export const CreateProductComment = s.object({
  content: s.string(),
  productId: s.string(),
  ownerUserId: s.string()
});

export const PatchProduct = s.partial(CreateProduct);
export const PatchArticle = s.partial(CreateArticle);
export const PatchArticleComment = s.partial(CreateArticleComment);
export const PatchProductComment = s.partial(CreateProductComment);

export type CreateProduct = s.Infer<typeof CreateProduct>;
export type CreateArticle = s.Infer<typeof CreateArticle>;
export type CreateArticleComment = s.Infer<typeof CreateArticleComment>;
export type CreateProductComment = s.Infer<typeof CreateProductComment>;
export type PatchProduct = s.Infer<typeof PatchProduct>;
export type PatchArticle = s.Infer<typeof PatchArticle>;
export type PatchArticleComment = s.Infer<typeof PatchArticleComment>;
export type PatchProductComment = s.Infer<typeof PatchProductComment>;
