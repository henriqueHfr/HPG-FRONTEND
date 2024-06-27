"use client";
import Button from "../button";
import styles from "./CardSignIn.module.css";
import { useRef } from "react";
import InputLogin from "../Input";
import ParagraphLink from "../ParagraphLink";

export default function CardSignIn() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSignIn = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (emailRef.current && passwordRef.current) {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      console.log(email, password);
      // try {
      //   const response = await api.get('auth/login', { email, password });
      //   console.log(response.data); // Exemplo de como tratar a resposta da API
      // } catch (error) {
      //   console.error('Erro ao realizar o login:', error);
      // }
    } else {
      console.error(
        "Um ou ambos os campos de email e senha não estão definidos corretamente."
      );
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.name_crud}>
        <p>HPG Operations</p>
      </div>
      <div className={styles.Desc_card}>
        <p>SIGN IN</p>
        <p>Enter your credentials to create your account</p>
      </div>
      <form onSubmit={handleSignIn}>
        <InputLogin
          ref={emailRef}
          tipo="email"
          titulo="E-mail"
          placeholderInput="Insert email address"
        />
        <InputLogin
          ref={passwordRef}
          tipo="password"
          titulo="Password"
          placeholderInput="Insert Password"
        />
        <div className={styles.Inputs}>
          <Button
            text="SIGN IN"
            color="orange"
            largura="415px"
            altura="45px"
            colorText="white"
            tipo={undefined}
          />
        </div>
      </form>
      <div className={styles.account}>
        <ParagraphLink
          rota="/"
          texto_principal="Forgot your password?"
          texto_link="Reset Password"
        />
        <ParagraphLink
          rota="/signup"
          texto_principal="Don't have an account?"
          texto_link="Create an account"
        />
      </div>
    </div>
  );
}
