import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/service/api';

export function useHandleSignUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      emailRef.current &&
      passwordRef.current &&
      passwordConfirmRef.current &&
      nameRef.current
    ) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const passwordConfirm = passwordConfirmRef.current.value;
      const name = nameRef.current.value;

      if (password === passwordConfirm) {
        console.log(email, password, passwordConfirm, name);
        try {
          const response = await api.post('/cadastroUsuarios', { nome: name, email: email, senha: password });
          if (response.status === 201) {
            router.push("/signin");
          }
        } catch (error) {
          alert('Erro ao realizar o cadastro');
        }
      } else {
        alert("As senhas digitadas não são iguais");
      }
    } else {
      console.error("Um ou mais campos não estão definidos corretamente.");
    }
  };

  return {
    emailRef,
    passwordRef,
    passwordConfirmRef,
    nameRef,
    handleSignUp
  };
}
