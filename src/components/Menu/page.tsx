import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href='/'>
          <Image src="/logo_2.png" alt="logo da HPG" width={150} height={150}/>
        </Link>
      </div>
      <ul className={styles.menu_option}>
        <Link href="/" className={styles.option}>
          Sobre
        </Link>
        <Link href="/" className={styles.option}>
          Produtos
        </Link>
        <Link href="/" className={styles.option}>
          Login
        </Link>
      </ul>
    </nav>
  );
}
