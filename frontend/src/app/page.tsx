
  import styles from "./page.module.scss";
  import logoImg from "/public/logo.svg";
  import Image from "next/image";
  import Link from "next/link";

  export default function Page() {
    return (

      <>
        <div className={styles.containerCenter}>

          <Image
            src={logoImg}
            alt={"logo da pizzaria"}
          />

          <section className={styles.login}>
            <form>

              <input
                className={styles.loginInput}
                type="email"
                required
                name="email"
                placeholder="Digite seu e-mail..."
              />

              <input
                className={styles.loginInput}
                type="password"
                required
                name="password"
                placeholder="Digite sua senha..."
              />

              <button type={"submit"} className={styles.button}>
                Acessar Pizzaria
              </button>

            </form>
            
            <Link href={"/signup"} className={styles.text}>
              Não Possui uma Conta? Cadastre-se!
            </Link>
          </section>

        </div>

      </>
    );
  }
