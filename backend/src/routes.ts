// -- para trabalhar com roteamento //
// -- GET - buscar / chamar / requisicao//

import { Router } from 'express';

// -- importando os controllers
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';

import { CreateProductController } from './controllers/product/CreateProductController';

import { isAuthenticated } from './middlewares/isAuthenticated';


const router = Router();

// -- ROTAS USER  // -- isAuthenticated para somente pessoas logadas ter acesso

router.post('/users', new CreateUserController().handle);      // -- esta chamando o método handle() do controller

router.post('/session', new AuthUserController().handle);      // -- Rota de login do user - autentificação

router.get('/userDetail', isAuthenticated, new DetailUserController().handle);  // -- buscar os detalhes do usuario - usando middleware


// -- ROTAS CATEGORY  // -- isAuthenticated para somente pessoas logadas ter acesso

router.post('/category', isAuthenticated, new CreateCategoryController().handle);  // -- post para cadastrar

router.get('/listCategory', isAuthenticated, new ListCategoryController().handle); // -- buscar

// -- ROTAS PRODUCT // -- isAuthenticated para somente pessoas logadas ter acesso

router.post('/product', isAuthenticated, new CreateProductController().handle);    // -- para receber os dados


export { router };

















