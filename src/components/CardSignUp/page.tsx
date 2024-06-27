'use client'
import Button from '../button';
import styles from './CardSignUp.module.css';
import { useRef } from 'react';
import InputLogin from '../Input';
import ParagraphLink from '../ParagraphLink';

export default function CardSignUp() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      nameRef.current &&
      emailRef.current &&
      passwordRef.current &&
      passwordConfirmRef.current
    ) {
      const name = nameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const passwordConfirm = passwordConfirmRef.current.value;

      if (password === passwordConfirm) {
        console.log(name, email, password);
        // try {
        //   const response = await api.post('auth/signup', { name, email, password });
        //   console.log(response.data); // Exemplo de como tratar a resposta da API
        // } catch (error) {
        //   console.error('Erro ao realizar o cadastro:', error);
        // }
      } else {
        alert('Passwords do not match.');
      }
    } else {
      console.error('Um ou mais campos não estão definidos corretamente.');
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.name_crud}>
        <p>HPG Operations</p>
      </div>
      <div className={styles.Desc_card}>
        <p>SIGN UP</p>
        <p>Enter your credentials to create your account</p>
      </div>
      <form onSubmit={handleSignUp}>
        <InputLogin ref={nameRef} tipo="text" titulo="Complete Name" placeholderInput="Insert Complete Name" />
        <InputLogin ref={emailRef} tipo="email" titulo="E-mail" placeholderInput="Insert email address" />
        <InputLogin ref={passwordRef} tipo="password" titulo="Password" placeholderInput="Insert Password" />
        <InputLogin ref={passwordConfirmRef} tipo="password" titulo="Confirm Password" placeholderInput="Insert Password" />
        <div className={styles.Inputs}>
          <Button
            text="SIGN UP"
            color="orange"
            largura="415px"
            altura="45px"
            colorText="white"
            tipo={undefined}// Adicionado para o botão disparar o onSubmit do form
          />
        </div>
      </form>
      <div className={styles.account}>
        <ParagraphLink rota='/signin' texto_principal='Already have an account?' texto_link='Access account'/>
      </div>
    </div>
  );
}
