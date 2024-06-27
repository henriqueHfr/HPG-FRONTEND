import Link from "next/link";
import styles from "./menu.module.css";

export default function Menu() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href='/' className={styles.menu_titulo}>H P G</Link>
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
