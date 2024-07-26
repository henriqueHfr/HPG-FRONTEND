import Menu from '@/components/Menu/page';
import styles from '../../email.module.css'
import ResetSenhaEmail from '@/components/ResetSenhaEmail/page';


export default function EmailCode() {
  const data = [
    { href: "/", label: "Sobre" },
    { href: "/", label: "Produtos" },
    { href: "/signin", label: "Login" }
  ];
  return(
    <div className={styles.login}>
    <Menu data={data}/>
    <div className={styles.background}>
      <ResetSenhaEmail />
    </div>
  </div>
  )
}


