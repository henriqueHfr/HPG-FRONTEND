import { useRouter } from 'next/navigation';
import api from "@/service/api";
import { useRef} from 'react';

export function useHandleSignIn() {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);


  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>, isClient: boolean) => {
    event.preventDefault();
    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      try {
        const response = await api.post('/login', { email, senha: password });
        if (response.status === 200) {
          if (isClient) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('nome', response.data.nome);
            localStorage.setItem('email', response.data.email);
            router.push("/home");
          }
        } else {
          alert("Email ou senha está incorreto!");
        }
      } catch (error) {
        console.error('Erro ao realizar o login:', error);
        alert('Email ou senha está incorreto')
      }
    } else {
      console.error("Um ou ambos os campos de email e senha não estão definidos corretamente.");
      alert("Os campos de email e senha não estão preenchidos corretamente.");
    }
  };

  return { emailRef, passwordRef, handleSignIn}
}
