import Menu from "@/components/Menu/page";
import styles from './signup.module.css'
import CardSignUp from "@/components/CardSignUp/page";

export default function Cadastro(){
  return(
    <div className={styles.login}>
      <Menu />
      <div className={styles.background}>
        <CardSignUp />
      </div>
    </div>
    
  )
}