import Menu from "@/components/Menu/page";
import Spinner from "@/components/Spinner/page";
import styles from "@/app/signin/signin.module.css"

export default function Loading(){
  return(
    <div className={styles.login}>
    <Menu />
    <div className={styles.background}>
      <Spinner />
    </div>
  </div>
  )
}