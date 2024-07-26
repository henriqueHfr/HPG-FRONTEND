import { useRouter } from 'next/navigation';
import api from "@/service/api";
import { useRef } from 'react';

export default function useHandleVerificaToken() {
  const router = useRouter();
  const token = localStorage.getItem('token_code')
  const codeRef = useRef<HTMLInputElement>(null)

  const handleVerificaToken = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (token && codeRef.current) {
      try {
        const code = codeRef.current.value
        const response = await api.post('/verificaCodeReset', { token: token, code: code});
        if (response.status === 200) {
          router.push('/email/emailCode/resetSenha');
        } else {
          alert("Não foi possível verificar o token, tente novamente.");
        }
      } catch (error) {
        console.error('Erro ao verificar o token:', error);
        alert('Não foi possível verificar o token, tente novamente.');
      }
    } else {
      router.push('/signin');
    }
  };

  return { token, codeRef, handleVerificaToken };
}
