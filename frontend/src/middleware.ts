
  import { NextRequest, NextResponse } from "next/server";

  export async function middleware(req: NextRequest){
    const { pathname } = req.nextUrl                            // -- devolve a rota

    if(pathname.startsWith("/_next") || pathname === "/"){
      return NextResponse.next();                               // -- deixo renderizar
    }


  }

  // -- se ele começa com : startsWith("_next") OU se começa com "/" eu deixo renderizar
