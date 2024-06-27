import Menu from "@/components/Menu/page";
import styles from './signin.module.css'
import CardLogin from "@/components/CardSignIn/page";

export default function Login(){
  return(
    <div className={styles.login}>
      <Menu />
      <div className={styles.background}>
        <CardLogin />
      </div>
    </div>
    
  )
}