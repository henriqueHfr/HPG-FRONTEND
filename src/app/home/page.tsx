"use client";
import HomeComponent from "@/components/homeComponent/page";
import styles from "./home.module.css";
import Menu from "@/components/Menu/page";

export default function Home() {
  const data = [
    { href: "/security/gestao", label: "Pessoal" },
    { href: "/security/gestao", label: "Financeira" },
    { href: "/security/produtos", label: "Produtos" },
  ];

  return (
    <div className={styles.container}>
      <Menu data={data} />
      <div className={styles.background}>
        <HomeComponent />
      </div>
    </div>
  );
}
