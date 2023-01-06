import { Router, Request, Response } from "express";

import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoriesController } from "./controllers/category/ListCategoriesController";
import { CreateProductController } from "./controllers/products/CreateProductController";

const router = Router();

// USER ROUTES

router.post('/users', new CreateUserController().handle);

router.post('/session', new AuthUserController().handle);

router.get('/me', ensureAuthenticated, new DetailUserController().handle)

// CATEGORIES ROUTES

router.post('/category', ensureAuthenticated, new CreateCategoryController().handle)

router.get('/category/list', ensureAuthenticated, new ListCategoriesController().handle)

// PRODUCTS ROUTES

router.post('/products', ensureAuthenticated, new CreateProductController().handle);





export {router};