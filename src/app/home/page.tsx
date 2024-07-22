'use client';

import { useEffect } from "react";
import { useHandleLogout } from "@/utils/handleLogout";
import api from "@/service/api";
import { useRouter } from "next/navigation";

export default function Home() {
  const { handleLogout } = useHandleLogout();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      const email = localStorage.getItem('email');
      if (token && email) {
        try {
          const response = await api.post('/gestaopessoal', { email: email, token: token });
          if (response.status === 200) {
            console.log('Usuário autenticado com sucesso');
          }
        } catch (err) {
          localStorage.removeItem('token');
          localStorage.removeItem('email');
          router.push('/signin');
        }
      } else {
        console.error('Token ou email não encontrado no localStorage');
        router.push('/signin');
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <p>Bem-vindo ao HPG</p>
      <form onSubmit={handleLogout}>
        <input type="submit" value="Sair" />
      </form>
    </>
  );
}
