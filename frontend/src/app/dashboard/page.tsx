  import styles from "@/app/page.module.scss";
  import Link from "next/link";

  export default function Dashboard (){
    return(
      <>
        <div className={styles.containerCenter}>
          <h1 style={{color: "white"}}>Pagina painel</h1>




          <Link href={"/"} className={styles.text}>
            voltar ao login
          </Link>
        </div>
      </>
    )
  }