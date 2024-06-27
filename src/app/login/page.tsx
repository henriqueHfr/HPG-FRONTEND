import Menu from "@/components/Menu/page";
import styles from './login.module.css'
import CardLogin from "@/components/CardLogin/page";

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