import Link from "next/link";
import styles from "./menu.module.css";

interface MenuItem {
  href: string;
  label: string;
}

interface MenuProps {
  data?: MenuItem[];
}

export default function Menu({ data = [] }: MenuProps) {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href='/' className={styles.menu_titulo}>H P G</Link>
      </div>
      <ul className={styles.menu_option}>
        {data.map((item, index) => (
          <li key={index}>
            <Link href={item.href} className={styles.option}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
