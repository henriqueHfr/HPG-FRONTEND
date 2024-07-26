import { useEffect } from "react";
import styles from "./homeComponent.module.css";
import api from "@/service/api";
import { useHandleLogout } from "@/utils/handleLogout";
import { useRouter } from "next/navigation";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from '@mui/icons-material/Logout';

export default function HomeComponent() {
  const { handleLogout } = useHandleLogout();
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const fetchData = async () => {
      if (token && email) {
        try {
          const response = await api.post("/home", {
            email: email,
            token: token,
          });
          if (response.status === 200) {
            console.log("Usuário autenticado com sucesso");
          }
        } catch (err) {
          localStorage.removeItem("token");
          localStorage.removeItem("email");
          router.push("/signin");
        }
      } else {
        console.error("Token ou email não encontrado no localStorage");
        router.push("/signin");
      }
    };

    fetchData();
  }, []);
  async function handleGestaoPessoal(event: React.MouseEvent<HTMLDivElement>){
    event.preventDefault();
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    try{
      const response = await api.post('/gestaoPessoal', {email: email, token:token} )
      if (response.status === 200) {
        router.push('/gestao/pessoal')
      }else if (response.status ===401){
        alert('Usuario não está autenticado, por favor efetuar o login!')
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        router.push('/signin')
      }
    }catch (err) {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      router.push('/signin')
    }
  }
  return (
    <div className={styles.container}>
      <nav>
        <li className={styles.perfil}>
          <div>
            <PersonIcon fontSize="large" />
          </div>
          <div onClick={handleLogout} className={styles.logout}>
            <LogoutIcon fontSize="large"/>
          </div>
        </li>
      </nav>
      <div className={styles.container_card}>
        <p className={styles.titulo}>
          Seja bem-vindo ao HPG o <strong>MELHOR</strong> site de Gestão
          pessoal!
        </p>
        <div className={styles.card}>
          <div className={styles.card1} onClick={handleGestaoPessoal}>
            <p>Gestão Pessoal</p>
            <a href="/sobre">Saiba mais ....</a>
          </div>
          <div className={styles.card1}>
            <p>Gestão Financeira</p>
            <a href="/sobre">Saiba mais ....</a>
          </div>
        </div>
      </div>
    </div>
  );
}
