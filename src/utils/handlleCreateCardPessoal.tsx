import { useRouter } from 'next/navigation';
import api from "@/service/api";
import { useRef} from 'react';

export function UseHandleCreate() {
  const router = useRouter();
  const tituloRef = useRef<HTMLInputElement>(null);
  const conteudoRef = useRef<HTMLInputElement>(null);
  const datatimeRef = useRef<HTMLInputElement>(null);


  const handleCreate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    if (tituloRef.current && conteudoRef.current && datatimeRef.current) {
      const titulo = tituloRef.current.value;
      const conteudo = conteudoRef.current.value;
      const datatime = datatimeRef.current.value;

      try {
        const response = await api.post('/criarNovoCardPessoal', {titulo: titulo, conteudo: conteudo, data: datatime, email: email, token:token});
        if (response.status === 201) {
            router.push('/gestao/pessoal')
        } else {
          alert("Não foi possivel cadatrar o card, tente novamente");
        }
      } catch (error) {
        console.error('Erro ao realizar o login:', error);
        alert('Não foi possivel cadatrar o card, tente novamente')
      }
    } else {
      console.error("Erro");
      alert("Os campos não estão preenchidos corretamente.");
    }
  };

  return { tituloRef, conteudoRef, datatimeRef,handleCreate}
}
