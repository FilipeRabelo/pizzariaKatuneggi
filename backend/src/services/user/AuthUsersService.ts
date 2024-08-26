import prismaClient from "../../prisma";
import { compare } from 'bcryptjs';       // -- para verificar a senha

// -- qndo o users fazer o login ele me envia o email e a senha

interface AuthRequest{
  email: string;
  password: string;
}

class AuthUsersService{
  async execute({email, password}: AuthRequest){

    // -- acessando nosso user do banco de dados
    const user = await prismaClient.user.findFirst({        // -- verificar se o email existe
      where: {
        email: email
      }
    })

    if(!user){
      throw new Error("Usuário/Senha Incorreto!");
    }

    const passwordMatch = await compare(password, user.password);  // -- Verificar se a senha esta correta
    if(!passwordMatch){
      throw new Error("Usuário/Senha Incorreto!");
    }

    // -- se passar nas validações e se estou logando preciso gerar
    // -- um token JWT e devolver os dados do usuário como id, name e email

    return { ok: true }
  }
}

export { AuthUsersService };














