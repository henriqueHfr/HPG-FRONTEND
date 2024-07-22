import { useRouter } from "next/navigation";
import api from "@/service/api";

export function useHandleLogout() { 
  const router = useRouter();

  const handleLogout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await api.get('/logout');
      localStorage.removeItem('token');
      localStorage.removeItem('email');
      router.push("/signin");
    } catch (error) {
      router.push("/signin");
    }
  };
  
  return { handleLogout };
}
