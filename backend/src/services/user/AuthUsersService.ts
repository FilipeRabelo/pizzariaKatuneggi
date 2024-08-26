import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';
import { sign } from "jsonwebtoken";       // -- para verificar a senha


// -- qndo o users fazer o login ele me envia o email e a senha

interface AuthRequest{
  email: string;
  password: string;
}

class AuthUsersService{

  async execute({email, password}: AuthRequest){

    // -- acessando nosso user do banco de dados
    // -- verificar se o email existe
    // -- where: - buscando usuario
    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    })

    if(!user){
      throw new Error("Usuário/Senha Incorreto!");
    }

    // -- Verificar se a senha esta correta
    const passwordMatch = await compare(password, user.password);
    if(!passwordMatch){
      throw new Error("Usuário/Senha Incorreto!");
    }

    // -- se passar nas validações e se estou logando preciso gerar
    // -- um token JWT e devolver os dados do usuário como id, name e email
    // -- se deu tudo certo vamos gerar o token para o usuario

    const token = sign(
      {                // -- colocando dentro do payload o nome e o email
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET,   // -- buscando nossa chave do SECRET
      {
        subject: user.id,       // -- passando id do usuario
        expiresIn: '30d'        // -- qndo q vai expirar o token - 30dias
      }
    )

    // -- gerar um hash e salvar em uam variavel de ambiante

    return {                     // -- retornando o dados do usuario e o token
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    }

  }

}

export { AuthUsersService };














