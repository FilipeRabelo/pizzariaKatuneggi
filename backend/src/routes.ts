// para trabalhar com roteamento //
// GET - buscar / chamar / requisicao//

import { Router } from 'express';
import { CreateUserController } from './controllers/user/CreateUserController';

const router = Router();

// -- ROTAS USER -- // --  qndo alguem faz a requisicao ele chama esse controller
router.post('/users', new CreateUserController().handle)



export { router };