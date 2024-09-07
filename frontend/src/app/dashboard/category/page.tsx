
import { Button } from "../components/button"
import styles from "./styles.module.scss"

export default function Category(){

  async function hendleRegisterCategory(){
    "use server"
    console.log("Testeteteter registration")
  }

  return(
    <main className={styles.container}>
      <h1>Nova Categoria</h1>

      <form action={hendleRegisterCategory} className={styles.form}>
        <input 
          className={styles.input}
          type="text" 
          name="name" 
          placeholder="Nome da categoria, ex: Pizzas"
          required
        />

        <Button
          name="Cadastrar categoria"
        />            

      </form>
    </main>
  )
}

