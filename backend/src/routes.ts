// para trabalhar com roteamento //
// GET - buscar / chamar / requisicao//

import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUsersService } from './services/user/AuthUsersService';
import {AuthUsersController} from "./controllers/user/AuthUsersController";

const router = Router();

// -- ROTAS USER -- // --  qndo alguem faz a requisicao ele chama esse controller

router.post('/users', new CreateUserController().handle);   // -- esta chamando o método handle() do controller
router.post('/session', new AuthUsersController().handle);  // -- Rota de login do user



export { router };