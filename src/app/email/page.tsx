import Menu from '@/components/Menu/page';
import styles from './email.module.css'
import ResetSenha from '@/components/ResetDeSenha/page';

export default function Email(){
  const data = [
    { href: "/", label: "Sobre" },
    { href: "/", label: "Produtos" },
    { href: "/signin", label: "Login" }
  ];
  return(
    <div className={styles.login}>
    <Menu data={data}/>
    <div className={styles.background}>
      <ResetSenha />
    </div>
  </div>
  )
}