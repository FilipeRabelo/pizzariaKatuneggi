// para trabalhar com roteamento //
// GET - buscar / chamar / requisicao//

import { Router, Request, Response } from 'express';

const router = Router();

router.get('/teste', ( req: Request, res: Response ) => {  // rota

  return res.json({ nome: "Pizzaria Katuneggi Nkose" });
  // throw new Error("Error ao fazer essa requisicaol")
})




export {router};