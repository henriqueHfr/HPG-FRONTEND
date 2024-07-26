import { useRouter } from "next/navigation";
import api from "@/service/api";
import { useRef } from "react";

export default function useHandleAtualizaSenha() {
  const router = useRouter();
  const token = localStorage.getItem("token_code");
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);
  const email = localStorage.getItem("email")
  const handleAtualizaSenha = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (token) {
      if (passwordRef.current && passwordConfirmRef.current) {
        const password = passwordRef.current.value;
        const passwordConfirm = passwordConfirmRef.current.value;

        if (password === passwordConfirm) {
          try {
            const response = await api.post("/atualizaSenha", {
              senha: password,
              token: token,
              email:email
            });
            if (response.status === 200) {
              localStorage.removeItem("email");
              localStorage.removeItem("token_code");
              router.push("/signin");
            } else {
              alert(response.status + " erro ao catualizar senha");
            }
          } catch (error) {
            alert("Erro ao realizar a atualização");
          }
        } else {
          alert("As senhas digitadas não são iguais");
        }
      } else {
        console.error("Um ou mais campos não estão definidos corretamente.");
      }
    } else {
      router.push("/signin");
    }
  };
  return {
    passwordRef,
    passwordConfirmRef,
    handleAtualizaSenha,
  };
}
