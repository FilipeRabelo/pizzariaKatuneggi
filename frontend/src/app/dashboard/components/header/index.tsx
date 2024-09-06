
import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";
import logoImg from "/public/logo3-remove.png";
import { LogOutIcon } from "lucide-react";


export default function Header() {

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>

          <Link href={"/dashboard"}>
            <Image
              src={logoImg}
              alt="Logo Pizzaria"
              width={190}
              height={60}
              priority={true}
              quality={100}
            />
          </Link>

          <nav>
            <Link href={"/dashboard/category"}>
              Categoria
            </Link>

            <Link href={"/dashboard/product"}>
              Produtos
            </Link>

            <form>
              <button type="submit" className="">
                <LogOutIcon size={24} />
              </button>
            </form>

          </nav>

        </div>
      </header>
    </>
  )
}

