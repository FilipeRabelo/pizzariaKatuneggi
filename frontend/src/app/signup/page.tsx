
  import Image from "next/image";
  import Link from "next/link";
  import styles from "../page.module.scss";
  import logoImg from "/public/logo.svg";

  // import logoImg from "*.svg";

  export default function Signup(){
    return(
      <>
        <div className={styles.containerCenter}>

           <Image
             src={logoImg}
             alt={"logo da pizzaria"}
           />

           <section className={styles.login}>

             <h1>Criando sua conta</h1>

             <form>

               <input
                 className={styles.loginInput}
                 type="text"
                 required
                 name="name"
                 placeholder="Digite seu nome"
               />

               <input
                 className={styles.loginInput}
                 type="email"
                 required
                 name="email"
                 placeholder="Digite seu Email"
               />

               <input
                 className={styles.loginInput}
                 type="password"
                 required
                 name="password"
                 placeholder="Sua Senha"
               />

               <button type={"submit"} className={styles.button}>
                 Cadastrar
               </button>

             </form>

             <Link href={"/"} className={styles.text}>
               Já possui uma conta? Faça Login!
             </Link>

           </section>

         </div>
      </>

    )
  }