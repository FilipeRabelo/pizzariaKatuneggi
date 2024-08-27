// -- Middleware de Autenticação

import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';          // -- para verificar o tokem

interface PayLoad{                              //-- para tipar o payLoad

  sub: string;                                  // -- aqui no sub: string -  fica o id do usuario
}

export function isAuthenticated( req: Request, res: Response, next: NextFunction ){    // console.log("chamou o middleware")

  const authToken = req.headers.authorization;  // Receber o token - sempre vem dentro do cabeçalho

  // -- validação
  if(!authToken){                               // -- verificar se nao recebeu o token - mostrar error
    return res.status(401).end();         // -- se nao encontrou ja barra o usuario
  }

  const [, token] = authToken.split(" "); // -- string - preciso desonstruir pq quero somente o tokem

  try{                                          // -- validar esse token -- verificar o token -  validar ele

    const { sub } = verify(                     // -- descontruindo e pegando o sub: id do usuario
      token,
      process.env.JWT_SECRET
    ) as PayLoad;

    req.user_id = sub;      // -- recuperar o id do token e colocar dentro de uma variavel user_id dentro do req;

    // console.log(`passou o token pelo users --- ${sub}`);
    return next();

  }catch (err){
    return res.status(401).end();
  }

}