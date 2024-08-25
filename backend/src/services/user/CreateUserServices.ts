// -- recebendo os dados
// -- qndo alguem for usar o serviço vou criar uma interface do typescript

interface UserRequest{      // -- informar sempre as tipagens dos parâmetros que vamos receber
  name: String;
  email: String;
  password: String;
}

// -- qndo usar o metodo execute ele vai fornecer name, email and password -- repassa os dados

class CreateUserServices{   // -- método async
  async execute({ name, email, password }: UserRequest){

    console.log(name, email, password);

    return { name: name, email: email, password: password }    // -- devolvendo para o usuario
  }
}

export  {CreateUserServices};