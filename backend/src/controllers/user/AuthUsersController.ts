import { Request, Response} from 'express';
import { AuthUsersService } from '../../services/user/AuthUsersService';


class AuthUsersController{

  async handle(req: Request, res: Response){  // -- sempre dentro da class do controller tenho um metodo asnyc cahamr handle()
    const {email, password} = req.body;       // -- pegando o que o users esta mandando

    const authUserService = new AuthUsersService; // -- inicializando o service

    const  auth = await authUserService.execute({  // -- chamando o metodo dele - awit para esperar a resposta
      email,
      password
    })

    return res.json(auth);
  }
}

export { AuthUsersController }