// para trabalhar com roteamento //
import {Router, Request, Response} from 'express';

const router = Router();

// buscar / chamar / requisicao//

router.get('/teste', (req: Request, res: Response) => {

    return res.json({nome: "Pizzaria Katuneggi Nkose"});
    // throw new Error("Error ao fazer essa requisicaol")
})

export {router};