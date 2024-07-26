import Menu from "@/components/Menu/page";
import styles from './signup.module.css'
import CardSignUp from "@/components/CardSignUp/page";

const data = [
  { href: "/", label: "Sobre" },
  { href: "/", label: "Produtos" },
];


export default function Cadastro(){
  return(
    <div className={styles.login}>
      <Menu data={data}/>
      <div className={styles.background}>
        <CardSignUp />
      </div>
    </div>
    
  )
}