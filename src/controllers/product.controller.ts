import { RequestHandler } from 'express';
import { handleError } from '../utils/handleError';
import { assert } from 'superstruct';
import { CreateProduct, PatchProduct } from '../structs';
import productService from '../services/product.service';

const createProduct: RequestHandler = async (req, res, next) => {
  try {
    assert(req.body, CreateProduct);
    const newProduct = await productService.createProductService(req.body);
    res.locals.data = newProduct;
    res.status(201).json(newProduct);
  } catch (err) {
    handleError(err, next);
  }
};

const getProductById: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductByIdService(id);
    res.locals.data = product;
    res.json(product);
  } catch (err) {
    handleError(err, next);
  }
};

const updateProduct: RequestHandler = async (req, res, next) => {
  try {
    assert(req.body, PatchProduct);
    const { id } = req.params;
    const updatedProduct = await productService.updateProductService(
      id,
      req.body
    );
    res.locals.data = updatedProduct;
    res.json(updatedProduct);
  } catch (err) {
    handleError(err, next);
  }
};

const deleteProduct: RequestHandler = async (req, res, next) => {
  try {
    const { id } = req.params;
    await productService.deleteProductService(id);
    res.status(204).json();
  } catch (err) {
    handleError(err, next);
  }
};

const getProducts: RequestHandler = async (req, res, next) => {
  try {
    const query = req.query;
    const products = await productService.getProductsService(query);
    res.locals.data = products;
    res.json(products);
  } catch (err) {
    handleError(err, next);
  }
};

export default {
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  getProducts
};
