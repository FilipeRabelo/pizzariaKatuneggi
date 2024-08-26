import {Request, Response} from 'express';
import {CreateUserServices} from '../../services/user/CreateUserServices';

class CreateUserController{

  async handle(req: Request, res: Response){
    // -- console.log(req.body)

    // -- desconstruir do body -- controller os dados do doby os dados que o usuario enviou
    const { name, email, password } = req.body

    // -- instanciando -- inicializando o serviço
    const createUsarService = new CreateUserServices();

    // -- executando o método - serviço
    // -- quero que ele espere essa cara para poder retornar para o usuário - usar o await
    const user =  await createUsarService.execute({  // -- pega os dados e inicializa o serviço
      name,
      email,
      password
    });

    // -- retornando o usuário
    return res.json(user);
  }
}

export { CreateUserController };

