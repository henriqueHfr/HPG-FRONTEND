import { useRouter } from "next/navigation";
import api from "@/service/api";

export function useHandleLogout() { 
  const router = useRouter();

  const handleLogout = async (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    
    try {
      const response = await api.get('/logout');
      
      if (response.status === 200) {
        localStorage.removeItem('token');
        localStorage.removeItem('email');
        router.push("/signin");
      } else {
        console.error("Erro ao fazer logout: ", response.statusText);
        router.push("/signin");
      }
    } catch (error) {
      console.error("Erro na chamada da API de logout: ", error);
      router.push("/signin");
    }
  };

  return { handleLogout };
}
