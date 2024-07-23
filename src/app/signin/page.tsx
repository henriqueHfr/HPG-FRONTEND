import Menu from "@/components/Menu/page";
import styles from './signin.module.css'
import CardLogin from "@/components/CardSignIn/page";

const data = [
  { href: "/", label: "Sobre" },
  { href: "/", label: "Produtos" },
  { href: "/signin", label: "Login" }
];


export default function Login(){
  return(
    <div className={styles.login}>
      <Menu data={data}/>
      <div className={styles.background}>
        <CardLogin />
      </div>
    </div>
    
  )
}