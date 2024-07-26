"use client";
import api from "@/service/api";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./pessoal.module.css";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useHandleLogout } from "@/utils/handleLogout";

interface Card {
  id: number;
  titulo: string;
  conteudo: string;
  data: string;
}

export default function PessoalComponent() {
  const router = useRouter();
  const [data, setData] = useState<Card[]>([]);
  const { handleLogout } = useHandleLogout();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");
    const fetchData = async () => {
      if (token && email) {
        try {
          const response = await api.post("/buscaCardPessoal", {
            email: email,
            token: token,
          });
          if (response.status === 200) {
            setData(response.data.cards || []);
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

  function handleAddCardPessoal() {
    router.push('/gestao/pessoal/card');
  }

  async function handleDelete(id: number) {
    try {
      const response = await api.post('/deletaCardPessoal', { id: id });
      if (response.status === 200) {
        setData(data.filter(item => item.id !== id));
      }
    } catch (err) {
      console.error("Erro ao excluir card", err);
    }
  }

  return (
    <div className={styles.container}>
      <nav>
        <li className={styles.perfil}>
          <div>
            <PersonIcon fontSize="large" />
          </div>
          <div className={styles.logout} onClick={handleLogout}>
            <LogoutIcon fontSize="large" />
          </div>
        </li>
      </nav>
      <div className={styles.container_card}>
        <p className={styles.titulo}>
          Gestão Pessoal
        </p>
        <div className={styles.container_add}>
          <p>Adicionar:</p>
          <div className={styles.add} onClick={handleAddCardPessoal}>
            <AddIcon fontSize="medium" />
          </div>
        </div>
        <div className={styles.card}>
          {data.map((item) => (
            <div className={styles.card1} key={item.id}>
              <p>{item.titulo}</p>
              <p>{item.conteudo}</p>
              <p>{item.data}</p>
              <div className={styles.delete} onClick={() => handleDelete(item.id)}>
                <DeleteIcon />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
