// para trabalhar com roteamento //
// GET - buscar / chamar / requisicao//

import { Router } from 'express';

// import { AuthUserService } from './services/user/AuthUserService';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { isAuthenticated } from './middlewares/isAuthenticated'

// -- ROTAS USER -- // --  qndo alguem faz a requisicao ele chama esse controller

const router = Router();

router.post('/users', new CreateUserController().handle);      // -- esta chamando o método handle() do controller

router.post('/session', new AuthUserController().handle);      // -- Rota de login do user - autentificação

router.get('/userDetail', isAuthenticated, new DetailUserController().handle);  // -- buscar os detalhes do usuario - usando middleware



export { router };