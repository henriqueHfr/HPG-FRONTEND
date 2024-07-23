import Menu from "@/components/Menu/page";
import styles from './pessoal.module.css'
import PessoalComponent from "@/components/gestaoPessoal/page";
export default function GestaoPessoal(){
  const data = [
    { href: "/home", label: "Home" },
    { href: "/security/gestao", label: "Financeira" },
    { href: "/security/produtos", label: "Produtos" },
  ];
  return(
    <div className={styles.container}>
      <Menu data={data}/>
      <div className={styles.background}>
        <PessoalComponent />
      </div>
    </div>
  )
}